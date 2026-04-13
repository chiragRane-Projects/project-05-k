import React from "react";

const Footer = () => {
  const address =
    "1st Floor, Above Khazana, Opposite to Meghsons Daaruwala compound, Marve Road, Malad West, Mumbai 400064";

  // Encodes the address for a valid Google Maps URL
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <footer className="bg-white py-20 px-6 md:px-12 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-[15vw] font-bold tracking-tighter text-zinc-100 select-none leading-none">
          KIMAYA
        </h2>

        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mt-12 gap-8 text-xs uppercase tracking-[0.2em] font-bold">
          <div className="flex flex-col gap-2 max-w-sm">
            <p className="text-zinc-400">
              © 2026 Kimaya Interiors - Malad, Mumbai
            </p>
            {/* Google Maps Redirect Link */}
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-black transition-colors normal-case font-medium leading-relaxed"
            >
              {address}
            </a>
          </div>

          <div className="flex gap-8">
            <a
              href="https://www.instagram.com/the_kimaya_interior_designer?igsh=OWJ6Zm0zOHg2NjRn"
              className="hover:text-lime-500 transition-colors"
            >
              Instagram
            </a>
          </div>

          <p className="text-zinc-400">Designed with precision</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
