"use client"

import { useCart } from '@/context/CartContext';
import { RiDeleteBin6Line } from "react-icons/ri";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    return (
        <div className="flex items-center justify-center min-h-[92vh]">
            <main className='w-full flex flex-col items-center justify-center bg-gray-50 min-h-[92vh] relative'>
                <h1 className='flex justify-center items-center text-4xl font-bold m-4 pt-4'>Cart</h1>
                {cart.items.length > 0 ? (
                    <ul className='flex flex-col w-[60%]'>
                        {cart.items.map(item => (
                            <li key={item.productId._id} className='p-4'>
                                <div className='flex justify-between border-gray-500 border-2 rounded-md'>
                                    <CardHeader>
                                        <Image
                                            src={item.productId.imageURL}
                                            width={100}
                                            height={100}
                                            sizes='100vw'
                                            style={{ height: "100px" }}
                                            alt={item.productId.name}
                                        />
                                    </CardHeader>
                                    <CardContent>
                                        <p className='font-bold'>{item.productId.name}</p>
                                        <p>{item.productId.description}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <div className='flex flex-col justify-center items-center gap-5'>
                                            <p className='font-bold'>Rs. {item.productId.price}</p>
                                            <Button className='w-20' onClick={() => removeFromCart(item.productId._id)}><RiDeleteBin6Line /></Button>
                                        </div>
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