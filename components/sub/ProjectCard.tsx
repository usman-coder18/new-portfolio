'use client';

import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiSocketdotio,SiPostgresql, SiDocker } from 'react-icons/si';
import { FaNodeJs, FaDatabase } from 'react-icons/fa'; 
import { GrNode } from 'react-icons/gr'; 
interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  techStack: string[];
  visitLink: string;
}

const MotionDiv = motion.div as React.FC<React.HTMLProps<HTMLDivElement>>;
const MotionA = motion.a as React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>>;

const ProjectCard: React.FC<ProjectCardProps> = ({ src, title, description, techStack = [], visitLink }) => {
  return (
    <MotionDiv
    className="relative w-full max-w-md bg-[#2c2f38] p-4 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full h-40 sm:h-52 mb-3 overflow-hidden rounded-xl relative">
        <motion.img
          src={src}
          alt={title}
          className="object-cover w-full h-full rounded-xl transition-transform duration-200 transform group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="space-y-3 sm:space-y-4">
        <motion.h2 className="text-2xl font-bold text-white text-center group-hover:text-blue-400 transition-colors duration-200">
          {title}
        </motion.h2>
        <motion.p className="text-gray-300 text-xs sm:text-sm leading-tight">{description}</motion.p>

        <div className="flex gap-3 justify-center text-gray-400">
          {techStack.map((tech, index) => {
            switch (tech) {
              case 'React':
                return (
                  <motion.div key={index} whileHover={{ scale: 1.3 }} transition={{ duration: 0.2 }}>
                    <SiReact
                     className="text-xl sm:text-2xl hover:text-blue-500 transition-colors duration-200" />
                  </motion.div>
                );
                case 'PostgreSQL':
  return (
    <motion.div key={index} whileHover={{ scale: 1.3 }} transition={{ duration: 0.2 }}>
      <SiPostgresql className="text-2xl hover:text-blue-500 transition-colors duration-200" />
    </motion.div>
  );
case 'Docker':
  return (
    <motion.div key={index} whileHover={{ scale: 1.3 }} transition={{ duration: 0.2 }}>
      <SiDocker className="text-2xl hover:text-blue-400 transition-colors duration-200" />
    </motion.div>
  );
              case 'Socket.io':
                return (
                  <motion.div key={index} whileHover={{ scale: 1.3 }} transition={{ duration: 0.2 }}>
                    <SiSocketdotio className="text-2xl hover:text-blue-500 transition-colors duration-200" />
                  </motion.div>
                );
              case 'Next.js':
                return (
                  <motion.div key={index} whileHover={{ scale: 1.3 }} transition={{ duration: 0.2 }}>
                    <SiNextdotjs className="text-2xl hover:text-black transition-colors duration-200" />
                  </motion.div>
                );
              case 'TypeScript':
                return (
                  <motion.div key={index} whileHover={{ scale: 1.3 }} transition={{ duration: 0.2 }}>
                    <SiTypescript className="text-2xl hover:text-blue-600 transition-colors duration-200" />
                  </motion.div>
                );
              case 'Tailwind CSS':
                return (
                  <motion.div key={index} whileHover={{ scale: 1.3 }} transition={{ duration: 0.2 }}>
                    <SiTailwindcss className="text-2xl hover:text-teal-500 transition-colors duration-200" />
                  </motion.div>
                );
              case 'Node.js':
                return (
                  <motion.div key={index} whileHover={{ scale: 1.3 }} transition={{ duration: 0.2 }}>
                    <FaNodeJs className="text-2xl hover:text-green-600 transition-colors duration-200" />
                  </motion.div>
                );
              case 'Express':
                return (
                  <motion.div key={index} whileHover={{ scale: 1.3 }} transition={{ duration: 0.2 }}>
                    <GrNode className="text-2xl hover:text-green-600 transition-colors duration-200" />
                  </motion.div>
                );
              case 'MongoDB':
                return (
                  <motion.div key={index} whileHover={{ scale: 1.3 }} transition={{ duration: 0.2 }}>
                    <FaDatabase className="text-2xl hover:text-green-600 transition-colors duration-200" />
                  </motion.div>
                );
              default:
                return null;
            }
          })}
        </div>

        <MotionA
          href={visitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
        >
          Visit Project
        </MotionA>
      </div>
    </MotionDiv>
  );
};

export default ProjectCard;
