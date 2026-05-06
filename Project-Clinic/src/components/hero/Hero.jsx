import React from "react";
import { FiShield } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div>
        <div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full text-blue-600 text-sm">
              <FiShield />
              <span>Accredited</span>
            </div>

            <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full text-blue-600 text-sm">
              <FiClock />
              <span>24/7 Emergency</span>
            </div>

            <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full text-blue-600 text-sm">
              <FaStar />
              <span>4.9/5 Rating</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold">
            Excellence in <span className="text-blue-600">Healthcare</span> With Compassionate Care
          </h1>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
