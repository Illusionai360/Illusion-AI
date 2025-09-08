"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";

const ProductsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const products = [
    {
      title: "Astro AI",
      subtitle: "AI-driven astrology & numerology engine",
      description:
        "Unlock the mathematical patterns of the universe through AI that combines astrological wisdom with numerological analysis. Astro AI reveals how celestial movements and numerical frequencies influence personal and business outcomes.",
      cta: "Try Me",
      color: "from-blue-600 to-indigo-600",
      image: "/astro.jpg",
    },
    {
      title: "Mind Neuro AI",
      subtitle: "Intersection of neurology, psychology & philosophy",
      description:
        "Explore the depths of human consciousness through AI that understands the brain, mind, and soul. Mind Neuro AI provides insights into behavior patterns, cognitive optimization, and philosophical understanding of human experience.",
      cta: "Try Me",
      color: "from-green-600 to-teal-600",
      image: "/mindneuro.jpg",
    },
    {
      title: "Divine Script AI",
      subtitle: "Spiritual guidance interpretation",
      description:
        "DivineScript AI merges AI with the profound teachings of all major philosophies and sacred texts to provide guidance for daily life challenges.",
      cta: "Try Me",
      color: "from-amber-600 to-orange-600",
      image: "/divine.jpg",
    },
    {
      title: "Cosmos AI",
      subtitle: "Advanced astrophysics & quantum AI assistant",
      description:
        "Harness the fundamental forces of reality through AI that understands both cosmic scales and quantum realms. Cosmos AI applies universal principles to solve complex problems across any domain.",
      cta: "Try Me",
      color: "from-indigo-600 to-purple-600",
      image: "/cosmos.jpg",
    },
  ];

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [products.length]);

  const navigateTo = (newIndex: number) => {
    if (newIndex > currentIndex) setDirection(1);
    else setDirection(-1);
    setCurrentIndex(newIndex);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? (isMobile ? 300 : 1000) : (isMobile ? -300 : -1000),
      opacity: 0,
      scale: 0.8,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? (isMobile ? 300 : 1000) : (isMobile ? -300 : -1000),
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div
      id="products"
      className="relative w-full min-h-screen bg-black text-white py-10 md:py-20 overflow-hidden"
    >
      {/* Background beams + glow */}
      <BackgroundBeams className="absolute inset-0 z-0" />
      <div className="absolute top-20 left-4 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-purple-700 opacity-20 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-4 md:right-10 w-48 h-48 md:w-72 md:h-72 bg-blue-700 opacity-20 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative w-[95%] md:w-[90%] mx-auto z-10">
        <div className="items-center justify-center">
          <div className="text-center mb-8 md:mb-12 px-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
              Products
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Discover our cutting-edge AI solutions that bridge technology with
              human consciousness
            </p>
          </div>

          {/* Carousel - Added min-height for mobile and overflow handling */}
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-neutral-950 via-black to-neutral-950 border border-gray-800 shadow-xl md:shadow-2xl min-h-[580px] md:h-96">

            {/* Slide */}
            <div className="relative h-full">
               <BackgroundBeams className="absolute inset-0 z-0" />
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4 },
                  }}
                  className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 md:p-8"
                >
                  {/* Info - Added padding bottom for mobile to prevent overlap with indicators */}
                  <div className="flex-1 w-full space-y-4 md:space-y-6 z-10 pb-12 md:pb-0">
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white mb-2">
                        {products[currentIndex].title}
                      </h3>
                      <p className="text-purple-300 font-medium mb-2 md:mb-4 text-sm sm:text-base">
                        {products[currentIndex].subtitle}
                      </p>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-[16px] line-clamp-3 md:line-clamp-none">
                      {products[currentIndex].description}
                    </p>

                    <button
                      className={`px-5 py-2.5 md:px-6 md:py-3 rounded-lg bg-gradient-to-r ${products[currentIndex].color} text-white font-medium hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-sm sm:text-base`}
                    >
                      {products[currentIndex].cta}
                    </button>
                  </div>

                  {/* Visual with image - Adjusted sizing and margins for mobile */}
                  <div className="flex-1 flex items-center justify-center relative mt-4 md:mt-0 w-full md:w-auto">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border border-gray-700">
                      <img
                        src={products[currentIndex].image}
                        alt={products[currentIndex].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Indicators - Moved slightly higher on mobile */}
            <div className="absolute bottom-6 md:bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => navigateTo(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-purple-500 w-6 sm:w-8" : "bg-gray-600"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCarousel;