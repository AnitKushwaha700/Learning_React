import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const images = [
  "/bgImage1.jpg",
  "/bgImage2.jpg",
  "/bgImage3.jpg",
  "/bgImage4.jpg",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // 🔁 Auto slide (fixed version)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Images */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`slide-${i}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay (optional but looks better) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 text-white text-3xl bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
      >
        <IoIosArrowBack />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 text-white text-3xl bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
      >
        <IoIosArrowForward />
      </button>

      <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center text-white text-center">
        <h1 className="text-5xl font-bold">
          Your Favorite Food, <br /> Delivered Fast
        </h1>
        <p className="mt-2 text-xl">
          Order from thousands of restaurants and get it delivered to your
          doorstep
        </p>
        <div className="flex gap-5 font-medium py-5">
          <button className="px-7 py-2.5 bg-(--color-primary) rounded-md">
            Sign up
          </button>
          <button className="px-7 py-2.5 bg-white text-black rounded-md">
            Order Now
          </button>
        </div>
        <div className="bg-(--color-primary-content) text-(--color-primary) py-3 px-5 flex items-center gap-3 w-3xl rounded-md animate-bounce">
          <IoSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search restaurnts or dishes..."
            className="text-var(--color-primary) w-full outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
