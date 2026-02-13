import React from 'react'

const Dots2 = ({index}) => {
  return (
    <div className='mt-3'>
        <i className={`fa-solid fa-minus text-[20px] mx-0.5 ${index==0? "text-slate-600" : "text-slate-300"}`}></i>
        <i className={`fa-solid fa-minus text-[20px] mx-0.5 ${index==1? "text-slate-600" : "text-slate-300"}`}></i>
        <i className={`fa-solid fa-minus text-[20px] mx-0.5 ${index==2? "text-slate-600" : "text-slate-300"}`}></i>
    </div>
  )
}

export default Dots2