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
      <Card image={mixed} head="Mixed Maza" ingredients="Chicken Acahari, Mushrooms, Capsicum, Onions, Gauda Cheese" price={229}/>
      <Card image={indi} head="Indi Chicken" ingredients="Chicken slices with Indi Sauce, Cheese and Veggies" price={329}/>
      <Card image={dominator} head="Ultimate Dominator" ingredients="Pepproni Chicken, Chicken Sausage, Chicken Tikka, Cheese" price={329}/>
      <Card image={egg} head="Flowy Egg" ingredients="Eggs, Bayleaf, Makhni Sauce, Layered Cheese" price={259}/>
      <Card image={mutton} head="Rogan Mutton" ingredients="Mutton thin sliced, Rogan Masala, Cheese, Capsicums, Corns" price={329}/>
      <Card image={pepproni} head="Pepproni Chicken" ingredients="Chicken Pepproni,Capsicum, Onions, Gauda Cheese" price={259}/>
      <Card image={sausage} head="Chicken Sausage" ingredients="Chicken Sausage, Mushrooms, Capsicum, Onions, Gauda Cheese" price={259}/>
    </div>
  )
}

export default NonVeg