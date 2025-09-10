import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export function middleware(request: NextRequest) {

  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {

    jwt.verify(token, JWT_SECRET);

    return NextResponse.next();

  } catch (error) {

    console.error("Invalid token:", error);

    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};
