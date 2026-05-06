import React, { useState } from "react";

import HeroSection from "../components/home/HeroSection";
import PopularCities from "../components/home/PopularCities";
import PopularHotels from "../components/home/PopularHotels";
import OfferBanner from "../components/home/OfferBanner";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";

import hotels from "../data/hotels";

const Home = () => {
  const [search, setSearch] = useState("");

  // Search Filter
  const filteredHotels = hotels.filter((hotel) =>
    hotel.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="overflow-hidden">

      {/* Hero Section */}
      <HeroSection setSearch={setSearch} />

      {/* Popular Cities */}
      <PopularCities />

      {/* Hotels Section */}
      <PopularHotels hotels={filteredHotels} />

      {/* Offer Banner */}
      <OfferBanner />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />

    </main>
  );
};

export default Home;