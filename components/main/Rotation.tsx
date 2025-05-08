"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Rotation = () => {
  return (
    <div className="absolute top-0 right-0 flex justify-center items-center p-4">
      {/* Rotating Circle with New Layout */}
      <motion.div
        className="relative w-32 h-32 sm:w-72 sm:h-72 transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-12 hover:shadow-lg"
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
          <text fill="white" className="text-lg sm:text-lg font-semibold">
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-36 sm:h-36 bg-transparent border-2 border-blue-500 text-white rounded-full flex items-center justify-center z-10  hover:scale-110 transition-all duration-200 ease-in-out"

        //   className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-36 sm:h-36 bg-transparent border border-2 border-blue text-white rounded-full flex items-center justify-center z-10 "
        >
          Hire Me
        </Link>
      </motion.div>
    </div>
  );
};

export default Rotation;
