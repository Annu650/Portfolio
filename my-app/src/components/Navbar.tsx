"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const sections = [ "about", "experience", "skills", "projects", "education", "certifications", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("about");

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      let current = "about";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="#hero" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Annu.dev
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`transition ${
                active === id ? "text-blue-400" : "text-gray-300 hover:text-white"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
