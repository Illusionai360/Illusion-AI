import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {

    try {

        const {name, email, subject, message} = await request.json();

        if (!name || !email || !subject ) {
            return new Response("Missing fields", {status: 400});
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        })

       await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.SMTP_USER,
        subject: subject || "A message from client",
        text: message,
        html: `
        <h1>Message from client</h1>
        <p>Name: <strong>${name}</strong> </p>
        <p>Email: <strong>${email}</strong></p>
        <p>Subject: <strong>${subject}</strong></p>
        <p>Message: <strong>${message}</strong></p>
        `,
       })

       return NextResponse.json({message: "Message sent successfully"}, {status: 200})

    } catch (error) {
        return NextResponse.json({message: "Message not sent"}, {status: 500})
    }
}