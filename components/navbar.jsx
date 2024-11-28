"use client"

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { NavigationEvents } from "@/components/navigation-events";
import Image from "next/image";

const Navbar = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const checkLoginStatus = () => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    setIsLoggedIn(false)
    router.push('/');
  };

  const handleUrlChange = () => {
    checkLoginStatus();
  };


  return (
    <>
      <NavigationEvents onUrlChange={handleUrlChange} />
      <nav className="bg-white shadow-md w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Image
                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=100&h=100"
                width={100}
                height={100}
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
              {isLoggedIn && (
                <>
                  <Link className="m-4" href='/cart'>
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
                  <Button onClick={handleLogout}>Logout</Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;