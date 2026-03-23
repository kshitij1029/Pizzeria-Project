import React from 'react'
import Sliding from './Sliding'


const Discount = () => {
  return (
    <section id="Discount" className='Discount flex flex-col justify-center items-center min-h-[500px] md:min-h-[640px] py-10 px-4 mb-3 overflow-hidden'>
        
        {/* Header Container: Centered for all screens */}
        <div className='flex flex-col items-center text-center mb-10'>
          
          {/* Responsive Heading: Larger on desktop, perfectly sized for mobile */}
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#900000] to-[#e51010] uppercase tracking-tight'>
            LATEST DISCOUNTS
          </h1>
          
          {/* Responsive Subtext: Added max-width to prevent long lines on wide screens */}
          <p className='text-sm md:text-lg lg:text-xl font-medium mt-3 max-w-2xl text-slate-700'>
            Being Pocket Friendly? Avail these before it's too late. <br className="hidden md:block" />
            Offers worth giving a shot!!
          </p>
          
        </div>

        {/* Sliding Component: 
            W-full ensures it takes the available width for the slider 
        */}
        <div className="w-full max-w-7xl mx-auto px-2 md:px-6">
          <Sliding />
        </div>

    </section>
  )
}

export default Discount