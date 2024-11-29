import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from 'sonner';

export const metadata = {
  title: "ShopEase",
  description: "Your go to ecommerce website store buy varity of products. Discover a world of amazing products at your fingertips. Start your shopping journey with us today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="mx-auto min-h-[92vh]">
          <CartProvider>
            {children}
            <Toaster />
          </CartProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
