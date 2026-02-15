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
      <Menu addToCart={addToCart}/>
      <Discount/>
      <Shop/>
      <Review/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
