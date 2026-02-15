import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50 ? setSticky(true) : setSticky(false);
    })
  },[])
  return (
    <div className={` flex justify-around p-2 items-center fixed top-0 right-0 left-0 z-30 transition ease-in-out duration-200 delay-75 ${sticky?"bg-[#ffcc00]":""}`}>
        <img className='h-22 min-w-22 mr-2 cursor-pointer' src={logo}/>
        <nav>
            <ul className={`flex justify-between p-2 flex-wrap  ${sticky?"text-[#e51010]":"text-white"} cursor-pointer`}>
                <li className={`mx-4 relative ${sticky?"nav2":"nav1"} text-[16px] font-bold`}><Link to='Hero' smooth={true} offset={0} duration={500}>HOME</Link></li>
                <li className={`mx-4 relative ${sticky?"nav2":"nav1"} text-[16px] font-bold`}><Link to='About' smooth={true} offset={-100} duration={500}>ABOUT</Link></li>
                <li className={`mx-4 relative ${sticky?"nav2":"nav1"} text-[16px] font-bold`}><Link to='Menu' smooth={true} offset={-100} duration={500}>OUR MENU</Link></li>
                <li className={`mx-4 relative ${sticky?"nav2":"nav1"} text-[16px] font-bold`}><Link to='Discount' smooth={true} offset={-90} duration={500}>DISCOUNTS</Link></li>
                <li className={`mx-4 relative ${sticky?"nav2":"nav1"} text-[16px] font-bold`}><Link to='Shop' smooth={true} offset={-100} duration={500}>SHOP</Link></li>
                <li className={`mx-4 relative ${sticky?"nav2":"nav1"} text-[16px] font-bold`}><Link to='Review' smooth={true} offset={-80} duration={500}>REVIEWS</Link></li>
                <li className={`mx-4 relative ${sticky?"nav2":"nav1"} text-[16px] font-bold`}><Link to='Contact' smooth={true} offset={-90} duration={500}>CONTACT US</Link></li>
                <li className='mx-4 pb-1.5 text-[16px] font-bold'><i className="fa-solid fa-cart-arrow-down hover:scale-170 hover: transition hover:ease-in-out hover:duration-300 "></i></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar