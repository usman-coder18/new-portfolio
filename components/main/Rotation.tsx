"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Rotation = () => {
  return (
    <div className="absolute top-0 right-0 flex justify-center items-center p-4">
      {/* Rotating Circle with New Layout */}
      <motion.div
        className="relative w-28 h-28 sm:w-48 sm:h-48 lg:w-56 lg:h-56 transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-12 hover:shadow-lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
      >
        <motion.svg
          viewBox="0 0 250 250"
          className="w-full h-full"
        >
          <defs>
            <path
              id="circlePath"
              d="M 125,125 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"  // Adjusted circle radius
            />
          </defs>
          <text fill="white" className="text-[15px] sm:text-sm lg:text-lg font-semibold">
            <textPath
              href="#circlePath"
              startOffset="0"
              lengthAdjust="spacing"
            >
              Mern stack developer
            </textPath>
          </text>
        </motion.svg>

        {/* Central Button with New Style */}
        <Link
          href="#Contact"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
w-12 h-12 sm:w-24 sm:h-24 text-[11px] sm:text-base bg-transparent border-2 border-blue-500 
text-white rounded-full flex items-center justify-center z-10 hover:scale-110 
transition-all duration-200 ease-in-out"
          // className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-36 sm:h-36 text-sm sm:text-lg bg-transparent border-2 border-blue-500 text-white rounded-full flex items-center justify-center z-10  hover:scale-110 transition-all duration-200 ease-in-out"

        //   className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-36 sm:h-36 bg-transparent border border-2 border-blue text-white rounded-full flex items-center justify-center z-10 "
        >
          Hire Me
        </Link>
      </motion.div>
    </div>
  );
};

export default Rotation;
