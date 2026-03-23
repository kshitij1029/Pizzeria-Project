import React from 'react'
import contact from '../../assets/contact.png'
import contact_back from '../../assets/contact-back2.png'

const Contact = () => {
  return (
    <section 
      id='Contact' 
      className='Contact flex justify-center items-center p-6 md:p-12 bg-cover bg-center min-h-[500px] overflow-hidden' 
      style={{backgroundImage: `url(${contact_back})` || 'none'}}
    >
        {/* - Changed w-[60%] to w-full with a max-width for desktop 
          - Added px-4 to prevent text from touching screen edges on mobile
        */}
        <div className='flex flex-col items-center w-full max-w-4xl px-4'>
          
          <h1 className='font-black text-cyan-900 text-center leading-tight mt-5 text-3xl md:text-5xl lg:text-6xl drop-shadow-sm'>
            DELIVERY IN 30 MIN !!
          </h1>
          
          <p className='text-center mt-6 text-sm md:text-base lg:text-lg text-slate-800 leading-relaxed max-w-2xl'>
            Hunger can't wait, and neither do we. Our dedicated delivery fleet is always on standby to ensure your favorite hand-stretched pizzas and snacks reach your doorstep in 30 minutes or less. Fresh, hot, and fast—just the way a Pizza Town slice should be.
          </p>
          
          <button className='bg-[#e81010] px-8 py-4 mt-8 rounded-xl text-white font-black flex items-center gap-3 cursor-pointer shadow-lg shadow-black/20 hover:scale-110 active:scale-95 transition-all duration-300 uppercase tracking-wide'>
            <i className="fa-solid fa-phone"></i>
            CALL: 999-888-7777
          </button>

          {/* - Replaced h-60 w-75 with responsive sizing 
            - Used h-auto to maintain aspect ratio
          */}
          <div className='mt-10'>
            <img 
              className='h-auto w-full max-w-[300px] md:max-w-[400px] animate-pizzaslide drop-shadow-xl' 
              src={contact} 
              alt="Delivery Bike"
            />
          </div>
          
        </div>
    </section>
  )
}
export default Contact