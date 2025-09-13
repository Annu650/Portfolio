"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center text-white px-6"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m Annu Manikpuri
      </motion.h1>

      <motion.p
        className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        🚀 Aspiring Software Engineer | Full Stack Developer | MERN & Next.js Enthusiast
      </motion.p>

      {/* Social Links */}
      <motion.div
        className="flex gap-6 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <a href="mailto:manikpuriannu644@gmail.com" className="p-3 rounded-full bg-white/10 hover:bg-blue-500/30 backdrop-blur-lg">
          <FaEnvelope className="text-blue-400 text-2xl" />
        </a>
        <a href="https://www.linkedin.com/in/annu-manikpuri/" target="_blank" className="p-3 rounded-full bg-white/10 hover:bg-blue-500/30 backdrop-blur-lg">
          <FaLinkedin className="text-blue-400 text-2xl" />
        </a>
        <a href="https://github.com/Annu1809" target="_blank" className="p-3 rounded-full bg-white/10 hover:bg-blue-500/30 backdrop-blur-lg">
          <FaGithub className="text-blue-400 text-2xl" />
        </a>
      </motion.div>

      {/* Resume Button */}
      <motion.a
        href="/Annu_Manikpuri_Resume.pdf"
        download
        className="mt-10 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:scale-105 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        📄 Download Resume
      </motion.a>
    </section>
  );
}
