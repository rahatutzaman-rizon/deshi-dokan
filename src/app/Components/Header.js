"use client";
import React from 'react';
import Image from "next/image";
import image from "../../logo_size.jpg";
import { motion } from 'framer-motion';

const animationVariants = {
  animate: {
    scale: [1, 1.2, 1],
    rotate: [0, 10,0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="/" className="text-green-600 font-bold text-2xl flex items-center">
          <motion.div
            variants={animationVariants}
            animate="animate"
          >
            <Image src={image} alt="Logo" className="h-10 w-64 " />
          </motion.div>
        </a>
        <nav className="text-base font-bold">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-green-600 hover:text-green-800 px-4 py-3 rounded-md transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="categories" className="text-green-600 hover:text-green-800 px-4 py-3 rounded-md transition duration-300">
                Categories
              </a>
            </li>
            <li>
              <a href="products" className="text-green-600 hover:text-green-800 px-4 py-3 rounded-md transition duration-300">
                Products
              </a>
            </li>
            <li>
              <a href="flashsales" className="text-green-600 hover:text-green-800 px-4 py-3 rounded-md transition duration-300">
                Flash Sales
              </a>
            </li>
            <li>
              <a href="dashboard" className="text-green-600 hover:text-green-800 px-4 py-3 rounded-md transition duration-300">
                Dashboard
              </a>
            </li>
            <li>
              <a href="about" className="text-green-600 hover:text-green-800 px-4 py-3 rounded-md transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="contact" className="text-green-600 hover:text-green-800 px-4 py-3 rounded-md transition duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;