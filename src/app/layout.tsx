"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { link } from "fs";

const inter = Inter({ subsets: ["latin"] });


const navLinks = [
  {name:"Products",href:"/products"},
  {name:"Contacts",href:"/contacts"}
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname()
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" items-center justify-end flex min-w-screen h-16 text-stone-100">
          <Link href="/" className="mr-14">Home</Link>
          {
            navLinks.map((link) => {
              const isActive = pathName.startsWith(link.href)
              return(
                <Link href={link.href} className={isActive ? "mr-14 text-blue-500" : "mr-14"}>{link.name}</Link>
              )
            }

            )
          }
        </div>
        {children}
        </body>
    </html>
  );
}
