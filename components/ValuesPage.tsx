"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, ShieldCheck, Award } from "lucide-react";
import { BackgroundBeams } from "./ui/background-beams";

const values = [
  {
    title: "Innovation First",
    desc: "Pushing the boundaries of AI & automation",
    icon: Lightbulb,
    color: "from-green-400 to-purple-400",
    glow: "shadow-green-500/40",
  },
  {
    title: "Human-Centric AI",
    desc: "Building AI that augments people, not replaces them",
    icon: Users,
    color: "from-purple-400 to-green-400",
    glow: "shadow-purple-500/40",
  },
  {
    title: "Trust & Transparency",
    desc: "Ethical and explainable AI systems",
    icon: ShieldCheck,
    color: "from-green-400 to-blue-400",
    glow: "shadow-blue-500/40",
  },
  {
    title: "Excellence",
    desc: "High-quality, production-ready solutions",
    icon: Award,
    color: "from-purple-400 to-pink-400",
    glow: "shadow-pink-500/40",
  },
];

export default function ValuesPage() {
  return (
    <main className="relative bg-black text-white overflow-hidden py-24 md:py-32">
           <BackgroundBeams className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-purple-900/20 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-green-600/20 rounded-full blur-[200px] animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] bg-purple-600/20 rounded-full blur-[200px] animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-purple-400">
            Our Values
          </h1>
          <p className="text-neutral-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            At <span className="text-green-400 font-semibold">Illusion AI</span>,
            our values guide every solution we create — blending
            <span className="text-purple-400"> innovation</span>,
            <span className="text-green-400"> ethics</span>, and
            <span className="text-white"> human empowerment</span>.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0">
          {/* Left side values */}
          <div className="flex flex-col gap-20 md:gap-44 z-30 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
            {values.slice(0, 2).map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={i}
                  className={`relative bg-neutral-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-72 md:w-80 shadow-lg hover:${val.glow} transition duration-300`}
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${val.color} flex items-center justify-center`}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{val.title}</h3>
                      <p className="text-neutral-300 text-sm">{val.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Central Logo (hidden on small screens) */}
          <div className="relative z-10 hidden md:block w-[500px] h-[300px] lg:w-[720px] lg:h-[400px]">
            <img
              src="./valuesekeleton.png"
              alt="Illusion AI Logo"
              className="w-full h-full object-contain"
            />

            {/* Neon circuit lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left upper line */}
              <motion.path
                d="M 50% 50% L 15% 35%"
                stroke="url(#neonBlue)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.3 }}
              />
              {/* Left lower line */}
              <motion.path
                d="M 50% 50% L 15% 65%"
                stroke="url(#neonBlue)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.6 }}
              />
              {/* Right upper line */}
              <motion.path
                d="M 50% 50% L 85% 35%"
                stroke="url(#neonPink)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.9 }}
              />
              {/* Right lower line */}
              <motion.path
                d="M 50% 50% L 85% 65%"
                stroke="url(#neonPink)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.2 }}
              />

              {/* Neon gradients */}
              <defs>
                <linearGradient id="neonBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00faff" />
                  <stop offset="100%" stopColor="#007bff" />
                </linearGradient>
                <linearGradient id="neonPink" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff00ff" />
                  <stop offset="100%" stopColor="#ff66cc" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Right side values */}
          <div className="flex flex-col gap-20 md:gap-44 z-30 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
            {values.slice(2).map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={i}
                  className={`relative bg-neutral-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-72 md:w-80 shadow-lg hover:${val.glow} transition duration-300`}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${val.color} flex items-center justify-center`}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{val.title}</h3>
                      <p className="text-neutral-300 text-sm">{val.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
