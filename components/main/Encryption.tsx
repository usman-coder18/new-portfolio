"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full h-full overflow-hidden">
      
      <div className="absolute top-6 z-[5] px-4">
        <motion.div
          variants={slideInFromTop}
          className="text-[28px] sm:text-[34px] md:text-[40px] font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center absolute z-[20] top-[35%] translate-y-[-50%] w-auto h-auto px-4">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={40}
            height={40}
            className="w-[40px] sm:w-[50px] translate-y-4 transition-all duration-200 group-hover:translate-y-8"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={60}
            height={60}
            className="z-10"
          />
        </div>

        <div className="Welcome-box px-4 py-1 z-[20] border my-4 border-[#7042f88b] opacity-90 rounded-md">
          <h1 className="Welcome-text text-[11px] sm:text-[12px]">Encryption</h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-4 px-6">
        <div className="cursive text-[16px] sm:text-[18px] md:text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="absolute inset-0 w-full h-full z-0">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
