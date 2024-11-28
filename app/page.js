import { Button } from "@/components/ui/button";
import Link from "next/link";
import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[92vh]">
      <Head>
      <title>ShopEase</title>
        <meta name="description" content="Your go to ecommerce website store buy varity of products. Discover a world of amazing products at your fingertips. Start your shopping journey with us today!" />
        <meta property="og:title" content="ShopEase" />
        <meta property="og:description" content="Your go to ecommerce website store buy varity of products. Discover a world of amazing products at your fingertips. Start your shopping journey with us today!" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=100&h=100" />
      </Head>
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to ShopEase</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Discover a world of amazing products at your fingertips. Start your shopping journey with us today!
          </p>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </main>

      
    </div>
  );
}
