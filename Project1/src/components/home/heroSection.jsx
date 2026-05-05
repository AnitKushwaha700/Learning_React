import React from "react";
import heroImg from "../../assets/images/home.jpeg";
import logo from "../../assets/images/title.png";

const HeroSection = () => {
  return (
    <div className="relative h-[65vh] sm:h-[75vh] md:h-[80vh] w-full">

      <img
        src={heroImg}
        alt="hero"
        className="h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">

        <img
          src={logo}
          alt="logo"
          className="w-28 sm:w-36 md:w-44 mb-3"
        />

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center leading-tight">
          Book Hotels Easily & Quickly
        </h1>

        <p className="text-sm sm:text-base text-gray-300 mt-2 mb-6 text-center">
          Best prices. Instant booking. Trusted stays across India.
        </p>

        <div className="rounded-2xl p-4 md:p-5 flex flex-col md:flex-row items-center gap-3 w-full max-w-4xl shadow-2xl">

          <div className="flex flex-col w-full md:flex-1">
            <label className="text-sm text-white mb-2">Location</label>
            <input
              type="text"
              placeholder="Enter city or hotel"
              className="p-3 text-white outline-none border border-white rounded-lg  focus:border-red-500"
            />
          </div>

          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold w-full md:w-auto mt-2 md:mt-5 transition duration-300">
            Search Hotels
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;