import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/home/HeroSection";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <div className="flex gap-4 p-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Home;