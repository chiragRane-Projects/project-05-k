"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference"
    >
      <div className="text-white font-bold text-xl tracking-tighter">
        KIMAYA<span className="text-zinc-500">INTERIORS</span>
      </div>

      <div className="hidden md:flex gap-8 text-white text-sm uppercase tracking-widest font-light">
        <a href="#projects" className="hover:text-zinc-400 transition-colors">
          Projects
        </a>
        <a href="#about" className="hover:text-zinc-400 transition-colors">
          About
        </a>
        <a href="#services" className="hover:text-zinc-400 transition-colors">
          Services
        </a>
        <a href="#contact" className="hover:text-zinc-400 transition-colors">
          Contact
        </a>
      </div>
      <Link href={"#contact"}>
        <button className="bg-white text-black px-5 py-2 text-xs uppercase font-bold tracking-tighter hover:bg-zinc-200 transition-all">
          Get in touch
        </button>
      </Link>
    </motion.nav>
  );
};

export default Navbar;
