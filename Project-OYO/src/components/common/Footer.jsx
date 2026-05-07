import React from "react";
import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

import logo from "../../assets/images/oyoLogo.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#0f172a] overflow-hidden text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">


        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 mt-15 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <img
              src={logo}
              alt="logo"
              className="w-36 mb-6"
            />

            <p className="text-gray-400 leading-relaxed text-sm">
              Book luxury hotels, premium rooms, and affordable stays
              across India with seamless online booking experience.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-8">

              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -6,
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-red-500 flex items-center justify-center cursor-pointer transition duration-300"
                  >

                    <Icon />

                  </motion.div>
                )
              )}

            </div>

          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-bold mb-7">
              Company
            </h3>

            <ul className="space-y-4 text-gray-400">

              {[
                "About Us",
                "Careers",
                "Press",
                "Blog",
                "Partners",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-red-500 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}

            </ul>

          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-bold mb-7">
              Support
            </h3>

            <ul className="space-y-4 text-gray-400">

              {[
                "Help Center",
                "Cancellation",
                "Privacy Policy",
                "Terms & Conditions",
                "FAQs",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-red-500 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}

            </ul>

          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-bold mb-7">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-red-500">

                  <FaMapMarkerAlt />

                </div>

                <p className="leading-relaxed">
                  Mumbai, Maharashtra,
                  <br />
                  India
                </p>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-red-500">

                  <FaPhoneAlt />

                </div>

                <p>
                  +91 98765 43210
                </p>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-red-500">

                  <FaEnvelope />

                </div>

                <p>
                  support@staynest.com
                </p>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >

          <p className="text-gray-500 text-sm text-center">
            © 2026 StayNest. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">

            <p className="hover:text-red-500 transition cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-red-500 transition cursor-pointer">
              Terms
            </p>

            <p className="hover:text-red-500 transition cursor-pointer">
              Sitemap
            </p>

          </div>

        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;