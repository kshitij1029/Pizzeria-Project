import React from 'react'
import about_img from '../../assets/about-img.png'
import Rating from './Rating'
import Services from './Services'


const About = () => {
  return (
    <>
      <div className='About flex justify-evenly py-10 px-15'>
          <img className='h-95 min-w-81.5 ' src={about_img}/>
          <div className='flex flex-col px-10 justify-around pb-10 '>
              <h1 className='text-[50px] font-bold bg-clip-text text-transparent bg-linear-to-r from-[#900] via-[#f00] to-[#f00]'>Dine-in to the Finest</h1>
              <p>At Pizza Town, we believe that the best memories are made around a table filled with great food and even better company. Our journey began with a simple mission: to create a space where authentic flavors and traditional techniques meet a modern, cozy atmosphere. Every pizza that leaves our stone oven is a labor of love, crafted from recipes passed down through generations and perfected for the modern palate.</p>
              <p>Stepping into our outlet is about more than just grabbing a quick bite; it's about 'Dine-in to the Finest' experience we promise every guest. From the aroma of fresh basil and melting mozzarella to the vibrant energy of our open kitchen, we invite you to sit back, relax, and savor the moment. Whether it's a family celebration or a casual hangout with friends, we are dedicated to providing impeccable service and the ultimate slice of comfort.</p>
              <Rating/>
          </div>
      </div>
      <Services/>
    </>
  )
}

export default About