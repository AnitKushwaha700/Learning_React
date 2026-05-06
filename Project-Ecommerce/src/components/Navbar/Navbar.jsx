import React from "react";
import logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";


const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white">
        <div className="bg-amber-300 py-2">
          <div className="container flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={logo} alt="logo" className="w-10" />
                Shopsy
              </a>
            </div>
            <div>
              <div className="group flex justify-between items-center">
                <input
                  type="text"
                  placeholder="search"
                  className="w-[200px] bg-white sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
                  />
                  <IoMdSearch/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
