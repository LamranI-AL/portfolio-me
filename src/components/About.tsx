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
        <p className="text-2xl">
          Hello! My name is Ayoub Bensalah I'm a computer science engineering
          student from Morocco , I do multiple stuff like Web developement App
          developement , Data Science , Video editing and visual effects ,
          Competetive programming , I'm also engaged in many university
          activities , I do martial arts and bodybuilding , I like to read about
          history and religion , If you wanna know more about me please Scroll
          down
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
          src={"/me.jpg"}
          width={400}
          height={400}
          alt="Ayoub"
          className="rounded-3xl"
        />
      </motion.div>
    </div>
  );
};

export default About;
