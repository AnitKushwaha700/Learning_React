import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center items-center h-18">
        <div className="w-[68%]">
          <div className="flex justify-between items-center">
            
            <div className="font-bold text-3xl">
              Clinic
            </div>

            <div className="flex gap-8 text-md">

              <Link to="/"
                className="relative group text-blue-600"
              >
                Home

                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600"></span>
              </Link>

              <Link to="/about"
                className="relative group hover:text-blue-700"
              >
                About

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <a
                href=""
                className="relative group hover:text-blue-700"
              >
                Departments

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a
                href=""
                className="relative group hover:text-blue-700"
              >
                Services

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a
                href=""
                className="relative group hover:text-blue-700"
              >
                Doctors

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

              <div className="relative group flex items-center gap-1 cursor-pointer hover:text-blue-700">
                <span>More Pages</span>

                <IoIosArrowDown className="opacity-60" />

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </div>

              <div className="relative group flex items-center gap-1 cursor-pointer hover:text-blue-700">
                <span>Dropdown</span>

                <IoIosArrowDown className="opacity-60" />

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </div>

              <a
                href=""
                className="relative group hover:text-blue-700"
              >
                Contact

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;