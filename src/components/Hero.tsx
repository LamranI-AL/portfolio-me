"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const buttonVariants = {
  hover: {
    backgroundColor: "#ffffff", // Change to the desired background color on hover
    color: "#000000", // Change to the desired text color on hover
  },
};

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-16 min-h-[60vh]">
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.005, transition: { duration: 0.3 } }}
        className="h-[250px] w-[250px] xs:h-[350px]  xs:w-[350px]"
      >
        <img
          src="/ayoub.png"
          className="object-cover h-full w-full"
          alt="Ayoub Bensalah"
        />
      </motion.div>
      <motion.div className="flex flex-col gap-6 text-gray-200 text-xl">
        <h1 className="font-bold text-5xl text-white">Ayoub Bensalah</h1>
        <h2>Full-Stack developer</h2>
        <h2>Graphic Designer | Video editor</h2>
        <h2>Data Science enthusiast</h2>
        <div className="flex gap-3 items-center justify-center">
          <Link to="about" smooth={true} duration={500}>
            <motion.button
              whileHover="hover"
              variants={buttonVariants}
              className="cardButton text-base"
            >
              About Me
            </motion.button>{" "}
          </Link>
          <Link to="contact" smooth={true} duration={1000}>
            <motion.button
              whileHover="hover"
              variants={buttonVariants}
              className="cardButton text-base"
            >
              Contact Me
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
