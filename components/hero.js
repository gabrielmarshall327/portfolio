"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className=" bg-darkbg h-screen scroll-m-[100rem]" id="home">
      <div className=" max-w-5xl mx-auto md:py-24 py-10 max-lg:max-w-[90%]">
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className=" text-3xl pb-8 max-md:text-xl"
        >
          Howdy, my name is{" "}
          <span className=" font-bold hover:text-purple-400 transition-colors duration-200 cursor-pointer max-sm:text-2xl">
            Gabriel Marshall
          </span>
        </motion.h3>
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className=" text-5xl text-purple-400 pb-8 font-bold max-sm:text-4xl"
        >
          I am a professional Web Developer & Graphics Engineer
        </motion.h3>
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className=" text-2xl max-sm:text-2xl"
        >
          I am a software engineer with a keen eye for design and a knack for
          creating seamless digital experiences. Welcome to my digital realm,
          where innovation meets functionality and creativity.
        </motion.h3>
      </div>
      <div className="flex flex-row justify-center ">
        <div className="absolute top-1/3 mr-96 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-100 animate-blob1 max-md:mr-0 max-md:mt-60"></div>
        <div className="absolute top-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-100 animate-blob2 "></div>
        <div className="absolute top-1/3 ml-96 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-100 animate-blob3 max-md:ml-0 max-md:mb-40 max-md:top-[15%]"></div>
      </div>
    </div>
  );
}
