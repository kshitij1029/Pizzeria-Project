import React, { useState } from 'react'
import Dots from './Dots'
import offer_1 from '../../assets/offer-01.png'
import offer_2 from '../../assets/offer-02.png'
import offer_3 from '../../assets/offer-03.png'
import offer_4 from '../../assets/offer-05.png'

const arr = [offer_1, offer_2, offer_3, offer_4];

const Sliding = () => {
  const [imgIdx, setImgIdx] = useState(0);
  function moveRight(){
    if(imgIdx<arr.length-2) setImgIdx(imgIdx+1);
  }
  function moveLeft(){
    if(imgIdx>0) setImgIdx(imgIdx-1);
  }
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='flex justify-evenly items-center w-full'>
        <div className='bg-amber-400 rounded-4xl p-3 shadow-sm shadow-[black] cursor-pointer' onClick={moveLeft}>
          <i className="fa-solid fa-less-than"></i>
        </div>
        <div className='flex w-7xl justify-between'>
          <img className='h-100 w-155 ' src={arr[imgIdx]}/>
          <img className='h-100 w-155 ' src={arr[imgIdx+1]}/>
        </div>
        <div className='bg-amber-400 rounded-4xl p-3 shadow-sm shadow-[black] cursor-pointer' onClick={moveRight}>
          <i className="fa-solid fa-greater-than"></i>
        </div>
      </div>
      <Dots index={imgIdx}/>
    </div>
  )
}

export default Sliding