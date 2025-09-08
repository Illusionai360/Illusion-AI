"use client";

import { motion } from "framer-motion";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Clock, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters long"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
  agree: z.boolean().refine((value) => value, "You must agree to the terms and conditions"),
});

type contactFormSchema = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    const data: contactFormSchema = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string || "",
      agree: formData.get("agree") as string === "yes",
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      setLoading(false);
      toast.success(result.message);
      form.reset();
    } else {
      setLoading(false);
      toast.error(result.message);
    }
  }

  return (

    <main id="contact" className="relative bg-black text-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-black to-purple-900/30 pointer-events-none" />

      {/* Wrapper */}
      <div className="relative max-w-[90%] mx-auto py-20">
        {/* Header Section */}
        <div className="text-center mb-20 relative">
          {/* Glowing blobs */}
          <div className="absolute -top-24 left-1/4 w-72 h-72 bg-purple-600 rounded-full blur-[120px] opacity-20 animate-pulse" />
          <div className="absolute -bottom-28 right-1/4 w-72 h-72 bg-green-600 rounded-full blur-[120px] opacity-20 animate-pulse delay-1000" />

          <motion.p
            className="uppercase text-sm tracking-[0.2em] text-green-400 font-semibold mb-4 relative z-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 5px rgba(74, 222, 128, 0.5)",
                  "0 0 15px rgba(74, 222, 128, 0.8)",
                  "0 0 5px rgba(74, 222, 128, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Contact Us
            </motion.span>
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get in Touch with Us
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-green-400 via-purple-400 to-blue-400 mx-auto mb-6 rounded-full"
          />

          <motion.p
            className="mt-4 text-neutral-300 max-w-2xl mx-auto text-lg leading-relaxed relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            We're here to help. Whether you're curious about our services or
            need direct support, Illusion AI is ready to assist you.
          </motion.p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-neutral-900/60 backdrop-blur-xl rounded-2xl p-10 shadow-2xl border border-white/10 relative z-10">
          {/* Left Column - Info */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Logo + Tagline */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-purple-500 flex items-center justify-center shadow-lg shadow-green-500/30">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Illusion AI</h3>
                <p className="text-neutral-400 text-sm">
                  Deeptech that simplifies complexity
                </p>
              </div>

            </div>

            <div className="space-y-3 text-neutral-300 text-base leading-relaxed mt-4">
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">9766675853</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">infoillusionai@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-400" />
                <span className="text-white font-medium">Mumbai</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-medium">Within 24 hours</span>
              </p>
            </div>

            <p className="text-lg text-neutral-300 mt-6">
              Ready to start your{" "}
              <span className="text-green-400 font-semibold">
                AI transformation journey
              </span>
              ? Let's discuss how Illusion AI can help your business thrive.
            </p>
          </motion.div>

          {/* Right Column - Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="bg-neutral-800/80 border border-neutral-600 text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-green-500"
            />

            <Input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="bg-neutral-800/80 border border-neutral-600 text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-green-500"
            />


            <Input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              className="bg-neutral-800/80 border border-neutral-600 text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-green-500"
            />


            <Textarea
              name="message"
              required
              placeholder="Write your message..."
              className="bg-neutral-800/80 border border-neutral-600 text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-green-500 min-h-[150px]"
            />

            {/* Agreement */}
            <div className="flex items-start gap-2">
              <Checkbox required id="agree" name="agree" value="yes" />

              <label
                htmlFor="agree"
                className="text-sm text-neutral-400 leading-tight"
              >
                I agree to Illusion AI's{" "}
                <span className="underline cursor-pointer">
                  Terms of Use
                </span>{" "}
                and{" "}
                <span className="underline cursor-pointer">
                  Privacy Policy
                </span>

              </label>
            </div>

            <Button
              type="submit"
              className="bg-gradient-to-r from-green-600 to-purple-600 hover:from-green-500 hover:to-purple-500 text-white font-semibold py-2 rounded-xl shadow-lg shadow-green-500/20 transition-transform duration-200 hover:scale-105"
            >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </motion.form>
        </div>
      </div>
    </main>
  );
}
