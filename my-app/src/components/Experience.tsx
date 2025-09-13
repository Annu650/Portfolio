"use client";

import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
   
    {
    role: "Full Stack Developer Intern",
    company: "Classy Endeavors (Remote)",
    duration: "Mar 2025 – Aug 2025",
    points: [
      "Developed production-level web applications using Next.js, TypeScript, and MERN stack.",
      "Built and integrated RESTful APIs & serverless services (AWS Lambda, API Gateway, DynamoDB).",
      "Implemented geolocation tracking & IP-based analytics for personalization and security.",
      "Automated API documentation with Swagger, streamlining developer onboarding.",
      "Enhanced dashboards with CSV export, responsive UI, and advanced data filtering."
    ],
  },
];

export default function Experience() {
  return (
    <div className="flex  gap-x-24 justify-around">
        <motion.h2
                className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 flex items-center "
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                💼 Experience
              </motion.h2>
    <section
      id="experience"
      className=""
    >
    

      <div className="relative border-l-4 border-blue-500 pl-8 max-w-4xl">
        
            
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-12 relative bg-white/5 p-6 rounded-2xl backdrop-blur-lg shadow-lg hover:shadow-blue-500/50 transition"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <div className="absolute -left-10 top-6 bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full shadow-lg">
              <FaBriefcase className="text-white text-xl" />
            </div>

            <h3 className="text-2xl font-semibold">{exp.role}</h3>
            <p className="text-lg text-gray-300">{exp.company}</p>
            <span className="text-sm text-gray-400 italic">{exp.duration}</span>

            <ul className="mt-4 list-disc pl-5 space-y-2 text-start text-gray-300">
              {exp.points.map((point, i) => (
                <li key={i} className="hover:text-blue-400 transition">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  );
}
