import { Check } from "lucide-react";
import React from "react";

const Card = ({ data }) => {
  const { name, description, price, period, features, icon } = data;

  return (
    <div className="flex flex-col justify-between h-full bg-base-200 shadow-md p-4">
      <div className="space-y-3">
        <span className="p-2 border border-gray-500 rounded-full inline-block">
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

      <button className="w-full rounded-full btn btn-primary mt-4">
        Buy Now
      </button>
    </div>
  );
};

export default Card;
