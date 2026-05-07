import React from "react";
import { motion } from "framer-motion";

import { FiArrowRight, FiShield, FiClock, FiPhone } from "react-icons/fi";

import { FaUserDoctor } from "react-icons/fa6";

import heroImg from "../../assets/images/facilities-9.webp";

const CallToAction = () => {
  const features = [
    {
      icon: <FiShield />,
      title: "Advanced Technology",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    {
      icon: <FiClock />,
      title: "24/7 Availability",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur.",
    },

    {
      icon: <FaUserDoctor />,
      title: "Expert Team",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.",
    },
  ];

  return (
    <>
      <section className="w-full bg-[#f5f6fa] py-[110px] overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6">
          {/* ================= HERO SECTION ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[90px] items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              {/* HEADING */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="
                  text-[#13254a]
                  text-[40px]
                  lg:text-[60px]
                  leading-[1.08]
                  tracking-[-2px]
                  font-[300]
                  max-w-[700px]
                  mb-10
                "
              >
                Excellence in Medical Care, Every Day
              </motion.h1>

              {/* PARAGRAPH */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="
                  text-[#6b7280]
                  text-[19px]
                  leading-[2]
                  max-w-[650px]
                  mb-16
                "
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </motion.p>

              {/* BUTTONS */}
              <div className="flex flex-col gap-7">
                {/* BTN 1 */}
                <motion.a
                  href="/"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                  className="
                    w-fit
                    flex
                    items-center
                    gap-3
                    text-[#2563eb]
                    text-[20px]
                    border-b
                    border-[#2563eb]
                    pb-2
                    transition-all
                    duration-300
                  "
                >
                  <span>Schedule Consultation</span>

                  <FiArrowRight className="text-[18px]" />
                </motion.a>

                {/* BTN 2 */}
                <motion.a
                  href="/"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                  className="
                    w-fit
                    flex
                    items-center
                    gap-3
                    text-[#8b8f9c]
                    hover:text-[#2563eb]
                    text-[20px]
                    transition-all
                    duration-300
                  "
                >
                  <span>Explore Services</span>

                  <FiArrowRight className="text-[18px]" />
                </motion.a>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <motion.img
                src={heroImg}
                alt="medical"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                className="
                  w-full
                  h-[560px]
                  object-cover
                "
              />
            </motion.div>
          </div>

          {/* ================= FEATURES ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[120px] gap-y-[80px] mt-[165px]">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                {/* ICON */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 5,
                  }}
                  transition={{ duration: 0.3 }}
                  className="
                    text-[#2563eb]
                    text-[42px]
                    mb-8
                  "
                >
                  {item.icon}
                </motion.div>

                {/* TITLE */}
                <h3
                  className="
                    text-[#13254a]
                    text-[25px]
                    font-[300]
                    tracking-[-0.5px]
                    mb-5
                  "
                >
                  {item.title}
                </h3>

                {/* TEXT */}
                <p
                  className="
                    text-[#6b7280]
                    text-[16px]
                    leading-[2]
                    max-w-[340px]
                  "
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ================= CTA SECTION ================= */}
          {/* ================= CTA SECTION ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
    mt-[145px]
    bg-[#edf1fb]
    px-[42px]
    lg:px-[48px]
    py-[44px]
  "
          >
            <div
              className="
      flex
      flex-col
      lg:flex-row
      lg:items-center
      justify-between
      gap-10
    "
            >
              {/* LEFT */}
              <div className="max-w-[760px]">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="
          text-[#13254a]
          text-[31px]
          font-[300]
          tracking-[-1px]
          leading-[1.2]
          mb-5
        "
                >
                  Need Immediate Medical Assistance?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="
          text-[#6b7280]
          text-[16px]
          leading-[1.9]
          max-w-[820px]
        "
                >
                  Our emergency response team is available around the clock to
                  provide immediate medical support when you need it most.
                </motion.p>
              </div>

              {/* RIGHT */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="
        flex
        flex-col
        items-center
        justify-center
        min-w-[220px]
      "
              >
                {/* BUTTON */}
                <motion.a
                  href="/"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="
          bg-[#2563eb]
          hover:bg-[#1d4ed8]
          text-white
          h-[54px]
          px-[30px]
          flex
          items-center
          justify-center
          gap-3
          text-[16px]
          font-[600]
          transition-all
          duration-300
        "
                >
                  <FiPhone className="text-[16px]" />

                  <span>(555) 123-4567</span>
                </motion.a>

                {/* LOCATION */}
                <a
                  href="/"
                  className="
          mt-4
          text-[#8b8f9c]
          text-[15px]
          hover:text-[#2563eb]
          transition-all
          duration-300
        "
                >
                  Find Location
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
