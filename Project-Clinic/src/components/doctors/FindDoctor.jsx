import React from "react";
import { motion } from "framer-motion";

import {
  FiSearch,
  FiArrowRight,
  FiAward,
} from "react-icons/fi";

import {
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
} from "react-icons/fa";

import {
  FaUserDoctor,
} from "react-icons/fa6";

import {
  MdHealthAndSafety,
} from "react-icons/md";

import doctor1 from "../../assets/images/staff-2.webp";
import doctor2 from "../../assets/images/staff-6.webp";
import doctor3 from "../../assets/images/staff-4.webp";
import doctor4 from "../../assets/images/staff-8.webp";
import doctor5 from "../../assets/images/staff-11.webp";
import doctor6 from "../../assets/images/staff-14.webp";

const doctors = [
  {
    img: doctor1,
    name: "Dr. Amanda Foster",
    specialty: "Cardiology Specialist",
    exp: "14 years experience",
    rating: "4.9",
    reviews: "127 reviews",
    status: "bg-green-500",
    btn: "Book Now",
  },

  {
    img: doctor2,
    name: "Dr. Marcus Johnson",
    specialty: "Neurology Expert",
    exp: "16 years experience",
    rating: "4.8",
    reviews: "89 reviews",
    status: "bg-yellow-500",
    btn: "Schedule",
  },

  {
    img: doctor3,
    name: "Dr. Rachel Williams",
    specialty: "Pediatrics Care",
    exp: "11 years experience",
    rating: "5.0",
    reviews: "203 reviews",
    status: "bg-green-500",
    btn: "Book Now",
  },

  {
    img: doctor4,
    name: "Dr. David Chen",
    specialty: "Orthopedic Surgery",
    exp: "22 years experience",
    rating: "4.7",
    reviews: "156 reviews",
    status: "bg-gray-400",
    btn: "Schedule",
  },

  {
    img: doctor5,
    name: "Dr. Victoria Torres",
    specialty: "Dermatology Care",
    exp: "9 years experience",
    rating: "4.5",
    reviews: "74 reviews",
    status: "bg-green-500",
    btn: "Book Now",
  },

  {
    img: doctor6,
    name: "Dr. Benjamin Lee",
    specialty: "Oncology Treatment",
    exp: "19 years experience",
    rating: "4.9",
    reviews: "194 reviews",
    status: "bg-green-500",
    btn: "Schedule",
  },
];

const FindDoctor = () => {
  return (
    <section className="py-28 bg-[#f8f9fb] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4">

        {/* ================= TITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className="
              text-[42px]
              lg:text-[56px]
              font-thin
              tracking-[-2px]
              text-[#11224d]
              mb-5
            "
          >
            Find A Doctor
          </h2>

          <p
            className="
              text-gray-500
              text-[17px]
              leading-[1.9]
              max-w-[700px]
              mx-auto
            "
          >
            Necessitatibus eius consequatur ex aliquid fuga eum quidem
            sint consectetur velit
          </p>
        </motion.div>

        {/* ================= SEARCH BOX ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-[950px] mx-auto mb-20"
        >
          <div
            className="
              bg-white
              rounded-[40px]
              border
              border-gray-200
              shadow-[0_15px_50px_rgba(0,0,0,0.04)]
              p-12
              text-center
            "
          >

            <h3
              className="
                text-[36px]
                font-thin
                text-[#11224d]
                mb-4
              "
            >
              Find Your Perfect Healthcare Provider
            </h3>

            <p
              className="
                text-gray-500
                text-[16px]
                leading-[1.8]
                mb-10
              "
            >
              Search through our comprehensive directory of experienced
              medical professionals
            </p>

            {/* FORM */}
            <form className="grid grid-cols-1 lg:grid-cols-3 gap-5">

              {/* INPUT */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  bg-[#f8f9fb]
                  border
                  border-gray-200
                  rounded-full
                  px-6
                  h-[68px]
                "
              >
                <FaUserDoctor className="text-blue-600 text-xl" />

                <input
                  type="text"
                  placeholder="Enter doctor name"
                  className="
                    bg-transparent
                    outline-none
                    w-full
                    text-[15px]
                  "
                />
              </div>

              {/* SELECT */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  bg-[#f8f9fb]
                  border
                  border-gray-200
                  rounded-full
                  px-6
                  h-[68px]
                "
              >
                <MdHealthAndSafety className="text-blue-600 text-xl" />

                <select
                  className="
                    bg-transparent
                    outline-none
                    w-full
                    text-[15px]
                  "
                >
                  <option>All Specialties</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                  <option>Pediatrics</option>
                  <option>Dermatology</option>
                  <option>Oncology</option>
                </select>
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  h-[68px]
                  rounded-full
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-3
                  transition-all
                  duration-300
                "
              >
                <FiSearch />

                Find Doctors
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* ================= DOCTOR GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0px 25px 60px rgba(37,99,235,0.10)",
              }}
              className="
                bg-white
                rounded-[30px]
                border
                border-gray-200
                hover:border-blue-500
                p-8
                transition-all
                duration-500
              "
            >

              {/* PROFILE */}
              <div className="flex items-start gap-5 mb-7">

                {/* IMAGE */}
                <div className="relative">

                  <img
                    src={doctor.img}
                    alt={doctor.name}
                    className="
                      w-[90px]
                      h-[90px]
                      rounded-full
                      object-cover
                    "
                  />

                  {/* STATUS */}
                  <span
                    className={`
                      absolute
                      bottom-1
                      right-1
                      w-4
                      h-4
                      rounded-full
                      border-2
                      border-white
                      ${doctor.status}
                    `}
                  />
                </div>

                {/* DETAILS */}
                <div>

                  <h4
                    className="
                      text-[24px]
                      font-thin
                      text-[#11224d]
                      mb-3
                    "
                  >
                    {doctor.name}
                  </h4>

                  <span
                    className="
                      inline-block
                      bg-blue-100
                      text-blue-600
                      px-4
                      py-2
                      rounded-full
                      text-[13px]
                      font-medium
                      mb-4
                    "
                  >
                    {doctor.specialty}
                  </span>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-gray-500
                      text-[14px]
                    "
                  >
                    <FiAward className="text-blue-600" />

                    {doctor.exp}
                  </div>
                </div>
              </div>

              {/* RATING */}
              <div
                className="
                  flex
                  items-center
                  gap-2
                  mb-8
                "
              >
                <div className="flex items-center gap-1 text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  {doctor.rating === "4.5" ||
                  doctor.rating === "4.7" ||
                  doctor.rating === "4.8" ? (
                    <FaStarHalfAlt />
                  ) : (
                    <FaStar />
                  )}
                </div>

                <span className="font-semibold text-[#11224d]">
                  {doctor.rating}
                </span>

                <span className="text-gray-500 text-[14px]">
                  ({doctor.reviews})
                </span>
              </div>

              {/* BUTTONS */}
              <div className="flex items-center gap-4">

                <motion.a
                  whileHover={{
                    y: -2,
                  }}
                  href="/"
                  className="
                    flex-1
                    h-[52px]
                    rounded-full
                    border
                    border-gray-300
                    flex
                    items-center
                    justify-center
                    text-[#11224d]
                    font-medium
                    hover:border-blue-500
                    hover:text-blue-600
                    transition-all
                    duration-300
                  "
                >
                  View Details
                </motion.a>

                <motion.a
                  whileHover={{
                    y: -2,
                  }}
                  href="/"
                  className="
                    flex-1
                    h-[52px]
                    rounded-full
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    font-medium
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                  "
                >
                  {doctor.btn}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= VIEW ALL ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.96,
            }}
            href="/"
            className="
              inline-flex
              items-center
              gap-3
              bg-white
              border
              border-gray-200
              hover:border-blue-500
              px-8
              py-5
              rounded-full
              text-[#11224d]
              font-semibold
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
              transition-all
              duration-300
            "
          >
            View All Doctors

            <FiArrowRight />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default FindDoctor;