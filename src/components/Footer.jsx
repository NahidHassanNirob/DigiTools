import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div  className="w-full bg-neutral">
      <footer className="footer max-w-5xl mx-auto  px-4 md:flex justify-between  sm:footer-horizontal  text-neutral-content py-10">
        <nav className="max-w-[250px]">
          <h2 className="text-3xl font-bold">DigiTools</h2>
          <p className="text-white/80">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
        </nav>
        <nav className="">
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Templates</a>
          <a className="link link-hover">Integration</a>
        </nav>
        <nav className="">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="">
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Documentation</a>
          
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Community</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="">
          <h6 className="footer-title">Social Links</h6>
          <div className="flex items-center gap-2">
            <a href="https://github.com/NahidHassanNirob"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/nirob-hossen/"><FaLinkedin /></a>
          <a href="https://www.facebook.com/7mv4zxsmb3"><FaFacebook/></a>
          <a href=""><FaWhatsappSquare /></a>
          </div>
          <div>
            
          </div> 
        </nav>
      </footer>
      <div className="max-w-5xl mx-auto px-4">
       
        <hr  className="text-gray-700" />
        <div className="flex flex-col sm:flex-row justify-between items-center text-white/50 text-[14px]">
          <h2 className="mt-4 sm:mt-0">© 2026 Digitools. All rights reserved.</h2>
          <ul className="flex my-4 gap-5">
            <li className="link link-hover">Privacy Policy</li>
            <li className="link link-hover">Terms of Service</li>
            <li className="link link-hover">Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
