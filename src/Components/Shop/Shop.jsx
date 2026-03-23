import React from 'react'
import app from '../../assets/appDownload.png'
import playStore from '../../assets/playStore.png'
import shop from '../../assets/shop1.png'

const Shop = () => {
  return (
    <section id="Shop" className='Shop bg-[#ffcc00] py-12 md:py-20 px-6 md:px-12 lg:px-20'>
      {/* - flex-col for mobile, lg:flex-row for desktop 
          - items-center ensures everything looks balanced when stacked
      */}
      <div className='max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12'>
        
        {/* TEXT CONTENT 
            - w-full on mobile, lg:w-[55%] on desktop
            - text-center on mobile, lg:text-left on desktop
        */}
        <div className='flex flex-col w-full lg:w-[55%] items-center lg:items-start text-center lg:text-left'>
            <h2 className='font-bold text-[#6f2f03] tracking-widest text-sm md:text-base mb-2'>
              DOWNLOAD MOBILE APP AND
            </h2>
            
            <h1 className='font-black bg-clip-text text-transparent bg-gradient-to-r from-[#281702] to-[#7d3b0f] text-3xl md:text-5xl lg:text-[50px] leading-tight mb-6 uppercase'>
              AVAIL MORE EXCITING DISCOUNTS
            </h1>
            
            <p className='text-[#6f2f03] text-sm md:text-base lg:text-lg leading-relaxed max-w-xl'>
              Join our growing community of pizza lovers to unlock lightning-fast ordering, 
              real-time delivery tracking, and exclusive rewards you won’t find anywhere else. 
              Download today to turn every bite into points and every meal into a deal.
            </p>
            
            {/* APP STORE BUTTONS 
                - flex-col on small phones, flex-row on larger ones
            */}
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto'>
                <img 
                  className='h-14 md:h-16 w-auto rounded-xl cursor-pointer hover:scale-105 transition-transform shadow-lg shadow-[#6f2f03]/20' 
                  src={app} 
                  alt="App Store"
                />
                <img 
                  className='h-14 md:h-16 w-auto rounded-xl cursor-pointer hover:scale-105 transition-transform shadow-lg shadow-[#6f2f03]/20' 
                  src={playStore} 
                  alt="Play Store"
                />
            </div>
        </div>

        {/* IMAGE CONTAINER 
            - Hidden on extra small phones (optional) or scaled down
        */}
        <div className='w-full lg:w-[40%] flex justify-center lg:justify-end'>
            <img 
              className='h-auto w-full max-w-[200px] md:max-w-[350px] lg:max-w-full drop-shadow-2xl animate-float' 
              src={shop} 
              alt="Mobile App Preview"
            />
        </div>

      </div>
    </section>
  )
}

export default Shop