import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center pb-6 bg-white'>
        {/* - Changed to a grid: 1 column on mobile, 2 on tablet, 4 on desktop
          - Added gap-10 for breathing room when stacked
          - Added px-6 to prevent content touching screen edges
        */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-10 lg:gap-4 p-8 md:p-12 lg:p-16 border-t border-slate-100'>
          
          {/* LOCATION */}
          <div className='flex flex-col items-center text-center'>
            <h2 className='heading text-[#900] font-black mb-4 uppercase tracking-wider'>LOCATION</h2>
            <div className="space-y-1">
              <p className='text-slate-600 text-sm md:text-base'>Krishna Market, 25-foota Road</p>
              <p className='text-slate-600 text-sm md:text-base'>Near Adarsh Public School, Shyam Enclave</p>
              <p className='text-slate-600 text-sm md:text-base'>Najavgarh, New Delhi-43</p>
            </div>
          </div>

          {/* WORKING HOURS */}
          <div className='flex flex-col items-center text-center'>
            <h2 className='heading text-[#900] font-black mb-4 uppercase tracking-wider'>WORKING HOURS</h2>
            <div className="space-y-1">
              <p className='text-slate-600 text-sm md:text-base'>Mon-Fri : 9:00AM - 8:00PM</p>
              <p className='text-slate-600 text-sm md:text-base'>Saturday : 11:00AM - 10:00PM</p>
              <p className='text-slate-600 text-sm md:text-base'>Sunday : 11:00AM - 10:00PM</p>
            </div>
          </div>

          {/* ORDER NOW */}
          <div className='flex flex-col items-center text-center'>
            <h2 className='heading text-[#900] font-black mb-4 uppercase tracking-wider'>ORDER NOW</h2>
            <p className='text-slate-600 text-sm md:text-base break-all px-4'>connect.kshitijjha@gmail.com</p>
            <p className='text-xl font-black text-[#ffcc00] mt-2 drop-shadow-sm'>+91 999-888-7777</p>
          </div>

          {/* FOLLOW US */}
          <div className='flex flex-col items-center text-center'>
            <h2 className='heading text-[#900] font-black mb-4 uppercase tracking-wider'>FOLLOW US</h2>
            <div className='flex gap-4'>
              <i className="text-2xl transition-all duration-300 text-slate-400 hover:text-[#1877F2] hover:scale-125 cursor-pointer fa-brands fa-facebook"></i>
              <i className="text-2xl transition-all duration-300 text-slate-400 hover:text-[#FF0000] hover:scale-125 cursor-pointer fa-brands fa-youtube"></i>
              <i className="text-2xl transition-all duration-300 text-slate-400 hover:text-[#E4405F] hover:scale-125 cursor-pointer fa-brands fa-instagram"></i>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR
            - Added text-center for mobile wrapping
            - Responsive text size
        */}
        <div className='w-full px-6 pt-6 border-t border-slate-50 text-center text-slate-500 text-[12px] md:text-sm'>
          <p className="mb-2">
            © 2026 <span className='text-[#900] font-bold'>PIZZA TOWN</span> All Rights Reserved
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 opacity-80">
            <a href="#" className="hover:text-[#900] transition-colors">About Us</a>
            <span>|</span>
            <a href="#" className="hover:text-[#900] transition-colors">Terms Of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-[#900] transition-colors">Privacy Policy</a>
          </div>
        </div>
    </footer>
  )
}

export default Footer