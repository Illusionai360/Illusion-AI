"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import CustomNavbar from "@/components/CustomNav";
import ContactPage from "@/components/ContactUs";
import { Box } from "lucide-react";

const mindversePoints = [
  "Multi-domain chatbot ecosystems – neurology, psychology, philosophy, astrophysics, spirituality, and cosmic intelligence.",
  "Quantum AI – bridging human consciousness and machine computation.",
  "Turning complex realities into intelligent, intuitive solutions.",
];

const mindverseProjects = [
  {
    title: "Astro AI",
    description:
      "AI-driven astrology & numerology engine that reveals how celestial movements and numerical frequencies influence personal and business outcomes.",
    image: "/astro.jpg",
  },
  {
    title: "Mind Neuro AI",
    description:
      "Intersection of neurology, psychology & philosophy — providing cognitive optimization and insights into the human experience.",
    image: "/mindneuro.jpg",
  },
  {
    title: "Divine Script AI",
    description:
      "AI merged with philosophies & sacred texts to provide spiritual guidance and life solutions.",
    image: "/divine.jpg",
  },
  {
    title: "Cosmos AI",
    description:
      "Astrophysics & quantum AI assistant applying universal principles to solve complex problems.",
    image: "/cosmos.jpg",
  },
];

export default function MINDVERSE() {
  return (
    <div className="w-full overflow-hidden">
      <CustomNavbar />

      {/* Hero Section */}
      <section className="relative w-full py-20 sm:py-28  bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/30 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-20 right-1/3 w-60 sm:w-80 h-60 sm:h-80 bg-indigo-500/30 rounded-full blur-[140px] animate-pulse delay-200" />
          <div className="absolute top-10 right-10 w-48 sm:w-64 h-48 sm:h-64 bg-blue-400/20 rounded-full blur-[120px] animate-pulse delay-500" />
        </div>

        <div className="max-w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-5">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1 w-full space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent text-center lg:text-left drop-shadow-lg">
              MINDVERSE AI
            </h2>
            <p className="text-lg md:text-xl text-gray-300 italic text-center lg:text-left">
              "Where Consciousness Meets Computation"
            </p>
            <p className="text-base md:text-lg text-gray-400 text-center lg:text-left max-w-2xl">
              Turning complex realities into intelligent, intuitive solutions.
            </p>

            {/* Feature Points */}
            <div className="grid gap-4 sm:gap-6">
              {mindversePoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 hover:border-purple-500/70 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 rounded-xl">
                    <CardContent className="flex items-center gap-3 p-4 sm:p-5 text-gray-200 text-sm sm:text-base md:text-lg">
                      <Box className="text-purple-400 w-10 h-10 sm:w-6 sm:h-6" />
                      <span>{point}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1 w-full flex justify-center lg:justify-end relative group"
          >
            {/* Glow Border */}
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-30 blur-xl group-hover:opacity-50 transition duration-500" />
            <Image
              src="/mindverse.jpg"
              alt="Mindverse AI"
              width={500}
              height={500}
              className="relative rounded-2xl shadow-2xl border border-white/10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>


      {/* 🔥 Services/Projects Section */}
      <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-16 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Mindverse Projects
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Explore our unique AI-driven initiatives that connect science,
            spirituality, and cosmic intelligence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 max-w-7xl mx-auto">
          {mindverseProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-4 sm:p-6 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/30 transition"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={400}
                className="rounded-xl mb-3 sm:mb-4 object-cover  w-full"
              />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <div>
        <ContactPage />
      </div>

      <Footer />
    </div>
  );
}
