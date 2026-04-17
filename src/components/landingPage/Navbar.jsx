"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-5 bg-transparent"
    >
      {/* Logo */}
      <div className="font-semibold text-lg tracking-tight cursor-pointer">
        <span className="text-white tracking-widest">THE</span>
        <span className="text-white">KIMAYA</span>
        <span className="text-zinc-400 ml-1">INTERIORS</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-10 text-white text-xs uppercase tracking-[0.2em] font-light">
        <a
          href="#projects"
          className="hover:text-zinc-400 transition-colors duration-300"
        >
          Projects
        </a>
        <a
          href="#about"
          className="hover:text-zinc-400 transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#services"
          className="hover:text-zinc-400 transition-colors duration-300"
        >
          Services
        </a>
        <a
          href="#contact"
          className="hover:text-zinc-400 transition-colors duration-300"
        >
          Contact
        </a>
      </div>

      {/* CTA */}
      <Link href="#contact">
        <button className="bg-white text-black px-6 py-2 text-[11px] uppercase font-semibold tracking-wider rounded-sm hover:bg-zinc-200 transition-all duration-300">
          Get in touch
        </button>
      </Link>
    </motion.nav>
  );
};

export default Navbar;
