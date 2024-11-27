"use client"

import { useCart } from '@/context/CartContext';

const Cart = () => {
    const { cart, removeFromCart } = useCart(); 
    
    return (
        <div>
            <h1>Cart</h1>
            {cart.items.length > 0 ? (
                <ul>
                    {cart.items.map(item => (
                        <li key={item.productId._id}>
                            {item.productId.name} - Quantity: {item.quantity}
                            <button onClick={() => removeFromCart(item.productId._id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;