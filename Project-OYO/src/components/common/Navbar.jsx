import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaBars,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";

import logo from "../../assets/images/oyoLogo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Hotels", path: "/hotels" },
  { name: "Rooms", path: "/rooms" },
  { name: "Offers", path: "/offers" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm"
    >

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="flex items-center justify-between h-[75px]">

          {/* Logo */}
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            transition={{ duration: 0.3 }}
          >

            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-28 sm:w-32 md:w-36 object-contain"
              />
            </Link>

          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">

            {navLinks.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -2,
                }}
                transition={{ duration: 0.2 }}
              >

                <Link
                  to={item.path}
                  className="relative text-gray-700 font-semibold hover:text-red-500 transition duration-300 group"
                >
                  {item.name}

                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>

                </Link>

              </motion.div>
            ))}

          </div>

          {/* Right Buttons */}
          <div className="hidden lg:flex items-center gap-4">

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="border border-red-500 text-red-500 px-5 py-2 rounded-xl font-semibold hover:bg-red-500 hover:text-white transition duration-300"
            >
              Sign Up
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="bg-red-500 text-white px-5 py-2 rounded-xl font-semibold hover:bg-red-600 transition duration-300 shadow-lg flex items-center gap-2"
            >

              <FaUserCircle />

              Login

            </motion.button>

          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl text-gray-700"
          >

            {open ? <FaTimes /> : <FaBars />}

          </motion.button>

        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100 shadow-xl"
          >

            <div className="flex flex-col px-6 py-6 gap-5">

              {navLinks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                >

                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="text-gray-700 font-semibold hover:text-red-500 transition duration-300 block"
                  >
                    {item.name}
                  </Link>

                </motion.div>
              ))}

              {/* Mobile Buttons */}
              <div className="flex flex-col gap-4 pt-4">

                <button className="border border-red-500 text-red-500 py-3 rounded-xl font-semibold hover:bg-red-500 hover:text-white transition duration-300">
                  Sign Up
                </button>

                <button className="bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition duration-300">
                  Login
                </button>

              </div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;