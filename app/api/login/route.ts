import User from "@/models/schema";
import ConnectDB from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET  = process.env.JWT_SECRET;

export async function POST(request: NextRequest) {
    try {

        await ConnectDB();

        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json({ message: "Missing fields" }, { status: 400 });
        }

        let user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            JWT_SECRET || "",
            { expiresIn: "7d" }
        );

        const response = NextResponse.json(
            {message: "Login successful", token},
            {status: 200}
        )

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", 
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 7
        })

        return response;

    } catch (error) {

        return NextResponse.json({ message: "Internal server error" }, { status: 500 });

    }
}