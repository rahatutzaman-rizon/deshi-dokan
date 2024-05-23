"use client";

// app/category/[category]/page.js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';


const CategoryPage = ({ params }) => {
  const { category } = params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('https://deshi-dokan-server.vercel.app/products');
          const allProducts = response.data;

          // Filter products by category
          const categoryProducts = allProducts.filter(product => product.category === category);

          setProducts(categoryProducts);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

      fetchProducts();
    }
  }, [category]);

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Products in {category}
        </h2>
        <Link href="/">
          <p className="text-blue-500 underline mb-4 block">Back to Categories</p>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product._id.$oid} className="bg-white p-4 rounded-lg shadow-md text-center">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={150}
                height={150}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-gray-900 font-bold">${product.price}</p>
              <p className="text-gray-500">Quantity: {product.quantity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
