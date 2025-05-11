import React from "react";
import ProjectCard from "../sub/ProjectCard";

const projectData = [
  {
    src: "/Screenshot 2025-01-14 191556.png",
   title: "Number Guess Game",
    description: "A number guess game involves guessing a randomly generated number within a range.",
    techStack: ["React", "Next.js",],
    visitLink: "https://number-guess-number.vercel.app/",
  },
  {
    src: "/Screenshot 2025-01-14 174543.png",
    title: "Todo List",
    description: "A to-do list is a simple tool to organize tasks by adding, editing, prioritizing, and marking them as complete",
    techStack: ["Next.js",],
    visitLink: "https://todo-list-phi-indol-53.vercel.app/",
  },
  {
    src: "/Screenshot 2025-03-12 201620.png",
     title: "Chatter",
    description: "A real-time chat application built with MERN stack and Socket.io",
    techStack: ["React", "Next.js", "TypeScript","Socket", "Tailwind CSS"],
    visitLink: "https://chat-app-p.up.railway.app/",
  },
  {
    src: "/Screenshot 2025-02-13 040525.png",
    title: "Bag Shop",
    description: "A modern e-commerce platform for stylish and durable bags, offering a seamless shopping experience with secure checkout.",
    techStack: ["React", "Node.js", "Tailwind CSS"],
    visitLink: "http://scatch-production.up.railway.app/",
  },
  {
    src: "/Screenshot 2025-02-10 233726.png",
   title: "Quick Thoughts",
    description: "A sleek and minimal note-taking app that allows users to jot down ideas instantly and organize them efficiently.",
    techStack: ["React", "Tailwind CSS","FaDatabase"],
    visitLink: "https://quickthoughts-production.up.railway.app/",
  },
  {
    src: "/Screenshot 2025-03-09 175117.png",
    title: "Car-Hub",
    description: "A Next.js 15 car catalog app that fetches and filters cars from an API, using TypeScript, Tailwind CSS, and server components.",
    techStack: [ "Next.js", "TypeScript", "Tailwind CSS"],
    visitLink: "https://car-hub-five-ecru.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            visitLink={project.visitLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
