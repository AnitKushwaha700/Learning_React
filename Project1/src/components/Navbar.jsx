import React from "react";
import logo from "../assets/images/oyoLogo.png";

const Navbar = () => {
  return (
    <>
      <div className=" flex justify-center sticky top-0 z-99">
        <div className="flex justify-between items-center gap-20 px-5 h-20">
          <div>
            <img src={logo} width="100px" alt="" />
          </div>
          <div className="flex gap-10 text-blue-500 font-bold">
            <a href="Home">Home</a>
            <a href="About">About</a>
            <a href="Services">Services</a>
            <a href="Case Study">Case Study</a>
            <a href="Portfolio">Portfolio</a>
            <a href="Pages">Pages</a>
            <a href="Blog">Blog</a>
            <a href="Contact">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
