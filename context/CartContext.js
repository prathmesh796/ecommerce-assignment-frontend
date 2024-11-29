"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ items: [] });
    const [userId, setUserId] = useState(null);
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

    const fetchCart = async (currentUserId) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/cart/${currentUserId}`);
            const cart = response.data;

            if (!cart) {
                console.error('Cart not found');
                return; // or handle the case where the cart is not found
            }

            // Now it's safe to access cart.items
            const items = cart.items || [];
            setCart({ items: items }); // Assuming the response contains an array of items
        } catch (error) {
            console.error("Error fetching cart:", error);
        }
    };

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
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, setUserId, userId, setToken, fetchCart }}>
            {children}
        </CartContext.Provider>
    );
};

