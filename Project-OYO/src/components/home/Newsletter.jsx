import React from "react";
import { motion } from "framer-motion";

import {
  FaCheckCircle,
  FaHotel,
  FaBolt,
} from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[#f8f9fb] overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-100 blur-3xl rounded-full opacity-50"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-100 blur-3xl rounded-full opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="bg-white border border-gray-200 rounded-[40px] p-6 sm:p-8 md:p-14 shadow-xl"
        >

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left Content */}
            <div>

              {/* Small Badge */}
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-500 px-5 py-2 rounded-full text-sm font-semibold mb-6">

                <FaBolt />

                Stay Updated

              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">

                Get OYO-Style Hotel
                <span className="block text-red-500 mt-2">
                  Deals Before Anyone Else
                </span>

              </h2>

              {/* Description */}
              <p className="text-gray-500 mt-6 text-base md:text-lg leading-relaxed max-w-xl">

                Subscribe and receive exclusive hotel discounts,
                weekend getaway offers, luxury stay recommendations,
                and early access booking deals directly in your inbox.

              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-4 mt-8">

                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-5 py-3 rounded-2xl text-sm font-medium"
                >

                  <FaCheckCircle className="text-red-500" />

                  Exclusive Offers

                </motion.div>

                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-5 py-3 rounded-2xl text-sm font-medium"
                >

                  <FaHotel className="text-red-500" />

                  Premium Hotels

                </motion.div>

                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-5 py-3 rounded-2xl text-sm font-medium"
                >

                  <FaBolt className="text-red-500" />

                  Early Access

                </motion.div>

              </div>

            </div>

            {/* Right Form */}
            <motion.div
              whileHover={{
                y: -5,
              }}
              transition={{
                duration: 0.3,
              }}
              className="bg-[#fafafa] border border-gray-200 rounded-[32px] p-6 md:p-8 shadow-lg"
            >

              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Subscribe Now
              </h3>

              <p className="text-gray-500 mb-8 leading-relaxed">
                Join thousands of travelers discovering affordable
                stays and luxury hotel experiences every week.
              </p>

              {/* Form */}
              <form className="space-y-5">

                {/* Name */}
                <div>

                  <label className="text-sm font-medium text-gray-600 block mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-white border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition"
                  />

                </div>

                {/* Email */}
                <div>

                  <label className="text-sm font-medium text-gray-600 block mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-white border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition"
                  />

                </div>

                {/* Button */}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-semibold text-lg transition duration-300 shadow-lg"
                >

                  Subscribe Now

                </motion.button>

              </form>

              {/* Bottom Text */}
              <p className="text-xs text-gray-400 mt-5 text-center leading-relaxed">

                By subscribing, you agree to receive hotel offers,
                promotional updates, and travel recommendations.

              </p>

            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Newsletter;