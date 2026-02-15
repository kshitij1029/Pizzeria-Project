import React from 'react'
import ExtraInfoCard from './ExtraInfoCard'
import pizza from '../../assets/pizza.png'
import pizza3 from '../../assets/pizza3.png'
import salad1 from '../../assets/salad1.png'
import delivery1 from '../../assets/delivery1.png'

const ExtraInfo = () => {
  return (
    <>
        <div className='flex justify-between items-center'>
          <img className='h-[32%] w-[32%]' src={pizza}/>
          <img className='h-[32%] w-[32%]' src={pizza}/>
          <img className='h-[32%] w-[32%]' src={pizza}/>
        </div>
        <div className='bg-[#ffcc00] flex p-10'>
          <ExtraInfoCard extraImg={pizza3} heading="ORIGINAL" text="True to our roots with secret family recipes & authentic techniques that you won't find anywhere else."/>
          <ExtraInfoCard extraImg={salad1} heading="QUALITY FOOD" text="From toppings to our signature dough, every ingredient is carefully selected to ensure the perfect bite."/>
          <ExtraInfoCard extraImg={delivery1} heading="FAST DELIVERY" text="Our team ensures your favorite pizza arrives piping hot and fresh at your door step in record time."/>
        </div>
    </>
  )
}

export default ExtraInfo