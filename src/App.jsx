import './App.css'
import About from './Components/About/About'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Menu from './Components/Menu/Menu'
import Discount from './Components/Discounts/Discount'
import Shop from './Components/Shop/Shop'



function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Menu/>
      <Discount/>
      <Shop/>
    </>
  )
}

export default App
