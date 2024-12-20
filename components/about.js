"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Selfie from "@/public/pic-of-self-square.jpg";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <div className="scroll-m-8" id="about">
      <div className="max-w-5xl mx-auto md:pt-24 pt-10">
        <div>
          <div className=" flex flex-row gap-20 max-lg:gap-4 max-lg:flex-col max-lg:max-w-[90%] mx-auto">
            <motion.div
              className=" w-80 max-md:w-64 basis-1/3 max-lg:mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={Selfie}
                className=" w-80 rounded-full "
                alt="Picture of Gabe"
                priority={true}
              />
            </motion.div>
            <motion.div
              className=" basis-1/2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className=" text-4xl text-purple-400 pb-2 max-md:text-center">
                A bit about me
              </h3>
              <span className="block border-b-2 border-purple-400 w-16 h-0 my-2 max-md:mx-auto"></span>

              <p className=" pt-4 text-xl">
                I am a Computer Engineering student at Texas A&M with a minor in
                mathematics and game developement. I have full-stack
                developement experience with technologies such as React,
                PostgreSQL and Node.js.{" "}
              </p>
              <p className=" pt-4 text-xl">
                I am also a diehard Minnesota Vikings fan and starting to dive
                into game development and graphics engineering.{" "}
              </p>
            </motion.div>
          </div>
          <div className=" py-16">
            <motion.h4
              className=" pb-8 text-2xl text-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Technologies I am proficient in:
            </motion.h4>
            <div className=" flex flex-row flex-wrap justify-center gap-4 max-w-xl mx-auto">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  viewport={{ once: true }}
                  className=" text-[100px] max-md:text-[60px] text-purple-400 px-4 animate-float hover:text-white transition-all duration-300 flex flex-col items-center"
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {skill.image}
                  <span
                    className={`text-white text-base max-md:text-sm transition-opacity duration-300 text-center ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {skill.name}
                  </span>
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
