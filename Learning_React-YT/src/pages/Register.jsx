import React from "react";
import RegisterCard from "../components/RegisterCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  return (
    <>
      <div className="relative min-h-screen flex flex-col">
        {/* Background */}
        <img
          src="foodTable.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        {/* Navbar */}
        <Navbar />

        {/* Center Content */}
        <div className="flex-grow flex items-center justify-center">
          <RegisterCard />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Register;
