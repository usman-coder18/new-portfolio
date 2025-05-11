import React from "react";
// import {motion} from "framer-motion";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiSocketdotio } from "react-icons/si";
import { FaNodeJs, FaDatabase } from "react-icons/fa";

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  techStack: string[];
  visitLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ src, title, description, techStack = [], visitLink }) => {
  return (
    <div
      className="relative group w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl p-5 rounded-3xl overflow-hidden bg-[#2A2A3D] border border-[#4F4F5D] shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
    //   whileHover={{ scale: 1.05 }}
    //   whileTap={{ scale: 0.95 }}
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 0.5 }}
    >
      {/* Image Section */}
      <div className="w-full h-56 sm:h-72 md:h-96 overflow-hidden rounded-3xl">
        <img
          src={src}
          alt={title}
          className="object-cover w-full h-full rounded-3xl transition-transform duration-300 group-hover:scale-110 group-hover:opacity-90"
        //   whileHover={{ scale: 1.1 }}
        //   transition={{ duration: 0.3 }}
        />
      </div>

      {/* Text Content */}
      <div className="p-5 flex flex-col items-center justify-between h-full space-y-4">
        <h2
          className="text-xl sm:text-2xl font-semibold text-white text-center group-hover:text-blue-400 transition-colors duration-300"
        //   whileHover={{ scale: 1.05 }}
        >
          {title}
        </h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{description}</p>

        {/* Tech Stack Icons */}
        <div className="flex gap-4 text-gray-400 justify-center">
          {techStack.map((tech, index) => {
            switch (tech) {
              case "React":
                return (
                  <div
                    key={index}
                    // whileHover={{ scale: 1.2 }}
                    // transition={{ duration: 0.3 }}
                  >
                    <SiReact className="text-3xl hover:text-blue-500 transition-colors duration-300" />
                  </div>
                );
              case "Next.js":
                return (
                  <div
                    key={index}
                    // whileHover={{ scale: 1.2 }}
                    // transition={{ duration: 0.3 }}
                  >
                    <SiNextdotjs className="text-3xl hover:text-black transition-colors duration-300" />
                  </div>
                );
              case "TypeScript":
                return (
                  <div
                    key={index}
                    // whileHover={{ scale: 1.2 }}
                    // transition={{ duration: 0.3 }}
                  >
                    <SiTypescript className="text-3xl hover:text-blue-600 transition-colors duration-300" />
                  </div>
                );
              case "Tailwind CSS":
                return (
                  <div
                    key={index}
                    // whileHover={{ scale: 1.2 }}
                    // transition={{ duration: 0.3 }}
                  >
                    <SiTailwindcss className="text-3xl hover:text-teal-500 transition-colors duration-300" />
                  </div>
                );
              case "Express":
                return (
                  <div
                    key={index}
                    // whileHover={{ scale: 1.2 }}
                    // transition={{ duration: 0.3 }}
                  >
                    <FaNodeJs className="text-3xl hover:text-green-500 transition-colors duration-300" />
                  </div>
                );
              case "MongoDB":
                return (
                  <div
                    key={index}
                    // whileHover={{ scale: 1.2 }}
                    // transition={{ duration: 0.3 }}
                  >
                    <FaDatabase className="text-3xl hover:text-green-600 transition-colors duration-300" />
                  </div>
                );
              case "Socket":
                return (
                  <div
                    key={index}
                    // whileHover={{ scale: 1.2 }}
                    // transition={{ duration: 0.3 }}
                  >
                    <SiSocketdotio className="text-3xl hover:text-blue-600 transition-colors duration-300" />
                  </div>
                );
              case "Node.js":
                return (
                  <div
                    key={index}
                    // whileHover={{ scale: 1.2 }}
                    // transition={{ duration: 0.3 }}
                  >
                    <FaNodeJs className="text-3xl hover:text-green-600 transition-colors duration-300" />
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>

        {/* Visit Link */}
        <a
          href={visitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white text-lg font-medium py-2 px-5 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        //   whileHover={{ scale: 1.05 }}
        >
          Visit Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
