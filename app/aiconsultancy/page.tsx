"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import CustomNavbar from "@/components/CustomNav";
import Footer from "@/components/Footer";
import ContactPage from "@/components/ContactUs";
import { Box } from "lucide-react";

const consultancyPoints = [
  "Workshops & training on Data Science, AI/ML, GenAI, and Agentic AI (seminars + webinars).",
  "End-to-end troubleshooting, technical support, and implementation guidance.",
];

const services = [
  {
    title: "Training & Education",
    description: "Comprehensive seminars and webinars on cutting-edge AI technologies",
    icon: "🎓",
    color: "from-blue-600 to-indigo-600",
  },
  {
    title: "Technical Support",
    description: "Expert troubleshooting and implementation guidance",
    icon: "🔧",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Strategy Development",
    description: "AI roadmap creation and implementation planning",
    icon: "🧠",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Custom Solutions",
    description: "Tailored AI systems for your specific business needs",
    icon: "💡",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function AIConsultancy() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div >
      <CustomNavbar />
      {/* <section className="pt-[30px] relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-100 overflow-hidden">
        
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[90px] animate-pulse delay-2000" />
        </div>

        <div className="max-w-7xl mx-auto">
        
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full bg-blue-900/40  px-4 py-2 mt-9 text-sm font-medium text-blue-300 mb-4">
              <span className="mr-2">✨</span> AI Expertise
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                Consultancy
              </span>{" "}
              Services
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Expert guidance, tailored training, and hands-on support to help you
              harness the power of AI and next-gen technologies.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
       
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
                <Image
                  src="/aiconsultancy.jpg"
                  alt="AI Consultancy"
                  width={600}
                  height={600}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -left-4 bg-gray-900 p-3 rounded-lg shadow-lg border border-gray-700"
              >
                <div className="text-2xl">🚀</div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -right-4 bg-gray-900 p-3 rounded-lg shadow-lg border border-gray-700"
              >
                <div className="text-2xl">🤖</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-200">
                Our Consultancy{" "}
                <span className="text-blue-400">Approach</span>
              </h3>

              <div className="grid gap-6 mb-12">
                {consultancyPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Card className="bg-gray-900/70 border border-gray-800 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 rounded-xl overflow-hidden group">
                      <CardContent className="p-6 flex items-start">
                        <div className="flex-shrink-0 w-3 h-3 mt-2 bg-blue-500 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                        <p className="text-gray-300 text-base md:text-lg">
                          {point}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <h4 className="text-xl font-semibold mb-6 text-gray-300">
                Our Services Include:
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center group cursor-pointer hover:border-blue-500/40 transition-all"
                  >
                    <div
                      className={`text-3xl mb-2 inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}
                    >
                      {service.icon}
                    </div>
                    <h5 className="font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h5>
                    <p className="text-sm text-gray-400 mt-1">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <motion.a
                href="/#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-xl shadow-lg shadow-blue-900/30 transition-all duration-300"
                >
                  Schedule a Consultation
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section> */}

      <section className="relative w-full pt-32 pb-20 px-6 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden">
        {/* Background Animated Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-[140px] animate-pulse delay-1000" />
          <div className="absolute top-40 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-[110px] animate-pulse delay-2000" />
        </div>

        <div className="max-w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-14">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center bg-blue-900/40 px-4 py-2 rounded-full text-blue-300 text-sm font-medium mb-6">
              <span className="mr-2">✨</span> AI Expertise
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-6">
              AI{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                Consultancy
              </span>{" "}
              Services
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8">
              Unlock innovation with tailored guidance, hands-on training, and expert support to harness AI for your business.
            </p>

            {/* CTA */}
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-xl shadow-lg shadow-blue-900/30 transition-all duration-300"
            >
              Schedule a Consultation
            </motion.a>
          </motion.div>

          {/* Right Image with Floating Icons */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 relative flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
              <Image
                src="/aiconsultancy.jpg"
                alt="AI Consultancy"
                width={600}
                height={600}
                className="rounded-2xl w-full h-auto"
              />
            </div>

            {/* Floating icons */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-700"
            >
              🚀
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-700"
            >
              🤖
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative w-full py-20 px-6 bg-gradient-to-tr from-black via-gray-950 to-gray-900 text-gray-100">
        <div className="max-w-[90%] mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Consultancy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                Approach
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A structured and hands-on process to ensure your AI journey is smooth, effective, and future-ready.
            </p>
          </motion.div>

          <div className="grid gap-6 mb-16 md:grid-cols-2 lg:grid-cols-2">
            {consultancyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/70 border border-gray-800 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 rounded-xl overflow-hidden group">
                  <CardContent className="p-6 text-gray-300 text-base md:text-lg flex items-center gap-3">
                    <Box className="text-blue-400 w-10 h-10 sm:w-6 sm:h-6" />
                    {point}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Services Grid */}
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-200">
            Our Services Include
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 text-center group hover:border-blue-500/40 transition-all"
              >
                <div
                  className={`text-3xl mb-4 inline-flex p-4 rounded-lg bg-gradient-to-r ${service.color} text-white`}
                >
                  {service.icon}
                </div>
                <h4 className="font-semibold text-lg text-gray-200 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-400 mt-2">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <div>
        <ContactPage />
      </div>
      <Footer />
    </div>
  );
}
