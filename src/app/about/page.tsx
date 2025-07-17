"use client";

import React from "react";
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  cardHover,
  fadeIn,
  fadeInDown,
  fadeInUp,
  pageTransition,
  staggerContainer,
} from "@/utils/animations";

const About = () => {
  return (
    <motion.div 
    {...pageTransition}
    transition={{ duration: 1}}
    className="container max-w-7xl mx-auto py-28">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* bio section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          A highly motivated Information Technology graduate from UIN Walisongo
          with a GPA of 3.88, awarded as the Best Graduate of the Faculty. I
          have hands-on experience as a Media Coordinator, leading various
          digital content and production initiatives. My current focus is to
          grow as a Software Developer, with a strong interest in Frontend
          Development using modern web technologies. I bring a combination of
          technical skills, creative problem-solving, and leadership experience,
          and I am eager to contribute to impactful digital solutions.
        </p>
      </motion.section>
      {/* skills section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/80 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
            transition={{ delay: 0.2 }}
          >
            <FaCode className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Frontend</h3>
            <ul>
              <li>HTML5 / CSS3</li>
              <li>Tailwind CSS</li>
              <li>Javascript / Typescript</li>
              <li>React / Next.js</li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-dark/80 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
            transition={{ delay: 0.2 }}
          >
            <FaLaptopCode className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Backend</h3>
            <ul>
              <li>PHP</li>
              <li>Laravel</li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-dark/80 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
            transition={{ delay: 0.2 }}
          >
            <FaGraduationCap className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Tools & Other</h3>
            <ul>
              <li>Git / Github</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
      {/* education section */}
      <motion.section className="mb-16" {...fadeIn}>
        <h2 className="section-title">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Information Technology
            </h3>
            <p className="text-primary mb-2">UIN Walisongo Semarang</p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>Best graduate at faculty level.</li>
              <li>Graduated in 7 semesters.</li>
              <li>
                Thesis on “The Perceptions of Semarang Five Star Hotel Tourist
                with Support Vector Machine on Google Reviews”.
              </li>
            </ul>
          </div>
        </div>
      </motion.section>
      {/* bootcamp section */}
      <section className="mb-16">
        <h2 className="section-title">Bootcamp</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Dicoding Indonesia</h3>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>Belajar Dasar Pemrogaman Web.</li>
              <li>Belajar Dasar Pemrogaman Javascript.</li>
              <li>Belajar Membuat Front-End Web untuk Pemula.</li>
              <li>Belajar Membuat Aplikasi Web dengan React</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Coding Studio</h3>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>Fundamental Front-End Web Development 2021.</li>
              <li>Fundamental Front-End Web Development II.</li>
              <li>Mahir Membuat Website dengan Laravel 9.</li>
              <li>Mahir Membuat Database Aplikasi Profesional</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">BuildWithAngga</h3>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>
                Next JS 15 for Beginners 2025: Bikin Web Cari dan Sewa Kantor
              </li>
              <li>Web Gudang Toko Management Laravel 12 Bonus Project React</li>
              <li>Laravel 11, Filament, MySQL: Web Bayar SPP.</li>
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
