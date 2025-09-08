"use client";

import { SparklesIcon } from "lucide-react";
import { SkiperCard } from "./ui/skiper-card";
import { cn } from "@/lib/utils";
import step1light1Img from "@/public/step1light1.jpg";
import step1light2Img from "@/public/step1light2.jpg";
import step2light1Img from "@/public/step2light1.jpg";
import step2light2Img from "@/public/step2light2.jpg";
import step3lightImg from "@/public/step3light.jpg";
import step4lightImg from "@/public/step4light.jpg";
import { BackgroundBeams } from "./ui/background-beams";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};


export const ProductsPage = () => {
  return (
    <>
      <section  className="relative w-full overflow-hidden py-20" id="features">
        {/* Enhanced background with gradient and subtle animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-neutral-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 p-2">
          <div className="mb-8 mx-auto pt-4 md:container">
            <motion.div 
              className="mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              {/* Enhanced Badge with glow effect */}
              <motion.div 
                className="flex w-full items-center justify-center"
                variants={fadeInUp}
              >
                <Badge
                  variant="outline"
                  className="mb-12 rounded-full border border-white/20 bg-black/30 px-6 py-3 text-base backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-black/50 group"
                >
                  <SparklesIcon className="mr-2 fill-[#EEBDE0] stroke-1 text-neutral-200 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="text-white bg-gradient-to-r from-white to-neutral-300 bg-clip-text ">
                    Our Products
                  </span>
                </Badge>
              </motion.div>

              {/* Animated Title */}
              <motion.div 
                className="text-center mb-12"
                variants={fadeInUp}
              >
                <motion.h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-300">
                    Products We're
                  </span>{" "}
                  <motion.span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Proud Of
                  </motion.span>
                </motion.h2>
                
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100px" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full"
                />
                
                <motion.p 
                  className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Discover innovative solutions designed to transform your experience and elevate your potential
                </motion.p>
              </motion.div>

              {/* Enhanced Skiper Card Container */}
              <motion.div 
                className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-neutral-900 via-black to-neutral-900 p-px shadow-2xl shadow-purple-500/10"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* <div className="relative z-10 w-full overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-950 to-white p-3">
                  <SkiperCard
                    step1img1Class={cn(
                      "pointer-events-none w-[50%] border border-white/10 transition-all duration-500 shadow-lg",
                      "left-1/4 top-[57%] rounded-2xl max-md:scale-[160%] md:left-[35px] md:top-[29%]",
                      "md:group-hover:translate-y-2"
                    )}
                    step1img2Class={cn(
                      "pointer-events-none w-3/5 overflow-hidden border border-white/10 transition-all duration-500 shadow-lg",
                      "left-[69%] top-[53%] rounded-2xl max-md:scale-[160%] md:left-[calc(50%+35px+1rem)] md:top-[21%]",
                      "md:group-hover:-translate-y-6"
                    )}
                    step2img1Class={cn(
                      "pointer-events-none w-[50%] overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 shadow-lg",
                      "left-1/4 top-[69%] max-md:scale-[160%] md:left-[35px] md:top-[30%]",
                      "md:group-hover:translate-y-2"
                    )}
                    step2img2Class={cn(
                      "pointer-events-none w-2/5 overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 shadow-lg group-hover:-translate-y-6",
                      "left-[70%] top-[53%] max-md:scale-[140%] md:left-[calc(50%+27px+1rem)] md:top-1/4",
                      "md:group-hover:-translate-y-6"
                    )}
                    step3imgClass={cn(
                      "pointer-events-none w-[90%] overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 shadow-lg",
                      "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
                    )}
                    step4imgClass={cn(
                      "pointer-events-none w-[90%] overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 shadow-lg",
                      "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
                    )}
                    description="Discover our innovative solutions designed to elevate your experience"
                    bgClass="bg-gradient-to-tr from-black to-neutral-900"
                    image={{
                      step1light1: step1light1Img,
                      step1light2: step1light2Img,
                      step2light1: step2light1Img,
                      step2light2: step2light2Img,
                      step3light: step3lightImg,
                      step4light: step4lightImg,
                      alt: "AI Feature Image",
                    }}
                    title=""
                  />
                </div> */}
              </motion.div>
              
              {/* Enhanced call to action */}
              <motion.div 
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.p 
                  className="text-sm text-neutral-400 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Explore our full product lineup
                </motion.p>
                <motion.div 
                  className="flex justify-center"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="h-px w-32 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                </motion.div>
                
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/20">
                    View All Products
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Subtle background beams for depth */}
        <BackgroundBeams />
        
        {/* Floating decorative elements */}
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-purple-500 opacity-20"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/3 right-12 w-3 h-3 rounded-full bg-blue-500 opacity-20"
        />
      </section>   
    </>
  );
};