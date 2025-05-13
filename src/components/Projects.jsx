import { motion } from "framer-motion";
import image2 from "../assets/2.png";

import image4 from "../assets/4.png";
import image5 from "../assets/5.png";

const projectData = [
  {
    image: image5,
    title: "AI Powered Search API",
    description:
      "The Fragrance Search API is a powerful and intelligent backend service designed to help users discover perfumes and colognes tailored to their preferences. Built using modern web technologies and enhanced with AI capabilities, this API enables seamless searching and intelligent recommendations based on fragrance characteristics and user input.",
    tech: ["Express", "Node", "Redis", "MongoDB", "Mongoose"],
    sourceCode: "https://github.com/Lavale1012/Fragrance-Search-API",
    address: "",
  },
  {
    image: image2,
    title: "Real-Time Chat Application",
    description:
      "Developed a real-time chat application using JavaScript, React, Socket.IO, and Tailwind CSS, enabling users to join unique chat rooms for seamless text and photo messaging.",
    tech: ["React", "Node", "Tailwind CSS"],
    sourceCode: "https://github.com/Lavale1012/ChatApp-main",
    address: "https://quick-chat-gamma.vercel.app/",
  },

  {
    image: image4,
    title: "Weather Application",
    description:
      "Created a React-based weather application with real-time global forecasts and API integration. Achieved a 20% performance boost and built a scalable UI.",
    tech: ["React", "Node", "CSS"],
    sourceCode: "https://github.com/Lavale1012/Weather-App",
    address: "https://weather-app-nu-ashy-23.vercel.app/",
  },
];

export const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  const handleImageClick = () => {
    if (project.address) {
      window.open(project.address, "_blank");
    }
  };

  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt={project.title}
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
          onClick={handleImageClick}
        />

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            {project.address && (
              <p className="text-sm text-blue-400">
                Click the image to view the live demo
              </p>
            )}
            <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {project.tech.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black px-4 py-2">
                {tech}
              </span>
            ))}
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 px-4 py-2 transition-all duration-300 hover:scale-105"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="Projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-5xl flex-col gap-16 text-white">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
