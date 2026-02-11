import React from 'react'


const ExtraInfo = (props) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img className='h-25 w=[100px] contrast-200 m-4' src={props.extraImg}/>
            <h1 className='text-[24px] font-bold text-[#900]'>{props.heading}</h1>
            <p className='text-center'>{props.text}</p>
        </div>
    )
}

export default ExtraInfo