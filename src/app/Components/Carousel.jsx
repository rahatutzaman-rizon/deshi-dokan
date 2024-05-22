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
        const response = await fetch('https://deshi-dokan-server.vercel.app/products');
        const data = await response.json();
        const flashSaleProducts = data.filter(product => product.flashSale === 'no');
        setProducts(flashSaleProducts);
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
    <div className="bg-gradient-to-r from-green-400 to-blue-500 py-12 mb-8 w-full">
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee linear infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-bounce {
          animation: bounce 3s infinite;
        }
      `}</style>

      <div className="container mx-auto">
        {/* Center Information */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">Welcome to Deshi Dokan</h2>
          <p className="text-xl text-white">Your one-stop destination for fresh and affordable groceries.</p>
        </div>

        {/* Flash Sale Banner */}
        <div className="bg-yellow-500 text-white px-8 py-4 rounded-lg shadow-lg mb-8 mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-2 animate-pulse">Deshi Dokan Flash Sale</h2>
          <p className="text-lg animate-bounce">Get up to 10% off on selected products!</p>
        </div>

        {/* Flash Sale Products */}
        <div className="flex justify-center items-center mb-8">
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

          <div className="flex overflow-hidden relative">
            <div
              className="flex animate-marquee whitespace-nowrap"
              style={{ animationDuration: `${products.length * 5}s` }}
            >
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 animate-pulse mx-4 transition-all duration-500 ease-in-out"
                >
                  <div className="bg-white rounded-lg p-2 max-w-xs">
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      width={200}
                      height={100}
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <h4 className="text-lg font-bold mb-1 text-gray-800">{product.title}</h4>
                    <p className="text-sm text-gray-600 mb-1">Category: {product.category}</p>


                    <p className="text-lg font-bold text-green-600">
                      ${(product.price * 0.9).toFixed(2)}
                      <span className="text-sm font-normal text-gray-500 ml-1">
                        <strike>${product.price}</strike>
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
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