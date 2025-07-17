import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">LaFauna</Link>
            <p className="text-sm text-secondary mt-2">
              &copy; {new Date().getFullYear()} LaFauna. All Right Reserved
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="/"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors"
            >
              <FaGithub />
            </Link>
            <Link
              href="/"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="/"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors"
            >
              <FaFacebook />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
