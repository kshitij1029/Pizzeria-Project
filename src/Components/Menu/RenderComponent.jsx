import React from 'react'
import Veg from '../Menu/Categories/Veg'
import NonVeg from '../Menu/Categories/NonVeg'
import Beverages from '../Menu/Categories/Beverages'
import BreadsDips from '../Menu/Categories/BreadsDips'
import Deserts from '../Menu/Categories/Deserts'


const RenderComponent = ({index}) => {
  switch (index) {
    case 0: return <Veg/>
        break;
    case 1: return <NonVeg/>
        break;
    case 2: return <Beverages/>
        break;
    case 3: return <BreadsDips/>
        break;
    case 4: return <Deserts/>
        break;
  }
}

export default RenderComponent