"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/utils/animations";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="container max-w-7xl mx-auto py-28">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-20 text-center"
      >
        Contact Me
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div 
        {...slideInLeft}
        transition={{ duration: 0.5 }}
        className="space-y-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-secondary md:w-2/3">
            I&apos;m always open to new opportunities and collaborations. Whether you
            have a project in mind or just want to chat, feel free to reach out.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="w-6 h-6 text-primary mr-2" />
              <div>
                <h3 className="text-semibold">Email:</h3>
                <Link
                  href="mailto:aufan2002@gmail.com"
                  className="text-secondary hover:text-primary"
                >
                  aufan2002@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="w-6 h-6 text-primary mr-2" />
              <div>
                <h3 className="text-semibold">Phone:</h3>
                <Link
                  href="tel:+62 813-8798-2489"
                  className="text-secondary hover:text-primary"
                >
                  +62 813-8798-2489
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="w-6 h-6 text-primary mr-2" />
              <div>
                <h3 className="text-semibold">Location:</h3>
                <Link
                  href="tel:+62 813-8798-2489"
                  className="text-secondary hover:text-primary"
                >
                  Kudus, Jawa Tengah
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
        {...slideInRight}
        className="bg white dark:bg-dark/50 rounded-lg p-6 shadow-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                value={formData.name}
                onChange={handleChange}
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:outline-none placeholder:text-gray-700 dark:placeholder:text-white/50"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:outline-none placeholder:text-gray-700 dark:placeholder:text-white/50"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={handleChange}
                rows={4}
                id="message"
                name="message"
                placeholder="Enter your message"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:outline-none placeholder:text-gray-700 dark:placeholder:text-white/50"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full btn btn-primary hover:bg-secondary text-white py-2 px-4 rounded-md"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-green-500 text-center">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-center">
                Failed to send message.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
