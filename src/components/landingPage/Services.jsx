"use client";
import React from "react";
import Image from "next/image";

const serviceList = [
  {
    title: "Residential Interior Design",
    desc: "We create spaces that reflect your lifestyle, blending comfort, elegance, and timeless design principles.",
    img: "/bedroom3.jpeg",
  },
  {
    title: "Commercial Interior Design",
    desc: "We design purposeful environments that enhance brand identity and improve productivity.",
    img: "/showcase1.jpeg",
  },
  {
    title: "Renovation & Project Management",
    desc: "We oversee every stage with precision, ensuring each detail aligns seamlessly with your vision.",
    img: "/bathroom2.jpeg",
  },
];

const Services = () => {
  const phoneNumber = "+918879923775";

  return (
    <section
      id="services"
      className="bg-white py-24 px-6 md:px-12 border-t border-zinc-100"
    >
      <div className="max-w-7xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold">
          (Services)
        </span>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mt-2 mb-16">
          Design Services
          <br />
          Tailored to You
        </h2>

        <div className="flex flex-col">
          {serviceList.map((service, index) => (
            <div
              key={index}
              className="group border-t border-zinc-200 py-10 flex flex-col md:flex-row justify-between items-start gap-8 hover:bg-zinc-50 transition-colors px-4"
            >
              <div className="md:w-1/3">
                <h3 className="text-2xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
              </div>
              <div className="md:w-1/2 flex flex-col gap-6">
                <p className="text-zinc-600 font-light leading-relaxed">
                  {service.desc}
                </p>
                {/* Updated Button to Anchor for Dialpad functionality */}
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-xs font-bold uppercase tracking-widest border border-black w-fit px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all text-center"
                >
                  Book this Service
                </a>
              </div>
              <div className="hidden md:block w-32 h-32 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 relative">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="128px"
                />
              </div>
            </div>
          ))}
          <div className="border-t border-zinc-200" />
        </div>
      </div>
    </section>
  );
};

export default Services;
