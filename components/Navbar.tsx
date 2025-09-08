"use client";
import { useState, useEffect } from "react";
import ContactPage from "./ContactUs";
import Footer from "./Footer";
import { WavyBackground } from "./ui/wavy-background";
import { motion } from "framer-motion";
import ServicesPage from "./ServicesPage";
import ProductsCarousel from "./ProductsCarousel";
import ValuesPage from "./ValuesPage";
import GoalsPage from "./GoalsPage";
import WelcomePage from "./WelcomePage";
import CustomNavbar from "./CustomNav";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function NavPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="home" className="relative w-full min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse-slow delay-1000"></div>
      </div>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
          }`}
      >
        <CustomNavbar />
      </motion.div>
      <BackgroudBeam />
      <WelcomePage />
      <GoalsPage />
      <ValuesPage />
      <ProductsCarousel />
      <ServicesPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

const BackgroudBeam = () => {
  return (
    <div className="relative h-full group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/10 to-green-500/20 opacity-0 group-hover:opacity-100 blur-3xl transition duration-700 pointer-events-none" />

      <WavyBackground>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-4 relative z-10"
        >
          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold inter-var text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-purple-400 animate-gradient-x">
                Illusion
              </span>{" "}
              <span className="text-purple-400">AI</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base md:text-lg mt-6 text-white/80 inter-var text-center max-w-3xl mx-auto font-bold leading-relaxed"
          >
            Deeptech that simplifies complexity
          </motion.p>

          {/* Typewriter Effect */}
          <TypewriterEffect
            words={[
              {
                text: "AI that helps you to solve your business problems, teach you the secrets of the universe, help you research, and automate tasks all in one place.",
                className:
                  "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-white to-white font-light",
              },
            ]}
            speed={50}
            pause={2000}
            loop={false}
            className="text-xl text-center md:text-2xl lg:text-3xl mt-4"
          />

          {/* Button with Cool Crisp Animation */}
          <motion.div
            className="flex justify-center gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.a
              href="#services"
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 20px rgba(139, 92, 246, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-3 rounded-lg font-medium text-white overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg group"
            >
              <span className="relative z-10">Explore Services & Products</span>
              {/* Shiny Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></span>
            </motion.a>
          </motion.div>
        </motion.div>
      </WavyBackground>
    </div>
  );
};