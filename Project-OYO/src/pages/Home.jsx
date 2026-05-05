import React, { useState } from "react";
import HeroSection from "../components/home/HeroSection";
import HotelCard from "../components/home/HotelCard";
import hotels from "../data/hotels";

import PopularCities from "../components/home/PopularCities";
import Offers from "../components/home/Offers";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Newsletter from "../components/home/Newsletter";

const Home = () => {
  const [search, setSearch] = useState("");

  const filteredHotels = hotels.filter((hotel) =>
    (hotel.city || "").toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div>
        <HeroSection setSearch={setSearch} />

        <PopularCities />

        <div className="max-w-screen-2xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-bold mb-6">Available Hotels</h2>

          {filteredHotels.length === 0 ? (
            <p className="text-center text-gray-500 ">No hotels found 😢</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 ">
              {filteredHotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          )}
        </div>

        <Offers />

        <WhyChooseUs />

        <Newsletter />
      </div>
    </>
  );
};

export default Home;
