import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center pb-3'>
        <div className='flex w-full justify-evenly items-baseline p-8'>
          <div className='flex flex-col items-center'>
            <h2 className='heading'>LOCATION</h2>
            <p className='text-slate-700'>Krishna Market,25-foota Road</p>
            <p className='text-slate-700'>Near Adarsh Public School, Shyam Enclave</p>
            <p className='text-slate-700'>Najavgarh, New Delhi-43</p>
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='heading'>WORKING HOURS</h2>
            <p className='text-slate-700'>Mon-Fri : 9:00AM - 8:00PM</p>
            <p className='text-slate-700'>Saturday : 11:00AM - 10:00PM</p>
            <p className='text-slate-700'>Sunday : 11:00AM - 10:00PM</p>
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='heading'>ORDER NOW</h2>
            <p className='text-slate-700'>connect.kshitijjha@gmail.com</p>
            <p className='text-[19px] font-semibold text-[#ffcc00]'>+91 999-888-7777</p>
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='heading'>FOLLOW US</h2>
            <div>
              <i className="text-2xl  hover:scale-115 hover:transition-[0.5s] text-slate-400 hover:text-slate-900 cursor-pointer fa-brands fa-facebook"></i>
              <i className="text-2xl ml-2 hover:scale-115 hover:transition-[0.5s] text-slate-400 hover:text-slate-900 cursor-pointer fa-brands fa-youtube"></i>
              <i className="text-2xl ml-2 hover:scale-115 hover:transition-[0.5s] text-slate-400 hover:text-slate-900 cursor-pointer fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
        <div className='text-slate-700'>
          @2026 <p className='inline text-[#900] font-bold'>PIZZATOWN</p> All Rights Reserved | About Us | Terms Of Use | Privacy Policy
        </div>
    </div>
  )
}

export default Footer