"use client"

import { useCart } from '@/context/CartContext';
import { RiDeleteBin6Line } from "react-icons/ri";
import {
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect } from 'react';

const Cart = () => {
    const { cart, removeFromCart, fetchCart, userId } = useCart();

    useEffect(() => {
        const loadCart = async () => {
            if (userId) {
                await fetchCart(userId);
            }
            else {
                console.log("User  ID is null. Cannot fetch cart.");
            }
        };

        loadCart();
    }, [userId]);

    return (
        <div className="flex items-center justify-center min-h-[92vh]">
            <main className='w-full flex flex-col items-center justify-center bg-gray-50 min-h-[92vh] relative p-4'>
                <h1 className='text-4xl font-bold text-center mb-4'>Cart</h1>
                {cart.items.length > 0 ? (
                    <ul className='flex flex-col w-full max-w-3xl'>
                        {cart.items.map(item => (
                            <li key={item.productId._id} className='p-4'>
                                <div className='flex flex-col md:flex-row justify-between border-gray-500 border-2 rounded-md p-4'>
                                    <CardHeader className="flex-shrink-0">
                                        <Image
                                            src={item.productId.imageURL}
                                            width={100}
                                            height={100}
                                            sizes='100vw'
                                            style={{ height: "100px" }}
                                            alt={item.productId.name}
                                        />
                                    </CardHeader>
                                    <CardContent className="flex-grow md:mx-4">
                                        <p className='font-bold'>{item.productId.name}</p>
                                        <p className='text-sm text-center'>{item.productId.description}</p>
                                    </CardContent>
                                    <CardFooter className="flex flex-col justify-center items-center md:flex-row md:gap-5">
                                        <p className='font-bold'>Rs. {item.productId.price}</p>
                                        <p className='font-bold'>Q. : {item.quantity}</p>
                                        <Button className='w-20 mt-2 md:mt-0' onClick={() => removeFromCart(item.productId._id)}><RiDeleteBin6Line /></Button>
                                    </CardFooter>

                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className='flex justify-center items-center m-4 pt-4'>Your cart is empty.</p>
                )}
            </main>
        </div>
    );
};

export default Cart;