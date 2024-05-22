"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

// Testimonial data
const testimonialData = [
  {
    id: 1,
    name: 'রাহিম খান',
    description: 'দেশি দোকানটি স্থানীয় ব্যবসায়ের জন্য একটি অসাধারণ প্ল্যাটফর্ম। এর বহুমুখী পণ্য এবং সহজবোধ্য ইন্টারফেইস সবকিছুই একসঙ্গে সরবরাহ করে।',
    info: 'রাহিম খান, ঢাকা'
  },
  {
    id: 2,
    name: 'সালমা বেগম',
    description: 'একজন ব্যস্ত পেশাজীবীর হিসাবে, দেশি দোকানের অত্যন্ত দ্রুত ডেলিভারি এবং চমৎকার গ্রাহক সেবা আমাকে একজন আনুগত্যশীল গ্রাহক হিসাবে গড়ে তুলেছে।',
    info: 'সালমা বেগম,ঢাকা '
  },
  {
    id: 3,
    name: 'আমিনুল ইসলাম',
    description: 'দেশি দোকান আমার ছোট ব্যবসায়ের জন্য একটি গেম চেঞ্জার ছিল। এদের প্ল্যাটফর্ম আমাকে একটি বৃহত্তর দর্শকের কাছে পৌঁছতে এবং আমার বিক্রয় বৃদ্ধি করতে সাহায্য করেছে।',
    info: 'আমিনুল ইসলাম, ঢাকা '
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            দেশি দোকান এর সম্পর্কে
          </h2>
          <p className="text-gray-600 text-center">
            দেশি দোকান একটি অনলাইন বাজার যা দেশীয় পণ্য এবং সেবা সরবরাহ করে। আমরা গ্রাহকদের জন্য সর্বোত্তম অভিজ্ঞতা নিশ্চিত করার জন্য নিরন্তর কাজ করছি।
          </p>
        </motion.div>
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        >
          আমাদের গ্রাহকদের মতামত
        </motion.h2>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonialData.map((testimonial) => (
            <motion.div
              key={testimonial.id}
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
              className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-all duration-300 hover:shadow-2xl hover:scale-105 border-4 border-green-500"
            >
              <FaQuoteLeft className="text-4xl text-green-500 mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{testimonial.description}</p>
              <p className="text-xs text-gray-500">{testimonial.info}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;