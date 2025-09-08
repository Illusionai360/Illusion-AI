"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/Footer"
import CustomNavbar from "@/components/CustomNav"
import ContactPage from "@/components/ContactUs"
import { Box } from "lucide-react"

const solutions = [
  { title: "N8N Automation", desc: "Streamlined workflows & integrations." },
  { title: "AI Agents & Multi-agents", desc: "Intelligent assistants that collaborate." },
  { title: "MCP Servers", desc: "Model context Protocol servers for scalable agent ecosystems." },
  { title: "Custom RAG Systems", desc: "Personalized, domain-specific context aware knowledge retrieval." },
  { title: "Domain Specific Chatbots", desc: "Conversational AI tailored for your industry." },
  { title: "Machine Learning GEN-AI Projects", desc: "Next-gen AI-driven innovations." },
  { title: "Data Analysis & Visualization", desc: "Actionable insights through smart data representation." },
]

export default function AISolution() {
  return (
    <div>
      <CustomNavbar />
      <section className="pt-[110px]  relative w-full py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold leading-snug">
              AI Solution: <span className="text-purple-400">AIOPS-IN-A-BOX</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Illusion AI - <span className="text-blue-400">Your Intelligent Automation Partner</span>
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {solutions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-800/60 border border-gray-700 shadow-lg hover:shadow-purple-500/30 transition rounded-2xl">
                    <CardContent className="p-5">
                      <h3 className="text-lg font-semibold text-purple-300">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-gray-400 text-sm">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <Image
              src="/aisolution.png"
              alt="AI Solution"
              width={500}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* <section className="pt-[110px] relative w-full py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 p-8 rounded-2xl shadow-lg "
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
              AI Solution:{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                AIOPS-IN-A-BOX
              </span>
            </h2>

            <p className="mt-4 text-lg text-gray-300">
              Illusion AI –{" "}
              <span className="text-blue-400 font-semibold">
                Your Intelligent Automation Partner
              </span>
            </p>

            <div className="mt-6 space-y-4">
              {solutions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30">
                    <Box className="w-5 h-5" />
                  </div>
                  <p className="text-gray-200">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-purple-500/30 blur-3xl rounded-full opacity-40 animate-pulse"></div>
              <Image
                src="/aisolution.png"
                alt="AI Solution"
                width={500}
                height={500}
                className="relative rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </motion.div>
        </div>
      </section> */}

<section className="pt-[110px]  relative w-full py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">

        <p className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Our AI Solutions projects coming soon....
        </p>
      </section>
      <div>
        <ContactPage />
      </div>
      <Footer />
    </div>
  )
}
