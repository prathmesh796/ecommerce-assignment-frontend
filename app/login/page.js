"use client"

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUserId, setToken } = useCart();

    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            
            setUserId(res.data.userId); 
            setToken(res.data.token);

            localStorage.setItem('userId', res.data.userId);
            localStorage.setItem('token', res.data.token);

            router.push('/products');

        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (

        <div className="flex flex-col min-h-[92vh]">
            <main className='flex-grow flex items-center justify-center bg-gray-50'>
                <div className='border border-black p-10 rounded-md w-50'>
                    <h1 className='flex text-3xl font-bold pb-5 justify-center'>Login</h1>
                    <form onSubmit={handleLogin} className="flex flex-col space-y-4">
                        <input className='text-black p-2 border rounded' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                        <input className='text-black p-2 border rounded' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                        <Button type="submit">Login</Button>
                    </form>
                </div>

            </main>
        </div>
    );
};

export default Login;