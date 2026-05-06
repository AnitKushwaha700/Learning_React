import React from "react";
import { FaRupeeSign, FaHotel, FaHeadset } from "react-icons/fa";

const features = [
  {
    title: "Affordable Pricing",
    desc: "Transparent and budget-friendly stays across all cities.",
    icon: <FaRupeeSign />,
  },
  {
    title: "Verified Hotels",
    desc: "Every property is quality-checked for a reliable experience.",
    icon: <FaHotel />,
  },
  {
    title: "24/7 Support",
    desc: "Dedicated assistance whenever you need help.",
    icon: <FaHeadset />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="min-h-[70vh] flex items-center bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-6 w-full">

        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Why Choose Us
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Reliable stays, transparent pricing, and seamless booking experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group lg:gap-5"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-red-500 text-3xl mb-4 group-hover:scale-110 transition animate-bounce">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-2 animate-bounce">
                {item.title}
              </h3>

              <p className="text-gray-500 text-lg leading-relaxed max-w-xs animate-bounce">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;