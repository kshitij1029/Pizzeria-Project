import React from 'react'

const Cart = ({cart, updateQuantity, removeFromCart, total, onClose}) => {
  return (
    <div className={`fixed right-0 h-full bg-white  w-80 z-50 flex justify-center`}>
      <div className={`h-full shadow-lg flex flex-col w-80`}>
        <div className={`p-4 flex justify-between items-start border-b`}>
          <h2 className={`text-xl font-bold text-black`}>Cart</h2>
          <button className={`text-red-600 hover:text-[#f08989]`} onClick={onClose}><i class="fa-solid fa-circle-xmark text-2xl"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Cart