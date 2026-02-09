import React from 'react'
import ExtraInfoCard from './ExtraInfoCard'
import pizza from '../assets/pizza.png'
import pizza3 from '../assets/pizza3.png'
import salad1 from '../assets/salad1.png'
import delivery1 from '../assets/delivery1.png'

const ExtraInfo = () => {
  return (
    <>
        <div className='flex justify-between items-center'>
          <img className='h-[32%] w-[32%]' src={pizza}/>
          <img className='h-[32%] w-[32%]' src={pizza}/>
          <img className='h-[32%] w-[32%]' src={pizza}/>
        </div>
        <div className='bg-[#ffcc00] flex p-10'>
          <ExtraInfoCard extraImg={pizza3} heading="ORIGINAL" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur rerum non eum ad modi eos?"/>
          <ExtraInfoCard extraImg={salad1} heading="QUALITY FOOD" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur rerum non eum ad modi eos?"/>
          <ExtraInfoCard extraImg={delivery1} heading="FAST DELIVERY" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur rerum non eum ad modi eos?"/>
        </div>
    </>
  )
}

export default ExtraInfo