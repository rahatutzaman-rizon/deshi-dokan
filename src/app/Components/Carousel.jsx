
"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://food-supply-server-1.onrender.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentIndex((currentIndex + 1) % products.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isPlaying, products.length]);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + products.length) % products.length);
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % products.length);
    setIsPlaying(false);
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 py-12 mb-12 w-full">
      <div className="container">
        {/* Center Information */}
        <div className="text-center mb-4">
          <h2 className="text-6xl font-bold text-white mb-4">Welcome to Deshi_Dokan</h2>
          <p className="text-2xl text-white">Your one-stop destination for all your culinary needs.</p>
        </div>

        {/* Flash Sale Products */}
        <div className="flex justify-center items-center mb-4">
          <button
            onClick={handlePrev}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="flex mt-12 h-24">
            {products.slice(currentIndex, currentIndex + 3).map((product, index) => (
              <div key={index} className="flex-shrink-0 animate-pulse mx-4">
                <div className="bg-white rounded-lg p-2 max-w-sm">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={500}
                    height={200}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h4 className="text-lg font-bold mb-2 text-gray-800">{product.title}</h4>
                  <p className="text-gray-600">Category: {product.category}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;