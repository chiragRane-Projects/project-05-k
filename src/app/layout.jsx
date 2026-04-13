import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Kimaya Interiors | Luxury Interior Design in Malad West, Mumbai",
    template: "%s | Kimaya Interiors",
  },
  description:
    "Kimaya Interiors specializes in premium, modern, and minimal residential and commercial interior design in Malad West, Mumbai. Crafting timeless spaces since 2025.",
  keywords: [
    "Interior Designer in Malad",
    "Luxury Home Decor Mumbai",
    "Kimaya Interiors",
    "Modern Office Design Malad",
    "Residential Interior Design Mumbai",
  ],
  authors: [{ name: "Chirag Vaibhav Rane" }],
  creator: "Chirag Vaibhav Rane",
  openGraph: {
    title: "Kimaya Interiors | Timeless Spaces Crafted for You",
    description: "Premium interior design studio based in Malad, Mumbai.",
    url: "https://kimayainteriors.com", // Replace with actual domain
    siteName: "Kimaya Interiors",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  // Structured Data for Local Business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InteriorDesign",
    name: "Kimaya Interiors",
    image: "https://kimayainteriors.com/hero-image.jpg", // Replace with your showcase1.jpeg path
    "@id": "https://kimayainteriors.com",
    url: "https://kimayainteriors.com",
    telephone: "+918879923775",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "1st Floor, Above Khazana, Opposite to Meghsons Daaruwala compound, Marve Road",
      addressLocality: "Malad West",
      addressRegion: "Mumbai",
      postalCode: "400064",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.1861, // Exact Malad West coordinates help SEO
      longitude: 72.8485,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
  };

  return (
    <html lang="en" className={`${outfit.className} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-zinc-950">
        <main>{children}</main>
      </body>
    </html>
  );
}
