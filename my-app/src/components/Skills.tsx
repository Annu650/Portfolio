// app/components/Skills.tsx
"use client";

import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiMongodb, SiTypescript, SiTailwindcss, SiHtml5 , SiCss3 , SiJavascript, SiMysql, SiNodedotjs, SiExpress, SiRedux} from "react-icons/si";

const skills = [
    { icon: <SiHtml5 size={50} />, name: "HTML5" },
    { icon: <SiCss3 size={50} />, name: "CSS3" },
    { icon: <SiJavascript size={50} />, name: "JavaScript" },
  { icon: <SiReact size={50} />, name: "React.js" },
  { icon: <SiNextdotjs size={50} />, name: "Next.js" },
  { icon: <SiMongodb size={50} />, name: "MongoDB" },
  { icon: <SiTypescript size={50} />, name: "TypeScript" },
  { icon: <SiTailwindcss size={50} />, name: "TailwindCSS" },
  { icon: <SiMysql size={50} />, name: "MySQL" },
  { icon: <SiNodedotjs size={50} />, name: "Node.js" },
  { icon: <SiExpress size={50} />, name: "Express.js" },
  { icon: <SiRedux size={50} />, name: "Redux" }, 
];

export default function Skills() {
  return (
    <section id="skills" className="p-24 flex flex-wrap flex-col">
      <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        ⚡ Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 place-items-center justify-around">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg hover:shadow-blue-500/50 flex flex-col items-center w-32"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="text-blue-400">{skill.icon}</div>
            <p className="mt-3 text-gray-300">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
