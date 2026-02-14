import React from 'react'
import Sliding from './Sliding'


const Discount = () => {
  return (
    <div className='Discount flex flex-col justify-evenly items-center h-160 mb-3'>
        <div className='flex flex-col items-center'>
          <h1 className='text-[28px] font-bold bg-clip-text text-transparent bg-linear-to-r from-[#900]  to-[#f00]'>LATEST DISCOUNTS</h1>
          <p className='text-[20px]'>Avail them before its too late, Offers worth giving a Shot!!</p>
        </div>
        <Sliding/>
    </div>
  )
}

export default Discount