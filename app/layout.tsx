import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import logo from "@/assets/illusion ai.jpg";

const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
});


export const metadata: Metadata = {
  title: "Illusion AI | Where AI Meets Infinite Wisdom",
  description: "AI that can read your future, solve your business problems, and teach you the secrets of the universe and help you to research — all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={'./favicon.ico'} />
      </head>
      <body
        className={`${inter.className} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
