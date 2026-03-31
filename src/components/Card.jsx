import { Check } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Card = ({ data, cart, setCart }) => {
  const { name, description, price, period, features, icon, tagType } = data;
  const isAdded=cart.find(item=>item.id===data.id)
  console.log(isAdded);
  const handelCard = (clickedData) => {
    const isExist = cart.find((item) => item.id === clickedData.id);
    console.log(isExist);
    if (isExist) {
      toast.error("Already Added To Cart");

      return;
    }
    setCart([...cart, clickedData]);
    toast.success("Added To Cart Succesfully");
  };

  return (
    <>
      <div
        className="flex flex-col justify-between h-full 
bg-[#F8F8F8]  p-4 rounded-md 
border border-transparent
transition-all duration-300
hover:border-blue-200 hover:bg-[#f3efef] hover:shadow-lg
"
      >
        <div className="space-y-3 relative">
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
          <span
            className={`absolute top-0 right-0 px-2 py-1 text-xs rounded 
    ${
      tagType === "popular"
        ? "bg-blue-500 text-white"
        : tagType === "featured"
          ? "bg-amber-200 text-amber-700"
          : tagType === "best seller"
            ? "bg-orange-400 text-white"
            : tagType === "new" && "bg-red-700 text-white"
    }
  `}
          >
            {tagType}
          </span>
        </div>

        <button
          onClick={() => handelCard(data)}
          className={`w-full rounded-full btn ${isAdded ? "bg-green-400" :"btn-primary"} mt-4`}
        >
          {isAdded? "Added To Cart": " Buy Now"}
        </button>
      </div>
    </>
  );
};

export default Card;
