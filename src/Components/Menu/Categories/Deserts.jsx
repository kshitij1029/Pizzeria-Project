import React from 'react'
import Card from '../Card'
import chocoLava from '../../../assets/chocoLava.jpg'
import churos from '../../../assets/churos.jpg'
import pudding from '../../../assets/pudding.jpg'
import mangoBrownie from '../../../assets/mangoBrownie.jpg'

const Deserts = () => {
  return (
    <div className='flex flex-wrap'>
      <Card image={chocoLava} head="Choco Lava Cake" ingredients="Oozing Lava Cake rich in Chocolate" price={159}/>
      <Card image={churos} head="Churos" ingredients="Mexican Churos with Chocolate Dip" price={229}/>
      <Card image={mangoBrownie} head="Mango Brownie" ingredients="Mango Pure infused Brwonies" price={189}/>
      <Card image={pudding} head="Chocolate Pudding" ingredients="Chocolate Cake Pudding" price={79}/>
    </div>
  )
}

export default Deserts