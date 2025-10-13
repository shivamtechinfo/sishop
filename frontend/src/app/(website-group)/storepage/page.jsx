import ProductCard from '@/components/website-components/ProductCard'
import { getProducts } from '@/library/api-calls'
import React from 'react'

export default async function page() {
    const productJSON = await getProducts(null)
    const products = productJSON.data
    return (
        <div className='grid grid-cols-4 gap-4'>
            {
                products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    )
}
