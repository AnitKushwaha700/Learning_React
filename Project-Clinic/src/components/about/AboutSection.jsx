import React from "react";

import { motion } from "framer-motion";

import { FiHeart } from "react-icons/fi";

import aboutImg from "../../assets/images/facilities-9.webp";

const HomeAbout = () => {
  return (
    <>
      {/* ABOUT SECTION */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        
        {/* CENTER CONTAINER */}
        <div className="w-full flex justify-center">
          
          <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[68%] max-w-[1320px]">
            
            {/* GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

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
                    w-full
                    text-[34px]
                    sm:text-[42px]
                    md:text-[50px]
                    lg:text-[58px]
                    leading-[1.18]
                    tracking-[-1px]
                    lg:tracking-[-2.5px]
                    font-extralight
                    text-[#11224d]
                    mb-6
                    lg:mb-8
                  "
                >
                  Compassionate Care, Advanced Medicine
                </h2>

                {/* LEAD TEXT */}
                <p
                  className="
                    text-[15px]
                    sm:text-[16px]
                    md:text-[17px]
                    leading-[1.9]
                    text-gray-500
                    mb-6
                    lg:mb-8
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
                    text-[15px]
                    sm:text-[16px]
                    md:text-[17px]
                    leading-[1.9]
                    lg:leading-[2]
                    text-gray-600
                    mb-10
                    lg:mb-12
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
                <div className="flex flex-wrap gap-8 sm:gap-12 lg:gap-16 mb-10 lg:mb-12">
                  
                  {/* ITEM */}
                  <motion.div whileHover={{ y: -5 }}>
                    <h3
                      className="
                        text-[30px]
                        sm:text-[34px]
                        lg:text-[38px]
                        font-[300]
                        text-blue-600
                      "
                    >
                      15000+
                    </h3>

                    <p className="text-gray-500 text-sm sm:text-base mt-1">
                      Patients Served
                    </p>
                  </motion.div>

                  {/* ITEM */}
                  <motion.div whileHover={{ y: -5 }}>
                    <h3
                      className="
                        text-[30px]
                        sm:text-[34px]
                        lg:text-[38px]
                        font-[300]
                        text-blue-600
                      "
                    >
                      25+
                    </h3>

                    <p className="text-gray-500 text-sm sm:text-base mt-1">
                      Years of Excellence
                    </p>
                  </motion.div>

                  {/* ITEM */}
                  <motion.div whileHover={{ y: -5 }}>
                    <h3
                      className="
                        text-[30px]
                        sm:text-[34px]
                        lg:text-[38px]
                        font-[300]
                        text-blue-600
                      "
                    >
                      50+
                    </h3>

                    <p className="text-gray-500 text-sm sm:text-base mt-1">
                      Medical Specialists
                    </p>
                  </motion.div>
                </div>

                {/* BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    w-full
                    sm:w-auto
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-8
                    py-4
                    rounded-lg
                    text-[15px]
                    sm:text-[17px]
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
                className="relative mt-8 lg:mt-0"
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
                      h-[300px]
                      sm:h-[400px]
                      lg:h-[430px]
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
                    -bottom-6
                    left-1/2
                    -translate-x-1/2
                    lg:left-[-40px]
                    lg:translate-x-0
                    bg-white
                    px-4
                    sm:px-5
                    py-4
                    rounded-xl
                    shadow-[0_15px_40px_rgba(0,0,0,0.10)]
                    flex
                    items-center
                    gap-4
                    w-[90%]
                    sm:w-[340px]
                  "
                >

                  {/* ICON */}
                  <div
                    className="
                      min-w-12
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
                        text-[16px]
                        sm:text-[18px]
                        font-bold
                        text-[#11224d]
                        mb-1
                      "
                    >
                      24/7 Emergency Care
                    </h4>

                    <p className="text-gray-500 text-[13px] sm:text-[14px]">
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
                    top-4
                    right-2
                    sm:right-4
                    lg:right-[-18px]
                    bg-blue-600
                    text-white
                    px-4
                    sm:px-6
                    lg:px-7
                    py-3
                    sm:py-4
                    lg:py-5
                    rounded-lg
                    shadow-xl
                  "
                >
                  <div className="flex flex-col items-center">
                    <span className="text-2xl sm:text-3xl font-bold leading-none">
                      25+
                    </span>

                    <span className="text-[11px] sm:text-sm mt-2 text-center">
                      Years of Trusted Care
                    </span>
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