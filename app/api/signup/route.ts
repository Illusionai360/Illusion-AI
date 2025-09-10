import User from "@/models/schema";
import ConnectDB from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {

        await ConnectDB();

        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ message: "Missing fields" }, { status: 400 });
        }

        let user = await User.findOne({ email });

        if (user) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        user = await User.create({ email, password });

        return NextResponse.json({ message: "User created successfully" }, { status: 201 });

    } catch (error) {

        return NextResponse.json({ message: "Internal server error" }, { status: 500 });

    }
}