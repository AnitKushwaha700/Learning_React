import React from "react";
import { motion } from "framer-motion";

const OfferBanner = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-red-500 via-red-600 to-orange-500">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[4px] text-red-100 font-semibold mb-5">
              Limited Time Offer
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Save Up To
              <span className="block text-yellow-300">
                50% OFF
              </span>
              On Your First Booking
            </h2>

            <p className="text-red-100 text-lg mt-6 leading-relaxed max-w-xl">
              Experience luxury stays, premium rooms, and unforgettable
              hospitality at unbeatable prices across India.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold shadow-xl transition duration-300">
                Explore Hotels
              </button>

              <button className="border border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-2xl font-semibold transition duration-300">
                View Offers
              </button>

            </div>

          </motion.div>

          {/* Right Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >

            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-2xl">

              <h3 className="text-4xl font-bold text-white">
                10000+
              </h3>

              <p className="text-red-100 mt-3">
                Hotels Available
              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-2xl">

              <h3 className="text-4xl font-bold text-white">
                5M+
              </h3>

              <p className="text-red-100 mt-3">
                Happy Customers
              </p>

            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-2xl">

              <h3 className="text-4xl font-bold text-white">
                120+
              </h3>

              <p className="text-red-100 mt-3">
                Cities Covered
              </p>

            </div>

            {/* Card 4 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-2xl">

              <h3 className="text-4xl font-bold text-white">
                24/7
              </h3>

              <p className="text-red-100 mt-3">
                Customer Support
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default OfferBanner;