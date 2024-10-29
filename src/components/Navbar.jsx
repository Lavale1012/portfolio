import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";

import { useState } from "react";

const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!IsOpen);
  return (
    <nav className="   fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#"
        className=" bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Lavale's Porfolio
      </a>
      <ul className="hidden md:flex gap-10 mr-32">
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
            href="https://github.com/Lavale1012"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-xl hover:text-orange-500"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lavale-butterfield/"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-blue-800 text-xl"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
      {IsOpen ? (
        <BiX onClick={toggleMenu} className="block md:hidden text-4xl" />
      ) : (
        <BiMenu onClick={toggleMenu} className="block md:hidden text-4xl" />
      )}
      {IsOpen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-gray-800 bg-black/90 p-12 ${
            IsOpen ? "block" : "hidden"
          }`}
        >
          <ul className=" flex flex-col gap-8">
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
          <ul className="flex flex-wrap gap-5">
            <li>
              <a
                href="https://github.com/Lavale1012"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-xl hover:text-orange-500"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/lavale-butterfield/"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-blue-800 text-xl"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
