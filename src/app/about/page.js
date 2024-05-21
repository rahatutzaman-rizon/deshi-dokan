"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-green-500 py-16">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl font-bold text-white mb-4"
          >
            About Deshi Dokan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="text-white text-xl"
          >
            Discover our passion for fresh and local produce.
          </motion.p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            <Image
              src="/banner.jpg"
              alt="About Deshi Dokan"
              className="rounded-lg shadow-md"
              height={1100}
              width={700}
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="mb-6">
              Deshi Dokan is a locally owned and operated grocery market dedicated to providing our
              community with the freshest and highest quality produce, sourced from local farms and
              suppliers whenever possible. We believe in supporting our local economy and promoting
              sustainable farming practices.
            </p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
              className="mb-6"
            >
              Our passion for good food and healthy living drives us to curate a diverse selection
              of products that cater to various dietary preferences and lifestyles. From organic
              fruits and vegetables to artisanal baked goods and specialty items, we strive to offer
              an exceptional shopping experience for our customers.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
              className="mb-6"
            >
              At Deshi Dokan, we value personal connections and strive to create a warm and inviting
              atmosphere where our customers feel at home. Our knowledgeable staff is always
              available to assist you with product recommendations and answer any questions you may
              have.
            </motion.p>
          </motion.div>
        </div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
          className="mt-16"
        >
          <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
          <p className="mb-6">
            Our vision at Deshi Dokan is to be a trusted source for high-quality, locally sourced
            products that promote healthy living and support our local community. We strive to
            create a sustainable and environmentally conscious business model that minimizes waste
            and prioritizes ethical sourcing practices.
          </p>
          <p className="mb-6">
            We believe that by fostering strong relationships with local farmers and suppliers, we
            can ensure the freshness and traceability of our products while supporting the local
            economy. By providing our customers with exceptional service and a diverse range of
            products, we aim to be a valued part of our community.
          </p>
        </motion.div>
      </div>

      {/* Footer Section */}
      <footer className="bg-green-500 py-8">
        <div className="container mx-auto text-center">
          <p className="text-white">&copy; {new Date().getFullYear()} Deshi Dokan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;