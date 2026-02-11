import React, { useState } from 'react'


const MenuSection = () => {
  const [isFill, setIsFill] = useState(false);
  const fill = ()=>{
    if(!isFill) setIsFill(true);
  }
  const Unfill = ()=>{
    if(isFill) setIsFill(false);
  }
  return (
    <div className='mt-5'>
      <div className='flex justify-evenly items-center'>
        <button className='btn mx-5 shadow-sm shadow-[#900] py-2 px-6 rounded-3xl relative overflow-hidden z-20 transition-[0.5s] bg-transparent'>Veg</button>
        <button className='btn mx-5 shadow-sm shadow-[#900] border-[#ffcc00] py-2 px-6 rounded-3xl relative overflow-hidden z-20 transition-[0.5s] bg-transparent'>Non-Veg</button>
        <button className='btn mx-5 shadow-sm shadow-[#900] border-[#ffcc00] py-2 px-6 rounded-3xl relative overflow-hidden z-20 transition-[0.5s] bg-transparent'>Beverages</button>
        <button className='btn mx-5 shadow-sm shadow-[#900] border-[#ffcc00] py-2 px-6 rounded-3xl relative overflow-hidden z-20 transition-[0.5s] bg-transparent'>Breads and Dips</button>
        <button className='btn mx-5 shadow-sm shadow-[#900] border-[#ffcc00] py-2 px-6 rounded-3xl relative overflow-hidden z-20 transition-[0.5s] bg-transparent'>Deserts</button>
        <button className='btn mx-5 shadow-sm shadow-[#900] border-[#ffcc00] py-2 px-6 rounded-3xl relative overflow-hidden z-20 transition-[0.5s] bg-transparent'>Specialized</button>
      </div>
    </div>
  )
}

export default MenuSection