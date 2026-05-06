import React from "react";
import heroImg from "../../assets/images/home.jpeg";
import logo from "../../assets/images/title.png";

const HeroSection = ({ setSearch }) => {
  return (
    <section className="relative h-[95vh] w-full overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImg}
        alt="hero"
        className="h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">

        <div className="max-w-7xl w-full text-center text-white">

          {/* Logo */}
          <img
            src={logo}
            alt="logo"
            className="w-32 sm:w-40 md:w-52 mx-auto mb-5"
            data-aos="fade-down"
          />

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            Find Your Perfect
            <span className="text-red-500"> Stay Anywhere</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-gray-300 mt-5 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Book affordable hotels, luxury rooms, and comfortable stays
            across India with seamless online booking experience.
          </p>

          {/* Search Box */}
          <div
            className="mt-10 bg-white rounded-2xl p-4 md:p-5 shadow-2xl max-w-6xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

              {/* Location */}
              <div className="flex flex-col text-left">
                <label className="text-gray-500 text-sm mb-2">
                  Destination
                </label>

                <input
                  type="text"
                  placeholder="Search city or hotel"
                  onChange={(e) =>
                    setSearch && setSearch(e.target.value)
                  }
                  className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-red-500 text-gray-700"
                />
              </div>

              {/* Check In */}
              <div className="flex flex-col text-left">
                <label className="text-gray-500 text-sm mb-2">
                  Check In
                </label>

                <input
                  type="date"
                  className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-red-500 text-gray-700"
                />
              </div>

              {/* Check Out */}
              <div className="flex flex-col text-left">
                <label className="text-gray-500 text-sm mb-2">
                  Check Out
                </label>

                <input
                  type="date"
                  className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-red-500 text-gray-700"
                />
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button className="bg-red-500 hover:bg-red-600 text-white w-full py-3 rounded-xl font-semibold transition duration-300 shadow-md">
                  Search Hotels
                </button>
              </div>

            </div>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="450"
          >

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl py-5">
              <h2 className="text-2xl md:text-3xl font-bold text-red-500">
                10K+
              </h2>

              <p className="text-sm text-gray-300 mt-2">
                Hotels
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl py-5">
              <h2 className="text-2xl md:text-3xl font-bold text-red-500">
                5M+
              </h2>

              <p className="text-sm text-gray-300 mt-2">
                Happy Guests
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl py-5">
              <h2 className="text-2xl md:text-3xl font-bold text-red-500">
                120+
              </h2>

              <p className="text-sm text-gray-300 mt-2">
                Cities
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl py-5">
              <h2 className="text-2xl md:text-3xl font-bold text-red-500">
                24/7
              </h2>

              <p className="text-sm text-gray-300 mt-2">
                Support
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;