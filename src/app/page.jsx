'use client';

import Header from "@/components/Home/Header";
import Menu from "@/components/Home/Menu";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Projects from "@/components/Home/Projects";
import Contact from "@/components/Home/Contact";
import Footer from "@/components/Home/Footer";
import { useState } from "react";

export default function Home() {
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <>
      <Header setDisplayMenu={setDisplayMenu} />
      <Menu displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
