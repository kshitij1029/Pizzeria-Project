import React from 'react'

const Rating = () => {
  return (
    <div className='flex'>
        <p className='italic mr-2'>Rating:</p>
        <div>
            <i className="fa-solid fa-star text-amber-300 "></i>
            <i className="fa-solid fa-star text-amber-300"></i>
            <i className="fa-solid fa-star text-amber-300"></i>
            <i className="fa-solid fa-star text-amber-300"></i>
            <i className="fa-solid fa-star text-slate-300"></i>
        </div>
    </div>
  )
}

export default Rating