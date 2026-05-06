import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-16 shadow-2xl"
        >

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left Content */}
            <div>

              <p className="uppercase tracking-[4px] text-red-400 font-semibold mb-5">
                Stay Connected
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Get Exclusive Hotel Deals
                <span className="block text-red-500 mt-2">
                  Straight To Your Inbox
                </span>
              </h2>

              <p className="text-gray-300 mt-6 text-lg leading-relaxed max-w-xl">
                Subscribe to receive exclusive discounts, luxury hotel
                offers, travel inspiration, and booking updates before
                everyone else.
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-4 mt-8">

                <div className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                  ✨ Exclusive Offers
                </div>

                <div className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                  🏨 Premium Hotels
                </div>

                <div className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                  ⚡ Early Access
                </div>

              </div>

            </div>

            {/* Right Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">

              <h3 className="text-3xl font-bold text-gray-800 mb-3">
                Subscribe Now
              </h3>

              <p className="text-gray-500 mb-8">
                Join thousands of travelers receiving amazing deals weekly.
              </p>

              {/* Form */}
              <form className="space-y-5">

                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-red-500 transition"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-red-500 transition"
                  />
                </div>

                <button className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-semibold text-lg transition duration-300 shadow-lg">
                  Subscribe Now
                </button>

              </form>

              {/* Bottom Text */}
              <p className="text-xs text-gray-400 mt-5 text-center leading-relaxed">
                By subscribing, you agree to receive promotional emails,
                hotel offers, and travel updates.
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Newsletter;