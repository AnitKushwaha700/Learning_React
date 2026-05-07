import React from "react";

import { motion } from "framer-motion";

import {
  FiShield,
  FiClock,
  FiPhone,
  FiCalendar,
} from "react-icons/fi";

import {
  FaStar,
  FaPlayCircle,
} from "react-icons/fa";

import heroImg from "../../assets/images/staff-10.webp";

const HeroSection = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="
          h-[78vh]
          bg-[#f7f9fc]
          overflow-hidden
          flex
          items-center
        "
      >
        {/* CENTER WRAPPER */}
        <div className="w-full flex justify-center">

          {/* CONTAINER */}
          <div className="w-[68%] max-w-[1320px]">

            {/* GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

              {/* =====================================================
                              LEFT CONTENT
              ===================================================== */}

              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
              >

                {/* BADGES */}
                <div className="flex flex-wrap gap-4 mb-6">

                  <div className="flex items-center gap-2 bg-[#E0E9F8] px-4 py-2 rounded-full">
                    <FiShield className="text-blue-600 text-sm" />

                    <span className="text-blue-600 font-semibold text-sm">
                      Accredited
                    </span>
                  </div>

                  <div className="flex items-center gap-2 bg-[#E0E9F8] px-4 py-2 rounded-full">
                    <FiClock className="text-blue-600 text-sm" />

                    <span className="text-blue-600 font-semibold text-sm">
                      24/7 Emergency
                    </span>
                  </div>

                  <div className="flex items-center gap-2 bg-[#E0E9F8] px-4 py-2 rounded-full">
                    <FaStar className="text-blue-600 text-sm" />

                    <span className="text-blue-600 font-semibold text-sm">
                      4.9/5 Rating
                    </span>
                  </div>
                </div>

                {/* HEADING */}
                <h1
                  className="
                    text-[46px]
                    lg:text-[66px]
                    leading-[1.1]
                    tracking-[-3px]
                    font-bold
                    text-[#11224d]
                    mb-6
                  "
                >
                  Excellence in
                  <br />

                  <span className="relative inline-block text-blue-600">
                    Healthcare

                    <span className="absolute left-0 bottom-0 w-full h-[4px] bg-blue-600 rounded-full"></span>
                  </span>{" "}

                  With
                  <br />

                  Compassionate Care
                </h1>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-[18px]
                    leading-[1.7]
                    text-gray-500
                    max-w-[580px]
                    mb-8
                  "
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>

                {/* STATS */}
                <div className="flex flex-wrap gap-12 mb-8">

                  <div>
                    <h3 className="text-4xl font-extrabold text-blue-600">
                      15+
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      Years Experience
                    </p>
                  </div>

                  <div>
                    <h3 className="text-4xl font-extrabold text-blue-600">
                      5000+
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      Patients Treated
                    </p>
                  </div>

                  <div>
                    <h3 className="text-4xl font-extrabold text-blue-600">
                      50+
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      Medical Experts
                    </p>
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="flex items-center gap-4 mb-8">

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      bg-blue-600
                      hover:bg-blue-700
                      text-white
                      px-8
                      py-3
                      rounded-full
                      font-semibold
                      shadow-lg
                    "
                  >
                    Book Appointment
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      border-2
                      border-blue-600
                      text-blue-600
                      px-8
                      py-3
                      rounded-full
                      font-semibold
                      flex
                      items-center
                      gap-3
                      hover:bg-blue-50
                    "
                  >
                    <FaPlayCircle className="text-lg" />

                    Watch Our Story
                  </motion.button>
                </div>

                {/* HOTLINE */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="
                    bg-white
                    border
                    border-[#dbe5f3]
                    rounded-2xl
                    px-5
                    py-4
                    flex
                    items-center
                    gap-4
                    shadow-[0_2px_15px_rgba(0,0,0,0.04)]
                    w-full
                  "
                >
                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-blue-600
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FiPhone className="text-white text-xl" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm mb-1">
                      Emergency Hotline
                    </p>

                    <h4 className="text-xl font-bold text-[#11224d]">
                      +1 (555) 911-2468
                    </h4>
                  </div>
                </motion.div>
              </motion.div>

              {/* =====================================================
                              RIGHT SIDE
              ===================================================== */}

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                className="relative flex justify-end"
              >

                {/* FLOATING CIRCLES */}

                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -top-13
                    -left-18
                    w-[210px]
                    h-[210px]
                    rounded-full
                    bg-blue-100
                    opacity-80
                  "
                />

                <motion.div
                  animate={{ y: [0, 25, 0] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    top-60
                    -left-10
                    w-[120px]
                    h-[120px]
                    rounded-full
                    bg-blue-100
                    opacity-80
                  "
                />

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -bottom-8
                    -right-18
                    w-[170px]
                    h-[170px]
                    rounded-full
                    bg-blue-100
                    opacity-80
                  "
                />

                {/* IMAGE WRAPPER */}
                <div className="relative z-10">

                  {/* MAIN IMAGE */}
                  <motion.img
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    src={heroImg}
                    alt="Healthcare"
                    className="
                      w-full
                      max-w-[620px]
                      rounded-[38px]
                      object-cover
                      shadow-[0_20px_60px_rgba(0,0,0,0.10)]
                    "
                  />

                  {/* APPOINTMENT CARD */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="
                      absolute
                      top-6
                      right-6
                      bg-white
                      rounded-2xl
                      shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                      px-5
                      py-5
                      flex
                      items-center
                      gap-4
                      w-[260px]
                    "
                  >
                    <div
                      className="
                        w-14
                        h-14
                        rounded-2xl
                        bg-blue-100
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <FiCalendar className="text-blue-600 text-2xl" />
                    </div>

                    <div>
                      <h5 className="font-bold text-[#11224d]">
                        Next Available
                      </h5>

                      <p className="text-gray-600 text-sm">
                        Today 2:30 PM
                      </p>

                      <small className="text-gray-400">
                        Dr. Sarah Johnson
                      </small>
                    </div>
                  </motion.div>

                  {/* REVIEW CARD */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="
                      absolute
                      bottom-6
                      left-6
                      bg-white
                      rounded-2xl
                      shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                      px-6
                      py-5
                    "
                  >
                    <div className="flex gap-1 text-yellow-400 mb-3">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    <h4 className="text-xl text-center font-bold text-[#11224d]">
                      4.9/5
                    </h4>

                    <p className="text-gray-400 text-sm mt-1">
                      1,234 Reviews
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;