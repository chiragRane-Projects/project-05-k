"use client";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] overflow-hidden group"
        >
          <img
            src="/entrancedoor1.jpeg"
            alt="Craftsmanship detail"
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>

        {/* Right Side: Content */}
        <div className="flex flex-col gap-8">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold">
            (About Us)
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1]">
            Designing Interiors with Purpose and Precision
          </h2>
          <p className="text-zinc-600 font-light leading-relaxed text-lg">
            We approach every space as a balance of function, form, and feeling.
            Through thoughtful materials, light, and texture, we create
            interiors that reflect individuality while standing the test of
            time.
          </p>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-zinc-100">
            {/* Project Count */}
            <div>
              <p className="text-3xl font-medium tracking-tighter">
                <CountUp end={15} duration={3} enableScrollSpy scrollSpyOnce />+
              </p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 mt-1">
                Projects Done
              </p>
            </div>

            {/* Years Active - Adjusted for realism */}
            <div>
              <p className="text-3xl font-medium tracking-tighter">
                <CountUp end={3} duration={3} enableScrollSpy scrollSpyOnce />+
              </p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 mt-1">
                Months Active
              </p>
            </div>

            {/* Replaced Awards with Happy Clients */}
            <div>
              <p className="text-3xl font-medium tracking-tighter">
                <CountUp end={12} duration={3} enableScrollSpy scrollSpyOnce />
              </p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 mt-1">
                Happy Clients
              </p>
            </div>
          </div>

          <button className="mt-4 text-sm font-bold uppercase underline underline-offset-8 decoration-zinc-300 hover:decoration-black transition-all w-fit">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
