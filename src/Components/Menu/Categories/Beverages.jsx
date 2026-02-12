import React from 'react'
import Card from '../Card'
import coke from '../../../assets/coke.jpg'
import mangoShake from '../../../assets/mangoShake.jpg'
import chocolateShake from '../../../assets/chocolateShake.jpg'

const Beverages = () => {
  return (
    <div className='flex flex-wrap'>
      <Card image={coke} head="Coke" ingredients="Ultimate Coke" price={79}/>
      <Card image={mangoShake} head="Mango Shake" ingredients="Mango Shake with caramel syrup" price={99}/>
      <Card image={chocolateShake} head="Chocolate Shake" ingredients="KitKat Chocolate Shake" price={99}/>
      
    </div>
  )
}

export default Beverages