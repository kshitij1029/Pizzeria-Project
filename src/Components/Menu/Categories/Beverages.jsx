import React from 'react'
import Card from '../Card'
import coke from '../../../assets/coke.jpg'
import mangoShake from '../../../assets/mangoShake.jpg'
import chocolateShake from '../../../assets/chocolateShake.jpg'

const Beverages = () => {
  return (
    <div className='flex flex-wrap'>
      <Card image={coke} head="Makhni Blast" ingredients="abcde" price={129}/>
      <Card image={mangoShake} head="Makhni Blast" ingredients="abcde" price={129}/>
      <Card image={chocolateShake} head="Makhni Blast" ingredients="abcde" price={129}/>
      
    </div>
  )
}

export default Beverages