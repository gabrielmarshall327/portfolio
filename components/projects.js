"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <div className=" md:pt-24 py-10 scroll-m-8" id="projects">
      <div className=" items-center max-w-5xl mx-auto ">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className=" text-4xl text-purple-400 pb-2 text-center">
            Projects!
          </h3>
          <span className="block border-b-2 border-purple-400 w-16 h-0 my-2 mb-6 mx-auto"></span>
        </motion.div>

        <div className="gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-projectsbg max-w-[90%] mx-auto mb-3 md:mb-8 border border-black/5 rounded-lg overflow-hidden relative sm:h-[20rem] hover:bg-darkbg transition h-80 group"
            >
              <div className="py-4 px-5 max-w-[50%] flex flex-col h-full group-even:ml-[32rem]">
                <h4 className="text-xl font-semibold pb-2">{project.title}</h4>
                <p className="pb-4">{project.description}</p>
                <ul className="flex flex-wrap gap-2 pb-4">
                  {project.buttons.map((button, buttonIndex) => (
                    <li
                      key={`button-${index}-${buttonIndex}`}
                      className="text-3xl hover:-translate-y-2 hover:text-purple-400 transition-all duration-300 cursor-pointer"
                    >
                      <a target="_blank" href={project.links[buttonIndex]}>
                        {button}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-wrap gap-2 mt-auto pb-2">
                  {project.tags.map((tag, tagIndex) => (
                    <li
                      key={`tag-${index}-${tagIndex}`}
                      className="bg-black/50 text-white rounded-full px-3 py-1"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <Image
                src={project.imageUrl}
                alt="Project Picture"
                className=" absolute top-8 -right-[30rem] group-even:-left-[30rem]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
