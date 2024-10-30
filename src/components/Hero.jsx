import image from "/public/profile.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="Home"
      className=" px-16 flex min-h-screen w-full items-center justify-center py-16  pt-36 flex-col gap-5 "
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
          I’m a software engineer skilled in JavaScript, React, Next.js,
          Tailwind CSS, and full-stack development, with a strong foundation in
          object-oriented programming, API integration, and Agile methodologies.
          I specialize in building clean, scalable applications, from responsive
          front-end designs to secure back-end functionality with seamless
          RESTful API integration, all focused on delivering optimal user
          experiences. Let’s collaborate to build innovative and impactful
          software!
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
