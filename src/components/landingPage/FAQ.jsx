import React from "react";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We provide full interior design services including space planning, styling, and project management in Malad and across Mumbai.",
  },
  {
    q: "Do you handle commercial projects?",
    a: "Yes, we work on a variety of spaces — from luxury private homes to modern office environments.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary, but most residential projects are completed within 8–12 weeks.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#fafafa]">
      <div className="max-w-3xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold block mb-8 text-center">
          (FAQ)
        </span>
        <h2 className="text-4xl font-medium tracking-tight text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group border-b border-zinc-200 pb-4 outline-none"
            >
              <summary className="flex justify-between items-center cursor-pointer list-none py-4 text-xl font-medium tracking-tight">
                {faq.q}
                <span className="transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-zinc-600 font-light leading-relaxed pb-4">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
