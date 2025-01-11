import React from 'react'

export default function Cart({cart}) {
    const totalQuantity = cart.reduce((total,product)=> total + product.quantity, 0);
    const totalPrice = cart.reduce((total,product)=> total + product.price * product.quantity, 0)
    const renderCart = () =>{
        return cart.map((product)=>{
            return (
                <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.id}
                </th>
                <td className="px-6 py-4">
                    <img className="w-full w-20" src= {product.image} alt="" />
                </td>
                <td className="px-6 py-4">
                    {product.name}
                </td>
                <td className="px-6 py-4">
                    {product.quantity}
                </td>
                <td className="px-6 py-4">
                    {product.price * product.quantity}
                </td>
                
            </tr>
            )
        })
    }
  return (
<div>
  <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Cart {totalQuantity}
  </button>
  {/* Main modal */}
  <div id="default-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-2xl max-h-full">
      {/* Modal content */}
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        {/* Modal header */}
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Terms of Service
          </h3>
          <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* Modal body */}
        <div className="p-4 md:p-5 space-y-4">
         

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                    Mã sản phẩm
                </th>
                <th scope="col" className="px-6 py-3">
                    Hình ảnh
                </th>
                <th scope="col" className="px-6 py-3">
                    Tên sản phẩm
                </th>
                <th scope="col" className="px-6 py-3">
                    Số lượng
                </th>
                <th scope="col" className="px-6 py-3">
                    Giá
                </th>
                
            </tr>
        </thead>
        <tbody>

            {renderCart()}
            
            
            
        </tbody>
    </table>
</div>
<p className='text-right text-lg font-bond'>
    Tổng số tiền: {totalPrice}$

</p>

        </div>
        {/* Modal footer */}
        <div className="relative  p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button data-modal-hide="default-modal" type="button" className="absolute top-2 right-2 py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Close</button>
          <button data-modal-hide="default-modal" type="button" className=" py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border   hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-blue-500 dark:border-gray-600 dark:hover:text-white ">Thanh Toán</button>
          
        </div>
        
      </div>
    </div>
  </div>
</div>

  )
}
