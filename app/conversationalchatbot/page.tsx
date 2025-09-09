"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import CustomNavbar from "@/components/CustomNav";
import ContactPage from "@/components/ContactUs";


interface Project {
  title: string;
  description: string;
  link: string;
  image: string | StaticImageData;
  date: string;
}

const projects: Project[] = [
   {
    title: "Multi-Modal Conversational AI",
    description: "Conversational AI chatbot with Voice, Text, and Image support. Your personal assistant, buddy, mentor, and companion — all in one AI-powered system.",
    image: "/multimodal.png",
    link: "https://multi-modal-frontend.vercel.app/",
    date: "Present",
  },
   {
    title: "AI Companion",
    description: "A Chatbot website  with modern, responsive UI where users can talk to famous people and also create one, by just entering basic details about themm and providing a concise summary about the famous person ",
    image: "/AI.png",
    link: "https://github.com/manavlade/Ai-Companion",
    date: "Present",
  }
]

export default function ConversationalAI() {
  const [mounted, setMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const projectsToShow = isExpanded ? projects : projects.slice(0, 6);

  const handleToggleProjects = () => {
    setIsExpanded(!isExpanded);
  };
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div>
      <CustomNavbar />
      <section className="pt-[190px] relative w-full min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden">
        {/* Background Glow Effects */}
        <div className="  absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-32 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[150px] animate-pulse delay-1000" />
          <div className="absolute top-60 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse delay-2000" />

          {/* Subtle Grid Lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px)] bg-[size:20px_24px]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:24px_20px]" />
          </div>
        </div>

        <div className="max-w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900/40 border border-purple-700 text-purple-300 text-sm mb-6">
              🤖 Conversational AI
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Next-Gen{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Conversational AI
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Conversational AI chatbot with{" "}
              <span className="text-purple-400 font-semibold">Voice</span>,{" "}
              <span className="text-blue-400 font-semibold">Text</span>, and{" "}
              <span className="text-cyan-400 font-semibold">Image</span> support.
              Your personal assistant, buddy, mentor, and companion — all in one
              AI-powered system.
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button className="px-8 py-6 rounded-xl text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-800/30">
                Try Conversational AI
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Graphic / Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 relative pt-[25px]"
          >
            <div className="relative rounded-3xl  overflow-hidden border border-gray-800 shadow-2xl">
              <Image
                src="/converstaionalai.jpg"
                alt="Conversational AI"
                width={600}
                height={600}
                className="rounded-3xl object-cover"
                priority
              />
              {/* Floating Emojis */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 bg-gray-900/80 p-4 rounded-2xl shadow-xl border border-gray-700"
              >
                <div className="text-2xl">💬</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -right-6 bg-gray-900/80 p-4 rounded-2xl shadow-xl border border-gray-700"
              >
                <div className="text-2xl">🎙️</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="max-w-[90%] mx-auto mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "🎙️",
              title: "Voice Conversations",
              desc: "Natural speech-based interaction with real-time AI voice.",
            },
            {
              icon: "💬",
              title: "Text Messaging",
              desc: "Seamless chat like messaging with smart AI responses.",
            },
            {
              icon: "🖼️",
              title: "Image Understanding",
              desc: "AI that can see, analyze and respond to visual inputs.",
            },
            {
              icon: "🤝",
              title: "Personal Companion",
              desc: "A buddy, friend, or mentor to assist in daily life.",
            },
            {
              icon: "⚡",
              title: "Real-Time Assistance",
              desc: "Instant help, guidance, and troubleshooting 24/7.",
            },
            {
              icon: "🌍",
              title: "Multilingual Support",
              desc: "Converse across different languages with ease.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-gray-900/80 border border-gray-800 hover:border-purple-600/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all rounded-2xl h-full">
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden">
        <div className="max-w-[90%] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
          >
            Our Next-Gen Conversational AI Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsToShow.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-1 bg-gray-800/50 border border-gray-700 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 h-full flex flex-col overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden ">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={600}
                      className="object-cover group-hover:scale-105 p-2 transition-transform duration-300"
                    />
                  </div>

                  <CardContent className="p-5 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-sm text-gray-400">{project.date}</span>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md text-sm font-medium hover:from-purple-600 hover:to-blue-600 transition-colors"
                      >
                        View Live
                      </a>
                    </div>
                  </CardContent>
                </Card>

              </motion.div>
            ))}
          </div>

          {projects.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={handleToggleProjects}
                className="px-6 py-3 bg-transparent border border-purple-500 text-purple-300 rounded-md hover:bg-purple-500/10 transition-colors"
              >
                {isExpanded ? "Show Less Projects" : "View More Projects"}
              </button>
            </div>
          )}
        </div>
      </section>

      <div>
        <ContactPage/>
      </div>
      <Footer />
    </div>
  );
}
