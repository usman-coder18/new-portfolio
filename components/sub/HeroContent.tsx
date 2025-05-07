"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 mt-32 sm:mt-36 w-full z-[20] gap-10"
    >
      {/* Text Section */}
      <div id="about-me" className="w-full max-w-2xl flex flex-col gap-5 justify-center text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box flex items-center gap-2 py-2 px-3 border border-[#7042f88b] opacity-90 rounded-md"
        >
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
          <h1 className="Welcome-text text-sm sm:text-base text-white">
            MERN Stack Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-4 text-white font-bold text-[2rem] sm:text-[2.5rem] md:text-[3rem] leading-tight"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-gray-400 text-base sm:text-lg my-4 max-w-xl"
        >
          I&apos;m a MERN Stack Developer skilled in building modern web applications using MongoDB, Express.js, React, and Node.js. Check out my work to see how I turn ideas into functional, user-friendly experiences.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 px-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-center cursor-pointer rounded-lg w-fit"
        >
          Learn More!
        </motion.a>
      </div>

      {/* Image Section */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full max-w-md flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={450}
          width={450}
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
