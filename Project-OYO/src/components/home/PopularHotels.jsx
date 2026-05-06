import React from "react";

const PopularHotels = ({ hotels }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-red-500 font-semibold uppercase tracking-wider">
            Popular Hotels
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            Discover Your Perfect Stay
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Explore top-rated hotels, luxury resorts, and affordable stays
            across India's most popular destinations.
          </p>
        </div>

        {/* Hotel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group"
              data-aos="fade-up"
            >
              {/* Hotel Image */}
              <div className="relative overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {hotel.discount}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                  ⭐ {hotel.rating}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                {/* Category */}
                <p className="text-sm text-red-500 font-medium mb-2">
                  {hotel.category}
                </p>

                {/* Hotel Name */}
                <h3 className="text-2xl font-bold text-gray-800">
                  {hotel.name}
                </h3>

                {/* Location */}
                <p className="text-gray-500 mt-2">📍 {hotel.location}</p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {hotel.amenities.map((item, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-center mt-6">
                  {/* Price */}
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>

                    <h4 className="text-2xl font-bold text-gray-800">
                      ₹{hotel.price}
                      <span className="text-sm font-normal text-gray-500">
                        /night
                      </span>
                    </h4>
                  </div>

                  {/* Button */}
                  <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition duration-300 shadow-md">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularHotels;
