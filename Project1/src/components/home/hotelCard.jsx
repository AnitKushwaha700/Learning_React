import React from "react";

const HotelCard = ({ hotel }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{hotel.name}</h2>
        <p className="text-gray-500 text-sm">{hotel.location}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-red-500 font-bold">
            ₹{hotel.price}/night
          </span>
          <button className="bg-black text-white px-3 py-1 rounded-md text-sm">
            Book Now, Come Fast
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;