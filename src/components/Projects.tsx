"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const Projects = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    if (isHovering) {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [isHovering, controls]);
  const variants = {
    initial: { opacity: 0, y: 20 },
    inView: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.4 },
    },
  };
  return (
    <div className="min-h-[70vh] h-full pt-9 flex flex-col items-center gap-12 justify-center">
      <motion.h1
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
        className="font-bold text-6xl"
      >
        Projects
      </motion.h1>
      <motion.div
        viewport={{ once: true }}
        initial="initial"
        variants={variants}
        whileInView="inView"
        className="flex flex-wrap gap-7 items-center justify-center"
      >
        <motion.a
          variants={variants}
          // href="https://infochain.site/"
          target="_blank"
        >
          <div>
            <motion.div
              className="w-[420px] h-[310px] overflow-hidden relative rounded-3xl"
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              whileHover={{ opacity: 1 }}
            >
              <img
                src="/Screenshot 2024-03-01 171212.png"
                className="h-full absolute w-full object-cover"
                style={{
                  opacity: isHovering ? 0.1 : 1,
                  transition: "opacity 0.5s",
                }}
              />
              <div className="h-full w-full flex flex-col items-center justify-center gap-10">
                <h1 className="font-semibold text-4xl">Quark</h1>
              </div>
            </motion.div>
          </div>
        </motion.a>
        <motion.a
          variants={variants}
          // href="https://devbreak-demo.vercel.app/"
          target="_blank"
        >
          <div>
            <motion.div
              className="w-[420px] h-[310px] overflow-hidden relative rounded-3xl"
              onHoverStart={() => setIsHovering1(true)}
              onHoverEnd={() => setIsHovering1(false)}
              whileHover={{ opacity: 1 }}
            >
              <img
                src="/dev.png"
                className="h-full absolute w-full object-cover"
                style={{
                  opacity: isHovering1 ? 0.1 : 1,
                  transition: "opacity 0.5s",
                }}
              />
              <div className="h-full w-full flex flex-col items-center justify-center gap-10">
                <h1 className="font-semibold text-4xl">Portfolio</h1>
              </div>
            </motion.div>
          </div>
        </motion.a>
        <motion.a
          variants={variants}
          // href="https://catagames.vercel.app/"
          target="_blank"
        >
          <div>
            <motion.div
              className="w-[420px] h-[310px] overflow-hidden relative rounded-3xl"
              onHoverStart={() => setIsHovering2(true)}
              onHoverEnd={() => setIsHovering2(false)}
              whileHover={{ opacity: 1 }}
            >
              <img
                src="/games.png"
                className="h-full absolute w-full object-cover"
                style={{
                  opacity: isHovering2 ? 0.1 : 1,
                  transition: "opacity 0.5s",
                }}
              />
              <div className="h-full w-full flex flex-col items-center justify-center gap-10">
                <h1 className="font-semibold text-4xl">CataGames</h1>
              </div>
            </motion.div>
          </div>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Projects;
