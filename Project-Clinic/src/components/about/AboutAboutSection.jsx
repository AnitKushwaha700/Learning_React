import React from "react";
import { motion } from "framer-motion";
import {
  FiHeart,
  FiShield,
  FiUsers,
  FiZap,
} from "react-icons/fi";

import mainImg from "../../assets/images/facilities-6.webp";
import staffImg from "../../assets/images/staff-8.webp";

import client1 from "../../assets/images/clients-1.webp";
import client2 from "../../assets/images/clients-2.webp";
import client3 from "../../assets/images/clients-3.webp";
import client4 from "../../assets/images/clients-4.webp";
import client5 from "../../assets/images/clients-5.webp";

const values = [
  {
    icon: <FiHeart />,
    title: "Compassion",
    desc: "Providing care with empathy and understanding for every patient's unique needs and circumstances.",
  },
  {
    icon: <FiShield />,
    title: "Excellence",
    desc: "Maintaining the highest standards of medical care through continuous learning and innovation.",
  },
  {
    icon: <FiUsers />,
    title: "Integrity",
    desc: "Building trust through honest communication and ethical practices in all our interactions.",
  },
  {
    icon: <FiZap />,
    title: "Innovation",
    desc: "Embracing cutting-edge technology and treatments to improve patient outcomes.",
  },
];

const certifications = [
  client1,
  client2,
  client3,
  client4,
  client5,
];

const About = () => {
  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        {/* ABOUT TOP */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">

              <div>

                <h2 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                  Compassionate Care for Every Family
                </h2>
              </div>

              <p className="text-lg text-gray-500 leading-8">
                For over two decades, we have been dedicated to providing
                exceptional healthcare services to our community. Our
                commitment goes beyond medical treatment—we believe in
                building lasting relationships with our patients and their
                families.
              </p>

              <p className="text-gray-600 leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">

                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-[#f8fbff] rounded-3xl p-6 text-center shadow-sm"
                >
                  <h3 className="text-4xl  text-blue-600 mb-2">
                    15000
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Patients Treated
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-[#f8fbff] rounded-3xl p-6 text-center shadow-sm"
                >
                  <h3 className="text-4xl  text-blue-600 mb-2">
                    25
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Years Experience
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-[#f8fbff] rounded-3xl p-6 text-center shadow-sm"
                >
                  <h3 className="text-4xl  text-blue-600 mb-2">
                    50
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Specialists
                  </p>
                </motion.div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="relative">
              <img
                src={mainImg}
                alt="Healthcare"
                className="w-full rounded-[35px] object-cover shadow-2xl"
              />

              {/* FLOATING CARD IMAGE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                whileHover={{ y: -10 }}
                className="absolute -bottom-8 right-6 lg:-right-10 bg-white p-2 rounded-[100px] shadow-2xl"
              >
                <img
                  src={staffImg}
                  alt="Medical Team"
                  className="w-44 h-44 object-cover rounded-[100px]"
                />
              </motion.div>
            </div>

            {/* BACKGROUND GLOW */}
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10"></div>
          </motion.div>
        </div>

        {/* VALUES SECTION */}
        <div className="pt-32 ">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl lg:text-5xl  text-gray-900 mb-5">
              Our Core Values
            </h3>

            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-8">
              These principles guide everything we do in our commitment to
              exceptional healthcare.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">

            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="bg-[#fff8f8] rounded-[30px] p-8 shadow-sm hover:shadow-2xl transition-all duration-500"
              >

                <div className="w-16 h-16 rounded-[50px] bg-blue-100 text-blue-600 flex items-center justify-center text-3xl mb-6 ms-19">
                  {item.icon}
                </div>

                <h4 className="text-2xl text-gray-900 text-center mb-4">
                  {item.title}
                </h4>

                <p className="text-gray-600 leading-7 text-center">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="pt-28">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
              Accreditations & Certifications
            </h3>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
              Recognized by leading healthcare organizations for our
              commitment to quality care.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

            {certifications.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  rotate: 1,
                }}
                className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex items-center justify-center"
              >
                <img
                  src={item}
                  alt="Certification"
                  className="w-full object-contain opacity-80 hover:opacity-100 transition duration-500"
                />
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;