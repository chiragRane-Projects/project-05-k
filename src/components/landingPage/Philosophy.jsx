"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const philosophies = [
  {
    title: "Simplicity",
    desc: "We value clean lines and thoughtful restraint, allowing each element to breathe.",
    img: "/bathroom.jpeg",
  },
  {
    title: "Harmony",
    desc: "Every space should feel cohesive — a seamless blend of materials and light.",
    img: "/bathroom2.jpeg",
  },
  {
    title: "Longevity",
    desc: "We design with intention, ensuring each decision stands the test of style and time.",
    img: "/bathroom3.jpeg",
  },
];

const Philosophy = () => {
  return (
    <section className="bg-zinc-950 py-24 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">
            (Philosophy)
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mt-4 italic">
            Our Design DNA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-6 left-6 text-2xl font-medium italic">
                  {item.title}
                </p>
              </div>{" "}
              <p className="text-zinc-400 font-light leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
