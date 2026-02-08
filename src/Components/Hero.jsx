import React from 'react'
import hero_back from '../assets/hero-back.png'
import hero_img from '../assets/hero-img.png'

const Hero = () => {
  return (
    <div className="h-screen w-[100%] bg-cover flex justify-center items-center pt-14 " style={{backgroundImage: `url(${hero_back})`}}>
        <div className='flex justify-evenly items-center w-screen'>
          <div>
              <img className='h-150 w-190 min-w-180 min-h-120 transition ease-in-out duration-200 delay-100' src={hero_img}/>
          </div>
          <div className='text-white flex flex-col w-[35%] items-start transition ease-in-out duration-200 delay-200 p-4'>
              <h1 className='text-[70px] font-bold'>PIZZA TOWN</h1>
              <h1 className='text-[30px] mb-8'>Witness the flavour of real pizza</h1>
              <p className=' mb-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eos a facilis perferendis quidem. Officiis illum earum molestiae temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum earum consectetur et consequatur atque illum dolorem quae laudantium perferendis iure?</p>
              <button className='bg-[#ffcc00] p-5 rounded-xl text-[#900000] font-bold mb-8 flex cursor-pointer shadow-md/50 shadow-black hover:scale-110 hover:transition hover:ease-in-out hover: duration-300'>ORDER NOW <div className=' ml-4 flex justify-center items-center rounded-4xl border-2 border-[#900000] animate-bounce'><i className="fa-solid fa-arrow-down text-[#900000]"></i></div></button>
          </div>
        </div>
    </div>
  )
}

export default Hero