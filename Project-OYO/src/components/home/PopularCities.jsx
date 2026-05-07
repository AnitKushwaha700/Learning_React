import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const cities = [
  {
    name: "Delhi",
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
    hotels: "2,500+ Hotels",
  },

  {
    name: "Mumbai",
    img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
    hotels: "1,800+ Hotels",
  },

  {
    name: "Goa",
    img: "https://images.unsplash.com/photo-1587922546307-776227941871",
    hotels: "950+ Resorts",
  },

  {
    name: "Kolkata",
    img: "https://images.unsplash.com/photo-1558431382-27e303142255",
    hotels: "1,200+ Hotels",
  },
];

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
    },
  },
};

const PopularCities = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gray-50 overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-100 blur-3xl rounded-full opacity-40"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-100 blur-3xl rounded-full opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: -40,
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
          className="text-center mb-14"
        >

          <p className="text-red-500 font-semibold uppercase tracking-[3px]">
            Popular Destinations
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
            Explore Popular Cities
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Discover luxury stays, affordable hotels, and premium resorts
            in India's most loved travel destinations.
          </p>

        </motion.div>

        {/* Cities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >

          {cities.map((city, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{
                duration: 0.4,
              }}
              className="group relative rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
            >

              {/* Image */}
              <div className="relative h-[350px] overflow-hidden">

                <img
                  src={city.img}
                  alt={city.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute top-5 left-5 bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-medium">

                  ✨ Trending

                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6 w-full">

                  <div className="flex items-center gap-2 text-red-400 mb-3">

                    <FaMapMarkerAlt />

                    <span className="text-sm font-medium">
                      India
                    </span>

                  </div>

                  <h3 className="text-3xl font-bold text-white">
                    {city.name}
                  </h3>

                  <p className="text-gray-300 mt-2 text-sm">
                    {city.hotels}
                  </p>

                  {/* Explore Button */}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="mt-5 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl text-sm font-semibold transition duration-300 shadow-lg"
                  >
                    Explore Stays
                  </motion.button>

                </div>

              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default PopularCities;