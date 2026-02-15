import React from 'react'
import MenuSection from './MenuSection'


const Menu = ({addToCart}) => {
  return (
    <div className='Menu flex flex-col items-center px-8 pt-8'>
        <h1 className='text-[28px] font-bold bg-clip-text text-transparent bg-linear-to-r from-[#900]  to-[#f00]'>OUR EXCLUSIVE MENU</h1>
        <p className='text-[20px]'>Enjoy our vide range of Pizza's and other Snacks!!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad culpa hic vel exercitationem, magni deleniti</p>
        <MenuSection addToCart = {addToCart}/>
    </div>
  )
}

export default Menu