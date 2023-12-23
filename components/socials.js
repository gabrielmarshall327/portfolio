"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Socials() {
  return (
    <div className=" fixed right-0 top-1/2 -translate-y-1/2 p-10 max-md:hidden">
      <div className="flex flex-col gap-4">
        <motion.a
          href="https://github.com/gabrielmarshall327/"
          target="_blank"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.5 }}
        >
          <span className="text-4xl inline-flex text-black hover:text-purple-400 cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaGithub />
          </span>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/gabriel-marshall/"
          target="_blank"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.5 }}
        >
          <span className="text-4xl inline-flex text-black hover:text-purple-400 cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaLinkedin />
          </span>
        </motion.a>
        <motion.a
          href="https://www.instagram.com/gabriel___marshall/"
          target="_blank"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.5 }}
        >
          <span className="text-4xl inline-flex text-black hover:text-purple-400 cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaInstagram />
          </span>
        </motion.a>
      </div>
    </div>
  );
}
