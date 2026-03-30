import React from "react";

const CtaSection = () => {
  return (
    <div className="w-full px-4 bg-[#7227F8] py-20 flex items-center justify-center">
      <div className="text-center space-y-3">
        <h2 className="font-bold text-3xl text-white">
        Ready to Transform Your Workflow?
      </h2>
      <p className="text-white/80">
        Join thousands of professionals who are already using Digitools to work
        smarter.Start your free trial today.
      </p>
      <div className="  text-center">
        <button className="btn  bg-white text-[#7227F8] border-white rounded-full  ">
          Explore Products
        </button>

        <button className="btn ml-3 bg-[#7227F8] text-white border-white rounded-full ">
          View Pricing
        </button>
        
      </div>
      <h1 className="text-white/80">14-day free trial • No credit card required • Cancel anytime</h1>
      </div>
    </div>
  );
};

export default CtaSection;
