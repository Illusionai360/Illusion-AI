import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import ConnectDB from "@/utils/dbConnect";
import Chat from "@/models/ChatSchema";

const JWT_SECRET = process.env.JWT_SECRET as string;

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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
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
