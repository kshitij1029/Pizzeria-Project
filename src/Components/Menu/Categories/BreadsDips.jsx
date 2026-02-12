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
      <Card image={garlicBread_1} head="Normal Garlic Bread" ingredients="Loaded Cheese and Gralic Flavoured Bread (8 pcs)" price={159}/>
      <Card image={garlicBread_2} head="Garlic Puffed Bun" ingredients="Loaded Cheese, Mushrooms, Paneer and Garlic Bun (8 pcs)" price={159}/>
      <Card image={tacos} head="Mexican Tacos" ingredients="Tacos with veggies and Mustard Sauce (2 pcs)" price={139}/>
      <Card image={sandwich} head="Chicken Sandwhich" ingredients=" Chicken Tikka, Veggies, Makhni Sauce (2 pcs)" price={139}/>
      <Card image={garlicdip} head="Garlic Mayo Dip" ingredients="Garlic infused Mayo Dip" price={20}/>
      <Card image={mustarddip} head="Mustard Dip" ingredients="Mustard infused Dip" price={20}/>
    </div>
  )
}

export default BreadsDips