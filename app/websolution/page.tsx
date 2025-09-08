"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import CustomNavbar from "@/components/CustomNav";
import { useState } from "react";
import { BarChart3, Box } from "lucide-react";
import ContactPage from "@/components/ContactUs";

const solutions = [
  "Custom / personalized websites, landing pages development.",
  "Web components and web related projects for SMB.",
  "Responsive design and optimization design of wireframe UI/UX.",
  "Contract base web projects.",
];
interface Project {
  title: string;
  description: string;
  link: string;
  image: string | StaticImageData;
  date: string;
}
const projects: Project[] = [
  {
    title: "ShipLink – Smart, Competitive & Flexible Shipping Platform",
    description:
      "ShipLink is a modern shipping and logistics platform that bridges the gap between people who need to ship products and shippers looking for delivery jobs.",
    link: "https://shiplink.onrender.com/",
    image: "/shiplink.png",
    date: "April 2, 2025",
  },
  {
    title: "AI-Powered Task Management System",
    description: "Smart task manager with AI-driven features like smart assistant, sentiment analysis and many more... Features include visual analytics and a modern responsive UI.",
    image: "/task.png",
    link: "https://github.com/manavlade/Task-Management-App",
    date: "Present",
  },
  {
    title: "TailTenders - AI-Powered Personal Stylist",
    description:
      "Developed a smart fashion recommendation platform using AI to provide personalized outfit suggestions.",
    link: "https://trialtailtender-xiab-one.vercel.app/",
    image: "/tailtenders.png",
    date: "Feb 22, 2025",
  },
  {
    title: "CodeBuddy - Developer Social Media",
    description:
      "Built a full-stack social platform for developers with real-time chat functionality.",
    link: "https://codebuddy-gamma.vercel.app",
    image: "/codebuddy.png",
    date: "Aug 2022",
  },
  {
    title: "CryptoTracker App",
    description:
      "Developed a responsive cryptocurrency tracking application with real-time updates.",
    link: "https://crypto-app1-seven.vercel.app",
    image: "/cryptostuff.png",
    date: "May 2022",
  },
  {
    title: "Job Portal Application",
    description:
      "Secure authentication, job posting, application tracking, and advanced search filters.",
    link: "https://mernjobportal-2-1cwi.onrender.com",
    image: "/jobportal.png",
    date: "Dec 2021",
  },
  {
    title: "CopyTail",
    description: "Copy Tail COmponents.",
    link: "https://copytail.vercel.app/",
    image: "/copytail.png",
    date: "Feb 2023",
  },
  {
    title: "ShipSnap",
    description: "Track Your Packages Like Never Before",
    link: "https://ship-snap-track.vercel.app/",
    image: "/shipsnap.png",
    date: "Feb 2023",
  },
  {
    title: "Footique",
    description: "Your Virtual FootWear web app.",
    link: "https://footify-commerce-133cddb3-j686.vercel.app/",
    image: "/footique.png",
    date: "Feb 2023",
  },
  {
    title: "WeatherWear",
    description:
      "our Ultimate Travel Companion and Style Guide,Weather-Based Outfit Suggestion.",
    link: "https://weatherwear-orcin.vercel.app/",
    image: "/weatherwear.png",
    date: "Apr 2023",
  },
  {
    title: "LearnNova",
    description:
      " simplify and enhance web user life through powerful tools tailored for academic and personal development..",
    link: "https://learnnova-9fgg.vercel.app",
    image: "/learnnova.png",
    date: "Jun 2023",
  },
  {
    title: "Thumbnail Board Center",
    description:
      " a platform designed to simplify the creation and management of image thumbnails for websites, social media, and other digital content.",
    link: "https://thumbnail-hub-lemg.vercel.app",
    image: "/thumbnailboard.png",
    date: "Jul 2023",
  },
  {
    title: "Early Fit – Personalized Fitness & Wellness Assistant",
    description: "Fitness platform with OTP-auth forms, Razorpay payments, real time chat patient, consultant and admin panels",
    link: "https://early.fit/",
    image: "/early.png",
    date: "July 2023",
  },
  {
    title: "AI-Powered Task Management System",
    description: "Smart task manager with AI-driven features like smart assistant, sentiment analysis and many more... Features include visual analytics and a modern responsive UI.",
    image: "/task.png",
    link: "https://github.com/manavlade/Task-Management-App",
    date: "Present",
  },
  {
    title: "Child Rights Platform",
    description: "An innovative platform for children to help learn about their rights through games.",
    image: "/Childrights.jpg",
    link: "https://github.com/manavlade/Child-Rights-Portal",
    date: "Present",
  },
];

export default function WebSolution() {
  const [isExpanded, setIsExpanded] = useState(false);
  const projectsToShow = isExpanded ? projects : projects.slice(0, 6); // Show first 6 projects by default

  const handleToggleProjects = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="min-h-screen pt-[60px] bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white">
      <CustomNavbar />

      {/* <section className="relative w-full py-16 px-6 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/3 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <Image
              src="/websolution.jpg"
              alt="Web Solution"
              width={500}
              height={400}
              className="rounded-2xl shadow-2xl border border-white/10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Web Solutions
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Empowering SMBs and enterprises with modern, responsive, and
              scalable web solutions.
            </p>

            <div className="grid gap-6">
              {solutions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-800/50 border border-gray-700 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition rounded-xl">
                    <CardContent className="p-5 text-gray-200 text-base md:text-lg">
                      {item}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}

      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Transform Your Online Presence with AI-Driven Web Development
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              At <span className="font-semibold text-purple-400">Illusion AI</span>,
              we harness the power of artificial intelligence to craft personalized
              web solutions that enhance user experience and streamline operations.
              Our innovative approach ensures your website is not only visually
              stunning but also highly efficient and tailored to your unique
              business needs.
            </p>

            {/* Feature List */}
            <div className="grid gap-4">
              {[
                "Custom / personalized websites & landing pages development",
                "Web components and web projects for SMBs",
                "Responsive design & optimized wireframe UI/UX",
                "Contract-based web development projects",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-gray-800/40 hover:bg-gray-800/60 border border-gray-700/50 rounded-xl p-4 transition-all duration-300"
                >
                  <Box className="text-purple-400 w-6 h-6" />
                  <p className="text-gray-200">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 blur-lg group-hover:opacity-50 transition duration-500" />
            <Image
              src="/websolution.jpg"
              alt="Web Solution"
              width={600}
              height={450}
              className="relative rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* <section className="w-full py-28">
        <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
          <div className=" flex items-center justify-center rounded-md h-60 p-2">
            <Image
              src="/websolution.jpg"
              alt="AI Innovation"
              width={500}
              height={400}
              className="object-cover rounded-lg p-2"
            />
          </div>
          <div>
            <div className="flex items-center justify-center w-12 h-12 rounded-lg border border-gray-300 mb-6">
              <BarChart3 className="w-6 h-6 text-purple-500" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Transforming User Experience with AI Innovation
            </h1>

            <p className="text-white mb-6">
              Our AI solutions personalize user interactions, ensuring a seamless
              and engaging experience. With responsive design and intelligent
              interfaces, we adapt to user needs in real-time.
            </p>

            <div className="flex items-center gap-6">
              <a href="/websolution#contactus">

              <button className="px-6 py-2 border border-purple-500 cursor-pointer text-white font-medium rounded-md hover:bg-gray-900 hover:text-white transition">
                Learn More
              </button>
              </a>
              <button className="flex items-center cursor-pointer gap-2 text-white hover:underline">
                Sign Up <span>›</span>
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Projects Showcase Section */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-[90%] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
          >
            Our Web Development Projects
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
                <Card className="bg-gray-800/50 border border-gray-700 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 h-full flex flex-col overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
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
                      <span className="text-sm text-gray-400">
                        {project.date}
                      </span>
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

      <div id="contactus">
        <ContactPage />
      </div>

      <Footer />
    </div>
  );
}
