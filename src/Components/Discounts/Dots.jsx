import React from 'react'

const Dots = ({index}) => {
  return (
    <div className='mt-3'>
        <i className={`fa-solid fa-circle text-[9px] mx-2 ${index==0 ? "text-slate-800" : "text-slate-400"}`}></i>
        <i className={`fa-solid fa-circle text-[9px] mx-2 ${index==0 || index==1 ? "text-slate-800" : "text-slate-400"}`}></i>
        <i className={`fa-solid fa-circle text-[9px] mx-2 ${index==1 || index==2 ? "text-slate-800" : "text-slate-400"}`}></i>
        <i className={`fa-solid fa-circle text-[9px] mx-2 ${index==2 ? "text-slate-800" : "text-slate-400"}`}></i>
    </div>
  )
}

export default Dots