import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import UseState from "../components/UseState";
import UseEffect from "../components/UseEffect";
import UseContext from "../components/UseContext";
import UseRef from "../components/UseRef";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <UseState />
      <UseEffect />
      <UseContext />
      <UseRef />
      <Footer />
    </>
  );
};

export default Home;
