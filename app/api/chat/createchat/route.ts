import ConnectDB from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import jwt, { JwtPayload } from "jsonwebtoken";
import Chat from "@/models/ChatSchema";
import { title } from "process";


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


export async function POST(request: NextRequest) {
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

        const { message } = await request.json();

        if (!message) {
            return NextResponse.json({ message: "Message is required" }, { status: 400 });
        }

        const chats = genAI.chats.create({
            model: "gemini-2.5-flash",
            history: [
                {
                    role: "model",
                    parts: [{ text: role }],
                },
            ],
        });

        const response = await chats.sendMessage({
            message: message,
        })

        const assistantReply =
            response.text || "Sorry, I couldn't generate a reply.";

        const newChat = new Chat({
            title: message.slice(0, 20) || "New Chat",
            messages: [
                { role: "user", content: message },
                { role: "assistant", content: assistantReply },
            ],
            createdby: decoded.userId,
        });

        await newChat.save();

        return NextResponse.json(
            {
                message: "Chat created successfully",
                chat: {
                    _id: newChat._id,
                    title: newChat.title,
                    role: "assistant", 
                    messages: newChat.messages,
                    createdAt: newChat.createdAt,
                },
            },
            { status: 200 });


    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}