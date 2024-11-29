"use client"

import { Button } from '@/components/ui/button';
import Head from 'next/head';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage('');
        setErrorMessage('');

        try {
            setTimeout(() => {
                setSuccessMessage('Thank you for your message! We will get back to you shortly.');
                setFormData({ name: '', email: '', message: '' });
                setIsSubmitting(false);
            }, 1000);
        } catch (error) {
            setErrorMessage('There was an error submitting your message. Please try again later.');
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <Head>
                <title>Contact Us - Your Store Name</title>
                <meta name="description" content="Get in touch with us for any inquiries or support." />
            </Head>

            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">Contact Us</h1>
            <p className="text-md md:text-lg mb-6 text-center max-w-2xl">
                If you have any questions or need assistance, feel free to reach out to us using the form below or through our contact information.
            </p>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full p-2 text-black rounded ${
                        isSubmitting ? 'bg-gray-400' : ''
                    }`}
                >
                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                </Button>

                {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
                {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}
            </form>

            <div className="mt-8 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact Information</h2>
                <p className="text -lg md:text-xl">You can also reach us at:</p>
                <p className="text-md md:text-lg">Email: support@shopease.com</p>
                <p className="text-md md:text-lg">Phone: (123) 456-7890</p>
            </div>
        </div>
    );
};

export default Contact;
