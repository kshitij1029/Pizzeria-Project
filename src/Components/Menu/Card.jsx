import React, { useState } from 'react'

const Card = ({ image, head, ingredients, price, addToCart }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div 
      className='flex flex-col rounded-2xl bg-white shadow-lg shadow-slate-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 w-full max-w-[320px] sm:max-w-[280px] lg:max-w-[300px] overflow-hidden group'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* Image Container with Zoom Effect */}
      <div className="relative overflow-hidden h-52 sm:h-60">
        <img 
          className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110' 
          src={image} 
          alt={head}
        />
        {/* Mobile Price Badge (Optional visual flair) */}
        <div className='absolute top-3 right-3 bg-[#ffcc00] px-3 py-1 rounded-full text-[#900] font-bold text-sm shadow-md md:hidden'>
          Rs. {price}
        </div>
      </div>

      {/* Content Area */}
      <div className='p-4 flex flex-col justify-between flex-grow min-h-[160px]'>
        <div>
          <h1 className='text-lg md:text-xl font-black text-[#900000] leading-tight mb-2'>
            {head}
          </h1>
          <p className='text-slate-500 text-xs md:text-sm line-clamp-2 italic'>
            {ingredients}
          </p>
        </div>

        <div className='mt-4 flex items-center justify-between gap-2'>
          {/* Price Label */}
          <div className='py-2 px-3 bg-[#ffcc002b] border border-[#ffcc00] rounded-lg text-[#900] font-black text-sm md:text-base'>
            Rs. {price}/-
          </div>

          {/* Add to Cart Button:
              - md:opacity-0 & group-hover:opacity-100: Hidden on desktop until hover
              - opacity-100 on mobile: Always visible for touch users
          */}
          <button 
            className={`
              flex items-center gap-2 py-2 px-3 md:px-4 bg-[#900000] hover:bg-black text-white 
              text-[12px] md:text-[14px] font-bold rounded-xl cursor-pointer transition-all duration-300
              ${isHover ? "opacity-100 translate-x-0" : "opacity-100 md:opacity-0 md:translate-x-2"}
            `} 
            onClick={addToCart}
          >
            ADD <span className="hidden sm:inline">TO CART</span>
            <i className="fa-solid fa-basket-shopping text-xs"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card