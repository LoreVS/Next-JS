"use client"
import { useRouter } from "next/navigation";
import ProductCard from "@/app/components/product";
export default function Contacts({params}: {
    params: {
      productID: string
    }
  }) {
    let inputValue:string 
    const router = useRouter()
    const handleClick = (change:number) => () => {
        if(Number(params.productID)+change > 0) {
            router.push("/products/"+ (Number(params.productID) + change))
        }   
    }
    const submitClick = () => {
        console.log(inputValue)
        router.push("/products/" + inputValue)
    }
    return (
      <main className=" bg-slate-50 text-zinc-950 flex-col min-h-screen text-center">
        <div>Info about product {params.productID}</div>
        <div className="flex justify-center mb-8">
          <div>
            <ProductCard>Specs of product {params.productID}</ProductCard>
            <ProductCard>Reviews of product {params.productID}</ProductCard>
          </div>
          <ProductCard>Photo of product {params.productID}</ProductCard>
        </div>

        


        <div className="flex justify-center">
            <button onClick={handleClick(-1)} className="border border-emerald-950 p-4 font-bold rounded hover:border-teal-400">Previous product</button>
            <div className=" block">
                <input onChange={(el) => inputValue = el.target.value} className=" border border-neutral-700"></input>
                <p><button onClick={submitClick} className="border border-emerald-950 p-1 font-bold rounded hover:border-teal-400">submit</button></p>
            </div>
            <button onClick={handleClick(1)} className="border border-emerald-950 p-4 font-bold rounded hover:border-teal-400">Next product</button>
        </div>
      </main>
    );
  }