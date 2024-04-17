"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Products() {
  const router = useRouter()
    return (
      <main className=" bg-slate-50 text-zinc-950 flex-col min-h-screen text-center">
        <div className="text-3xl mb-8">Products</div>
       <Link href="/products/1"><button className="border border-emerald-950 p-4 font-bold rounded hover:border-teal-400">Show products</button></Link> 
      </main>
    );
  }