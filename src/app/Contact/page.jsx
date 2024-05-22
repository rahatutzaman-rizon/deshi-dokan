"use client";
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Flash Sale Advertisement */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 animate-pulse">
              Flash Sale Alert!
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Limited-time discounts on selected items. Hurry up and grab the deals!
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <svg
                  className="h-10 w-10 text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a6 6 0 00-6 6v1H3.25A2.75 2.75 0 010 11.75V18a2 2 0 002 2h16a2 2 0 002-2v-6.25A2.75 2.75 0 0017.25 9H16V8a6 6 0 00-6-6zm3.035 4.623a.75.75 0 11-1.062 1.062A3 3 0 1010 11.25a.75.75 0 111.5 0 4.5 4.5 0 00-4.5-4.627z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-bold text-gray-900">
                  Get up to 50% off!
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* About Us */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 ">
              About Us
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Learn more about our grocery market and our mission.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <p className="text-sm text-gray-500">
              At Deshi Dokan, we are committed to providing our customers with the freshest and highest-quality products. Our grocery market sources locally grown produce, meat, and dairy from trusted farmers and suppliers in the region. We believe in supporting local businesses and promoting sustainable farming practices.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Our dedication to quality and customer satisfaction is at the core of our business. We strive to create a welcoming and friendly shopping experience for all our valued customers.
            </p>
          </div>
        </div>

        {/* Supplier Information */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900 ">
              Become a Supplier
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Provide your farm-fresh products to our shop and reach a wider customer base.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <p className="text-sm text-gray-500">
              At our grocery market, we prioritize fresh and locally sourced products. If you're a farmer, producer, or supplier interested in selling your high-quality goods through our platform, we'd love to hear from you.
            </p>
            <div className="mt-4">
              <a
                href="mailto:supplier@deshi-dokan.com"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 animate-bounce"
              >
                <svg
                  className="-ml-1 mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 ">
              Delivery Information
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Learn about our delivery services and coverage areas.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <p className="text-sm text-gray-500">
              We offer convenient delivery services to customers within the Dhaka metropolitan area. Our dedicated delivery team ensures that your orders are delivered fresh and on time.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Please note that delivery fees may apply based on your location and the order value. Visit our website or contact us for more information on delivery charges and coverage areas.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 ">Contact Us</h3>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-4">
            <div className="px-4 py-5 sm:px-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Location</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    Grocery Market Mohammadpur, Dhaka, Bangladesh
                  </dd>
                </div>
                <div className="mt-6 flex flex-col items-center">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Grocery+Market+Mohammadpur%2C+Dhaka%2C+Bangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 animate-bounce"
                  >
                    <svg
                      className="-ml-1 mr-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View on Google Maps
                  </a>
                  <a
                    href={`tel:01771276400`}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 animate-bounce"
                  >
                    <svg
                      className="-ml-1 mr-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11 10c0-.92-.51-1.758-1.309-2.191l.695-.695c1.127 1.127 1.628 2.446 1.628 3.886 0 1.44-.501 2.759-1.628 3.886l-.695-.695C10.49 13.758 11 12.92 11 12zm-3.488-1.371c-.387.229-.763.498-1.104.812l-.695-.695c.548-.548 1.143-1.02 1.789-1.427V6h1V7.33l1.306-.736c0 .625-.156 1.22-.447 1.736zM10 2C4.477 2 0 6.477 0 12s4.477 10 10 10 10-4.477 10-10S15.523 2 10 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Call Us
                  </a>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
