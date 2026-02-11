import React from 'react'
import Card from '../Card'
import mixed from '../../../assets/mixed.jpg'
import indi from '../../../assets/indi.jpg'
import dominator from '../../../assets/dominator.jpg'
import egg from '../../../assets/egg.jpg'
import mutton from '../../../assets/mutton.jpg'
import pepproni from '../../../assets/pepproni.png'
import sausage from '../../../assets/sausage.jpg'

const NonVeg = () => {
  return (
    <div className='flex flex-wrap'>
      <Card image={mixed} head="Makhni Blast" ingredients="abcde" price={129}/>
      <Card image={indi} head="Makhni Blast" ingredients="abcde" price={129}/>
      <Card image={dominator} head="Makhni Blast" ingredients="abcde" price={129}/>
      <Card image={egg} head="Makhni Blast" ingredients="abcde" price={129}/>
      <Card image={mutton} head="Makhni Blast" ingredients="abcde" price={129}/>
      <Card image={pepproni} head="Makhni Blast" ingredients="abcde" price={129}/>
      <Card image={sausage} head="Makhni Blast" ingredients="abcde" price={129}/>
    </div>
  )
}

export default NonVeg