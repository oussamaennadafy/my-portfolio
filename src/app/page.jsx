import Image from "next/image";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Projects from "@/components/Home/Projects";
import Contact from "@/components/Home/Contact";
import Footer from "@/components/Home/Footer";
import HomeWrapper from "@/components/wrappers/HomeWrapper";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
