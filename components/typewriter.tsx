"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type TypewriterProps = {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
};

export function Typewriter({
  text,
  speed = 100,
  delay = 0,
  className = "",
  cursor = true
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setCompleted(true);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed, started]);

  return (
    <span className={`inline-block ${className}`}>
      {displayedText}
      {cursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          className={`inline-block w-[0.1em] h-[1em] ml-1 align-middle bg-current ${completed ? 'opacity-0' : 'opacity-100'}`}
        />
      )}
    </span>
  );
}
