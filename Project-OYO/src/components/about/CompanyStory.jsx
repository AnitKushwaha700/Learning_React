import React from "react";
import { motion } from "framer-motion";

import {
  FaStar,
  FaMapMarkerAlt,
  FaWifi,
  FaSwimmingPool,
  FaUtensils,
} from "react-icons/fa";

const HotelCard = ({ hotel }) => {

  // Safety Check
  if (!hotel) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
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
      whileHover={{
        y: -10,
      }}
      className="bg-white rounded-[30px] overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-500 group"
    >

      {/* Image Section */}
      <div className="relative overflow-hidden h-[260px]">

        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

        {/* Price Badge */}
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg"
        >

          ₹{hotel.price}/night

        </motion.div>

        {/* Rating */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-gray-900 text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">

          <FaStar className="text-yellow-500" />

          {hotel.rating || "4.5"}

        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 p-5 w-full">

          <h2 className="text-2xl font-bold text-white line-clamp-1">
            {hotel.name}
          </h2>

          <div className="flex items-center gap-2 text-gray-200 mt-2 text-sm">

            <FaMapMarkerAlt className="text-red-400" />

            <span>
              {hotel.location}
            </span>

          </div>

        </div>

      </div>

      {/* Content */}
      <div className="p-5">

        {/* Amenities */}
        <div className="flex flex-wrap gap-3">

          <div className="bg-red-50 text-red-500 px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2">

            <FaWifi />

            Free Wifi

          </div>

          <div className="bg-blue-50 text-blue-500 px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2">

            <FaSwimmingPool />

            Pool

          </div>

          <div className="bg-orange-50 text-orange-500 px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2">

            <FaUtensils />

            Breakfast

          </div>

        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center mt-7 gap-4">

          <div>

            <p className="text-sm text-gray-500">
              Free cancellation
            </p>

            <h4 className="text-lg font-bold text-gray-800 mt-1">
              Book now & save more
            </h4>

          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-2xl text-sm font-semibold transition duration-300 shadow-lg whitespace-nowrap"
          >

            Book Now

          </motion.button>

        </div>

      </div>

    </motion.div>
  );
};

export default HotelCard;