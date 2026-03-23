import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
import Cart from '../Cart/Cart';

const Navbar = ({ cart, updateQuantity, removeFromCart, total }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { title: 'HOME', to: 'Hero', offset: 0 },
    { title: 'ABOUT', to: 'About', offset: -100 },
    { title: 'OUR MENU', to: 'Menu', offset: -100 },
    { title: 'DISCOUNTS', to: 'Discount', offset: -90 },
    { title: 'SHOP', to: 'Shop', offset: -100 },
    { title: 'REVIEWS', to: 'Review', offset: -80 },
    { title: 'CONTACT US', to: 'Contact', offset: -90 },
  ];

  return (
    <header>
      <div className={`flex md:justify-around px-6 py-4 items-center fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${sticky ? "bg-[#ffcc00] shadow-md" : "bg-transparent"}`}>
        
        {/* LOGO - Adjusted for responsiveness */}
        <Link to='Hero' smooth={true} offset={0} duration={500}>
          <img className='h-14 md:h-20 w-auto cursor-pointer object-contain' src={logo} alt="Logo" />
        </Link>

        {/* DESKTOP NAVIGATION - Hidden on Mobile (hidden), flex on Medium (md) */}
        <nav className="hidden lg:flex items-center">
          <ul className={`flex items-center gap-2 ${sticky ? "text-[#e51010]" : "text-white"}`}>
            {navLinks.map((link) => (
              <li key={link.title} className={`mx-2 relative ${sticky ? "nav2" : "nav1"} text-[14px] xl:text-[16px] font-bold cursor-pointer hover:opacity-80`}>
                <Link to={link.to} smooth={true} offset={link.offset} duration={500}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT SIDE ICONS (Cart & Toggle) */}
        <div className="flex items-center gap-4 ml-42.5">
          {/* CART BUTTON */}
          <button className={`relative font-bold cursor-pointer ${sticky ? "text-[#e51010]" : "text-white"}`} onClick={() => setIsCartOpen(true)}>
            <i className="fa-solid fa-cart-arrow-down text-[22px] md:text-[25px]"></i>
            {cart.length > 0 && (
              <span className='absolute -top-2 -right-3 bg-red-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white'>
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>

          {/* MOBILE TOGGLE BUTTON - Shown only on Mobile */}
          <button 
            className={`lg:hidden text-2xl cursor-pointer ${sticky ? "text-[#e51010]" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 bg-black/90 z-40 lg:hidden flex flex-col items-center transition-transform pt-20 pr-8 duration-500 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <ul className="text-white text-center flex flex-col gap-8 text-xl font-bold">
          {navLinks.map((link) => (
            <li key={link.title} onClick={closeMenu}>
              <Link to={link.to} smooth={true} offset={link.offset} duration={500} className="hover:text-[#ffcc00] transition-colors uppercase Bebas">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CART OVERLAY (unchanged logic) */}
      {isCartOpen && 
        <Cart
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          total={total}
          onClose={() => setIsCartOpen(false)}
        />}
    </header>
  );
};
export default Navbar;