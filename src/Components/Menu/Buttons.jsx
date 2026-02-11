import React from 'react'

const Buttons = ({btn ,isSelected, setIsSelected}) => {
  return (
    <>
        {
            btn.map((text,index)=>{
                return <button className='cursor-pointer btn mx-5 shadow-sm shadow-[#900] py-2 px-6 rounded-3xl relative overflow-hidden z-20 transition-[0.5s] bg-transparent mb-7' onClick={()=>{
                  setIsSelected(index);
                }}>{text}</button>
            })
        }
    </>
  )
}

export default Buttons