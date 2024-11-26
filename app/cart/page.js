import { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
    const [cart, setCart] = useState(null);
    const userId = 'USER_ID'; // Replace with actual user ID

    useEffect(() => {
        const fetchCart = async () => {
            const res = await axios.get(`/api/cart/${userId}`);
            setCart(res.data);
        };
        fetchCart();
    }, []);

    const removeItem = async (productId) => {
        await axios.delete('/api/cart/remove', { data: { userId, productId } });
        setCart(prevCart => ({
            ...prevCart,
            items: prevCart.items.filter(item => item.productId._id !== productId),
        }));
    };

    return (
        <div>
            <h1>Cart</h1>
            {cart ? (
                <ul>
                    {cart.items.map(item => (
                        <li key={item.productId._id}>
                            {item.productId.name} - Quantity: {item.quantity}
                            <button onClick={() => removeItem(item.productId._id)}>Remove</button>
                        </li> ))}
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;