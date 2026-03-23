import React, { useState } from 'react'
import hero_back from '../../assets/hero-back.png'
import hero_img from '../../assets/hero-img1.png'
import {Link} from 'react-scroll'


const Hero = () => {

  return (
    <section className="relative w-full overflow-hidden">
      {/* Main Container: 
          - min-h-screen ensures it fills the viewport but expands if content grows.
          - bg-center & bg-cover ensure the background pizza image stays positioned.
      */}
      <div 
        className="min-h-screen bg-cover bg-center flex items-center justify-center pt-20 pb-12"
        style={{ backgroundImage: `url(${hero_back})`, backgroundColor: '#1a1a1a' }}
      >
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* IMAGE BOX: Moves to top on mobile, left on desktop */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-1">
            <img 
              className="w-full max-w-[400px] md:max-w-[550px] lg:max-w-full h-auto object-contain transition-transform duration-500 hover:scale-105" 
              src={hero_img} 
              alt="Delicious Pizza"
            />
          </div>

          {/* TEXT BOX: Centered on mobile, left-aligned on desktop */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left text-white order-2 lg:order-2">
            <h1 className="text-5xl md:text-6xl xl:text-8xl font-black tracking-tighter leading-none mb-4">
              PIZZA <span className="text-[#ffcc00]">TOWN</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-200">
              Witness the flavour of real pizza
            </h2>
            
            <p className="text-base md:text-lg mb-10 max-w-xl text-gray-300 leading-relaxed">
              From our stone oven to your doorstep, we bring you the authentic taste of tradition. 
              Every slice is crafted with hand-stretched dough and premium toppings. 
              Order now and join the thousands of pizza lovers who call us their favorite slice.
            </p>

            <Link to="Contact" spy={true} smooth={true} offset={-90} duration={1000}>
              <button className="group relative flex items-center gap-4 bg-[#ffcc00] hover:bg-[#ffe066] text-[#900000] px-8 py-4 rounded-2xl font-black text-lg transition-all duration-300 shadow-xl shadow-black/40 active:scale-95">
                ORDER NOW
                <div className="flex justify-center items-center w-8 h-8 rounded-full border-2 border-[#900000] animate-bounce group-hover:bg-[#900000] group-hover:text-[#ffcc00] transition-colors">
                  <i className="fa-solid fa-arrow-down text-sm"></i>
                </div>
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero