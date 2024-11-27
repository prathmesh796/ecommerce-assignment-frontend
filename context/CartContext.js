"use client"

// src/context/CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ items: [] });
    const [userId, setUserId] = useState(null); // Store user ID here
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        const storedToken = localStorage.getItem('token');

        if (storedUserId) {
            setUserId(storedUserId);
        }
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const addToCart = async (product) => {
        if (!userId) {
            console.error('User  not logged in');
            return;
        }
        try {
            await axios.post('http://localhost:5000/api/cart/add', {
                userId,
                productId: product._id,
                quantity: 1,
            });
            // Update local cart state
            setCart(prevCart => {
                const existingItem = prevCart.items.find(item => item.productId._id === product._id);
                if (existingItem) {
                    return {
                        ...prevCart,
                        items: prevCart.items.map(item =>
                            item.productId._id === product._id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    };
                } else {
                    return {
                        ...prevCart,
                        items: [...prevCart.items, { productId: product, quantity: 1 }],
                    };
                }
            });
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };


    const removeFromCart = async (productId) => {
        if (!userId) {
            console.error('User  not logged in');
            return;
        }
        try {
            await axios.delete('http://localhost:5000/api/cart/remove', {
                data: { userId, productId },
            });
            // Update local cart state
            setCart(prevCart => ({
                ...prevCart,
                items: prevCart.items.filter(item => item.productId._id !== productId),
            }));
        } catch (error) {
            console.error('Error removing from cart:', error);
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, setUserId, setToken }}>
            {children}
        </CartContext.Provider>
    );
};

