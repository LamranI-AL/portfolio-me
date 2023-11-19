"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const buttonVariants = {
  hover: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
};

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

  return (
    <div className="min-h-[70vh] h-full pt-9 flex flex-col items-center gap-12 justify-center">
      <h1 className="font-bold text-6xl">Projects</h1>
      <div className="flex flex-wrap gap-7 items-center justify-center">
        <a href="https://infochain.site/" target="_blank">
          <div>
            <motion.div
              className="resize overflow-hidden relative rounded-3xl"
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              whileHover={{ opacity: 1 }}
            >
              <img
                src="/infochain.png"
                className="h-full absolute w-full object-cover"
                style={{
                  opacity: isHovering ? 0.1 : 1,
                  transition: "opacity 0.5s",
                }}
              />
              <div className="h-full w-full flex flex-col items-center justify-center gap-10">
                <h1 className="font-semibold text-4xl">InfoChain</h1>
              </div>
            </motion.div>
          </div>
        </a>
        <a href="https://devbreak-demo.vercel.app/" target="_blank">
          <div>
            <motion.div
              className="resize overflow-hidden relative rounded-3xl"
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
                <h1 className="font-semibold text-4xl">DevBreak</h1>
              </div>
            </motion.div>
          </div>
        </a>
        <a href="https://catagames.vercel.app/" target="_blank">
          <div>
            <motion.div
              className="resize overflow-hidden relative rounded-3xl"
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
        </a>
      </div>
    </div>
  );
};

export default Projects;
