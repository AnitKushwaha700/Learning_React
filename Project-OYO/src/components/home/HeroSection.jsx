import React from "react";
import { motion } from "framer-motion";

import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaSearch,
} from "react-icons/fa";

import heroImg from "../../assets/images/home.jpeg";
import logo from "../../assets/images/title.png";

const HeroSection = ({ setSearch }) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImg}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover animate-[slowZoom_12s_ease-in-out_infinite]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Animated Glow */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/20 blur-3xl rounded-full"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/20 blur-3xl rounded-full"
      />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-8 py-20">

        <div className="max-w-7xl w-full text-center text-white">

          {/* Logo */}
          <motion.img
            src={logo}
            alt="logo"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-32 sm:w-40 md:w-52 mx-auto mb-6 drop-shadow-2xl"
          />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-md px-5 py-2 rounded-full text-sm mb-6"
          >
            ✨ Trusted By 5M+ Travelers
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-5xl mx-auto"
          >
            Find Your Perfect
            <span className="block text-red-500">
              Stay Anywhere
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-300 mt-6 text-base md:text-xl max-w-3xl mx-auto leading-relaxed px-2"
          >
            Book affordable hotels, luxury suites, and unforgettable stays
            across India with seamless booking experience and premium comfort.
          </motion.p>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mt-12 bg-white/95 backdrop-blur-xl rounded-[30px] p-5 md:p-7 shadow-2xl max-w-6xl mx-auto"
          >

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

              {/* Destination */}
              <div className="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-4 bg-white">

                <FaMapMarkerAlt className="text-red-500 text-lg" />

                <div className="flex flex-col text-left w-full">
                  <label className="text-gray-400 text-xs mb-1">
                    Destination
                  </label>

                  <input
                    type="text"
                    placeholder="Search city or hotel"
                    onChange={(e) =>
                      setSearch && setSearch(e.target.value)
                    }
                    className="outline-none text-gray-700 bg-transparent text-sm w-full"
                  />
                </div>

              </div>

              {/* Check In */}
              <div className="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-4 bg-white">

                <FaCalendarAlt className="text-red-500 text-lg" />

                <div className="flex flex-col text-left w-full">
                  <label className="text-gray-400 text-xs mb-1">
                    Check In
                  </label>

                  <input
                    type="date"
                    className="outline-none text-gray-700 bg-transparent text-sm w-full"
                  />
                </div>

              </div>

              {/* Guests */}
              <div className="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-4 bg-white">

                <FaUsers className="text-red-500 text-lg" />

                <div className="flex flex-col text-left w-full">
                  <label className="text-gray-400 text-xs mb-1">
                    Guests
                  </label>

                  <select className="outline-none text-gray-700 bg-transparent text-sm w-full">
                    <option>2 Guests</option>
                    <option>4 Guests</option>
                    <option>6 Guests</option>
                  </select>
                </div>

              </div>

              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="bg-red-500 hover:bg-red-600 text-white rounded-2xl font-semibold flex items-center justify-center gap-3 transition duration-300 shadow-xl py-4"
              >

                <FaSearch />

                Search Hotels

              </motion.button>

            </div>

          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 max-w-5xl mx-auto"
          >

            {/* Card 1 */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl py-6 shadow-xl"
            >

              <h2 className="text-3xl md:text-4xl font-bold text-red-500">
                10K+
              </h2>

              <p className="text-sm text-gray-300 mt-2">
                Hotels
              </p>

            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl py-6 shadow-xl"
            >

              <h2 className="text-3xl md:text-4xl font-bold text-red-500">
                5M+
              </h2>

              <p className="text-sm text-gray-300 mt-2">
                Happy Guests
              </p>

            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl py-6 shadow-xl"
            >

              <h2 className="text-3xl md:text-4xl font-bold text-red-500">
                120+
              </h2>

              <p className="text-sm text-gray-300 mt-2">
                Cities
              </p>

            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl py-6 shadow-xl"
            >

              <h2 className="text-3xl md:text-4xl font-bold text-red-500">
                24/7
              </h2>

              <p className="text-sm text-gray-300 mt-2">
                Support
              </p>

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;