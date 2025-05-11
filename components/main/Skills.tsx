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
import Slider from "./Slider";

const Skills = () => {
  return (
    <>
      {/* Skills Section */}
      <section
        id="skills"
        className="relative flex flex-col items-center justify-center min-h-screen py-16 px-4 sm:px-6 md:px-10 gap-10 mb-40"
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

        {/* Background Video (only applies to Skills section) */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <video
            className="w-full h-full object-cover"
            preload="none"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </section>

      {/* Slider Section (Outside Skills section) */}
      <section className="relative z-10 flex flex-col items-center gap-4 mt-10 mb-40">
        <h3 className="text-xl text-gray-300 font-semibold text-center">
          Tools & Frameworks I Enjoy Working With
        </h3>
        <div className="w-full max-w-7xl px-4 mt-44">
          <Slider />
        </div>
      </section>
    </>
  );
};

export default Skills;
