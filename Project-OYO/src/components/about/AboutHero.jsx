import React from "react";
import heroImg from "../../assets/images/home.jpeg";
import logo from "../../assets/images/title.png";

const HeroSection = ({ setSearch }) => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">

      <img
        src={heroImg}
        alt="hero"
        className="h-full w-full object-cover scale-105"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">

        <img
          src={logo}
          alt="logo"
          className="w-28 sm:w-36 md:w-44 mb-4 animate-bounce"
          data-aos="fade-down"
        />

        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight max-w-3xl"
          data-aos="fade-up"
        >
          Find and book the perfect stay
        </h1>

        <p
          className="text-sm sm:text-base text-gray-300 mt-3 mb-8 max-w-xl"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Affordable hotels, verified stays, and seamless booking experience.
        </p>

        <div
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 md:p-5 flex flex-col md:flex-row items-center gap-3 w-full max-w-3xl shadow-lg"
          data-aos="fade-up"
          data-aos-delay="300"
        >

          <div className="flex flex-col w-full md:flex-1 text-left">
            <label className="text-xs text-gray-300 ">
            </label>

            <input
              type="text"
              placeholder="Search city or hotel"
              onChange={(e) => setSearch && setSearch(e.target.value)}
              className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium w-full md:w-auto transition">
            Search
          </button>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;