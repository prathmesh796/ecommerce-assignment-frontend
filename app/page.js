import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex-col justify-center items-center">
        <h1 className="mx-auto text-3xl p-5 font-bold ">welcome to ecommerce website</h1>

        <div className="flex gap-5 m-10 p-2">
        <Link href='/signup'><Button>signup</Button></Link>
        <Link href='/login'><Button>login</Button></Link>
        </div>
        
      </main>

    </>
  );
}
