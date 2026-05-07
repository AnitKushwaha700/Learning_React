import React from "react";
import { motion } from "framer-motion";

import { FiArrowRight } from "react-icons/fi";

import { FaHeartPulse } from "react-icons/fa6";

import { GiMedicines } from "react-icons/gi";

import { FaBandAid } from "react-icons/fa";

import { MdOutlineMonitorHeart } from "react-icons/md";

import mainImg from "../../assets/images/consultation-4.webp";
import maternalImg from "../../assets/images/maternal-2.webp";
import vaccineImg from "../../assets/images/vaccination-3.webp";
import emergencyImg from "../../assets/images/emergency-1.webp";
import techImg from "../../assets/images/facilities-6.webp";

const FeaturedServices = () => {
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
              text-[40px]
              font-thin
              tracking-[-2px]
              text-[#11224d]
              mb-5
            "
          >
            Featured Services
          </h2>
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

          <p
            className="
              text-gray-500
              text-[17px]
              leading-[1.9]
              max-w-[700px]
              mx-auto
            "
          >
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </motion.div>

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-16">
          {/* ================= LEFT MAIN CARD ================= */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0px 30px 80px rgba(37,99,235,0.12)",
              }}
              className="
                bg-white
                overflow-hidden
                h-full
                transition-all
                duration-500
              "
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden group">
                <motion.img
                  whileHover={{
                    scale: 1.06,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  src={mainImg}
                  alt="Healthcare"
                  className="
                  rounded-3xl
                    w-full
                    h-[420px]
                    object-cover
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    to-transparent
                  "
                />

                {/* BADGE */}
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="
                    absolute
                    top-6
                    left-6
                    bg-white
                    px-6
                    py-4
                    rounded-full
                    flex
                    items-center
                    gap-4
                    shadow-xl
                  "
                >
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
                    <FaHeartPulse className="text-blue-600 text-xl" />
                  </div>

                  <span className="font-semibold text-[#11224d]">
                    Emergency Care
                  </span>
                </motion.div>
              </div>

              {/* CONTENT */}
              <div className="pt-10">
                <h2
                  className="
                    text-[38px]
                    font-thin
                    tracking-[-1px]
                    leading-[1.2]
                    text-[#11224d]
                    mb-6
                  "
                >
                  Comprehensive Healthcare Excellence
                </h2>

                <p
                  className="
                    text-gray-500
                    text-[17px]
                    leading-[2]
                    mb-8
                  "
                >
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae donec velit neque.
                </p>

                {/* BUTTON */}
                <motion.a
                  whileHover={{
                    x: 5,
                  }}
                  href="/"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    text-blue-600
                    text-[17px]
                    underline
                    underline-offset-8
                  "
                >
                  Explore Our Services
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="flex flex-col h-full">
              {[
                {
                  icon: <GiMedicines />,
                  title: "Dermatology Clinic",
                  text: "Pellentesque habitant morbi tristique senectus et netus et malesuada.",
                },

                {
                  icon: <FaBandAid />,
                  title: "Surgery Center",
                  text: "Donec rutrum congue leo eget malesuada curabitur arcu erat accumsan.",
                },

                {
                  icon: <MdOutlineMonitorHeart />,
                  title: "Diagnostics Lab",
                  text: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    x: -8,
                    borderColor: "#2563eb",
                    boxShadow: "0px 20px 50px rgba(37,99,235,0.10)",
                  }}
                  className={`
                    bg-white
                    p-8
                    flex
                    gap-5
                    transition-all
                    duration-500
                    ${index === 0 ? "rounded-tr-[34px]" : ""}
                    ${index === 2 ? "rounded-br-[34px]" : ""}
                  `}
                >
                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.1,
                    }}
                    className="
                      min-w-[70px]
                      h-[70px]
                      rounded-2xl
                      bg-blue-100
                      text-blue-600
                      flex
                      items-center
                      justify-center
                      text-3xl
                    "
                  >
                    {item.icon}
                  </motion.div>

                  {/* CONTENT */}
                  <div>
                    <h4
                      className="
                        text-[24px]
                        font-thin
                        text-[#11224d]
                        mb-4
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                        text-gray-500
                        leading-[1.9]
                        text-[15px]
                        mb-5
                      "
                    >
                      {item.text}
                    </p>

                    <motion.a
                      whileHover={{
                        x: 4,
                      }}
                      href="/"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-blue-600
                        font-semibold
                        text-[15px]
                      "
                    >
                      Learn More
                      <FiArrowRight />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ================= SPECIALTY GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              img: maternalImg,
              title: "Maternal Care",
              text: "Expert pregnancy & delivery support",
            },

            {
              img: vaccineImg,
              title: "Vaccination",
              text: "Complete immunization programs",
            },

            {
              img: emergencyImg,
              title: "Emergency Care",
              text: "24/7 critical care services",
            },

            {
              img: techImg,
              title: "Advanced Technology",
              text: "State-of-the-art medical equipment",
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
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="
        flex
        flex-col
        items-center
        text-center
        group
      "
            >
              {/* CIRCLE IMAGE */}
              <div
                className="
          w-[170px]
          h-[170px]
          rounded-full
          overflow-hidden
          border-[8px]
          border-gray-100
          shadow-[0_10px_40px_rgba(0,0,0,0.04)]
        "
              >
                <motion.img
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  src={item.img}
                  alt={item.title}
                  className="
            w-full
            h-full
            object-cover
          "
                />
              </div>

              {/* CONTENT */}
              <div className="mt-7">
                <h5
                  className="
            text-[28px]
            font-thin
            text-[#11224d]
            mb-3
          "
                >
                  {item.title}
                </h5>

                <p
                  className="
            text-gray-500
            text-[16px]
            leading-[1.8]
            max-w-[240px]
            mx-auto
          "
                >
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
