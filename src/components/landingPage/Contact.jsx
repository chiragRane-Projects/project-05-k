"use client";
import React, { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const phoneNumber = "918879923775"; // Replace with your Malad studio number
    const text = `Hello Kimaya Interiors! %0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="grid grid-cols-1 lg:grid-cols-2 bg-zinc-950 min-h-[600px]"
    >
      <div className="relative p-12 md:p-24 flex flex-col justify-center text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/showcase1.jpeg"
            alt="Contact backdrop"
            fill
            className="object-cover"
          />
        </div>{" "}
        <div className="relative z-10">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">
            (Contact)
          </span>
          <h2 className="text-5xl font-medium tracking-tighter mt-4 mb-8 text-lime-400">
            Get in Touch
          </h2>
          <p className="text-zinc-400 font-light max-w-sm">
            Ready to transform your space? Fill out the form and let's start a
            conversation on WhatsApp.
          </p>
        </div>
      </div>

      <div className="bg-white p-12 md:p-24 flex flex-col justify-center">
        <form onSubmit={handleWhatsApp} className="space-y-6">
          <div>
            <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">
              Your Name
            </label>
            <input
              type="text"
              required
              className="w-full border-b border-zinc-200 py-3 outline-none focus:border-black transition-colors"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full border-b border-zinc-200 py-3 outline-none focus:border-black transition-colors"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">
              Message
            </label>
            <textarea
              rows="3"
              required
              className="w-full border-b border-zinc-200 py-3 outline-none focus:border-black transition-colors resize-none"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-zinc-950 text-white py-4 font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-none"
          >
            Send to WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
