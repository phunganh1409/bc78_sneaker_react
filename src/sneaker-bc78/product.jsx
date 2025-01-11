import React from 'react'

export default function Product({product,onViewDetail,onToCart}) {
  return (
    <div className='w-full border border-input rounded-lg p-2 space-y-4 '>
        <img className='w-full h-[200px] object-cover' src={product.image} alt="sneaker" />
        <h3 className='text-white rounded-lg p-3 font-semibold'>{product.name}</h3>
        <div className='space-x-3'>
            <button className='bg-gray-500 text-black' onClick={()=>{onViewDetail(product)}}>
                Mô tả
            </button>
            <button className='bg-white text-black' onClick={()=>{onToCart(product)}}>Thêm giỏ hàng</button>
        </div>
        
        

    </div>
  )
}
