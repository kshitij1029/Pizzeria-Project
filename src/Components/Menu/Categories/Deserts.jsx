import React from 'react'
import Card from '../Card'
import chocoLava from '../../../assets/chocoLava.jpg'
import churos from '../../../assets/churos.jpg'
import pudding from '../../../assets/pudding.jpg'
import mangoBrownie from '../../../assets/mangoBrownie.jpg'

const Deserts = () => {
  return (
    <div className='flex flex-wrap'>
      <Card image={chocoLava} head="Makhni Blast" ingredients="abcde" price={129}/>
      <Card image={churos} head="Makhni Blast" ingredients="abcde" price={129}/>
      <Card image={mangoBrownie} head="Makhni Blast" ingredients="abcde" price={129}/>
      <Card image={pudding} head="Makhni Blast" ingredients="abcde" price={129}/>
    </div>
  )
}

export default Deserts