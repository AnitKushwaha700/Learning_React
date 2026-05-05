import React from "react";
import heroImg from "../../assets/images/home.jpeg";
import logo from "../../assets/images/title.png";

const HeroSection = () => {
  return (
    <div className="relative h-[70vh] w-full">
      <img src={heroImg} alt="hero" className="h-full w-full object-cover" />

      <div className=" absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <img src={logo} alt="logo" className="w-50 mb-4" />

        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Find Your Perfect Stay
        </h1>

        <div className=" rounded-lg p-3 flex flex-col md:flex-row gap-3 w-full max-w-4xl shadow-lg">
          <input
            type="text"
            placeholder="Enter location"
            className="flex-1 p-3 text-black outline-none border rounded-md"
          />

          <input
            type="date"
            className="p-3 text-black outline-none border rounded-md"
          />

          <input
            type="number"
            placeholder="Guests"
            className="w-24 p-3 text-black outline-none border rounded-md"
          />

          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-semibold">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
