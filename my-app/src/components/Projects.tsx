// app/components/Projects.tsx
"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Job Application Reminder",
    desc: "Full-stack app to save postings, track deadlines, and send reminders.",
    live: "https://clok-ecru.vercel.app/",
    code: "https://github.com/Annu1809",
  },
  {
    title: "E-Fashion Hub",
    desc: "Scalable e-commerce platform with real-time cart & advanced search.",
    code: "https://github.com/Annu1809/E-commerce",
  },
  {
    title: "Notes-App",
    desc: "Notes Application with couldinary integration",
    code: "https://github.com/Annu1809/E-commerce",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="p-28">
      <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        🚀Personal Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg text-left hover:shadow-purple-500/50"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3 className="text-2xl font-semibold text-blue-400">{p.title}</h3>
            <p className="mt-3 text-gray-300">{p.desc}</p>
            <div className="mt-4 flex gap-4">
              {p.live && (
                <a href={p.live} target="_blank" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow hover:shadow-blue-500/50 transition">
                  Live
                </a>
              )}
              {p.code && (
                <a href={p.code} target="_blank" className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg shadow hover:shadow-gray-500/50 transition">
                  Code
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
