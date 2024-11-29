"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { toast } from 'sonner';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter()

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', { email, password }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.status === 201) {
                toast('New user Created')
                router.push('/login');
            } else if (response.status === 400) {
                toast('User already exists')
                setError('User already exists');
            }
        } catch (error) {
            // Check if error response exists and set a specific error message
            if (error.response) {
                if (error.response.status === 400) {
                    setError('User already exists');
                } else {
                    setError('Signup failed. Please try again.');
                }
            } else {
                setError('Signup failed. Please try again.');
            }
            console.error('Signup failed', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-[92vh]">
            <main className='flex-grow flex items-center justify-center bg-gray-50'>
                <div className='border border-black p-10 rounded-md w-50'>
                    <h1 className='flex text-3xl font-bold pb-5 justify-center'>Signup</h1>
                <form onSubmit={handleSignup} className="flex flex-col space-y-4">
                    <input
                        className='text-black p-2 border rounded'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        className='text-black p-2 border rounded'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    {error && <p className="text-red-500">{error}</p>}
                    <Button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Signing up...' : 'Signup'}
                    </Button>

                    <Link href='/login' className='flex justify-center items-center text-sm'>Login</Link>
                </form>
                </div>
                
            </main>
        </div>
    );
};

export default Signup;