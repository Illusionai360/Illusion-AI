"use client";

import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { toast } from "react-hot-toast";

interface LoginDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function LoginDialog({ open, setOpen }: LoginDialogProps) {

  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, phoneNumber }),
    })

    const result = await response.json();

    if (response.ok) {
      setOpen(false);
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="sm:max-w-md rounded-2xl shadow-2xl bg-white  text-black border border-gray-800">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-center text-black">
            Welcome Back
          </AlertDialogTitle>
        </AlertDialogHeader>

        <form className="mt-6 space-y-5" onSubmit={handleLogin}>
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-black">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className=""
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phonenumber" className="text-black">
              Phone Number
            </Label>
            <Input
              id="phonenumber"
              type="number"
              placeholder="0123456789"
              className=""
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium"
          >
            Login
          </Button>
        </form>

        <div className="relative my-5">
          <Separator className="bg-gray-700" />
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 px-3 text-sm text-white">
            OR
          </span>
        </div>

        <Button
          variant="default"
          className="w-full flex items-center gap-2 rounded-2xl"
        >
          Sign up with Google
        </Button>
        <Button
          variant="default"
          className="w-full flex items-center gap-2 rounded-2xl"
        >
          Sign up with Apple
        </Button>
        <p className="text-center underline cursor-pointer text-blue-500 text-sm">
            <a href="/signUp">
                Don't have an account create one
            </a>
        </p>
      </AlertDialogContent>
    </AlertDialog>
  );
}
