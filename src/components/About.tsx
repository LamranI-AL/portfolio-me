"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className=" min-h-[70vh] flex flex-col-reverse me:flex-row gap-14 items-center justify-center p-11">
      <motion.div
        className="max-w-[50vh]"
        viewport={{ once: true }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, delay: 0.5 },
        }}
      >
        <p className="text-xl">
          As a student engineer, president of the Quark club, and former vice
          president of the Industry 4.0 club, I'm passionate about innovation
          and industrial digital transformation. Leveraging my skills as a web
          developer, I strive to create efficient digital solutions. My goal is
          to shape a smarter, more connected industrial future through the
          adoption of advanced technologies.
        </p>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, delay: 0.5 },
        }}
      >
        <Image
          src={"/IMG_20221203_220753.jpg"}
          width={300}
          height={"300"}
          alt="othmane"
          className="rounded-3xl"
        />
      </motion.div>
    </div>
  );
};

export default About;
