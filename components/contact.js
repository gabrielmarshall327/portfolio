"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_serviceID,
        process.env.NEXT_PUBLIC_templateID,
        form.current,
        process.env.NEXT_PUBLIC_publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Error sending message. Please try again later.");
          form.current.reset();
        }
      );
  };
  return (
    <div className=" scroll-m-8" id="contact">
      <div className="md:py-24 py-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className=" border border-black shadow-2xl mx-auto max-w-2xl w-[90%]">
            <div className="mt-8">
              <h3 className=" text-4xl text-purple-400 pb-2 text-center">
                Contact Me!
              </h3>
              <span className="block border-b-2 border-purple-400 w-16 h-0 my-2 mb-6 mx-auto"></span>
            </div>
            <form
              className="text-left p-8 pb-12"
              onSubmit={sendEmail}
              ref={form}
            >
              <label className="input-header block mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-projectsbg p-4 border-b border-gray-500"
                required
                placeholder="Your name"
                name="user_name"
              />

              <label className="input-header block mb-2 mt-8">Email</label>
              <input
                type="text"
                className="w-full bg-projectsbg p-4 border-b border-gray-500"
                required
                placeholder="Your email"
                name="user_email"
              />

              <label htmlFor="message" className="input-header block mb-2 mt-8">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="resize-y w-full bg-projectsbg p-4 border border-gray-500"
                rows="5"
                placeholder="Your message"
                required
              ></textarea>

              <br />
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="bg-purple-500 text-white w-24 border-none outline-none p-2"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
