import React from 'react'

export default function ColorFilter() {
    return (
        <div>
            <div className="bg-white p-4 rounded-xl shadow border space-y-4">
                <h2 className="text-lg font-bold">COLOR FILTER</h2>
                <button className="w-full border px-3 py-2 rounded-md font-medium text-sm hover:bg-gray-100">
                    All Colors
                </button>
                <div className="text-sm space-y-1 pl-2">
                    <p className="text-gray-700">Available Colors</p>
                    <ul className="space-y-1 pl-3 text-gray-500">
                        <li className="cursor-pointer hover:text-black">Black</li>
                        <li className="cursor-pointer hover:text-black">White</li>
                        <li className="cursor-pointer hover:text-black">Blue</li>
                        <li className="cursor-pointer hover:text-black">Red</li>
                        <li className="cursor-pointer hover:text-black">Green</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
