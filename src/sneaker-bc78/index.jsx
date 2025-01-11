import React, { useState } from 'react'
import Cart from './cart'
import Product from './product'
import "flowbite/dist/flowbite.min.js"
import Details from './details'

export default function Sneaker() {
    const [data, setData] = useState([
        {
          "id": 1,
          "name": "Adidas Prophere",
          "alias": "adidas-prophere",
          "price": 350,
          "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          "quantity": 995,
          "image": "data:image/jpeg;base64,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"
        },
        {
          "id": 2,
          "name": "Adidas Prophere Black White",
          "alias": "adidas-prophere-black-white",
          "price": 450,
          "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          "quantity": 990,
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg51QzG-64kVbJZk4W5OGhUGZ4ixzTkKXzjg&s"
        },
        {
          "id": 3,
          "name": "Adidas Prophere Customize",
          "alias": "adidas-prophere-customize",
          "price": 375,
          "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          "quantity": 415,
          "image": "https://product.hstatic.net/200000355547/product/1_e5901ac3-33e9-4dba-a294-d3543cff432d_540x_fdc01224d3a444c48dd48e9c27c8cf17.jpg"
        },
        {
          "id": 4,
          "name": "Adidas Super Star Red",
          "alias": "adidas-super-star-red",
          "price": 465,
          "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          "quantity": 542,
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE4zFfmmqj3D9oIo2QO_-MOk7xYqGv91soWA&s"
        },
        {
          "id": 5,
          "name": "Adidas Swift Run",
          "alias": "adidas-swift-run",
          "price": 550,
          "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          "quantity": 674,
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdxgvblmS3xBUXrv3b5u73iCfJA5PPuTBhQg&s"
        },
        {
          "id": 6,
          "name": "Adidas Tenisky Super Star",
          "alias": "adidas-tenisky-super-star",
          "price": 250,
          "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          "quantity": 456,
          "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/095c778f23ef49799838aae700d28a41_9366/Giay_Superstar_DJen_EG4959_07_standard.jpg"
        },
        {
          "id": 7,
          "name": "Adidas Ultraboost 4",
          "alias": "adidas-ultraboost-4",
          "price": 450,
          "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          "quantity": 854,
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpUu7681ql0FDQF639xsZDjRUvyUXh0Zl8EQ&s    "
        },
        {
          "id": 8,
          "name": "Adidas Yeezy 350",
          "alias": "adidas-yeezy-350",
          "price": 750,
          "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          "quantity": 524,
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDOLA34tP6jAAXCem-85lEnMbjWtVrCahOeg&s"
        },
        {
          "id": 9,
          "name": "Nike Adapt BB",
          "alias": "nike-adapt-bb",
          "price": 630,
          "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
          "shortDescription": "Paul George is the rare high-percentage shooter",
          "quantity": 599,
          "image": "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_363,c_limit/9984b026-9ed7-47ec-a9de-086f24ec9d39/nike-launches-adapt-bb-a-self-lacing-performance-basketball-shoe.jpg"
        },
        {
          "id": 10,
          "name": "Nike Air Max 97",
          "alias": "nike-air-max-97",
          "price": 650,
          "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
          "shortDescription": "Paul George is the rare high-percentage shooter",
          "quantity": 984,
          "image": "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_363,c_limit/9984b026-9ed7-47ec-a9de-086f24ec9d39/nike-launches-adapt-bb-a-self-lacing-performance-basketball-shoe.jpg"
        },
        {
          "id": 11,
          "name": "Yezzy",
          "alias": "yezzy-gray-v2",
          "price": 450,
          "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
          "shortDescription": "Paul George is the rare high-percentage shooter",
          "quantity": 875,
          "image": " https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Steel-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=690&h=520&q=57&dpr=2&trim=color&updated_at=1710191357   "
        },
        {
          "id": 12,
          "name": "Nike Air Max 270 React",
          "alias": "nike-air-max-270-react",
          "price": 750,
          "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
          "shortDescription": "Paul George is the rare high-percentage shooter",
          "quantity": 445,
          "image": "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_363,c_limit/9984b026-9ed7-47ec-a9de-086f24ec9d39/nike-launches-adapt-bb-a-self-lacing-performance-basketball-shoe.jpg"
        } 
      ]);
      const [cart, setCart] = useState([])
      const [selecProduct, setSelecProduct] = useState(null);
      const findIndexProduct = (id) => cart.findIndex((product)=> product.id === id)
      const handleToCart = (data)=>{
        const productToCart = {
            id: data.id,
            name:data.name,
            image: data.image,
            price:data.price,
            quantity: 1
        };
        console.log(productToCart)
        const newCart = [...cart];
        setCart(newCart);
         const index = findIndexProduct(productToCart.id);
         if(index !== -1 ){
            newCart[index].quantity += 1;
         }else
         newCart.push(productToCart)
        

      }
  return (
    <div>
        <div className='mb-3'>
            <h1 className='font-semibold'>1.MINUTE SHOP</h1>
            <Cart cart={cart}/>
        </div>

        <div className='grid grid-cols-4 grid-rows-4 gap-3'>
            {data.map((item)=>{
                return <Product key={item.id}
                product={item}
                onViewDetail={setSelecProduct}
                onToCart={handleToCart}
                />
            })}
            
            
        </div>
        <Details product={selecProduct} onClose={()=>{setSelecProduct(null)}}/>
            
    </div>
  )
}
