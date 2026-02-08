import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='w-screen flex justify-around p-2 items-center fixed top-0 right-0 left-0 z-30 transition ease-in-out duration-200 delay-75'>
        <img className='h-22 min-w-22 mr-2 cursor-pointer' src={logo}/>
        <nav>
            <ul className='flex justify-between p-2 flex-wrap text-white cursor-pointer'>
                <li className='mx-4 relative nav text-[16px] font-bold'>HOME</li>
                <li className='mx-4 relative nav text-[16px] font-bold'>ABOUT</li>
                <li className='mx-4 relative nav text-[16px] font-bold'>OUR MENU</li>
                <li className='mx-4 relative nav text-[16px] font-bold'>DISCOUNTS</li>
                <li className='mx-4 relative nav text-[16px] font-bold'>SHOP</li>
                <li className='mx-4 relative nav text-[16px] font-bold'>CONTACT US</li>
                <li className='mx-4 pb-1.5 text-[16px] font-bold'><i className="fa-solid fa-cart-arrow-down hover:scale-170 hover: transition hover:ease-in-out hover:duration-300 "></i></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar