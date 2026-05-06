import React from "react";
import logo from "../assets/images/oyoLogo.png";

import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20 border-b border-white/10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <img
              src={logo}
              alt="logo"
              className="w-32 mb-6"
            />

            <p className="text-gray-400 leading-relaxed">
              Discover premium hotels, luxury stays, and affordable rooms
              across India with seamless online booking experience.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-8">

              <div className="w-11 h-11 rounded-full bg-white/10 hover:bg-red-500 flex items-center justify-center cursor-pointer transition duration-300">
                <Facebook size={20} />
              </div>

              <div className="w-11 h-11 rounded-full bg-white/10 hover:bg-red-500 flex items-center justify-center cursor-pointer transition duration-300">
                <Instagram size={20} />
              </div>

              <div className="w-11 h-11 rounded-full bg-white/10 hover:bg-red-500 flex items-center justify-center cursor-pointer transition duration-300">
                <Twitter size={20} />
              </div>

              <div className="w-11 h-11 rounded-full bg-white/10 hover:bg-red-500 flex items-center justify-center cursor-pointer transition duration-300">
                <Linkedin size={20} />
              </div>

            </div>

          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-bold mb-8">
              Company
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-red-500 transition cursor-pointer">
                About Us
              </li>

              <li className="hover:text-red-500 transition cursor-pointer">
                Careers
              </li>

              <li className="hover:text-red-500 transition cursor-pointer">
                Blogs
              </li>

              <li className="hover:text-red-500 transition cursor-pointer">
                Press
              </li>

            </ul>

          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-bold mb-8">
              Support
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-red-500 transition cursor-pointer">
                Help Center
              </li>

              <li className="hover:text-red-500 transition cursor-pointer">
                Cancellation Policy
              </li>

              <li className="hover:text-red-500 transition cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-red-500 transition cursor-pointer">
                Terms & Conditions
              </li>

            </ul>

          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-bold mb-8">
              Contact Us
            </h3>

            <div className="space-y-6 text-gray-400">

              <div className="flex items-start gap-4">
                <MapPin className="text-red-500 mt-1" size={20} />

                <p>
                  Mumbai, Maharashtra, India
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-red-500" size={20} />

                <p>
                  +91 98765 43210
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-red-500" size={20} />

                <p>
                  support@staynest.com
                </p>
              </div>

            </div>

          </motion.div>

        </div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm text-center">
            © 2026 StayNest. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">

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

        </div>

      </div>
    </footer>
  );
};

export default Footer;