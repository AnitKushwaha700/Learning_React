import React from "react";
import { motion } from "framer-motion";

import { FiArrowRight, FiCheckCircle, FiPhone } from "react-icons/fi";

import {
  FaHeartPulse,
  FaBrain,
  FaShieldHeart,
  FaChildren,
} from "react-icons/fa6";

import { MdOutlineHealthAndSafety } from "react-icons/md";

import cardioImg from "../../assets/images/cardiology-1.webp";
import neuroImg from "../../assets/images/neurology-4.webp";

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Departments = () => {
  return (
    <section className="py-28 bg-[#f8f9fb] overflow-hidden">
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[1320px]">
          {/* ================= SECTION TITLE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="
                text-[40px]
                font-thin
                tracking-[-2px]
                text-[#11224d]
                mb-5
              "
            >
              Featured Departments
            </motion.h2>

            {/* LINE */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center justify-center mb-6 origin-center"
            >
              <span className="w-16 h-[1px] bg-gray-300"></span>

              <span className="w-16 h-[3px] bg-blue-600 rounded-full"></span>

              <span className="w-16 h-[1px] bg-gray-300"></span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="
                text-gray-500
                text-[17px]
                leading-[1.9]
                max-w-[700px]
                mx-auto
              "
            >
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit.
            </motion.p>
          </motion.div>

          {/* ================= TOP CARDS ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
            {/* ================= CARD 1 ================= */}
            <motion.div
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                transition: {
                  duration: 0.3,
                },
              }}
              className="
                bg-white
                rounded-[32px]
                overflow-hidden
                border
                border-gray-100
                shadow-[0_15px_50px_rgba(0,0,0,0.05)]
                flex
                flex-col
                h-full
                group
              "
            >
              {/* CONTENT */}
              <div className="p-10 flex flex-col flex-1">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="
                    inline-flex
                    w-fit
                    bg-blue-100
                    text-blue-600
                    text-[12px]
                    font-semibold
                    uppercase
                    tracking-wide
                    px-5
                    py-3
                    rounded-full
                    mb-7
                  "
                >
                  Specialized Care
                </motion.span>

                <h3
                  className="
                    text-[30px]
                    leading-[1.2]
                    font-thin
                    tracking-[-1px]
                    text-[#11224d]
                    mb-6
                  "
                >
                  Cardiovascular Medicine
                </h3>

                <p
                  className="
                    text-gray-500
                    leading-[2]
                    text-[16px]
                    mb-10
                  "
                >
                  Advanced diagnostic imaging and interventional procedures for
                  comprehensive heart health management with personalized
                  treatment protocols.
                </p>

                {/* FEATURES */}
                <div className="flex flex-col gap-5 mb-10">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-[16px] text-gray-600"
                  >
                    <FiCheckCircle className="text-blue-600 text-[18px]" />
                    24/7 Emergency Cardiac Care
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-[16px] text-gray-600"
                  >
                    <FiCheckCircle className="text-blue-600 text-[18px]" />
                    Minimally Invasive Procedures
                  </motion.div>
                </div>

                {/* BUTTON */}
                <motion.a
                  whileHover={{ x: 5 }}
                  href="/"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-blue-600
                    text-[17px]
                    font-semibold
                    mt-auto
                  "
                >
                  Explore Cardiology
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                  >
                    <FiArrowRight />
                  </motion.div>
                </motion.a>
              </div>

              {/* IMAGE */}
              <div className="relative h-[260px] overflow-hidden">
                <motion.img
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  src={cardioImg}
                  alt="Cardiology"
                  className="
                    w-full
                    h-full
                    object-cover
                    block
                  "
                />

                {/* ICON */}
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  className="
                    absolute
                    top-5
                    right-5
                    w-16
                    h-16
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                    shadow-xl
                  "
                >
                  <FaHeartPulse className="text-blue-600 text-2xl" />
                </motion.div>
              </div>
            </motion.div>

            {/* ================= CARD 2 ================= */}
            <motion.div
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                transition: {
                  duration: 0.3,
                },
              }}
              className="
                bg-white
                rounded-[32px]
                overflow-hidden
                border
                border-gray-100
                shadow-[0_15px_50px_rgba(0,0,0,0.05)]
                flex
                flex-col
                h-full
                group
              "
            >
              {/* CONTENT */}
              <div className="p-10 flex flex-col flex-1">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="
                    inline-flex
                    w-fit
                    bg-blue-100
                    text-blue-600
                    text-[12px]
                    font-semibold
                    uppercase
                    tracking-wide
                    px-5
                    py-3
                    rounded-full
                    mb-7
                  "
                >
                  Expert Care
                </motion.span>

                <h3
                  className="
                    text-[30px]
                    leading-[1.2]
                    font-thin
                    tracking-[-1px]
                    text-[#11224d]
                    mb-6
                  "
                >
                  Neurological Sciences
                </h3>

                <p
                  className="
                    text-gray-500
                    leading-[2]
                    text-[16px]
                    mb-10
                  "
                >
                  Cutting-edge neuroimaging and neurosurgical expertise for
                  complex brain and spinal cord conditions with innovative
                  treatment approaches.
                </p>

                {/* FEATURES */}
                <div className="flex flex-col gap-5 mb-10">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-[16px] text-gray-600"
                  >
                    <FiCheckCircle className="text-blue-600 text-[18px]" />
                    Advanced Brain Imaging
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-[16px] text-gray-600"
                  >
                    <FiCheckCircle className="text-blue-600 text-[18px]" />
                    Robotic Surgery
                  </motion.div>
                </div>

                {/* BUTTON */}
                <motion.a
                  whileHover={{ x: 5 }}
                  href="/"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-blue-600
                    text-[17px]
                    font-semibold
                    mt-auto
                  "
                >
                  Explore Neurology
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                  >
                    <FiArrowRight />
                  </motion.div>
                </motion.a>
              </div>

              {/* IMAGE */}
              <div className="relative h-[260px] overflow-hidden">
                <motion.img
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  src={neuroImg}
                  alt="Neurology"
                  className="
                    w-full
                    h-full
                    object-cover
                    block
                  "
                />

                {/* ICON */}
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  className="
                    absolute
                    top-5
                    right-5
                    w-16
                    h-16
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                    shadow-xl
                  "
                >
                  <FaBrain className="text-blue-600 text-2xl" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ================= BOTTOM CARDS ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <FaShieldHeart />,
                title: "Orthopedic Surgery",
                text: "Comprehensive musculoskeletal care utilizing advanced arthroscopic techniques and joint replacement procedures.",
                list: ["Sports Medicine", "Joint Replacement", "Spine Surgery"],
              },

              {
                icon: <FaChildren />,
                title: "Pediatric Care",
                text: "Child-centered healthcare services from newborn to adolescence with family-focused treatment approaches.",
                list: [
                  "Neonatal Intensive Care",
                  "Developmental Pediatrics",
                  "Pediatric Surgery",
                ],
              },

              {
                icon: <MdOutlineHealthAndSafety />,
                title: "Cancer Treatment",
                text: "Multidisciplinary oncology program offering personalized cancer care with latest therapeutic innovations.",
                list: [
                  "Precision Medicine",
                  "Immunotherapy",
                  "Radiation Oncology",
                ],
              },
            ].map((item, index) => (
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
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                    borderColor: "#2563eb",
                }}
                className="
                  bg-white
                  rounded-[30px]
                  border
                  border-gray-100
                  shadow-[0_15px_45px_rgba(0,0,0,0.04)]
                  p-12
                  text-center
                "
              >
                {/* ICON */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 6,
                  }}
                  className="
                    w-20
                    h-20
                    rounded-full
                    bg-blue-600
                    flex
                    items-center
                    justify-center
                    text-white
                    text-3xl
                    mx-auto
                    mb-8
                  "
                >
                  {item.icon}
                </motion.div>

                {/* TITLE */}
                <h4
                  className="
                    text-[24px]
                    font-thin
                    tracking-[-0.5px]
                    text-[#11224d]
                    mb-5
                  "
                >
                  {item.title}
                </h4>

                {/* TEXT */}
                <p
                  className="
                    text-gray-500
                    text-[16px]
                    leading-[1.9]
                    mb-8
                  "
                >
                  {item.text}
                </p>

                {/* LIST */}
                <div className="flex flex-col gap-4 mb-10">
                  {item.list.map((list, i) => (
                    <motion.div
                      whileHover={{ x: 5 }}
                      key={i}
                      className="
                        flex
                        items-center
                        justify-center
                        gap-3
                        text-[15px]
                        text-gray-600
                      "
                    >
                      <FiArrowRight className="text-blue-600 text-sm" />

                      {list}
                    </motion.div>
                  ))}
                </div>

                {/* BUTTON */}
                <motion.a
                  whileHover={{ letterSpacing: "1px" }}
                  href="/"
                  className="
                    text-blue-600
                    uppercase
                    tracking-wide
                    text-[15px]
                    font-semibold
                  "
                >
                  Learn More
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* ================= EMERGENCY BANNER ================= */}
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
              duration: 0.9,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.01,
            }}
            className="
              mt-16
              rounded-[30px]
              px-10
              py-9
              flex
              flex-col
              lg:flex-row
              items-center
              justify-between
              gap-10
              bg-gradient-to-r
              from-[#175CDD]
              to-[#2F6EF2]
              shadow-[0_20px_60px_rgba(23,92,221,0.25)]
            "
          >
            {/* LEFT */}
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="
                  text-white
                  text-[35px]
                  lg:text-[40px]
                  font-thin
                  tracking-[-1.5px]
                  leading-[1.2]
                  mb-5
                "
              >
                Emergency Services Available 24/7
              </motion.h3>

              <p
                className="
                  text-blue-100
                  text-[17px]
                  leading-[1.9]
                  max-w-[760px]
                "
              >
                Our emergency department is equipped with state-of-the-art
                technology and staffed by board-certified emergency physicians
                ready to provide immediate care.
              </p>
            </div>

            {/* BUTTON */}
            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              href="tel:+15551234567"
              className="
                bg-white
                text-blue-600
                px-10
                py-5
                rounded-full
                font-semibold
                text-[18px]
                flex
                items-center
                gap-4
                whitespace-nowrap
                shadow-xl
              "
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-blue-100
                  flex
                  items-center
                  justify-center
                "
              >
                <FiPhone className="text-blue-600 text-[18px]" />
              </motion.div>
              Call Emergency: (555) 123-4567
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
