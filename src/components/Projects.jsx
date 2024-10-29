import { FaReact } from "react-icons/fa";
import image2 from "/public/2.png";
import image3 from "/public/3.png";
import image4 from "/public/4.png";
import { motion } from "framer-motion";

const projectData = [
  {
    image: image2,
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor orci vel libero fermentum, ac pharetra arcu tristique. Sed euismod, nunc vel fermentum hendrerit, neque erat bibendum lectus, vel tincidunt lectus lectus vel velit.",
    Tech: ["React", "Tailwind CSS"],
  },
  {
    image: image3,
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor orci vel libero fermentum, ac pharetra arcu tristique. Sed euismod, nunc vel fermentum hendrerit, neque erat bibendum lectus, vel tincidunt lectus lectus vel velit.",
    Tech: ["React", "Tailwind CSS"],
  },
  {
    image: image4,
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor orci vel libero fermentum, ac pharetra arcu tristique. Sed euismod, nunc vel fermentum hendrerit, neque erat bibendum lectus, vel tincidunt lectus lectus vel velit.",
    Tech: ["React", "Tailwind CSS"],
  },
];

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className=" flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className=" flex flex-col gap-5">
          <div className=" flex flex-col gap-3">
            <div className=" text-xl font-semibold">{project.title}</div>
            <p className=" text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.Tech.map((tech, index) => (
              <span key={index} className=" rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};
const ScrollReveal = ({ children }) => {
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
const Projects = () => {
  return (
    <div
      id="Projects"
      className=" flex min-h-screen w-full flex-col justify-center gap-16 items-center p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>
      <div className="flex w-full max-w-1000px flex-col gap-16 text-white">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
