"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Hero />
        <div className="space-y-20 md:space-y-32">
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </div>
      </div>
    </main>
  );
}
