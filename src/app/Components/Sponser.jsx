"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Sponsor data
const sponsorData = [
  {
    id: 1,
    name: 'Acme Inc.',
    description: 'Leading provider of innovative solutions',
    logo: 'https://i.ibb.co/ZcZcvV0/acme.jpg',
    website: 'https://acme.com',
  },
  {
    id: 2,
    name: 'Globex Corp',
    description: 'Empowering businesses with cutting-edge technology',
    logo: 'https://i.ibb.co/HY5cKqQ/glob.png',
    website: 'https://globex.com',
  },
  {
    id: 3,
    name: 'Stark Industries',
    description: 'Creating the future, one innovation at a time',
    logo: 'https://i.ibb.co/L0Vrdxz/stack.png',
    website: 'https://starkindustries.com',
  },
];

const Advertisement = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Our Sponsors
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
            hidden: {},
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8  animate-bounce "
        >
          {sponsorData.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: 'easeInOut',
                  },
                },
                hidden: {
                  opacity: 0,
                  y: 50,
                  scale: 0.8,
                },
              }}
              className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={150}
                height={150}
                className="w-20 h-20 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                {sponsor.name}
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                {sponsor.description}
              </p>
              <motion.a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: '#2563eb',
                  color: '#fff',
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 inline-block text-sm md:text-base"
              >
                Visit Website
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Advertisement;