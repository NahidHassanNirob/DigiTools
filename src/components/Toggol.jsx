import React from "react";

const Toggol = () => {
  return (
    <div className="max-w-5xl mx-auto my-5 px-4">
      <h2 className="text-4xl font-bold text-center">Premium Digital Tools</h2>
      <p className="text-gray-600 mt-3 text-center mx-auto max-w-[600px]">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>

      {/* tabs */}
      
      <div className="tabs bg-white justify-center mt-3 tabs-box">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab px-5 rounded-none"
          aria-label="Products"
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab px-5 rounded-none"
          aria-label="Cart"
          
        />
        
      </div>
    </div>
  );
};

export default Toggol;
