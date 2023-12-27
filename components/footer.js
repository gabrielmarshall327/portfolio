import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-center p-8 bg-black">
      <div className=" pb-4 lg:hidden">
        <a
          href="https://github.com/gabrielmarshall327/"
          target="_blank"
          className=" m-4"
        >
          <span className="text-4xl inline-flex text-white hover:text-purple-400 cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaGithub />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-marshall/"
          target="_blank"
          className=" m-4"
        >
          <span className="text-4xl inline-flex text-white hover:text-purple-400 cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaLinkedin />
          </span>
        </a>
        <a
          href="https://www.instagram.com/gabriel___marshall/"
          target="_blank"
          className=" m-4"
        >
          <span className="text-4xl inline-flex text-white hover:text-purple-400 cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaInstagram />
          </span>
        </a>
      </div>
      <div className="text-white">
        <p>
          Designed and Made by{" "}
          <a href="#home" className="underline">
            Gabriel
          </a>
        </p>
      </div>
    </footer>
  );
}
