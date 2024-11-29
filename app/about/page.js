import React from 'react'
import Head from 'next/head';

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
            <Head>
                <title>About Us - ShopEase</title>
                <meta name="description" content="Learn more about Your Store Name, our mission, values, and the products we offer." />
            </Head>

            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">Welcome to Your Store Name!</h1>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl mb-6 text-center max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl">
                At ShopEase Name, we believe that shopping should be an enjoyable and seamless experience. Founded in 2024, our mission is to provide you with a curated selection of high-quality products that cater to your everyday needs, all while ensuring exceptional customer service.
            </p>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-center">Our Story</h2>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl mb-6 text-center max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl">
            ShopEase started as a small venture, driven by a passion for ecommerce. What began as a simple idea has grown into a thriving online marketplace, where we connect customers with the best products from around the globe.
            </p>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-center">Our Values</h2>
            <ul className="list-disc list-inside mb-6 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl">
                <li className="text-sm sm:text-md md:text-lg lg:text-xl">Quality: We stand by the quality of our products. Each item in our store is carefully selected and tested to ensure it meets our high standards.</li>
                <li className="text-sm sm:text-md md:text-lg lg:text-xl">Customer Satisfaction: Your satisfaction is our top priority. We are committed to providing excellent customer service and support, making your shopping experience as smooth as possible.</li>
                <li className="text-sm sm:text-md md:text-lg lg:text-xl">Sustainability: We believe in responsible shopping.</li>
                <li className="text-sm sm:text-md md:text-lg lg:text-xl">Community: We are proud to be part of a vibrant community. We support local artisans and businesses, helping to promote creativity and craftsmanship.</li>
            </ul>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-center">What We Offer</h2>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl mb-6 text-center max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl">
                At ShopEase, you’ll find a wide variety of products, including:
            </p>
            <ul className="list-disc list-inside mb-6 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl">
                <li className="text-sm sm:text-md md:text-lg lg:text-xl">Electronics: A wide range of computers and other electronic devices are avaliable at our store.</li>
                <li className="text-sm sm:text-md md:text-lg lg:text-xl">Fashion: From causal to formal we can provide for every occasion.</li>
                <li className="text-sm sm:text-md md:text-lg lg:text-xl">Home Appliances: Day-to-dat housing equipments and devices, including electrical.</li>
            </ul>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-center">Join Us on Our Journey</h2>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl mb-6 text-center max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl">
                We invite you to explore our online store and discover the perfect products for you and your loved ones. Whether you’re shopping for yourself or looking for the ideal gift, we are here to help you find exactly what you need.
            </p>
        </div>
  )
}

export default page
