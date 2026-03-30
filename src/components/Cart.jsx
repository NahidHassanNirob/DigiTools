import React from "react";

const Cart = ({ cart, setCart }) => {
  let sum=0;
  for(let carts of cart){
    sum=sum+carts.price;
  }
  let total=sum.toFixed(2)

  return (
    <div className="max-w-5xl mx-auto my-10 px-4 p-5 border border-gray-300 rounded-md">
      <div>
        <h2 className="text-2xl font-bold text-left">Your Cart</h2>
      </div>
      <div>
        {cart.map((item) => (
          <div className="flex items-center justify-between px-4 py-2 rounded-md  mt-5">
            <div className="flex items-center gap-10">
              <i>{item.icon}</i>
              <div>
                <h2 className="font-bold text-[18px]">{item.name}</h2>
                <p className="text-gray-500 font-semibold">${item.price}</p>
              </div>
            </div>

            <div>
                <button className="btn btn-error">Remove</button>
            </div>
          </div>
        ))}


        <div className="divider">

        </div>
        <div className="flex items-center justify-between px-4 font-bold">
            <h2 className="text-xl">Total</h2>
            <h2 className="text-xl">${total}</h2>
        </div>
        <button className="w-full rounded-full mt-3 btn btn-primary">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
