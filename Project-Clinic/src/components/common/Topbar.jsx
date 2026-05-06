import React from "react";

import { MdEmail } from "react-icons/md";

import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMobileAlt,
} from "react-icons/fa";

const Topbar = () => {
  return (
    <>
      <div className="bg-blue-600 flex items-center justify-center h-10">
        <div className="container w-[68%]">
          <div className="flex justify-between items-center text-white">
            <div className="flex items-center gap-5 text-sm ">
              <div className="flex items-center gap-1">
                <MdEmail />
                <a href="#" className="hover:underline">contact@example.com</a>
              </div>
              <div className="flex items-center gap-1">
                <FaMobileAlt />
                +1 5589 55488 55
              </div>
            </div>
            <div className="flex gap-5 opacity-75">
              <FaTwitter />
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
