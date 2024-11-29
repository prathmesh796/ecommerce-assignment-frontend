"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,

} from "@/components/ui/card"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import Head from 'next/head';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [categories, setCategories] = useState(['Electronics', 'Fashion', 'Home Appliances', 'Home Office']);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get(`http://localhost:5000/api/products/products`, { params: { page, limit: 12, category: selectedCategory, minPrice, maxPrice } });
            setProducts(res.data.products);
            setTotalPages(res.data.totalPages);
        };
        fetchProducts();
    }, [page, selectedCategory, minPrice, maxPrice]);

    return (
        <div className="flex items-center justify-center min-h-[92vh]">
            <Head>
                <title>ShopEase - Our Products</title>
                <meta name="description" content="A-to-Z products avaliable on our website store. Discover a world of amazing products at your fingertips. Start your shopping journey with us today!" />
                <meta property="og:title" content="ShopEase - Our Products" />
                <meta property="og:description" content="A-to-Z products avaliable on our website store. Discover a world of amazing products at your fingertips. Start your shopping journey with us today!" />
                <meta property="og:image" content="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=100&h=100" />
            </Head>
            <main className='w-full flex-col items-center justify-center bg-gray-50 min-h-[92vh] relative'>
                <h1 className='flex justify-center items-center text-4xl font-bold m-4 pt-4'>Products</h1>

                <div className="m-4">
                    <label htmlFor="category" className="mr-2">Filter by Category:</label>
                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border rounded p-2"
                    >
                        <option value="">All Categories</option>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                <div className="m-4">
                    <label htmlFor="minPrice" className="mr-2">Min Price:</label>
                    <input
                        type="number"
                        id="minPrice"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="border rounded p-2 mr-4"
                    />

                    <label htmlFor="maxPrice" className="mr-2">Max Price:</label>
                    <input
                        type="number"
                        id="maxPrice"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="border rounded p-2"
                    />
                </div>

                <ul className='grid grid-cols-4 gap-4 px-60 py-5 mb-10'>
                    {products.map(product => (
                        <li key={product._id}>
                            <Card>
                                <CardHeader>
                                    <Image
                                        src={product.imageURL}
                                        width={100}
                                        height={100}
                                        sizes='100vw'
                                        style={{ height: "100px" }}
                                        alt={product.name}
                                        priority
                                        
                                    />
                                </CardHeader>
                                <CardContent>
                                    <p className='truncate text-ellipsis overflow-hidden w-44'>{product.name}</p>
                                    <p className='font-bold'>Rs. {product.price}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button onClick={() => addToCart(product)}>Add to Cart</Button>
                                </CardFooter>
                            </Card>
                        </li>
                    ))}
                </ul>

                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                                disabled={page === 1}
                            />
                        </PaginationItem>

                        {page > 2 && (
                            <PaginationItem>
                                <PaginationLink
                                    href="#"
                                    onClick={() => setPage(1)}
                                >
                                    1
                                </PaginationLink>
                            </PaginationItem>
                        )}

                        {page > 3 && <PaginationEllipsis />}

                        {page > 1 && (
                            <PaginationItem>
                                <PaginationLink
                                    href="#"
                                    onClick={() => setPage(page - 1)}
                                >
                                    {page - 1}
                                </PaginationLink>
                            </PaginationItem>
                        )}

                        <PaginationItem>
                            <PaginationLink
                                href="#"
                                className="font-bold bg-yellow-400"
                            >
                                {page}
                            </PaginationLink>
                        </PaginationItem>

                        {page < totalPages && (
                            <PaginationItem>
                                <PaginationLink
                                    href="#"
                                    onClick={() => setPage(page + 1)}
                                >
                                    {page + 1}
                                </PaginationLink>
                            </PaginationItem>
                        )}

                        {page < totalPages - 2 && <PaginationEllipsis />}

                        {page < totalPages - 1 && (
                            <PaginationItem>
                                <PaginationLink
                                    href="#"
                                    onClick={() => setPage(totalPages)}
                                >
                                    {totalPages}
                                </PaginationLink>
                            </PaginationItem>
                        )}

                        <PaginationItem>
                            <PaginationNext
                                onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={page === totalPages}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>

            </main>

        </div>
    );
};

export default Products;