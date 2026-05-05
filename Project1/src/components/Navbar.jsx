import React, { useState } from "react";
import logo from "../assets/images/oyoLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 h-16">

        <img src={logo} alt="logo" className="w-28 md:w-32" />

        <div className="hidden md:flex gap-8 text-blue-500 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6 text-blue-500 font-semibold bg-white shadow-md">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
          <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;