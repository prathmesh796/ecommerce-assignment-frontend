"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/navbar';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get(`/api/products?page=${page}&limit=10`);
            setProducts(res.data.products);
            setTotalPages(res.data.totalPages);
        };
        fetchProducts();
    }, [page]);

    return (
        <div>
            <Navbar/>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
            <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
        </div>
    );
};

export default Products;