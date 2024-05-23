// components/DetailProduct.js
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";

const DetailProduct = ({ params }) => {
  const { id } = params;
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [donationQuantity, setDonationQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(
            `https://deshi-dokan-server.vercel.app/products/${id}`
          );
          setProduct(response.data);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };

      fetchProduct();
    }
  }, [id]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      await axios.put(`https://deshi-dokan-server.vercel.app/products/${id}/donate`, {
        quantity: donationQuantity,
      });
      setIsModalOpen(false);
      router.push(`/products/${id}`); // Navigate to the same page after confirming the donation
    } catch (error) {
      console.error("Error updating product quantity:", error);
    }
    router.push("/");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDonationQuantityChange = (e) => {
    setDonationQuantity(e.target.value);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const { imageUrl, title, category, quantity, description, expirationDate, nutritionalInfo } = product;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg mt-10">
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={300}
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-4"><strong>Category:</strong> {category}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between mb-4">
          <div className="text-center">
            <p className="text-xl font-bold">{quantity}</p>
            <p className="text-gray-600">Quantity</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{new Date(expirationDate).toLocaleDateString()}</p>
            <p className="text-gray-600">Expiration Date</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">Nutritional Information</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <p className="text-xl font-bold">{nutritionalInfo.calories}</p>
            <p className="text-gray-600">Calories</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{nutritionalInfo.protein}g</p>
            <p className="text-gray-600">Protein</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{nutritionalInfo.fat}g</p>
            <p className="text-gray-600">Fat</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{nutritionalInfo.carbs}g</p>
            <p className="text-gray-600">Carbs</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{nutritionalInfo.fiber}g</p>
            <p className="text-gray-600">Fiber</p>
          </div>
        </div>
        <button
          onClick={showModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4"
        >
          Donate Now
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-bold mb-4">Donate Now</h3>
            <p className="text-gray-600 mb-4">Are you sure you want to donate this item?</p>
            <p className="text-gray-600 mb-4">
              <strong>Item:</strong> {title}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Quantity:</strong>{" "}
              <input
                type="number"
                min="1"
                max={quantity}
                value={donationQuantity}
                onChange={handleDonationQuantityChange}
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded-full mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleOk}
                className="bg-blue-500 text-white px-4 py-2 rounded-full"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailProduct;