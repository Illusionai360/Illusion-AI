"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
  speed = 50,
  pause = 1500,
  loop = true,
}: {
  words: { text: string; className?: string }[];
  className?: string;
  cursorClassName?: string;
  speed?: number; // typing speed in ms
  pause?: number; // delay after full sentence
  loop?: boolean;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex].text;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex <= currentWord.length) {
      // typing
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else if (isDeleting && charIndex >= 0) {
      // deleting
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, speed / 2);
    } else {
      // pause before deleting or moving to next word
      if (!isDeleting) {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      } else {
        setIsDeleting(false);
        setCharIndex(0);
        setWordIndex((prev) =>
          loop ? (prev + 1) % words.length : Math.min(prev + 1, words.length - 1)
        );
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words, speed, pause, loop]);

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      <span className={words[wordIndex].className}>{displayedText}</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500 ml-1",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
