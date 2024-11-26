"use client"

import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 fixed bottom-0 w-[100%]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">Your trusted destination for quality products and exceptional shopping experience.</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-yellow-500 transition-colors duration-300">
                <FaFacebookF size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-yellow-400 transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-yellow-600 transition-colors duration-300">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Shipping Info</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Returns</a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">New Arrivals</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Best Sellers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Categories</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Special Offers</a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-xl font-bold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Refund Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                  aria-label="Email subscription"
                />
                <button
                  type="submit"
                  className="bg-yellow-600 px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <MdEmail className="text-yellow-500" size={24} />
              <span className="text-gray-400">support@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdPhone className="text-yellow-500" size={24} />
              <span className="text-gray-400">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdLocationOn className="text-yellow-500" size={24} />
              <span className="text-gray-400">123 Commerce St, Business City, 12345</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Your eCommerce Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;