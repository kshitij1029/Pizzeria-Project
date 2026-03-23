import React from 'react'
import Card from './Card'


const Menu = ({ addToCart, products }) => {
  return (
    <div id='Menu' className='Menu flex flex-col items-center px-4 md:px-8 pt-12 md:pt-20'>
        {/* Responsive Heading: Scaled based on screen size */}
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#900000] to-[#e51010] text-center'>
          OUR EXCLUSIVE MENU
        </h1>
        
        {/* Subheadings: Adjusted for mobile readability */}
        <p className='text-lg md:text-xl lg:text-xl font-semibold mt-4 text-center lg:text-slate-700'>
          Enjoy our wide range of Pizza's and other Snacks!!
        </p>
        
        <p className='text-sm md:text-base text-slate-500 mt-2 text-center max-w-2xl px-4'>
          Savor the perfect blend of fresh ingredients and bold flavors in every handcrafted bite.
        </p>

        <section className="w-full py-10 px-2 md:px-10">
          {/* Grid System:
            - 1 column on extra small phones
            - 2 columns on small/medium (sm)
            - 3 columns on large (lg)
            - 4 columns on extra large (xl)
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-items-center">
            {products.map((product) => (
              <Card 
                key={product.id}
                image={product.image}
                head={product.name}
                ingredients={product.ing}
                price={product.price}
                addToCart={() => addToCart(product)} 
              />
            ))}
          </div>
        </section>
    </div>
  )
}

export default Menu