"use client";
import { motion } from "framer-motion";

export default function Star({ style, delay }) {
  return (
    <motion.div
      className="absolute bg-white rounded-full opacity-80"
      style={{ width: 3, height: 3, ...style }}
      animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.3, 1] }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 3 + Math.random() * 2,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}
