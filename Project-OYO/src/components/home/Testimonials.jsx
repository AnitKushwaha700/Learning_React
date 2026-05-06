import React from "react";
import testimonials from "../../data/testimonials";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-red-500 font-semibold uppercase tracking-[3px]">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
            What Our Guests Say
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-lg">
            Thousands of travelers trust our platform for seamless booking
            and unforgettable hotel experiences.
          </p>

        </motion.div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >

          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-500 h-full"
              >

                {/* User */}
                <div className="flex items-center gap-4 mb-6">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-red-100"
                  />

                  <div>

                    <h3 className="text-xl font-bold text-gray-800">
                      {item.name}
                    </h3>

                    <p className="text-gray-500 text-sm">
                      {item.city}
                    </p>

                  </div>

                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">

                  {[...Array(item.rating)].map((_, index) => (
                    <span key={index} className="text-yellow-400 text-lg">
                      ⭐
                    </span>
                  ))}

                </div>

                {/* Review */}
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  “{item.review}”
                </p>

              </motion.div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;