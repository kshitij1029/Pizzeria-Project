import React from 'react'

const Cart = ({ cart, updateQuantity, removeFromCart, total, onClose }) => {
  return (
    <>
      {/* 1. BACKDROP OVERLAY: Dim the background when cart is open */}
      <div 
        className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* 2. CART DRAWER: 
          - w-full on mobile, max-w-[400px] on larger screens 
          - Higher z-index than the backdrop
      */}
      <div className={`fixed right-0 top-0 h-full bg-white w-full sm:w-[380px] md:w-[400px] z-[70] shadow-2xl flex flex-col transition-transform ease-in-out duration-500`}>
        
        {/* Header */}
        <div className="p-5 flex items-center border-b bg-slate-50">
          <div>
            <h2 className="text-2xl font-black text-[#900000]">YOUR CART</h2>
            <p className="text-xs text-slate-500 uppercase tracking-widest">
              {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
            </p>
          </div>
          <button 
            className="text-slate-400 hover:text-red-600 transition-colors p-2 ml-[190px]" 
            onClick={onClose}
          >
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
        </div>

        {/* Cart Items Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col mt-20 ml-[140px] ">
              <i className="fa-solid fa-cart-shopping text-6xl text-slate-200 mb-4 ml-7"></i>
              <p className="text-slate-500 font-medium">Your cart is empty!</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl shadow-sm" 
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-sm md:text-base font-bold text-slate-800">{item.name}</h3>
                    <p className="text-sm font-semibold text-[#900000] mt-1">Rs. {item.price}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center mt-3 bg-slate-100 w-fit rounded-lg overflow-hidden">
                      <button 
                        className="px-3 py-1 hover:bg-[#ffcc00] hover:text-[#900000] transition-colors"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <i className="fa-solid fa-minus text-xs"></i>
                      </button>
                      <span className="px-3 text-sm font-bold">{item.quantity}</span>
                      <button 
                        className="px-3 py-1 hover:bg-[#ffcc00] hover:text-[#900000] transition-colors"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <i className="fa-solid fa-plus text-xs"></i>
                      </button>
                    </div>
                  </div>

                  <button 
                    className="p-2 text-slate-300 hover:text-red-600 transition-colors" 
                    onClick={() => removeFromCart(item.id)}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Total Section */}
        {cart.length > 0 && (
          <div className="p-6 border-t bg-white shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-500 font-medium">Subtotal</span>
              <span className="text-xl font-black text-slate-900">Rs. {total}/-</span>
            </div>
            
            <button className="w-full py-4 bg-[#ffcc00] hover:bg-[#900000] text-[#900000] hover:text-white rounded-2xl font-black text-lg transition-all duration-300 transform active:scale-95 shadow-lg shadow-yellow-200 lg:shadow-none">
              CHECKOUT NOW
            </button>
            
            <p className="text-[10px] text-center text-slate-400 mt-4 uppercase tracking-tighter">
              Shipping and taxes calculated at checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart