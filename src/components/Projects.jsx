import image2 from "/public/2.png";
import image3 from "/public/3.png";
import image4 from "/public/4.png";
import { motion } from "framer-motion";

const projectData = [
  {
    image: image2,
    title: "Real-Time Chat Application",
    description:
      "Developed a real-time chat application using JavaScript, React, Socket.IO, and Tailwind CSS, enabling users to join unique chat rooms for seamless text and photo messaging. The application offers a dynamic user experience, with instantaneous message updates, photo sharing capabilities, and custom chat rooms for private or group interactions. Socket.IO powers the real-time data synchronization, ensuring all participants view messages and media as they’re shared, while Tailwind CSS provides a responsive, visually appealing interface.",
    Tech: ["React", "Node", "Tailwind CSS"],
    sourceCode: "https://github.com/Lavale1012/ChatApp-main",
    address: "https://quick-chat-gamma.vercel.app/",
  },
  {
    image: image3,
    title: "LiveDocs - Live document collaboration application",
    description:
      "Built a robust document collaboration platform with JavaScript, Next.js, Clerk, and Liveblocks, facilitating real-time editing and integrated live chat for seamless user interaction. Implemented secure, scalable user authentication via Clerk and optimized API integration to boost interaction speed by 30%. Enhanced functionality and user experience with efficient state management and responsive design, ensuring smooth, reliable collaboration across devices.",
    Tech: ["React", "Node", "Next", "Tailwind CSS"],
    sourceCode: "https://github.com/Lavale1012/LiveDocs",
  },
  {
    image: image4,
    title: "Weather application",
    description:
      "Created a React.js-based weather application with real-time global forecasts by integrating robust weather APIs. Optimized application performance, achieving a 20% reduction in load times to deliver an enhanced user experience. Built a responsive, scalable interface using JavaScript, HTML, and CSS, designed to accommodate up to 1,000 daily users with smooth and reliable functionality across devices.",

    Tech: ["React", "Node", "CSS"],
    sourceCode: "https://github.com/Lavale1012/Weather-App",
    address: "https://weather-app-nu-ashy-23.vercel.app/",
  },
];

const ProjectCard = ({ project }) => {
  const handleImageClick = () => {
    if (project.address) {
      window.open(project.address, "_blank");
    }
  };
  return (
    <ScrollReveal>
      <div className=" flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
          onClick={handleImageClick}
        />

        <div className=" flex flex-col gap-5">
          <div className=" flex flex-col gap-3">
            <div className=" text-xl font-semibold">{project.title}</div>
            {project.address ? <h3>It&apos;s live! click the image</h3> : ""}
            <p className=" text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.Tech.map((tech, index) => (
              <span key={index} className=" rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
            <a
              href={project.sourceCode}
              className="rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 p-3 hover:scale-105 transition-all duration-300"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

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
