import React from "react";

const cities = [
  { name: "Delhi", img: "https://images.unsplash.com/photo-1587474260584-136574528ed5" },
  { name: "Mumbai", img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f" },
  { name: "Goa", img: "https://images.unsplash.com/photo-1587922546307-776227941871" },
  { name: "Kolkata", img: "https://images.unsplash.com/photo-1558431382-27e303142255" },
];

const PopularCities = () => {
  return (
    <section className="min-h-[60vh] flex items-center bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-6 w-full">

        <h2 className="text-3xl font-semibold mb-8">
          Explore Popular Cities
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {cities.map((city, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden group">
              <img
                src={city.img}
                alt={city.name}
                className="h-44 w-full object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">
                  {city.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularCities;