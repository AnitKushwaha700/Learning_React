// Home.jsx

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

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

  // Filter Hotels
  const filteredHotels = useMemo(() => {
    return hotels.filter((hotel) =>
      hotel.location.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <main className="overflow-hidden bg-white">

      {/* Hero Section */}
      <HeroSection setSearch={setSearch} />

      {/* Popular Cities */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
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
      >
        <PopularCities />
      </motion.div>

      {/* Hotels Section */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.1,
        }}
        viewport={{
          once: true,
        }}
      >
        <PopularHotels hotels={filteredHotels} />
      </motion.div>

      {/* Offer Banner */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
      >
        <OfferBanner />
      </motion.div>

      {/* Why Choose Us */}
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
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
      >
        <WhyChooseUs />
      </motion.div>

      {/* Testimonials */}
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
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
      >
        <Testimonials />
      </motion.div>

      {/* Newsletter */}
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
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
      >
        <Newsletter />
      </motion.div>

    </main>
  );
};

export default Home;