"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BackgroundBeams } from "./ui/background-beams";

export default function WelcomePage() {
  return (
    <main id="about" className="relative bg-black text-white overflow-hidden">
      {/* Background Gradient */}     <BackgroundBeams className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-purple-900/20 pointer-events-none" />

      {/* Floating Glow Blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="relative max-w-[90%] mx-auto py-20 space-y-24">
        {/* Welcome Section */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-purple-400">
            Welcome to Illusion AI
          </h1>
          <p className="text-neutral-300 text-lg max-w-5xl mx-auto leading-relaxed">
            Where{" "}
            <span className="text-green-400 font-semibold">deep technology</span>{" "}
            meets{" "}
            <span className="text-purple-400 font-semibold">human imagination</span>.  
            We are a next-gen AI startup at the forefront of{" "}
            <span className="text-white font-medium">AI-driven innovation</span>,  
            delivering intelligent automation, custom AI agents, conversational AI chatbots,  
            and cutting-edge web solutions for businesses, researchers, and individuals.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center bg-neutral-900/50 p-10 rounded-2xl shadow-xl border border-white/10 backdrop-blur-lg"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl font-bold text-green-400 mb-4">Our Mission</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              <span className="font-semibold text-white">
                Turning illusions of possibility into concrete reality.
              </span>{" "}
              We empower organizations and individuals with custom AI ecosystems 
              that streamline workflows, unlock insights, automate tasks, and 
              provide context-aware intelligence for smarter decision-making.
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2">
              <li>Deliver personalized AI solutions</li>
              <li>
                Enable SMEs to adopt automation-first workflows through{" "}
                <span className="text-green-400">N8N + MCP Servers + RAG + AI Agents</span>
              </li>
              <li>
                Build AI products that integrate neuroscience, psychology, 
                philosophy, spirituality, and{" "}
                <span className="text-purple-400">Quantum AI</span>
              </li>
            </ul>
          </div>
          <motion.div
            className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/mission.jpg"
              alt="Mission Image"
              fill
              className="object-cover rounded-xl hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center bg-neutral-900/50 p-10 rounded-2xl shadow-xl border border-white/10 backdrop-blur-lg"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/vision.jpg"
              alt="Vision Image"
              fill
              className="object-cover rounded-xl hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          <div>
            <h2 className="text-3xl font-bold text-purple-400 mb-4">Our Vision</h2>
            <p className="text-neutral-300 leading-relaxed">
              <span className="font-semibold text-white">
                Redefining Intelligence. Empowering Innovation.
              </span>{" "}
              Illusion AI aims to be the bridge between{" "}
              <span className="text-green-400 font-medium">data</span> and{" "}
              <span className="text-purple-400 font-medium">destiny</span>, 
              building human-centric AI ecosystems that blend automation, 
              reasoning, creativity, and intelligence.
            </p>
            <p className="mt-4 text-neutral-300 leading-relaxed">
              Our vision is to transform how businesses, individuals, and 
              societies interact with AI — illuminating patterns, decoding 
              complexities, and empowering transformative decision-making to 
              elevate human potential and shape a brighter future.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
