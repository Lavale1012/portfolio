import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoFlask,
  BiLogoPostgresql,
} from "react-icons/bi";
import { FaGitAlt, FaDocker } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div
      id="Tech"
      className="flex flex-col min-h-[70vh] w-full items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        className=" text-4xl font-light text-white md:text-6xl"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        Technologies
      </motion.h1>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-10 p-5"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        <BiLogoTypescript className="cursor-pointer text-[80px] text-[#3178c6] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        <motion.div
          className=" text-4xl font-light text-white md:text-6xl"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        ></motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <BiLogoJavascript className="cursor-pointer text-[80px] text-[#F7DF1E] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <BiLogoPython className="cursor-pointer text-[80px] text-[#3776AB] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <FaGitAlt className="cursor-pointer text-[80px] text-[#F1502F] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <FaReact className="cursor-pointer text-[80px] text-[#61DAFB] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiNextdotjs className="cursor-pointer text-[80px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiExpress className="cursor-pointer text-[80px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <BiLogoFlask className="cursor-pointer text-[80px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <BiLogoPostgresql className="cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <FaDocker className="cursor-pointer text-[80px] text-[#1D63ED] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tech;
