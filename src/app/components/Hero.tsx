"use client";
import React from "react";
import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn } from "@/utils/animations";

const Hero = () => {
  return (
    <section className="py-28 container max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          className="flex flex-col items-center mb-4"
          {...scaleIn}
          transition={{ delay: 0.2 }}
        >
          <Image
            src={"/myProfile.jpg"}
            alt={"profile image"}
            width={1000}
            height={1000}
            className="rounded-full mb-4 w-36 h-36 object-cover ring-2 ring-primary"
          />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          {...fadeInUp}
          transition={{ delay: 0.3 }}
        >
          Hi, I&apos;m{" "}
          <motion.span
            className="text-primary"
            {...fadeIn}
            transition={{ delay: 0.8 }}
          >
            LaFauna
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-800 dark:text-gray-300"
          {...fadeInUp}
          transition={{ delay: 1 }}
        >
          Frontend Developer
        </motion.p>

        <motion.div
          className="flex justify-center space-x-4 mb-8"
          {...fadeInUp}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href="/"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/haikal-aufan/"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="/"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFacebook />
          </motion.a>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4"
          {...fadeInUp}
          transition={{ delay: 1.4 }}
        >
          <motion.a
            href="/projects"
            className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            View Project
          </motion.a>
          <motion.a
            href="/contact"
            className="bg-gray-500 inline-block w-full md:w-auto text-white hover:text-gray-500 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
