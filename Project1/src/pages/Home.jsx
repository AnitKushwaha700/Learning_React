import React from "react";
import HeroSection from "../components/home/HeroSection";
import HotelCard from "../components/home/HotelCard";
import hotels from "../data/hotels";

const Home = () => {
  return (
    <div>
      <HeroSection />

      <div
        className="max-w-7xl mx-auto px-4 py-10 
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                gap-6 lg:gap-10"
      >
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default Home;
