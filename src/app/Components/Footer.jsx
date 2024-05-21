import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Deshi-Dokan</h3>
            <p className="text-gray-400">
              Your one-stop destination for all your culinary needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">Mohammadpur, Dhaka</p>
            <p className="text-gray-400">Bangladesh</p>
            <p className="text-gray-400">Phone: 01771276400</p>
            <p className="text-gray-400">Email: info@deshi-dokan.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;