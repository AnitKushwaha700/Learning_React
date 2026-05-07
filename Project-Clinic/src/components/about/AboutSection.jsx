import React from "react";

import { motion } from "framer-motion";

import { FiHeart } from "react-icons/fi";

import aboutImg from "../../assets/images/facilities-9.webp";

const HomeAbout = () => {
  return (
    <>
      {/* ABOUT SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        {/* CENTER CONTAINER */}
        <div className="w-full flex justify-center">
          <div className="w-[68%] max-w-[1320px]">
            {/* GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* =====================================================
                              LEFT CONTENT
              ===================================================== */}

              <motion.div
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
              >
                {/* HEADING */}
                <h2
                  className="
    w-[760px]
    text-[58px]
    leading-[1.18]
    tracking-[-2.5px]
    font-extralight
    text-[#11224d]
    mb-8
  "
                >
                  Compassionate Care, Advanced Medicine
                </h2>

                {/* LEAD TEXT */}
                <p
                  className="
                    text-[17px]
                    leading-[1.9]
                    text-gray-500
                    mb-8
                    max-w-[620px]
                  "
                >
                  For over two decades, we've been dedicated to providing
                  exceptional healthcare that combines cutting-edge medical
                  technology with the personal touch our patients deserve.
                </p>

                {/* PARAGRAPH */}
                <p
                  className="
                    text-[17px]
                    leading-[2]
                    text-gray-600
                    mb-12
                    max-w-[620px]
                  "
                >
                  Our multidisciplinary team of specialists works
                  collaboratively to ensure every patient receives comprehensive
                  care tailored to their unique needs. From preventive services
                  to complex procedures, we maintain the highest standards of
                  medical excellence while fostering an environment of trust and
                  healing.
                </p>

                {/* STATS */}
                <div className="flex flex-wrap gap-16 mb-12">
                  {/* ITEM */}
                  <motion.div whileHover={{ y: -5 }}>
                    <h3
                      className="
                        text-[38px]
                        font-[300]
                        text-blue-600
                      "
                    >
                      15000+
                    </h3>

                    <p className="text-gray-500 text-base mt-1">
                      Patients Served
                    </p>
                  </motion.div>

                  {/* ITEM */}
                  <motion.div whileHover={{ y: -5 }}>
                    <h3
                      className="
                        text-[38px]
                        font-[300]
                        text-blue-600
                      "
                    >
                      25+
                    </h3>

                    <p className="text-gray-500 text-base mt-1">
                      Years of Excellence
                    </p>
                  </motion.div>

                  {/* ITEM */}
                  <motion.div whileHover={{ y: -5 }}>
                    <h3
                      className="
                        text-[38px]
                        font-[300]
                        text-blue-600
                      "
                    >
                      50+
                    </h3>

                    <p className="text-gray-500 text-base mt-1">
                      Medical Specialists
                    </p>
                  </motion.div>
                </div>

                {/* BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-8
                    py-4
                    rounded-lg
                    text-[17px]
                    font-medium
                    shadow-md
                    transition-all
                    duration-300
                  "
                >
                  Learn More About Us
                </motion.button>
              </motion.div>

              {/* =====================================================
                              RIGHT CONTENT
              ===================================================== */}

              <motion.div
                initial={{ opacity: 0, x: 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* MAIN IMAGE */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={aboutImg}
                    alt="Modern medical facility"
                    className="
                      w-full
                      h-[430px]
                      object-cover
                      rounded-[10px]
                      shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                    "
                  />
                </motion.div>

                {/* FLOATING CARD */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -bottom-10
                    -left-10
                    bg-white
                    px-5
                    py-4
                    rounded-xl
                    shadow-[0_15px_40px_rgba(0,0,0,0.10)]
                    flex
                    items-center
                    gap-4
                    w-[340px]
                  "
                >
                  {/* ICON */}
                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-blue-100
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FiHeart className="text-blue-600 text-xl" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h4
                      className="
                        text-[18px]
                        font-bold
                        text-[#11224d]
                        mb-1
                      "
                    >
                      24/7 Emergency Care
                    </h4>

                    <p className="text-gray-500 text-[14px]">
                      Always here when you need us most
                    </p>
                  </div>
                </motion.div>

                {/* EXPERIENCE BADGE */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    top-5
                    right-[-18px]
                    bg-blue-600
                    text-white
                    px-7
                    py-5
                    rounded-lg
                    shadow-xl
                  "
                >
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold leading-none">25+</span>

                    <span className="text-sm mt-2">Years of Trusted Care</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
