import ProductCard from '@/components/website-components/ProductCard'
import { getProducts } from '@/library/api-calls'
import React from 'react'

export default async function page({searchParams}) {
   await console.log(searchParams, "kya hai searchParams me");
    
    const brand = searchParams.brand ?? null
    const color = searchParams.color ?? null
    const productJSON = await getProducts(null, null,  brand, color)
    const products = productJSON.data
    
   

    
    
    return (
        <div className='grid grid-cols-4 gap-4'>
            {
                products.map((product) => (
                    <ProductCard key={product._id}  product={product} />
                ))
            }
        </div>
    )
}
