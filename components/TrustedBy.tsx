"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const logos = [
  { name: "TechCorp" },
  { name: "InnovateAI" },
  { name: "FutureTech" },
  { name: "QuantumLabs" },
  { name: "DeepMind Co" },
]

export default function TrustedBy() {
  const [index, setIndex] = useState(0)

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE
        </h2>
      </div>

      <div className="overflow-hidden relative w-full max-w-4xl mx-auto">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center h-24"
        >
          <span className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {logos[index].name}
          </span>
        </motion.div>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {logos.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "bg-cyan-400 w-6" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
