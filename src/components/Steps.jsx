import React from "react";
import user from "../assets/user.png";
import rocket from '../assets/rocket.png'
import pak from '../assets/package.png'

const Steps = () => {
  return (
    <div className="mt-16 max-w-5xl px-4 mx-auto ">
      <div className="text-center">
        <h2 className="font-bold text-3xl">Get Started in 3 Steps</h2>
        <p className=" text-gray-500 mt-3">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mt-5">
        <div className="flex relative  items-center justify-center border text-center  border-gray-300 rounded-md shadow-xl">
          <div className="space-y-2 p-4">
            <div className="bg-[#F3E8FE] p-5 mx-auto rounded-full w-max">
              <img src={user} alt="" />
            </div>
            <h2 className="font-bold textxl">Create Account</h2>
            <p className="text-gray-500">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
          <span className="bg-blue-800 absolute top-3 right-3 text-white p-2 rounded-full">
            <span>01</span>
          </span>
        </div>
        
        <div className="flex relative items-center justify-center border text-center  border-gray-300 rounded-md shadow-xl">
          <div className="space-y-2 p-4">
            <div className="bg-[#F3E8FE] p-5 mx-auto rounded-full w-max">
              <img src={pak} alt="" />
            </div>
            <h2 className="font-bold textxl">Choose Products</h2>
            <p className="text-gray-500">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
          <span className="bg-blue-800 absolute top-3 right-3 text-white p-2 rounded-full">
            <span>02</span>
          </span>
        </div>

        <div className="flex relative  items-center justify-center border text-center border-gray-300 rounded-md shadow-xl">
          <div className="space-y-2 p-4">
            <div className="bg-[#F3E8FE] p-5 mx-auto rounded-full w-max">
              <img src={rocket} alt="" />
            </div>
            <h2 className="font-bold textxl">Start Creating</h2>
            <p className="text-gray-500">
              Download and start using your premium tools immediately.
            </p>
          </div>
          <span className="bg-blue-800 absolute top-3 right-3 text-white p-2 rounded-full">
            <span>03</span>
          </span>
        </div>

      </div>
    </div>
  );
};

export default Steps;
