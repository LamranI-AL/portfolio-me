"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
// import Logo from "../../public/V.png";

const act = [
  {
    post: "President",
    name: "Quark",
    link: "https://www.linkedin.com/company/quark-ensabm",
    pic: <Image src={"/logo.png"} alt="Quark" width={150} height={150} />,
  },
  {
    post: "vice-president",
    name: "industrie4.0",
    link: "https://www.linkedin.com/company/transformation-digitale-industrielle",
    pic: (
      <Image
        src={"/indus-removebg-preview.png"}
        alt="ieee"
        width={150}
        height={150}
      />
    ),
  },
];

const Activities = () => {
  const variants = {
    initial: { opacity: 0, y: 20 },
    inView: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.4 },
    },
  };
  return (
    <div className="min-h-full py-12 flex flex-col items-center gap-12 justify-center">
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
        Activities
      </motion.h1>
      <motion.div
        viewport={{ once: true }}
        initial="initial"
        variants={variants}
        whileInView="inView"
        className="flex flex-wrap  justify-center  gap-16"
      >
        {act.map((ac) => (
          <motion.div
            variants={variants}
            key={ac.name}
            className="flex flex-col gap-5 items-center"
          >
            <h1 className="text-3xl">
              {ac.post} at {ac.name}
            </h1>
            <motion.a
              whileHover={{ scale: 1.02 }}
              href={ac.link}
              target="_blank"
            >
              {ac.pic}
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Activities;
