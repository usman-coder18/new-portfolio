import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-10"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-12 text-center">
        My Projects
      </h1>

      {/* Project Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="A sleek, responsive portfolio built with Next.js, showcasing modern web practices and animations."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Custom animated cards built with React and Framer Motion for enhanced interactivity and visual appeal."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="A themed project with parallax scrolling and immersive visuals inspired by the cosmos."
        />
      </div>
    </section>
  );
};

export default Projects;
