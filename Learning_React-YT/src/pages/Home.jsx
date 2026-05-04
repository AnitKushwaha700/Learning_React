import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import UseState from "../components/UseState";
import UseEffect from "../components/UseEffect"
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <UseState />
      <UseEffect />
      <Footer />
    </>
  );
};

export default Home;
