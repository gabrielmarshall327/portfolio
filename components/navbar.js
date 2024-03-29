"use client";

import { links } from "@/lib/data";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "@/public/logo.png";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setHasShadow(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`w-full z-50 shadow-navbarShadow h-20 sticky top-0 bg-darkbg ${
        hasShadow ? "shadow-lg duration-500" : " shadow-none duration-500"
      }`}
    >
      <div className=" max-w-[1400px] h-full mx-auto flex flex-row justify-between items-center">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1 }}
          className=" p-4"
        >
          <a className=" cursor-pointer" href={links[0].hash}>
            <Image className=" w-14" src={Logo} alt="Logo" priority={true} />
          </a>
        </motion.div>
        <div className=" hidden md:inline-flex">
          <ul className=" flex ">
            {links.map((link, index) => (
              <motion.li
                key={link.hash}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                className="inline tracking-wider"
              >
                <Link
                  href={link.hash}
                  className=" p-4 block hover:text-purple-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className=" md:hidden p-4">
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col justify-center items-center"
          >
            <span
              className={`bg-white block transition-all duration-300 ease-out 
                    h-1 w-8 rounded-sm my-1 ${
                      isMobileMenuOpen
                        ? "rotate-45 translate-y-2"
                        : "-translate-y-1"
                    }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out 
                    h-1 w-8 rounded-sm my-[0.5] ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out 
                    h-1 w-8 rounded-sm my-1 ${
                      isMobileMenuOpen
                        ? "-rotate-45 -translate-y-2"
                        : "translate-y-1"
                    }`}
            ></span>
          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-16 right-0 bg-white shadow-md mr-4 mt-2 rounded-md">
              <ul>
                {links.map((link, index) => (
                  <li key={link.hash}>
                    <Link
                      href={link.hash}
                      className={`block py-2 px-4 text-purple-400 transition-colors duration-200 text-center border-t-[1px] border-black ${
                        index == 0 ? "border-t-0" : "border-t-2 border-black"
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
