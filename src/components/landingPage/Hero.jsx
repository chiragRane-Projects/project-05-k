"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-60">
        <Image
          src="/bedroom4.jpeg"
          alt="Luxury Interior Malad"
          fill
          className="object-cover"
          priority // Loads this image first
        />
      </div>
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white uppercase tracking-[0.3em] text-xs mb-4 block"
        >
          Based in Mumbai
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9]"
        >
          Timeless Interiors.
          <br />
          <span className="italic font-light text-zinc-300">
            Crafted for You.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-zinc-300 max-w-lg mx-auto mt-8 text-sm md:text-base font-light leading-relaxed"
        >
          We create refined spaces that blend comfort, beauty, and lasting
          design — tailored to the way you live.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10"
        >
          <Link href={"#projects"}>
            <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-500 uppercase text-xs tracking-widest">
              See Projects
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
