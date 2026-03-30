import React from 'react';

const Stat = () => {
  return (
    <div className="w-full bg-blue-600 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        
        <div className="space-y-2 sm:border-r sm:border-gray-300">
          <h2 className="font-semibold text-4xl text-white">500K+</h2>
          <p className="text-[18px] text-gray-200">Active Users</p>
        </div>

        <div className="space-y-2 sm:border-r sm:border-gray-300">
          <h2 className="font-semibold text-4xl text-white">200+</h2>
          <p className="text-[18px] text-gray-200">Premium Tools</p>
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold text-4xl text-white">4.9</h2>
          <p className="text-[18px] text-gray-200">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default Stat;