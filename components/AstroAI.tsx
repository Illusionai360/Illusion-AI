"use client"

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FilePlus, Send } from "lucide-react";

type Role = "user" | "assistant" | "system";

type Message = {
  id: string;
  role: Role;
  content: string;
  timestamp: number;
};

const demoSystem: Message = {
  id: "m-system-1",
  role: "system",
  content: "You are a helpful assistant. Keep answers concise.",
  timestamp: Date.now(),
};

const initialMessages: Message[] = [
  demoSystem,
  {
    id: "m-1",
    role: "assistant",
    content: "Hi! I am your AI assistant. Ask me anything — code, planning, or quick help.",
    timestamp: Date.now(),
  },
];

function formatTime(ts: number) {
  const d = new Date(ts);
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function AstroAIChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll when messages change
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function sendMessage() {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: `m-${Date.now()}-u`,
      role: "user",
      content: input.trim(),
      timestamp: Date.now(),
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    simulateAssistantReply(userMsg.content);
  }

  // Simulate assistant reply with a small streaming effect
  async function simulateAssistantReply(userText: string) {
    setIsSending(true);
    const replyId = `m-${Date.now()}-a`;
    const assistantBase: Message = {
      id: replyId,
      role: "assistant",
      content: "",
      timestamp: Date.now(),
    };
    setMessages((m) => [...m, assistantBase]);

    // simple "stream" - reveal text character by character
    const fakeReply = generateFakeReply(userText);

    for (let i = 0; i < fakeReply.length; i++) {
      await new Promise((r) => setTimeout(r, 12 + (i % 3) * 6));
      setMessages((prev) =>
        prev.map((msg) => (msg.id === replyId ? { ...msg, content: fakeReply.slice(0, i + 1) } : msg))
      );
    }

    setIsSending(false);
  }

  function generateFakeReply(userText: string) {
    if (userText.toLowerCase().includes("hello") || userText.toLowerCase().includes("hi"))
      return "Hello! How can I help you today?";
    if (userText.toLowerCase().includes("build") && userText.toLowerCase().includes("chat"))
      return "I can help scaffold the chat UI, wire up an API route, and add streaming responses.";
    return `You asked: "${userText}" — here's a short answer. For full responses integrate your backend or OpenAI call.`;
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!isSending) sendMessage();
    }
  }

  function clearChat() {
    setMessages([demoSystem]);
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="col-span-3 hidden md:block">
          <div className="flex flex-col gap-4 sticky top-6">
            <Card className="p-3">
              <CardHeader>
                <h3 className="text-lg font-semibold">Conversations</h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => setMessages(initialMessages)}
                    className="text-left rounded-md p-2 hover:bg-slate-100"
                  >
                    New chat
                  </button>
                  <button
                    onClick={clearChat}
                    className="text-left rounded-md p-2 hover:bg-slate-100"
                  >
                    Clear
                  </button>
                </div>
              </CardContent>
            </Card>

            <Card className="p-3">
              <CardHeader>
                <h4 className="text-sm font-medium">Settings</h4>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <div className="text-xs text-zinc-500">Model</div>
                  <div className="rounded-md border p-2 text-sm">gpt-4o-mini (demo)</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </aside>

        {/* Main Chat Area */}
        <main className="col-span-12 md:col-span-6">
          <div className="flex flex-col h-[75vh] bg-white rounded-2xl shadow-sm overflow-hidden">
            <header className="flex items-center justify-between px-6 py-3 border-b">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">AI</div>
                <div>
                  <div className="font-semibold">Assistant</div>
                  <div className="text-xs text-muted-foreground">Online</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button size="sm" onClick={() => setMessages(initialMessages)}>Reset</Button>
                <Button size="sm" variant="ghost" onClick={() => alert("Export feature demo")}>Export</Button>
              </div>
            </header>

            <div className="flex-1 overflow-hidden">
              <ScrollArea className="h-full" ref={null}>
                <div ref={scrollRef} className="p-6 space-y-4">
                  <AnimatePresence initial={false} mode="popLayout">
                    {messages.map((m) => (
                      <motion.div
                        key={m.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`max-w-[78%] ${m.role === "user" ? "text-right" : "text-left"}`}>
                          <div className="inline-flex items-end gap-2">
                            {m.role !== "user" && (
                              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm">A</div>
                            )}
                            <div className={`px-4 py-2 rounded-2xl ${m.role === "user" ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-900"}`}>
                              <div className="whitespace-pre-wrap">{m.content}</div>
                            </div>
                            {m.role === "user" && <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700">U</div>}
                          </div>
                          <div className="text-xs text-zinc-400 mt-1">{formatTime(m.timestamp)}</div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </ScrollArea>
            </div>

            {/* Input */}
            <div className="border-t px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 flex-1">
                  <Input
                    placeholder="Type a message, press Enter to send..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="min-h-[44px]"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label className="p-2 rounded-md hover:bg-slate-100 cursor-pointer">
                    <FilePlus className="w-4 h-4" />
                    <input type="file" className="hidden" />
                  </label>
                  <Button onClick={sendMessage} disabled={isSending || !input.trim()}>
                    <Send className="w-4 h-4 mr-2" /> Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Right panel */}
        <aside className="col-span-3 hidden lg:block">
          <div className="sticky top-6 space-y-4">
            <Card>
              <CardHeader>
                <h4 className="text-sm font-medium">Conversation info</h4>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-zinc-600">Messages: {messages.length}</div>
                <div className="text-sm text-zinc-600 mt-2">Last: {formatTime(messages[messages.length - 1].timestamp)}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h4 className="text-sm font-medium">Shortcuts</h4>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>Enter — Send</li>
                  <li>Shift + Enter — New line</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  );
}
