import React from 'react'

export default function Details({product,onClose}) {
    if (!product) return null
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg p-6 w-[500px]">
      <h2 className="text-2xl text-black font-bold mb-4">{product.name}</h2>
      <img src={product.image} alt={product.name} className="w-full h-[200px] object-cover mb-4" />
      <p className="text-gray-700"> Mô tả: {product.description}</p>
      <p className="text-gray-700">Price: {product.price}$</p>

      <div className="flex justify-end mt-4">
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
     
    </div>
  </div>
  )

  
}
