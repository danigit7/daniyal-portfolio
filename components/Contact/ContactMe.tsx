import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = {};

export default function ContactMe({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 mt-32">
        <h4 className="text-3xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="text-[#F7AB0A]">Let's Talk.</span>
        </h4>

        <div className="space-y-4">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+92 328 0953992</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">daniyalasim922@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Peshawar, Pakistan</p>
          </div>
        </div>

        <form
          action="https://formspree.io/f/xvgqqdzz"
          method="POST"
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            className="flex space-x-2"
          >
            <input
              name="name"
              type="text"
              required
              placeholder="Name"
              className="contactInput w-1/2"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="contactInput w-1/2"
            />
          </motion.div>

          <motion.input
            name="subject"
            type="text"
            required
            placeholder="Subject"
            className="contactInput"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <motion.textarea
            name="message"
            required
            placeholder="Message"
            className="contactInput"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <motion.button
            type="submit"
            className="py-5 px-10 rounded-md text-black font-bold bg-[#F7AB0A] hover:drop-shadow-[0_0px_4px_#F7AB0A] transition duration-200 ease-in-out"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  );
}
