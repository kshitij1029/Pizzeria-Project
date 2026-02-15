import React from 'react'
import Card from './Card'


const Menu = ({addToCart, products}) => {
  return (
    <div className='Menu flex flex-col items-center px-8 pt-8'>
        <h1 className='text-[28px] font-bold bg-clip-text text-transparent bg-linear-to-r from-[#900]  to-[#f00]'>OUR EXCLUSIVE MENU</h1>
        <p className='text-[20px]'>Enjoy our vide range of Pizza's and other Snacks!!</p>
        <p>Savor the perfect blend of fresh ingredients and bold flavors in every handcrafted bite.</p>
        <section className="p-10">
          <div className="flex flex-wrap justify-center">
            {products.map((product) => (
              <Card 
                key={product.id}
                image={product.image}
                head={product.name}
                ingredients={product.ing}
                price={product.price}
                // Trigger the function with this specific product's data
                addToCart={() => addToCart(product)} 
              />
            ))}
          </div>
        </section>
    </div>
  )
}

export default Menu