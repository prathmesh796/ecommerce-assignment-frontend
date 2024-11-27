import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[92vh]">
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
