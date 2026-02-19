import React from 'react'

const Cart = ({cart, updateQuantity, removeFromCart, total, onClose}) => {
  return (
    <div className={`fixed right-0 h-full bg-white w-80 z-50 flex flex-col justify-center`}>
      <div className={` shadow-lg flex flex-col`}>
        <div className={`p-4 flex justify-between items-start border-b`}>
          <h2 className={`text-xl font-bold text-black`}>Cart</h2>
          <button className={`text-red-600 hover:text-[#f08989]`} onClick={onClose}><i class="fa-solid fa-circle-xmark text-2xl"></i></button>
        </div>
      </div>

      {/* Cart Items */}
      <div className='flex-1 overflow-y-auto p-4 flex flex-col justify-between'>
        <div>
          {cart.length === 0 ? (
            <p className='text-slate-500 text center'>Your Cart is Empty !!</p>
          ) : (
            cart.map((item) => (
              <div key={item.id}
              className='flex items-center gap-4 p-4 border-b border-slate-300'>
                <img src={item.image} className='w-16 h-16 object-cover rounded'></img>
                <div className='flex-1'>
                  <h3 className={`text-sm font-bold`}>{item.name}</h3>
                  <p className='text-xs my-1'>Rs. {item.price}/-</p>
                  <div className='flex items-center mt-2 gap-2'>
                    <button className='p-1 bg-slate-200 hover:bg-slate-400' onClick={() => updateQuantity(item.id,1)}>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                    <span className='px-2'>{item.quantity}</span>
                    <button className='p-1 bg-slate-200 hover:bg-slate-400' onClick={() => updateQuantity(item.id,-1)}>
                      <i className="fa-solid fa-minus"></i>
                    </button>
                  </div>
                </div>
                <button className='p-2 text-[#f08989] hover:text-red-600' onClick={() => removeFromCart(item.id)}><i className="fa-solid fa-trash"></i></button>
              </div>
            ))
          )}
        </div>
        {/* Total */}
        <div className='p-4 border-t border-slate-300'>
          <div className='flex justify-between items-center text-lg font-bold'>
            <span>Total:</span>
            <span>Rs. {total}/-</span>
          </div>
          <button className='w-full mt-4 py-2 bg-[#f08989] hover:bg-red-600 text-white font-bold cursor-pointer'>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart