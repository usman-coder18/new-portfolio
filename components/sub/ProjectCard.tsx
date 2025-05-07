import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden rounded-2xl bg-[#1A1A2E] border border-[#2A0E61] shadow-lg backdrop-blur-lg transition-transform hover:scale-[1.02] duration-300 w-full">
      
      {/* Image Section */}
      <div className="relative w-full h-60 sm:h-72 md:h-auto md:w-1/2">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center p-6 md:w-1/2 text-left">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
          {title}
        </h2>
        <p className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
