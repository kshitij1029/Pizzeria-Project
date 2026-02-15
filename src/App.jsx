import './App.css'
import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Hero from './Components/Hero/Hero'
import Menu from './Components/Menu/Menu'
import Discount from './Components/Discounts/Discount'
import Shop from './Components/Shop/Shop'
import Contact from './Components/Contact/Contact'
import Review from './Components/Review/Review'
import Footer from './Components/Footer/Footer'

import mixed from './assets/mixed.jpg'
import indi from './assets/indi.jpg'
import dominator from './assets/dominator.jpg'
import egg from './assets/egg.jpg'
import mutton from './assets/mutton.jpg'
import pepproni from './assets/pepproni.png'
import sausage from './assets/sausage.jpg'
import makhni from './assets/makhni.png'
import paneer from './assets/paneer.png'
import marg from './assets/marg.jpg'
import Onions from './assets/Onions.jpg'
import deluxe from './assets/deluxe.jpg'
import coke from './assets/coke.jpg'
import mangoShake from './assets/mangoShake.jpg'
import chocolateShake from './assets/chocolateShake.jpg'
import garlicBread_1 from './assets/garlicBread-1.jpg'
import garlicBread_2 from './assets/garlicBread-2.jpg'
import tacos from './assets/tacos.jpg'
import sandwich from './assets/sandwich.jpg'
import garlicdip from './assets/garlicdip.jpg'
import mustarddip from './assets/mustarddip.jpg'
import chocoLava from './assets/chocoLava.jpg'
import churos from './assets/churos.jpg'
import pudding from './assets/pudding.jpg'
import mangoBrownie from './assets/mangoBrownie.jpg'


const products = [
  {
    id:1,
    name:"Mixed Maza",
    ing:"Chicken Acahari, Mushrooms, Capsicum, Onions, Gauda Cheese",
    price:229,
    image:mixed
  },
  {
    id:2,
    name:"Indi Chicken",
    ing:"Chicken slices with Indi Sauce, Cheese and Veggies",
    price:329,
    image:indi
  },
  {
    id:3,
    name:"Ultimate Dominator",
    ing:"Pepproni Chicken, Chicken Sausage, Chicken Tikka, Cheese",
    price:329,
    image:dominator
  },
  {
    id:4,
    name:"Flowy Egg",
    ing:"Eggs, Bayleaf, Makhni Sauce, Layered Cheese",
    price:259,
    image:egg
  },
  {
    id:5,
    name:"Rogan Mutton",
    ing:"Mutton thin sliced, Rogan Masala, Cheese, Capsicums, Corns",
    price:329,
    image:mutton
  },
  {
    id:6,
    name:"Pepproni Chicken",
    ing:"Pepproni Chicken, Chicken Sausage, Chicken Tikka, Cheese",
    price:259,
    image:pepproni
  },
  {
    id:7,
    name:"Chicken Sausage",
    ing:"Chicken Sausage, Mushrooms, Capsicum, Onions, Gauda Cheese",
    price:259,
    image:sausage
  },
  {
    id:8,
    name:"Makhni Blast",
    ing:"Paneer, Cheese, Makhni Sauce, Bayleaf Powder",
    price:229,
    image:makhni
  },
  {
    id:9,
    name:"Peppy Paneer",
    ing:"Paneer, Crispy Corns, Capsicum, Layered Cheese, Bellpepper",
    price:329,
    image:paneer
  },
  {
    id:10,
    name:"Cheese Marghreta",
    ing:"Cheese, Bayleaf, Tomatoes, Lemon Zest",
    price:129,
    image:marg
  },
  {
    id:11,
    name:"Onions Slash",
    ing:"Onions, Cheese, Onions and Coriander Sauce",
    price:159,
    image:Onions
  },
  {
    id:12,
    name:"Deluxe Veggie",
    ing:"Mushroom, Onions, Capsicum, Corns, Tomatoes, Jalpeno",
    price:329,
    image:deluxe
  },
  {
    id:13,
    name:"Coke",
    ing:"Ultimate Coke",
    price:79,
    image:coke
  },
  {
    id:14,
    name:"Mango Shake",
    ing:"Mango Shake with caramel syrup",
    price:99,
    image:mangoShake
  },
  {
    id:15,
    name:"Chocolate Shake",
    ing:"KitKat Chocolate Shake",
    price:99,
    image:chocolateShake
  },
  {
    id:16,
    name:"Normal Garlic Bread",
    ing:"Loaded Cheese and Gralic Flavoured Bread (8 pcs)",
    price:159,
    image:garlicBread_1
  },
  {
    id:17,
    name:"Garlic Puffed Bun",
    ing:"Loaded Cheese, Mushrooms, Paneer and Garlic Bun (8 pcs)",
    price:159,
    image:garlicBread_2
  },
  {
    id:18,
    name:"Mexican Tacos",
    ing:"Tacos with veggies and Mustard Sauce (2 pcs)",
    price:139,
    image:tacos
  },
  {
    id:19,
    name:"Chicken Sandwhich",
    ing:" Chicken Tikka, Veggies, Makhni Sauce (2 pcs)",
    price:139,
    image:sandwich
  },
  {
    id:20,
    name:"Garlic Mayo Dip",
    ing:"Garlic infused Mayo Dip",
    price:20,
    image:garlicdip
  },
  {
    id:21,
    name:"Mustard Dip",
    ing:"Mustard infused Dip",
    price:20,
    image:mustarddip
  },
  {
    id:22,
    name:"Churos",
    ing:"Mexican Churos with Chocolate Dip",
    price:229,
    image:churos
  },
  {
    id:23,
    name:"Choco Lava Cake",
    ing:"Oozing Lava Cake rich in Chocolate",
    price:159,
    image:chocoLava
  },
  {
    id:24,
    name:"Mango Brownie",
    ing:"Mango Pure infused Brwonies",
    price:189,
    image:mangoBrownie
  },
  {
    id:25,
    name:"Chocolate Pudding",
    ing:"Chocolate Cake Pudding",
    price:79,
    image:pudding
  },
]


function App() {
  const [cart, setCart] = useState([]);
  
    const addToCart = (product) => {
      const existingProduct = cart.find((item) => item.id == product.id);
      if(existingProduct) {
        setCart(
          cart.map((item) => 
            item.id == product.id ? {...item, quantity: item.quantity+1} : item
          )
        );
      }
      else{
        setCart([...cart, {...product, quantity:1}])
      }
    }
  
    const removeFromCart = (productId) =>{
      setCart(cart.filter((item) => item.id != productId));
    }
  
    const updateQuantity = (productId, delta) => {
      setCart(
        cart.map((item) => item.id == productId ? {...item, quantity: Math.max(item.quantity+delta, 1)} : item)
      );
    }
  
    const total = cart.reduce((sum, item) => sum+item.price*item.quantity, 0);
  return (
    <>
      <Navbar
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            total={total}
      />
      <Hero/>
      <About/>
      <Menu addToCart={addToCart} products={products}/>
      <Discount/>
      <Shop/>
      <Review/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
