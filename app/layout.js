import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { CartProvider } from "@/context/CartContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ShopEase",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="mx-auto min-h-[92vh]">
          <CartProvider>
            {children}
          </CartProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
