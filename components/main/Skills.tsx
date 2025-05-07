import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center min-h-screen py-16 px-4 sm:px-6 md:px-10 gap-10 mb-40  "
    >
      {/* Skill Text */}
      <SkillText />

      {/* Skill Groups */}
      {[Skill_data, Frontend_skill, Backend_skill, Full_stack, Other_skill].map(
        (category, i) => (
          <div
            key={i}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-7xl w-full"
          >
            {category.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        )
      )}

      {/* Background Video */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <video
          className="w-full h-full object-cover"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
          src="/cards-video.webm"
        />
      </div>
    </section>
  );
};

export default Skills;
