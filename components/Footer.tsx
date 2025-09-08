"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <main className="flex flex-col min-h-screen text-white bg-black">
      {/* Hero Section */}
      <section className="w-full flex justify-center -mt-10 z-10 relative overflow-hidden px-4 sm:px-6 lg:px-10">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 animate-gradient opacity-40 blur-3xl" />

        <div className="w-full max-w-7xl bg-gradient-to-br from-black via-neutral-900 to-black rounded-2xl text-white shadow-2xl flex flex-col md:flex-row justify-between items-center px-6 sm:px-10 py-12 sm:py-16 relative overflow-hidden border border-neutral-800 backdrop-blur-md">
          {/* Floating Glow Circles */}
          <div className="absolute -top-20 -left-20 w-40 sm:w-56 lg:w-72 h-40 sm:h-56 lg:h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-40 sm:w-56 lg:w-72 h-40 sm:h-56 lg:h-72 bg-blue-600/30 rounded-full blur-3xl animate-pulse" />

          {/* Left Content */}
          <motion.div
            className="flex-1 flex flex-col gap-4 relative z-10 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
              Illusion AI
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
              AI that helps you to solve your business problems, teach you the secrets of the universe, help you research, and automate tasks all in one place.
            </p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium shadow-lg mt-4 text-sm sm:text-base"
              >
                <a href="/#contact">Get Started</a>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Globe Image */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end items-center mt-10 md:mt-0 relative z-10"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative">
              <motion.img
                src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
                alt="globe"
                className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover rounded-full shadow-2xl border border-neutral-700 opacity-90"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              />
              {/* Glow behind globe */}
              <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-2xl animate-pulse"></div>
            </div>
          </motion.div>
        </div>

        {/* Background Gradient Animation Keyframes */}
        <style jsx>{`
          .animate-gradient {
            background-size: 400% 400%;
            animation: gradientShift 12s ease infinite;
          }
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>
      </section>

      {/* Footer */}
      <footer className="  mt-0 py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 text-sm sm:text-base">
          {/* Company info */}
          <div className="flex flex-col gap-4 p-6 rounded-xl text-gray-200 ">
            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Illusion AI
            </h3>

            <div className="flex items-center gap-3 text-gray-300 hover:text-red-400 transition-colors">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
              <span>Mumbai, Maharashtra, India</span>
            </div>

            <div className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              <span className="font-medium">+91 97666 75853</span>
            </div>

            <div className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <span className="font-medium break-all">
                infoillusionai@gmail.com
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2 text-base sm:text-lg">Quick links</h4>
            <a href="/" className="hover:text-neutral-300 transition-colors">
              Home
            </a>
            <a href="/#about" className="hover:text-neutral-300 transition-colors">
              About Us
            </a>
            <a href="/#products" className="hover:text-neutral-300 transition-colors">
              Products
            </a>
            <a href="/#services" className="hover:text-neutral-300 transition-colors">
              Services
            </a>
            <a href="/#contact" className="hover:text-neutral-300 transition-colors">
              Contact us
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2 text-base sm:text-lg">Legal</h4>
            <a
              href="/termsandcondition"
              className="hover:text-neutral-300 transition-colors"
            >
              Terms of service
            </a>
            <a
              href="/privacypolicy"
              className="hover:text-neutral-300 transition-colors"
            >
              Privacy policy
            </a>
            <a
              href="/cookiepolicy"
              className="hover:text-neutral-300 transition-colors"
            >
              Cookie policy
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="max-w-7xl mx-auto mt-8 sm:mt-12 flex flex-wrap justify-center sm:justify-start gap-6 text-lg sm:text-xl">
          <a href="#" className="hover:text-neutral-300 transition-colors">
            <Facebook />
          </a>
          <a href="#" className="hover:text-neutral-300 transition-colors">
            <Instagram />
          </a>
          <a href="#" className="hover:text-neutral-300 transition-colors">
            <Linkedin />
          </a>
          <a href="#" className="hover:text-neutral-300 transition-colors">
            <Twitter />
          </a>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto mt-8 sm:mt-10 text-neutral-500 text-xs sm:text-sm text-center sm:text-left">
          © 2025 Illusion AI. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
