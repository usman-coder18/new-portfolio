"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 ">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box flex items-center py-2 px-3 border border-[#7042f88b] opacity-90 rounded-md mb-4 mt-48"
      >
        <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
        <h1 className="Welcome-text text-[12px] sm:text-[13px] text-white ">
          Think better with Next.js
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-white font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-center leading-tight mt-2 mb-4"
      >
        Making apps with modern technologies
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-gray-300 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center max-w-[90%] md:max-w-[80%] lg:max-w-[60%] mb-10"
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  );
};

export default SkillText;
