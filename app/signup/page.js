"use client";

import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await axios.post('http://localhost:5000/api/auth/signup', { email, password }, {
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then(response => {console.log(response)})
              .catch(error => {
                  console.log(error.response)
              });
            // Redirect to login page or handle successful signup
            // Example: window.location.href = '/login';
        } catch (error) {
            setError('Signup failed. Please try again.');
            console.error('Signup failed', error);
        } finally {
            setLoading(false);
        }
    };

    return (
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
            <button
                type="submit"
                className={`p-2 rounded ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                disabled={loading}
            >
                {loading ? 'Signing up...' : 'Signup'}
            </button>
        </form>
    );
};

export default Signup;