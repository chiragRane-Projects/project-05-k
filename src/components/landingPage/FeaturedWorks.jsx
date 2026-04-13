"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "The Modern Lounge",
    category: "Living Room",
    img: "/showcase1.jpeg",
  },
  {
    id: 2,
    title: "Verena Residence",
    category: "Bedroom",
    img: "/bedroom1.jpeg",
  },
  {
    id: 3,
    title: "Minimalist Culinary",
    category: "Dining",
    img: "/dining1.jpeg",
  },
  {
    id: 4,
    title: "The Master Suite",
    category: "Bedroom",
    img: "/bedroom2.jpeg",
  },
];

const FeaturedWorks = () => {
  return (
    <section id="projects" className="bg-[#fafafa] py-24 px-6 md:px-12">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold">
            (Works)
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mt-2">
            Featured Works
          </h2>
        </div>
        <button className="text-sm font-bold uppercase underline underline-offset-8 decoration-zinc-300 hover:decoration-black transition-all">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-200">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>{" "}
            <div className="mt-6 flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium tracking-tight">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-sm mt-1">{project.category}</p>
              </div>
              <span className="text-xs border border-zinc-300 rounded-full px-3 py-1 uppercase tracking-tighter">
                2026
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWorks;
