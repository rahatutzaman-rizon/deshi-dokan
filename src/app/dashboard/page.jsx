"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://deshi-dokan-server.vercel.app/products');
        setProducts(response.data);

        // Calculate data for the pie chart
        const categoryData = response.data.reduce((acc, product) => {
          const { category } = product;
          if (acc[category]) {
            acc[category]++;
          } else {
            acc[category] = 1;
          }
          return acc;
        }, {});

        setChartData({
          labels: Object.keys(categoryData),
          datasets: [
            {
              data: Object.values(categoryData),
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#8e5ea2',
                '#3cba9f',
                '#e8c3b9',
                '#c45850',
              ],
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Grocery Market Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product List</h2>
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Category</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{product.title}</td>
                  <td className="border px-4 py-2">{product.price}</td>
                  <td className="border px-4 py-2">{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Our Grocery Market</h2>
        <p className="text-gray-600">
          Welcome to our grocery market, where we offer a wide variety of fresh and high-quality products for all your
          shopping needs. Our commitment to excellence is reflected in our carefully curated selection of fruits,
          vegetables, dairy products, meat, and more. We pride ourselves on providing our customers with a seamless and
          enjoyable shopping experience, ensuring that you can find everything you need under one roof.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;