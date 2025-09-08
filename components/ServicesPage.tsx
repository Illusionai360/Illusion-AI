"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Brain,
  BarChart3,
  MessageCircle,
  GraduationCap,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const router = useRouter();

  const toggleExpand = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const services = [
    {
      id: 1,
      title: "AI Solution: AIOPS-IN-A-BOX",
      description:
        "Illusion AI – your intelligent automation partner. A complete AI operations suite with automation, AI agents, and scalable ecosystems.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: [
        "N8N Automation – Streamlined workflows & integrations",
        "AI Agents & Multi-agents – Intelligent assistants that collaborate",
        "MCP Servers – Model context protocol servers for scalable ecosystems",
        "Custom RAG Systems – Domain-specific knowledge retrieval",
        "Domain-specific Chatbots",
        "Machine Learning & Gen-AI Projects",
      ],
      color: "from-purple-500 to-pink-500",
      href: "/aisolution"
    },
    {
      id: 2,
      title: "Web Solution",
      description:
        "Custom, responsive, high-performance websites and apps tailored for SMBs and enterprises.",
      icon: <Code className="w-8 h-8" />,
      features: [
        "Custom & Personalized Websites + Landing Pages",
        "Custom Web Projects with Strong AI-Powered Features",
        "Responsive Design with Optimized UI/UX",
        "Web Components & Projects for SMBs",
        "Contract-based Web Projects",
      ],
      color: "from-blue-500 to-cyan-500",
      href: "/websolution"
    },
    {
      id: 3,
      title: "MINDVERSE AI",
      description:
        "Where consciousness meets computation — multi-domain chatbot ecosystems for science, philosophy, spirituality, and cosmic intelligence.",
      icon: <Brain className="w-8 h-8" />,
      features: [
        "Neurology, Psychology & Philosophy Applications",
        "Astrophysics & Cosmic Intelligence",
        "Spirituality-driven Cognitive AI",
        "Quantum AI Chatbot Ecosystems",
      ],
      color: "from-green-500 to-emerald-500",
      href: "/mindverseai"
    },
    {
      id: 4,
      title: "AI Consultancy",
      description:
        "Expert guidance, training, and technical support in AI/ML, Gen-AI, and agentic technologies.",
      icon: <GraduationCap className="w-8 h-8" />,
      features: [
        "Seminars & Webinars on Data Science, AI/ML & Gen-AI",
        "Agentic AI Education & Development",
        "Troubleshooting & Technical Support",
        "Customized Consultation Programs",
      ],
      color: "from-orange-500 to-red-500",
      href: "/aiconsultancy"
    },
    {
      id: 5,
      title: "Conversational AI Chatbot",
      description:
        "Multi-modal AI companions integrating voice, text, and image to assist, mentor, and befriend.",
      icon: <MessageCircle className="w-8 h-8" />,
      features: [
        "Personal AI Assistant & Companion",
        "Friendship + Mentorship AI",
        "Multi-modal Interactions (Voice, Text, Image)",
        "Advanced Conversational Intelligence",
      ],
      color: "from-indigo-500 to-blue-500",
      href: "/conversationalchatbot"
    },
  ];

  return (
    <div
      id="services"
      className="relative min-h-screen bg-black py-20  overflow-hidden"
    >
      {/* 🔥 Futuristic Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-800 rounded-full filter blur-3xl opacity-30"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-800 rounded-full filter blur-3xl opacity-30"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-3 h-3 bg-purple-400 rounded-full"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center justify-center mb-6">
          <Sparkles className="w-6 h-6 text-purple-400 mr-2" />
          <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
            Our Services
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Transform Your
          </span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Reality with Illusion AI
          </span>
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full"
        />
        <p className="text-lg text-gray-400 max-w-[90%] mx-auto leading-relaxed">
          We empower businesses with intelligent automation, personalized AI
          agents, and futuristic chatbots that enhance productivity and
          decision-making.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[90%] mx-auto">
        {services.map((service, index) => (
          <motion.div
          onClick={() => router.push(service.href)}
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            onHoverStart={() => setHoveredService(service.id)}
            onHoverEnd={() => setHoveredService(null)}
            className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 p-6 group"
          >
            {/* Hover Glow */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            />

            {/* Icon */}
            <div
              className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 bg-gradient-to-r ${service.color} text-white`}
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mb-4">{service.description}</p>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              {(expandedService === service.id
                ? service.features
                : service.features.slice(0, 3)
              ).map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center text-sm text-gray-400"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

           <div>
  <Button
    className={`flex items-center cursor-pointer text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent hover:scale-105 transition-transform`}
    onClick={() => router.push(service.href)}
  >
    Learn More
  </Button>
</div>

           
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Ready to transform your business?
        </h2>
        <motion.a
        href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-purple-500/20 transition-all"
        >
          Get Started Today
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ServicesPage;
