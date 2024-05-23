"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://deshi-dokan-server.vercel.app/products');
        const products = response.data;

        // Extract unique categories
        const uniqueCategories = [...new Set(products.map(product => product.category))];

        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Product Categories</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
              <Link href={`category/${category}`}>
                <p className="text-xl font-semibold text-gray-700">{category}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
