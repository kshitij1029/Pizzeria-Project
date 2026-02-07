import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='bg-red-600 w-screen flex justify-around p-4 items-center fixed top-0 right-0 left-0 z-30'>
        <img className='h-15 min-w-15 mr-2' src={logo}/>
        <div>
            <ul className='flex justify-between p-2 flex-wrap text-white'>
                <li className='mx-4 font-li text-[19px] font-bold'>HOME</li>
                <li className='mx-4 font-li text-[19px] font-bold'>ABOUT</li>
                <li className='mx-4 font-li text-[19px] font-bold'>OUR MENU</li>
                <li className='mx-4 font-li text-[19px] font-bold'>DISCOUNTS</li>
                <li className='mx-4 font-li text-[19px] font-bold'>SHOP</li>
                <li className='mx-4 font-li text-[19px] font-bold'>CONTACT US</li>
                <li className='mx-4 font-li text-[19px] font-bold'><i className="fa-solid fa-cart-arrow-down"></i></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar