"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    institution: "Parul Institute of Technology",
    duration: "2021 – 2025",
    cgpa: "7.54 / 10",
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "Auxilium Convent High School",
    duration: "2020 – 2021",
    percentage: "68.46 %",
  },
  {
    degree: "Secondary School Education (Class X)",
    institution: "Yanshy High School",
    duration: "2018 – 2019",
    percentage: "79 %",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 inline-block"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🎓 Education
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 md:left-6 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 transform -translate-x-1/2 md:translate-x-0"></div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="mb-12 relative bg-white/5 p-6 rounded-2xl backdrop-blur-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 ml-8 md:ml-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              {/* Icon */}
              <div className="absolute -left-10 md:-left-12 top-6 bg-gradient-to-r from-blue-500 to-purple-600 p-3 md:p-4 rounded-full shadow-lg">
                <FaGraduationCap className="text-white text-xl" />
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-semibold">{edu.degree}</h3>
              <p className="text-lg text-gray-300">{edu.institution}</p>
              <span className="text-sm text-gray-400 italic">{edu.duration}</span>

              {/* CGPA */}
              <div className="mt-4">
                <p className="text-gray-300">
                    {edu.cgpa ? "CGPA : " : "Percentage : "}
                  {edu.cgpa || edu.percentage}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
