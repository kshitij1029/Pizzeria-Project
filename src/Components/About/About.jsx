import React from 'react'
import about_img from '../../assets/about-img.png'
import Rating from './Rating'
import Services from './Services'


const About = () => {
  return (
    <>
      <section id="About" className="w-full overflow-hidden bg-white">
        {/* - flex-col for mobile, lg:flex-row for desktop 
            - py-10 md:py-20 for better vertical spacing
            - px-6 instead of px-15 to prevent content from hitting screen edges
        */}
        <div className='flex flex-col lg:flex-row justify-center items-center py-10 md:py-20 px-6 md:px-12 lg:px-20 gap-10 lg:gap-16'>
          
          {/* IMAGE CONTAINER 
              - w-full on mobile, lg:w-1/2 on desktop
          */}
          <div className='w-full lg:w-[45%] flex justify-center'>
            <img 
              className='w-full max-w-[500px] h-auto object-cover rounded-3xl transition-transform duration-500 hover:rotate-2' 
              src={about_img} 
              alt="About Pizza Town"
            />
          </div>

          {/* TEXT CONTENT
              - items-center text-center for mobile
              - lg:items-start lg:text-left for desktop
          */}
          <div className='flex flex-col w-full lg:w-[55%] items-center lg:items-start text-center lg:text-left space-y-6'>
            
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#900000] via-[#e51010] to-[#900000] leading-tight'>
              Dine-in to the Finest
            </h1>

            <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl">
              <p>
                At Pizza Town, we believe that the best memories are made around a table filled with great food 
                and even better company. Our journey began with a simple mission: to create a space where 
                authentic flavors and traditional techniques meet a modern, cozy atmosphere.
              </p>
              
              <p className="hidden sm:block">
                Every pizza that leaves our stone oven is a labor of love, crafted from recipes 
                passed down through generations and perfected for the modern palate.
              </p>

              <p>
                Stepping into our outlet is about more than just grabbing a quick bite; it's about 
                the <strong>'Dine-in to the Finest'</strong> experience we promise every guest. 
                From the aroma of fresh basil to the vibrant energy of our open kitchen, we invite 
                you to sit back, relax, and savor the moment.
              </p>
            </div>

            {/* Rating Component Container */}
            <div className="pt-4 transform scale-110 md:scale-100">
              <Rating />
            </div>
          </div>
        </div>
      </section>

      <Services />
    </>
  );
};

export default About