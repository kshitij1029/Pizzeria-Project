import React, { useState } from 'react'
import Buttons from './Buttons';
import RenderComponent from './RenderComponent';

const buttons =["Veg", "Non-Veg", "Beverages", "Breads and Dips", "Deserts"];

const MenuSection = () => {
  const [isSelected, setIsSelected] = useState(0);
  return (
    <div className='flex flex-col mt-5 items-center'>
      <div className='flex justify-evenly items-center'>
        <Buttons btn={buttons} isSelected={isSelected} setIsSelected={setIsSelected}/>
      </div>
      <RenderComponent index={isSelected}/>
    </div>
  )
}

export default MenuSection