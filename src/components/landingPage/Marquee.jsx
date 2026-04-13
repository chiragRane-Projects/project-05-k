"use client";
import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  const words = [
    "Premium Design",
    "Elegance Personified",
    "Modern Living",
    "Bespoke Furniture",
  ];

  return (
    <div className="bg-white py-12 overflow-hidden flex whitespace-nowrap border-y border-zinc-200">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex gap-20 items-center"
      >
        {Array(10)
          .fill(words)
          .flat()
          .map((word, i) => (
            <span
              key={i}
              className="text-black text-6xl md:text-8xl font-bold uppercase tracking-tighter"
            >
              {word} •
            </span>
          ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
