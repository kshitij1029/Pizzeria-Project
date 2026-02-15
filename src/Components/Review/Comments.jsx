import React from 'react'


const Comments = ({img, comment, name}) => {
  return (
    <div className='flex flex-col justify-evenly items-center h-55 w-140 text-white'>
        <img className='rounded-[50%] h-25 w-25' src={img}/>
        <h2 className='font-bold'>{name}</h2>
        <p className='text-center mb-2'>{comment}</p>
        <div className='flex'>
            <i className="fa-solid fa-star text-amber-300 text-[12px]"></i>
            <i className="fa-solid fa-star text-amber-300 text-[12px]"></i>
            <i className="fa-solid fa-star text-amber-300 text-[12px]"></i>
            <i className="fa-solid fa-star text-amber-300 text-[12px]"></i>
            <i className="fa-solid fa-star text-amber-300 text-[12px]"></i>
        </div>
    </div>
  )
}

export default Comments