import React from 'react'
import Card from '../Card'
import makhni from '../../../assets/makhni.png'
import paneer from '../../../assets/paneer.png'
import marg from '../../../assets/marg.jpg'
import Onions from '../../../assets/Onions.jpg'
import deluxe from '../../../assets/deluxe.jpg'

const Veg = () => {
  return (
    <div className='flex flex-wrap'>
      <Card image={makhni} head="Makhni Blast" ingredients="Paneer, Cheese, Makhni Sauce, Bayleaf Powder" price={299}/>
      <Card image={paneer} head="Peppy Paneer" ingredients="Paneer, Crispy Corns, Capsicum, Layered Cheese, Bellpepper" price={329}/>
      <Card image={marg} head="Cheese Marghreta" ingredients="Cheese, Bayleaf, Tomatoes, Lemon Zest, " price={129}/>
      <Card image={Onions} head="Onions Slash" ingredients="Onions, Cheese, Onions and Coriander Sauce" price={159}/>
      <Card image={deluxe} head="Deluxe Veggie" ingredients="Mushroom, Onions, Capsicum, Corns, Tomatoes, Jalpeno" price={329}/>
    </div>
  )
}

export default Veg