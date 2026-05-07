import React from "react";
import { motion } from "framer-motion";

import {
  FaMapMarkerAlt,
  FaWifi,
  FaSwimmingPool,
  FaUtensils,
  FaStar,
} from "react-icons/fa";

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
    },
  },
};

const PopularHotels = ({ hotels }) => {
  return (
    <section className="relative py-20 md:py-28 bg-gray-50 overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: -40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >

          <p className="text-red-500 font-semibold uppercase tracking-[3px]">
            Popular Hotels
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 leading-tight">
            Discover Your Perfect Stay
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Explore luxury resorts, premium hotels, and affordable stays
            across India’s most loved travel destinations.
          </p>

        </motion.div>

        {/* Hotel Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
        >

          {hotels.map((hotel) => (
            <motion.div
              key={hotel.id}
              variants={cardVariants}
              whileHover={{
                y: -12,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group bg-white rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 border border-gray-100"
            >

              {/* Hotel Image */}
              <div className="relative overflow-hidden h-[320px]">

                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Discount Badge */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                  }}
                  className="absolute top-5 left-5 bg-red-500 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-xl"
                >
                  {hotel.discount}
                </motion.div>

                {/* Rating */}
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md text-gray-800 text-sm font-semibold px-4 py-2 rounded-full shadow-xl flex items-center gap-2">

                  <FaStar className="text-yellow-500" />

                  {hotel.rating}

                </div>

                {/* Floating Bottom Content */}
                <div className="absolute bottom-0 left-0 p-6 w-full">

                  {/* Category */}
                  <p className="text-red-400 text-sm font-medium mb-2">
                    {hotel.category}
                  </p>

                  {/* Hotel Name */}
                  <h3 className="text-3xl font-bold text-white leading-tight">
                    {hotel.name}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-2 mt-3 text-gray-300 text-sm">

                    <FaMapMarkerAlt className="text-red-400" />

                    <span>{hotel.location}</span>

                  </div>

                </div>

              </div>

              {/* Card Content */}
              <div className="p-6">

                {/* Amenities */}
                <div className="flex flex-wrap gap-3">

                  {hotel.amenities.map((item, index) => (
                    <motion.span
                      key={index}
                      whileHover={{
                        scale: 1.05,
                      }}
                      className="bg-gray-100 text-gray-700 text-xs px-4 py-2 rounded-full flex items-center gap-2"
                    >

                      {index === 0 && <FaWifi />}
                      {index === 1 && <FaSwimmingPool />}
                      {index === 2 && <FaUtensils />}

                      {item}

                    </motion.span>
                  ))}

                </div>

                {/* Bottom Section */}
                <div className="flex items-center justify-between mt-8 gap-4">

                  {/* Price */}
                  <div>

                    <p className="text-sm text-gray-500 mb-1">
                      Starting from
                    </p>

                    <h4 className="text-3xl font-bold text-gray-800">

                      ₹{hotel.price}

                      <span className="text-base font-normal text-gray-500">
                        /night
                      </span>

                    </h4>

                  </div>

                  {/* Button */}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-2xl font-semibold transition duration-300 shadow-lg whitespace-nowrap"
                  >
                    Book Now
                  </motion.button>

                </div>

              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default PopularHotels;