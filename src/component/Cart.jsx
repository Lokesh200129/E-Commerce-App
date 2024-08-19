import { useState } from "react"

function Cart({ image, name, price, remove, quantity=1, increaseQuantity, decreseQuantity }) {
  return (
    <div  >
      <div className="flex border p-2">
        <figure>
          <img className='h-20 md:w-20  rounded-xl ' src={image} alt='Product' />
        </figure>

        <figcaption className='flex flex-col text-left ml-4 mt-2 '>

          <p>
            <b>{name}</b>
          </p>
          <p className="mt-2"> {'\u20B9'}{quantity * price}</p>
          <div className="flex flex-row mt-4">
            {quantity <=1 ? <button onClick={decreseQuantity} className="flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-gray-300 text-black text-xl"disabled>-</button>
                        :<button onClick={decreseQuantity} className="flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-gray-300 text-black text-xl"  >-</button>

            }
            <input type="number" value={quantity} className=" border w-10 border-slate-800 mr-2 pl-3 rounded" readOnly />
            <button onClick={increaseQuantity} className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-300 text-black text-xl" >+</button>
            <button onClick={remove} className="border border-slate-400 hover:border-slate-800 text-slate-500 hover:text-slate-800 rounded ml-8 px-2">Remove</button>
          </div>
        </figcaption>
      </div>
    </div>
  )
}

export default Cart;