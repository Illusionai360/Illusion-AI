"use client";

import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface LoginDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function LoginDialog({ open, setOpen }: LoginDialogProps) {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="sm:max-w-md rounded-2xl shadow-2xl bg-white  text-black border border-gray-800">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-center text-black">
            Welcome Back
          </AlertDialogTitle>
        </AlertDialogHeader>

        <form onSubmit={handleLogin} className="mt-6 space-y-5">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-black">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className=""
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password" className="text-black">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className=""
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
