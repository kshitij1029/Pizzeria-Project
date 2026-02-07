import React from 'react'
import hero_back from '../assets/hero-back.png'
import hero_img from '../assets/hero-img.png'

const Hero = () => {
  return (
    <div className="h-screen w-screen bg-cover flex justify-evenly items-center pt-14" style={{backgroundImage: `url(${hero_back})`}}>
        <div>
            <img className='h-150 w-190' src={hero_img}/>
        </div>
        <div className='text-white flex flex-col items-center justify-between w-[35%] h-[50%] font-serif'>
            <h1 className='text-[70px]'>PIZZA TOWN</h1>
            <h1 className='text-[30px]'>Witness the flavour of real pizza</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quibusdam tempora voluptate hic odio perferendis magnam nesciunt iusto rerum autem.</p>
            <button className='bg-[#ffcc00] p-4 rounded-xl text-[#900000] font-bold'>ORDER NOW</button>
        </div>
    </div>
  )
}

export default Hero