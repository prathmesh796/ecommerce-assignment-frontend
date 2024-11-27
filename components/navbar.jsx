"use client"

import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 99.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=100&h=100"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=100&h=100"
    }
  ]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  return (
    <nav className="bg-white shadow-md w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=100&h=100"
              alt="E-commerce Logo"
              className="h-8 w-auto"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1595246140989-25d402989da8?auto=format&fit=crop&w=100&h=100";
              }}
            />
            <span className="ml-2 text-xl font-bold">ShopEase</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-yellow-600 transition-colors">Home</a>
            <a href="/products" className="text-gray-600 hover:text-yellow-600 transition-colors">products</a>
            <a href="/about" className="text-gray-600 hover:text-yellow-600 transition-colors">About Us</a>
            <a href="/contact" className="text-gray-600 hover:text-yellow-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center">
            <div className="relative">
              <Link href='/cart'>
                <button
                  className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Shopping cart"
                >
                  <FaShoppingCart className="h-6 w-6 text-gray-600" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-yellow-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;