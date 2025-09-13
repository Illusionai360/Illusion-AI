"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/Footer"
import CustomNavbar from "@/components/CustomNav"
import ContactPage from "@/components/ContactUs"
import { Box, ExternalLink, Brain, Activity, TrendingUp } from "lucide-react"

const solutions = [
  { title: "N8N Automation", desc: "Streamlined workflows & integrations.", icon: Activity },
  { title: "AI Agents & Multi-agents", desc: "Intelligent assistants that collaborate.", icon: Brain },
  { title: "MCP Servers", desc: "Model Context Protocol servers for scalable agent ecosystems.", icon: Box },
  { title: "Custom RAG Systems", desc: "Personalized, domain-specific context aware knowledge retrieval.", icon: Brain },
  { title: "Domain Specific Chatbots", desc: "Conversational AI tailored for your industry.", icon: Activity },
  { title: "Machine Learning GEN-AI Projects", desc: "Next-gen AI-driven innovations.", icon: Brain },
  { title: "Data Analysis & Visualization", desc: "Actionable insights through smart data representation.", icon: TrendingUp },
]

const projects = [
  {
    title: "AI Health & Fitness Plan Generator",
    description: "An intelligent agent that creates personalized fitness and nutrition plans based on individual goals and preferences.",
    image: "/fitness-agent.jpeg", // You'll need to add this image
    link: "https://fitnesspy-mhojnyzutvwbr3rifynqry.streamlit.app/",
    features: ["Personalized workout plans", "Nutrition guidance", "Progress tracking", "Adaptive recommendations"]
  },
  {
    title: "AI Investment Strategist",
    description: "A sophisticated agent that provides data-driven investment strategies and market insights.",
    image: "/investment-agent.jpeg", // You'll need to add this image
    link: "https://agentpy-mfor8x2gdwhxjjpgmpsm9w.streamlit.app/",
    features: ["Market analysis", "Portfolio optimization", "Risk assessment", "Real-time insights"]
  }
]

export default function AISolution() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <CustomNavbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                AI Solutions: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">AIOPS-IN-A-BOX</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-2xl">
                Illusion AI - Your Intelligent Automation Partner delivering cutting-edge AI solutions for modern businesses.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <motion.a href="/#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium"
                >
                  Get Started
                </motion.a>
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-purple-500 text-purple-300 rounded-lg font-medium"
                >
                  View Case Studies
                </motion.button> */}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl rounded-full opacity-40"></div>
                <Image
                  src="/aisolution.png"
                  alt="AI Solution Visualization"
                  width={600}
                  height={600}
                  className="relative rounded-2xl shadow-2xl border border-white/10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Solutions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive AI services designed to transform your business operations and drive innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-gray-800/40 border border-gray-700 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-400">{item.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our cutting-edge AI implementations that deliver real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-800/40 border border-gray-700 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 group-hover:border-purple-500/50 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                    
                    <div className="mb-5">
                      <h4 className="text-lg font-semibold mb-2 text-purple-300">Key Features:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors mt-auto"
                    >
                      View Live Demo <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-8 md:p-12 rounded-3xl border border-purple-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI solutions can drive efficiency, innovation, and growth for your organization.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-lg"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      <ContactPage />
      <Footer />
    </div>
  )
}