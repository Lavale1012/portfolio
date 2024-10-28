import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!IsOpen);
  return (
    <nav className=" fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#"
        className=" bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Lavale
      </a>
      <ul className="hidden md:flex gap-10">
        <a
          href="#Home"
          className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Home</li>
        </a>
        <a
          href="#Tech"
          className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Tech</li>
        </a>
        <a
          href="#Projects"
          className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>
        <a
          href="#Contact"
          className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>
      <ul className="hidden md:flex gap-5">
        <li>
          <a
            href="#github"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-xl hover:text-orange-500"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="#LinkedIn"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-blue-800 text-xl"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
