"use client";
import React from "react";
import { FaReact, FaPython } from "react-icons/fa";
import { TbBrandNextjs, TbSql, TbBrandSocketIo } from "react-icons/tb";
import { FiFramer } from "react-icons/fi";
import {
  SiTailwindcss,
  SiRedux,
  SiMongoose,
  SiPrisma,
  SiExpress,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiNumpy,
  SiPandas,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { GiWebSpit } from "react-icons/gi";
import Image from "next/image";
import { motion } from "framer-motion";

const size = 30;

const icons = {
  frontend: [
    { name: "TypeScript", icon: <SiTypescript size={size} color="#007acc" /> },
    { name: "React", icon: <FaReact size={size} color="#61dafb" /> },
    { name: "Next.js", icon: <TbBrandNextjs size={size} color="white" /> },
    { name: "Framer", icon: <FiFramer size={size} color="#0055ff" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={size} color="#38b2ac" />,
    },
  ],
  backend: [
    { name: "JavaScript", icon: <SiJavascript size={size} color="#f7df1e" /> },

    {
      name: "Socket.IO",
      icon: <TbBrandSocketIo size={size} color="#fff" />,
    },
    { name: "Express", icon: <SiExpress size={size} color="white" /> },
    { name: "Mongoose", icon: <SiMongoose size={size} color="red" /> },
    { name: "Prisma", icon: <SiPrisma size={size} color="#1b222d" /> },
    { name: "MongoDB", icon: <DiMongodb size={size} color="#4db33d" /> },
  ],
  visual: [
    {
      name: "After Effects",
      icon: <SiAdobeaftereffects size={size} color="#d291ff" />,
    },
    {
      name: "Photoshop",
      icon: <SiAdobephotoshop size={size} color="#31a8ff" />,
    },
    {
      name: "Premiere Pro",
      icon: <SiAdobepremierepro size={size} color="#ea77ff" />,
    },
  ],
  datascience: [
    {
      name: "Python",
      icon: <Image alt="python" width={size} height={size} src="/python.png" />,
    },
    { name: "SQL", icon: <TbSql size={size} color="#003366" /> },
    { name: "NumPy", icon: <SiNumpy size={size} color="#013243" /> },
    { name: "Pandas", icon: <SiPandas size={size} color="#150458" /> },
    {
      name: "scikitlearn",
      icon: <Image alt="python" width={size} height={size} src="/sci.png" />,
    },
    {
      name: "Seaborn",
      icon: <Image alt="python" width={size} height={size} src="/seab.png" />,
    },
    { name: "Web Scraping", icon: <GiWebSpit size={size} color="#ffcc00" /> },
  ],
};
const Skills = () => {
  const elementVariants = {
    hover: {
      scale: 1.05,
    },
  };

  return (
    <div className="min-h-[60vh] h-full py-11 flex flex-col items-center justify-center gap-11">
      <motion.h1
        className="font-bold text-6xl"
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
      >
        Skills
      </motion.h1>
      <motion.div className="flex flex-wrap items-center justify-center gap-12 px-9">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 20, scale: 1 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.3 },
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="card h-[350px] w-[226px] flex flex-col items-center  gap-7"
        >
          <h1 className="font-bold text-3xl">Front End</h1>
          <div className="flex flex-col gap-2">
            {icons.frontend.map((element) => (
              <motion.div
                key={element.name}
                whileHover="hover"
                variants={elementVariants}
                className="flex gap-2 text-xl items-center "
              >
                <div>{element.icon}</div>
                <h1>{element.name}</h1>
              </motion.div>
            ))}{" "}
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 20, scale: 1 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.6 },
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="card h-[350px] flex flex-col items-center gap-7 w-[226px]"
        >
          <h1 className="font-bold text-3xl">Back End</h1>
          <div className="flex flex-col gap-2">
            {icons.backend.map((element) => (
              <motion.div
                key={element.name}
                whileHover="hover"
                variants={elementVariants}
                className="flex gap-2 text-xl items-center "
              >
                <div>{element.icon}</div>
                <h1>{element.name}</h1>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 20, scale: 1 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.9 },
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="card h-[350px] flex flex-col items-center gap-7 w-[226px]"
        >
          <h1 className="font-bold text-3xl">Visual</h1>
          <div className="flex flex-col gap-2 ">
            {icons.visual.map((element) => (
              <motion.div
                key={element.name}
                whileHover="hover"
                variants={elementVariants}
                className="flex gap-2 text-xl items-center "
              >
                <div>{element.icon}</div>
                <h1>{element.name}</h1>
              </motion.div>
            ))}{" "}
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 20, scale: 1 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1.2 },
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="card h-[350px]  flex flex-col items-center gap-4 w-[226px]"
        >
          <h1 className="font-bold text-3xl">Data science</h1>
          <div className="flex flex-col gap-2">
            {icons.datascience.map((element) => (
              <motion.div
                key={element.name}
                whileHover="hover"
                variants={elementVariants}
                className="flex gap-2 text-xl items-center "
              >
                <div>{element.icon}</div>
                <h1>{element.name}</h1>
              </motion.div>
            ))}{" "}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
