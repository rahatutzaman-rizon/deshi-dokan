"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FlashSale = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://deshi-dokan-server.vercel.app/products');
        const flashSaleProducts = response.data.filter(product => product.flashSale === 'no');
        setProducts(flashSaleProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen py-20 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Deshi Dokan</h1>
          <p className="text-lg text-gray-200 mb-8">
            Welcome to our local grocery market, where freshness meets affordability.
          </p>
          <div className="bg-yellow-500 text-white px-8 py-4 rounded-full shadow-lg">
            <h2 className="text-2xl font-bold">Flash Sale</h2>
            <p className="text-lg">Get 10% off on selected products</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <motion.div
              key={product._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <div className="relative">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                  width={300}
                  height={100}
                />
                <motion.div
                  className="absolute top-0 left-0 bg-yellow-500 text-white px-4 py-2 rounded-br-lg"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4, ease: 'easeInOut' }}
                >
                  10% Off
                </motion.div>
              </div>
              <div className="p-2">
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-2">Category: {product.category}</p>
                <p className="text-gray-600 mb-2">Quantity: {product.quantity}</p>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-green-600">
                    ${(product.price * 0.9).toFixed(2)}
                    <span className="text-sm font-normal text-gray-500 ml-1">
                      <strike>${product.price}</strike>
                    </span>
                  </p>
                  <motion.button
                    className="bg-green-500 text-white px-4 py-2 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;