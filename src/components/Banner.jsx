import React from "react";
import bannerImg from "../assets/banner.png";
import { Play } from "lucide-react";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col px-4 sm:flex-row max-w-5xl  mx-auto justify-between  items-center my-5 gap-5">
        <div className="flex-1 space-y-5">
          <span className=" bg-[#E1E7FF] py-2 px-4 rounded-full flex w-max gap-2">
            <p className="bg-blue-800 p-3 rounded-full"></p>{" "}
            <span className="text-blue-600 font-semibold">
              New: AI-Powered Tools Available
            </span>{" "}
          </span>

          <h2 className="text-4xl font-bold">
            Supercharge Your Digital Workflow
          </h2>
          <p className="text-gray-600">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex gap-2">
            <button className="btn btn-primary rounded-full">
              Explore Products
            </button>
            <button className="btn btn-soft rounded-full">
              <Play /> Watch Demo
            </button>
          </div>
        </div>
        <div className="flex-1 h-96 flex justify-end ">
          <img className=" h-full  " src={bannerImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
