"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const Supply = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://deshi-dokan-server.vercel.app/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 py-12 text-center text-white">
        <h1 className="text-4xl font-bold">Our Products</h1>
        <p className="mt-4 text-lg">
          Providing high-quality food products with efficient distribution.
        </p>
        <Link href="/about" className="inline-block mt-6 bg-green-500 text-white px-4 py-2 rounded-full">
          Shop Now
        </Link>
      </header>
      <main className="flex-grow container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={150}
                height={150}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-gray-800 font-bold">${product.price}</p>
              <p className="text-gray-500">Quantity: {product.quantity}</p>
              <Link href={`/products/${product._id}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-full">
                Details
              </Link>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; Food Supply Distribution {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Supply;