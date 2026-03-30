import { ShoppingCart } from "lucide-react";
import React from "react";

const NavBar = ({cart,setCart}) => {
  return (
    <div className="navbar sticky top-0 z-[999] bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="font-semibold">
              <a href="">Products</a>
            </li>
            <li className="font-semibold">
              <a href="">Features</a>
            </li>
            <li className="font-semibold">
              <a href="">Pricing</a>
            </li>
            <li className="font-semibold">
              <a href="">Testimonials</a>
            </li>
            <li className="font-semibold">
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <a className="font-bold btn-ghost text-xl">DigiTools</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-semibold">
            <a href="">Products</a>
          </li>
          <li className="font-semibold">
            <a href="">Features</a>
          </li>
          <li className="font-semibold">
            <a href="">Pricing</a>
          </li>
          <li className="font-semibold">
            <a href="">Testimonials</a>
          </li>
          <li className="font-semibold">
            <a href="">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="relative">
          <ShoppingCart />
          {
            cart.length===0 ? ``:<span className="absolute -top-3 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full">
           {
            cart.length && `${cart.length}`
           }
          </span>
          }
        </div>
        <a className="">Login</a>
        <a className="btn rounded-full btn-primary">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;
