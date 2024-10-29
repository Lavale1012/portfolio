import image from "/public/profile.jpeg";
import { motion } from "framer-motion";

const ProjectCard = (project) => {
  return (
    <div>
      <img src="" />
      <div>{project.title}</div>
      <div>{project.description}</div>
      <div>{project.Tech}</div>
    </div>
  );
};

const Hero = () => {
  return (
    <div
      id="Home"
      className=" px-16 flex min-h-screen w-full items-center justify-center py-28   flex-col gap-5 "
    >
      <div className="flex flex-col justify-center items-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt=""
            className=" w-[250px]  rounded-full shadow-lg shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 "
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className=" flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
      >
        <h1 className=" bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-5xl font-light ">
          Lavale Butterfield
        </h1>
        <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent opacity-80 text-2xl md:text-3xl  ">
          Software Engineer
        </h3>
        <p className=" md:text-base text-pretty text-sm text-gray-400">
          I am a software engineer skilled in React, Next.js, and Tailwind,
          focused on building clean, scalable applications. From front-end
          design to seamless database integration with PostgreSQL, I create
          efficient solutions for dynamic user experience. Let's build somthing
          great together!
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
