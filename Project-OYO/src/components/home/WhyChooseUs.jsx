import React from "react";
import {
  ShieldCheck,
  BadgeDollarSign,
  MapPinned,
  Headset,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Verified Hotels",
    description:
      "Every property is carefully verified for quality, safety, and comfort.",
    icon: ShieldCheck,
  },

  {
    id: 2,
    title: "Affordable Prices",
    description:
      "Get the best hotel deals with exciting discounts and offers.",
    icon: BadgeDollarSign,
  },

  {
    id: 3,
    title: "Prime Locations",
    description:
      "Stay near airports, tourist attractions, and business hubs.",
    icon: MapPinned,
  },

  {
    id: 4,
    title: "24/7 Support",
    description:
      "Our support team is always available for booking assistance.",
    icon: Headset,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-red-500 font-semibold uppercase tracking-[3px]">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 leading-tight">
            Experience Comfort
            <span className="text-red-500"> Like Never Before</span>
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-lg">
            Discover premium stays, affordable pricing, and seamless hotel
            booking experiences designed for modern travelers.
          </p>

        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-500 overflow-hidden"
              >

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-red-500 flex items-center justify-center shadow-lg mb-6 group-hover:rotate-6 transition duration-500">

                  <Icon className="text-white w-8 h-8" />

                </div>

                {/* Title */}
                <h3 className="relative z-10 text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-gray-500 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom Line Animation */}
                <div className="relative z-10 mt-6 w-0 group-hover:w-full h-1 bg-red-500 rounded-full transition-all duration-500"></div>

              </motion.div>
            );
          })}

        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;