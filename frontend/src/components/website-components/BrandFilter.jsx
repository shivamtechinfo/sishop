import React from 'react'

export default function BrandFilter({ brands }) {
    return (
        <div>
            <div className="bg-white p-4 rounded-xl shadow border space-y-4">
                <h2 className="text-lg font-bold">BRAND FILTER</h2>
                <button className="w-full border px-3 py-2 rounded-md font-medium text-sm hover:bg-gray-100">
                    All Brands
                </button>
                <div className="text-sm space-y-1 pl-2">
                    <p className="text-gray-700">Cell Phones & Tablets</p>
                    <ul className="space-y-1 pl-3 text-gray-500">
                        {
                            brands && brands.map(brand => (
                                <li  key={brand._id} className="cursor-pointer hover:text-black">{brand.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
