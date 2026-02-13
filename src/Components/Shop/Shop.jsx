import React from 'react'
import app from '../../assets/appDownload.png'
import playStore from '../../assets/playStore.png'
import shop from '../../assets/shop.png'

const Shop = () => {
  return (
    <div className='flex justify-center items-center bg-[#ffcc00] px-5 pt-7'>
        <div className='flex flex-col w-[50%]'>
            <h2 className='font-bold text-[#6f2f03]'>DOWNLOAD MOBILE APP AND</h2>
            <h1 className='font-extrabold bg-clip-text text-transparent bg-linear-to-r from-[#281702] to-[#7d3b0f] text-[40px]'>AVAIL MORE EXCITING DISCOUNTS</h1>
            <p className='text-[#6f2f03]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum exercitationem ullam laborum. Eius unde voluptates minima hic, dignissimos aliquid!</p>
            <div className='flex mt-7'>
                <img className='h-17 w-57 mr-10 rounded-md cursor-pointer' src={app}/>
                <img className='h-17 w-57 rounded-md cursor-pointer' src={playStore}/>
            </div>
        </div>
        <div>
            <img className='h-[500px] ml-10' src={shop}></img>
        </div>
    </div>
  )
}

export default Shop