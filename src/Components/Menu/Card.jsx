import React, { useState } from 'react'

const Card = ({image, head, ingredients, price}) => {
    const [isHover, setIsHover] = useState(false);
    const appear =()=>{
       setIsHover(true);
    }
    const disappear =()=>{
        setIsHover(false);
    }
  return (
    <div className='flex flex-col rounded-xl mx-7 my-7 shadow-md shadow-slate-400 hover:scale-105 transition-[0.5s] w-72.5' onMouseEnter={appear} onMouseLeave={disappear}>
        <img className='h-72.5 w-72.5 rounded-tl-xl rounded-tr-xl object-cover' src={image}/>
        <div className='px-2 pb-2 flex flex-col justify-between h-36'>
            <div>
                <h1 className='text-[24px] font-bold text-[#900]'>{head}</h1>
                <p className='text-wrap'>{ingredients}</p>
            </div>
            <div className='mt-3 flex justify-between cart'>
                <div className='py-2 px-2 bg-[#ffcc00b8] rounded-xl text-[#900] font-bold font-sans'>Rs. {price}/-</div>
                <button className={`py-2 px-4 bg-[#900] rounded-xl ${isHover ? "" : "hidden"} text-[14px] text-white font-bold cursor-pointer`}>ADD TO CART <i class="fa-solid fa-basket-shopping"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Card