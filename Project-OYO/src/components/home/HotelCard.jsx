import React from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

const HotelCard = ({ hotel }) => {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300 group"
      data-aos="fade-up"
    >

      <div className="relative overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
        />

        <span className="absolute top-3 left-3 bg-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-full shadow">
          ₹{hotel.price}/night
        </span>

        <div className="absolute top-3 right-3 bg-white text-gray-900 text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1 shadow">
          <FaStar className="text-yellow-500 text-xs" />
          {hotel.rating || "4.5"}
        </div>
      </div>

      <div className="p-5">

        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {hotel.name}
        </h2>

        <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
          <FaMapMarkerAlt className="text-red-500 text-xs" />
          <span>{hotel.location}</span>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center mt-5">

          <span className="text-xs text-green-600 font-medium">
            Free cancellation
          </span>

          <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600 transition">
            Book Now
          </button>

        </div>

      </div>
    </div>
  );
};

export default HotelCard;