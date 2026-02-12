import React from 'react'
import Sliding from './Sliding'

const Discount = () => {
  return (
    <div className='flex flex-col items-center p-8'>
        <h1 className='text-[28px] font-bold bg-clip-text text-transparent bg-linear-to-r from-[#900]  to-[#f00]'>LATEST DISCOUNTS</h1>
        <p className='text-[20px]'>Avail them before its too late, Offers worth giving a Shot!!</p>
        <Sliding/>
    </div>
  )
}

export default Discount