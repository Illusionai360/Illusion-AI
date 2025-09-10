import ConnectDB from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenAI({
    apiKey: GEMINI_API_KEY,
});

export async function POST(request: NextRequest) {
    try {

        await ConnectDB();
        
    } catch (error) {
        
    }
}