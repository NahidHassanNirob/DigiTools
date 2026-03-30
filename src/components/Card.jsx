import { Check } from "lucide-react";
import React from "react";

const Card = ({ data ,cart,setCart}) => {
  const { name, description, price, period, features, icon } = data;
  const handelCard = (clickedData) => {
    const isExist=cart.find(item=>item.id===clickedData.id)
    console.log(isExist);
    if(isExist){
      alert("already exist")
      return;
    }
    setCart([...cart,clickedData])
  };

  return (
    <div
      className="
flex flex-col justify-between h-full 
bg-[#F8F8F8]  p-4 rounded-md 
border border-transparent

transition-all duration-300
hover:border-blue-200 hover:bg-[#f3efef] hover:shadow-lg
"
    >
      <div className="space-y-3">
        <span className="p-2 border border-gray-300 rounded-full inline-block">
          {icon}
        </span>

        <h2 className="font-bold text-xl">{name}</h2>

        <h4 className="text-gray-500 line-clamp-2">{description}</h4>

        <span className="flex">
          <h2 className="font-semibold text-xl">${price}</h2>
          <span className="text-gray-500 font-semibold text-[18px]">
            /{period}
          </span>
        </span>

        <div className="space-y-1">
          {features.map((feature, index) => (
            <p key={index} className="flex gap-1 text-gray-500">
              <Check color="#008000" /> {feature}
            </p>
          ))}
        </div>
      </div>

      <button
        onClick={() => handelCard(data)}
        className="w-full rounded-full btn btn-primary mt-4"
      >
        Buy Now
      </button>
    </div>
  );
};

export default Card;
