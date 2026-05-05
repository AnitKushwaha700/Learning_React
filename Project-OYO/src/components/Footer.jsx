import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-screen-2xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              StayEase
            </h2>

            <p className="text-sm text-gray-400 mt-4 leading-relaxed max-w-sm">
              Book reliable and affordable hotels across India. Trusted stays,
              transparent pricing, and seamless booking experience.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-red-500" />
                <a
                  href="mailto:support@stayease.com"
                  className="hover:text-white transition"
                >
                  support@stayease.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <FaPhone className="text-red-500" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><span className="hover:text-white cursor-pointer">Careers</span></li>
              <li><span className="hover:text-white cursor-pointer">Press</span></li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Support
            </h3>
            <ul className="space-y-3 text-sm">
              <li><span className="hover:text-white cursor-pointer">Help Center</span></li>
              <li><span className="hover:text-white cursor-pointer">FAQs</span></li>
              <li><span className="hover:text-white cursor-pointer">Contact</span></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li><span className="hover:text-white cursor-pointer">Terms</span></li>
              <li><span className="hover:text-white cursor-pointer">Privacy</span></li>
              <li><span className="hover:text-white cursor-pointer">Refunds</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Subscribe
            </h3>

            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-3 py-2 text-sm rounded-l-md bg-gray-800 border border-gray-700 outline-none focus:border-red-500"
              />
              <button className="bg-red-500 px-4 py-2 text-sm font-medium text-white rounded-r-md hover:bg-red-600 transition">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} StayEase. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-4 md:mt-0 text-lg">
            <FaTwitter className="hover:text-white cursor-pointer transition" />
            <FaInstagram className="hover:text-white cursor-pointer transition" />
            <FaLinkedin className="hover:text-white cursor-pointer transition" />
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;