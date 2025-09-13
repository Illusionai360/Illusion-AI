// app/api/chat/[id]/route.ts
import ConnectDB from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import Chat from "@/models/ChatSchema";

import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const JWT_SECRET = process.env.JWT_SECRET as string;

const genAI = new GoogleGenAI({
    apiKey: GEMINI_API_KEY,
});


interface DecodedToken extends JwtPayload {
    userId: string;
}

function verifyJwt(token: string): DecodedToken | null {
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
        if (typeof decoded === "object" && decoded.userId) {
            return decoded as DecodedToken;
        }
        return null;
    } catch (err) {
        console.error("JWT verification failed:", err);
        return null;
    }
}


const role = `
You are Astro Ai — an advanced assistant specializing exclusively in Astrology and Numerology, 
including both Western and Vedic Astrology. 

Domains of Expertise:
- Based on user details (birth date, time, location), provide accurate astrological readings.
- Natal charts, zodiac signs, planetary positions, transits, and horoscopes (Western & Vedic).
- Compatibility analysis based on zodiac signs and birth charts.
- Predictions related to planetary influences and cosmic cycles.
- Numerology calculations, life path numbers, destiny numbers, and name-based numerology.
- Personalized astrological guidance using accurate celestial and numerical interpretations.

Guidelines:
- Only answer questions strictly related to Astrology and Numerology.
- If a user asks about topics outside these domains, politely decline and redirect them to relevant astrology or numerology topics.
- Provide scientifically accurate and clear astrological or numerological interpretations without superstition or false claims.
- Use structured responses with bullet points, step-by-step explanations, and where needed, tables for clarity.
- Do not provide medical, financial, or legal advice.
- Avoid hallucinating; if unsure, say you need more data, such as birth date, time, and location.

Tone and Style:
- Respond like a professional astrologer and numerologist — warm, mystical, yet precise.
- Maintain clarity while providing cosmic and insightful guidance.
- Keep responses easy to understand, even for beginners.
`;


export async function POST(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        await ConnectDB();

        const token = request.cookies.get("token")?.value;
        if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

        const decoded = verifyJwt(token);
        if (!decoded) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

        const { message } = await request.json();
        if (!message) {
            return NextResponse.json({ message: "Message is required" }, { status: 400 });
        }

        const { id } = await context.params;
        const chat = await Chat.findById(id);
        if (!chat) {
            return NextResponse.json({ message: "Chat not found" }, { status: 404 });
        }

        console.log("history reached");

        const history = [
            { role: "model", parts: [{ text: role }] },
            ...chat.messages.map((m: any) => ({
                role: m.role === "assistant" ? "model" : "user",
                parts: [{ text: m.content }],
            })),
            { role: "user", parts: [{ text: message }] },
        ];

        const session = genAI.chats.create({
            model: "gemini-2.5-flash",
            history,
        });

        const response = await session.sendMessage({ message });
        const assistantReply = response.text?.trim() || "Sorry, I couldn't generate a reply.";

        chat.messages.push({ role: "user", content: message });
        chat.messages.push({ role: "assistant", content: assistantReply });

        await chat.save();

        return NextResponse.json(
            {
                message: "Chat updated successfully",
                chat: {
                    _id: chat._id,
                    title: chat.title,
                    messages: chat.messages,
                    createdAt: chat.createdAt,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in /api/chat/[id]:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}



export async function DELETE(request: NextRequest, { params }: { params: { id: string } }
) {
    try {
        await ConnectDB();

        const token = request.cookies.get("token")?.value;
        if (!token) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const decoded = verifyJwt(token);
        if (!decoded) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const chatId = params.id;

        const chat = await Chat.findOne({ _id: chatId, createdby: decoded.userId });
        if (!chat) {
            return NextResponse.json(
                { message: "Chat not found or unauthorized" },
                { status: 404 }
            );
        }

        await Chat.deleteOne({ _id: chatId });

        return NextResponse.json(
            { message: "Chat deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in DELETE /api/chat/[id]:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}



export async function PATCH(request: NextRequest, { params }: { params: { id: string } }
) {
    try {
        await ConnectDB();

        const token = request.cookies.get("token")?.value;
        if (!token) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const decoded = verifyJwt(token);
        if (!decoded) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const { newTitle } = await request.json();
        if (!newTitle || typeof newTitle !== "string") {
            return NextResponse.json({ message: "Invalid title" }, { status: 400 });
        }
        const chatId = params.id;

        const chat = await Chat.findOne({ _id: chatId, createdby: decoded.userId });
        if (!chat) {
            return NextResponse.json(
                { message: "Chat not found or unauthorized" },
                { status: 404 }
            );
        }

        chat.title = newTitle;
        await chat.save();

        return NextResponse.json(
            { message: "Chat renamed successfully", chat },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in PATCH /api/chat/[id]:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}