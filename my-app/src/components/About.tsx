"use client";

import { motion } from "framer-motion";
import { div } from "framer-motion/client";

export default function About() {
  return (
    
    <section
      id="about"
      className="p-24 flex flex-row justify-between gap-x-24 "
    >
      <motion.h2
        className="text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 flex justify-center items-center p-5"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🙋 About Me
      </motion.h2>

      <motion.p
        className="max-w-3xl text-lg text-gray-300 leading-relaxed bg-white/5 py-10 px-24 rounded-2xl shadow-lg backdrop-blur-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p>
        Aspiring Software Engineer with hands-on experience in developing and scaling
        full-stack web applications using the{" "}
        <span className="text-blue-400 font-semibold">MERN stack.</span> </p>
        {/* and{" "} */}
        {/* <span className="text-purple-400 font-semibold">cloud-native technologies</span>.</p>   */}
        Skilled in API development, API integration, responsive UI design, and collaborative
        problem-solving with a focus on building user-centric solutions.
      </motion.p>
    </section>
  );
}
