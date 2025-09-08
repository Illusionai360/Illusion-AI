"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { BackgroundBeams } from "./ui/background-beams";

const goals = [
  "Build scalable AI ecosystems tailored to industries",
  "Deliver production-grade AI automation systems for businesses",
  "Build intelligent chatbots & AI agents with human-like reasoning",
  "Explore conversational AI applications in neurology, psychology, philosophy, astrophysics, spirituality and Quantum AI",
  "Make AI accessible to enterprises, startups, and individuals",
  "Democratize AI with tools that are affordable, accessible, and adaptable",
];

export default function GoalsPage() {
  return (
    <main className="relative bg-black text-white overflow-hidden py-24 md:py-32">
      {/* 🔥 Background Beams */}
      <BackgroundBeams className="absolute inset-0 z-0" />

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-purple-900/20 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-green-600/20 rounded-full blur-[200px] animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] bg-purple-600/20 rounded-full blur-[200px] animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-purple-400">
            Our Goals
          </h1>
          <p className="text-neutral-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            At <span className="text-green-400 font-semibold">Illusion AI</span>,
            our goals reflect our mission to build AI ecosystems that bridge{" "}
            <span className="text-purple-400 font-semibold">technology</span>{" "}
            and{" "}
            <span className="text-green-400 font-semibold">
              human imagination
            </span>
            .
          </p>
        </motion.div>

        {/* Layout */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0">
          {/* Left side goals */}
          <div className="flex flex-col gap-12 md:gap-20 z-30 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
            {goals.slice(0, 3).map((goal, i) => (
              <motion.div
                key={i}
                className="relative bg-neutral-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-72 md:w-80 shadow-lg hover:shadow-green-500/20 transition duration-300"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-purple-500 flex items-center justify-center shadow-md"
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles size={20} className="text-white" />
                  </motion.div>
                  <p className="text-neutral-200 text-sm md:text-base leading-relaxed">
                    {goal}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Central Logo — ONLY on large screens */}
          <div className="relative z-10 hidden lg:block w-[560px] h-[360px] lg:w-[700px] lg:h-[460px]">
            <img
              src="/goalskeleton.png"
              alt="Illusion AI Neon Center"
              className="absolute inset-0 w-full h-full object-cover "
            />

            {/* Neon circuit lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* Left paths */}
              <motion.path
                d="M 50% 40% L 0% 25%"
                stroke="url(#neonGreen)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.3 }}
              />
              <motion.path
                d="M 50% 50% L 0% 50%"
                stroke="url(#neonGreen)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.6 }}
              />
              <motion.path
                d="M 50% 60% L 0% 75%"
                stroke="url(#neonGreen)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.9 }}
              />

              {/* Right paths */}
              <motion.path
                d="M 50% 40% L 100% 25%"
                stroke="url(#neonPurple)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.3 }}
              />
              <motion.path
                d="M 50% 50% L 100% 50%"
                stroke="url(#neonPurple)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.6 }}
              />
              <motion.path
                d="M 50% 60% L 100% 75%"
                stroke="url(#neonPurple)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.9 }}
              />

              {/* Gradients */}
              <defs>
                <linearGradient id="neonGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00ffcc" />
                  <stop offset="100%" stopColor="#00cc88" />
                </linearGradient>
                <linearGradient id="neonPurple" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff00ff" />
                  <stop offset="100%" stopColor="#aa00ff" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Right side goals */}
          <div className="flex flex-col gap-12 md:gap-20 z-30 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
            {goals.slice(3).map((goal, i) => (
              <motion.div
                key={i}
                className="relative bg-neutral-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-72 md:w-80 shadow-lg hover:shadow-purple-500/20 transition duration-300"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-green-500 flex items-center justify-center shadow-md"
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles size={20} className="text-white" />
                  </motion.div>
                  <p className="text-neutral-200 text-sm md:text-base leading-relaxed">
                    {goal}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
