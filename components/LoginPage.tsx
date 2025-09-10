"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginFormPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
        console.log("Login successful");
    } else {
        console.log("Login failed");
    }
    console.log(data);

  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center p-8">
        <Card className="w-full max-w-md shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Welcome Back 👋
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full rounded-xl">
                Login
              </Button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-4">
              Don&apos;t have an account?{" "}
              <a href="/signUp" className="text-blue-600 hover:underline">
                Sign Up
              </a>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Right side - Image */}
      <div className="hidden md:flex items-center justify-center bg-gray-100">
        <Image
          src="/login-illustration.png" 
          alt="Login Illustration"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </div>
  );
}
