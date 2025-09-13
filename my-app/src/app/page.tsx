"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen ">
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <div className="flex flex-col bg-gradient-to-br from-black via-gray-900 to-black">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      {/* Later: Education, Certifications, Contact */}
      </div>
    </main>
  );
}
