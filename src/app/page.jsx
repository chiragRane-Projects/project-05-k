import About from "@/components/landingPage/AboutUs";
import Contact from "@/components/landingPage/Contact";
import FAQ from "@/components/landingPage/FAQ";
import FeaturedWorks from "@/components/landingPage/FeaturedWorks";
import Footer from "@/components/landingPage/Footer";
import Hero from "@/components/landingPage/Hero";
import Marquee from "@/components/landingPage/Marquee";
import Navbar from "@/components/landingPage/Navbar";
import Philosophy from "@/components/landingPage/Philosophy";
import Services from "@/components/landingPage/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <FeaturedWorks />
      <Services />
      <Philosophy />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
