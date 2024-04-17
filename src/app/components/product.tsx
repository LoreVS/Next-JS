const ProductCard = ({children}: {children:React.ReactNode  }) => {
    return (
        <div className="border border-zinc-900 max-h-[40%] min-w-[35%] min-h-[250px] ml-12 flex items-center justify-center shadow-lg px-32">{children}</div>
    )
}

export default ProductCard