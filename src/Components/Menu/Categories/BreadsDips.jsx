import React from 'react'
import Card from '../Card'
import garlicBread_1 from '../../../assets/garlicBread-1.jpg'
import garlicBread_2 from '../../../assets/garlicBread-2.jpg'
import tacos from '../../../assets/tacos.jpg'
import sandwich from '../../../assets/sandwich.jpg'
import garlicdip from '../../../assets/garlicdip.jpg'
import mustarddip from '../../../assets/mustarddip.jpg'

const BreadsDips = () => {
  return (
    <div className='flex flex-wrap'>
      <Card image={garlicBread_1} head="Makhni Blast" ingredients="abcde" price={129}/>
      <Card image={garlicBread_2} head="Makhni Blast" ingredients="abcde" price={129}/>
      <Card image={tacos} head="Makhni Blast" ingredients="abcde" price={129}/>
      <Card image={sandwich} head="Makhni Blast" ingredients="abcde" price={129}/>
      <Card image={garlicdip} head="Makhni Blast" ingredients="abcde" price={129}/>
      <Card image={mustarddip} head="Makhni Blast" ingredients="abcde" price={129}/>
    </div>
  )
}

export default BreadsDips