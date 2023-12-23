"use client";

import React from "react";
import Image from "next/image";
import { FaReact, FaPython, FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiTailwindcss } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import Selfie from "@/public/pic-of-self-square.jpg";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className=" h-screen">
      <div className="max-w-5xl mx-auto md:py-20 py-10">
        <div>
          <div className=" flex flex-row gap-20">
            <motion.div
              className=" w-80 basis-1/3"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Image
                src={Selfie}
                className=" w-80 rounded-full"
                alt="Picture of Gabe"
                priority={true}
              />
            </motion.div>
            <motion.div
              className=" basis-1/2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h3 className=" text-4xl text-purple-400 pb-2">
                A bit about me!
              </h3>
              <span className="block border-b-2 border-purple-400 w-16 h-0 my-2"></span>

              <p className=" pt-4 text-xl">
                I am a Computer Engineering at Texas A&M with a minor in
                mathematics. I have experience with full-stack development with
                technologies such as React, PostgreSQL and Node.js.{" "}
              </p>
            </motion.div>
          </div>
          <div className=" py-16">
            <motion.h4
              className=" pb-8 text-2xl text-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Some skills I am proficent in!
            </motion.h4>
            <div className=" flex flex-row flex-wrap justify-center gap-4 max-w-xl mx-auto">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className=" text-[100px] text-purple-400 px-4 animate-float hover:text-white transition-colors duration-300"
                >
                  {skill.image}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
