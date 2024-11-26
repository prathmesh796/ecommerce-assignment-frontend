import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
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
            <span className="ml-2 text-xl font-bold">EShop</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">Shop</a>
            <a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">Categories</a>
            <a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">About Us</a>
            <a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center">
            <div className="relative">
              <button
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsCartOpen(!isCartOpen)}
                aria-label="Shopping cart"
              >
                <FaShoppingCart className="h-6 w-6 text-gray-600" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {isCartOpen && (
                <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-xl p-4 z-50">
                  <div className="max-h-96 overflow-y-auto">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 mb-4 p-2 hover:bg-gray-50 rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-gray-600">${item.price}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between mb-4">
                      <span className="font-semibold">Total:</span>
                      <span className="font-semibold">
                        ${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
                      </span>
                    </div>
                    <button className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition-colors">
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              className="ml-4 md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6 text-gray-600" />
              ) : (
                <FaBars className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">About Us</a>
              <a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;