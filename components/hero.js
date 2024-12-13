"use client";
import React from "react";
import { motion } from "framer-motion";
import BackgroundLoader from "./backgroundLoader";

export default function Hero() {
  return (
    <div className="relative bg-darkbg h-screen scroll-m-[100rem]" id="home">
      <BackgroundLoader />
      <div className="relative z-10 max-w-5xl mx-auto md:py-16 py-10 max-lg:max-w-[90%]">
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-3xl pb-8 max-md:text-xl"
        >
          Howdy, my name is{" "}
          <span className="font-bold hover:text-purple-400 transition-colors duration-200 cursor-pointer max-sm:text-2xl">
            Gabriel Marshall
          </span>
        </motion.h3>
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="text-5xl bg-gradient-to-l from-purple-300 to-purple-500 text-transparent bg-clip-text pb-8 font-bold max-sm:text-4xl"
        >
          I am a Web Developer & App Developer
        </motion.h3>
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="text-2xl max-sm:text-2xl"
        >
          I am a software engineer with a keen eye for design and a knack for
          creating seamless digital experiences. Welcome to my digital realm,
          where innovation meets functionality and creativity.
        </motion.h3>
      </div>
    </div>
  );
}
