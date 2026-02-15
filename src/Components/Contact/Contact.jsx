import React from 'react'
import contact from '../../assets/contact.png'
import contact_back from '../../assets/contact-back2.png'

const Contact = () => {
  return (
    <div className='Contact flex justify-center items-center p-3  bg-cover overflow-hidden' style={{backgroundImage: `url(${contact_back})`}} >
        <div className='flex flex-col items-center w-[60%] '>
          <h1 className='font-extrabold text-cyan-800 inline-block mt-5 text-[40px] '>DELIVERY IN 30 MIN !!</h1>
          <p className='text-center'>Hunger can't wait, and neither do we. Our dedicated delivery fleet is always on standby to ensure your favorite hand-stretched pizza's and snacks reach your doorstep in 30 minutes or less. Fresh, hot, and fast—just the way a Pizza Town slice should be.</p>
          <button className='bg-[#e81010] p-3 mt-3 rounded-lg text-white font-bold flex cursor-pointer shadow-md/50 shadow-black hover:scale-110 hover:transition hover:ease-in-out hover: duration-300'>CALL: 999-888-7777</button>
          <img className='h-60 w-75 animate-pizzaslide' src={contact}/>
        </div>
    </div>
  )
}

export default Contact