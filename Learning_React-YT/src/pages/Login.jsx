import React from "react";
import LoginCard from "../components/LoginCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <img
          src="foodTable.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-20">
          <Navbar />
        </div>

        {/* Login Card Center */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <LoginCard />
        </div>
        <div className=""></div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
