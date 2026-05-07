import React from "react";

import { motion } from "framer-motion";

import { IoIosArrowDown } from "react-icons/io";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="
          sticky
          top-0
          z-50
          bg-white/90
          backdrop-blur-md
          flex
          justify-center
          items-center
          h-20
          border-b
          border-[#edf2f7]
          shadow-[0_8px_30px_rgba(0,0,0,0.04)]
        "
      >

        {/* CONTAINER */}
        <div className="w-[68%] max-w-[1320px]">

          {/* FLEX */}
          <div className="flex justify-between items-center">

            {/* =====================================================
                            LOGO
            ===================================================== */}

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="
                text-[38px]
                font-bold
                tracking-[-2px]
                text-[#11224d]
                cursor-pointer
              "
            >
              Clinic
            </motion.div>

            {/* =====================================================
                            MENU
            ===================================================== */}

            <div
              className="
                flex
                items-center
                gap-8
                text-[16px]
                text-gray-600
                font-medium
              "
            >

              {/* HOME */}
              <motion.div whileHover={{ y: -2 }}>
                <Link
                  to="/"
                  className="
                    relative
                    text-blue-600
                    group
                  "
                >
                  Home

                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
                      w-full
                      h-[2px]
                      bg-blue-600
                    "
                  ></span>
                </Link>
              </motion.div>

              {/* ABOUT */}
              <motion.div whileHover={{ y: -2 }}>
                <Link
                  to="/about"
                  className="
                    relative
                    group
                    hover:text-blue-600
                    transition-colors
                    duration-300
                  "
                >
                  About

                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
                      w-0
                      h-[2px]
                      bg-blue-600
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  ></span>
                </Link>
              </motion.div>

              {/* DEPARTMENTS */}
              <motion.div whileHover={{ y: -2 }}>
                <a
                  href="/"
                  className="
                    relative
                    group
                    hover:text-blue-600
                    transition-colors
                    duration-300
                  "
                >
                  Departments

                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
                      w-0
                      h-[2px]
                      bg-blue-600
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  ></span>
                </a>
              </motion.div>

              {/* SERVICES */}
              <motion.div whileHover={{ y: -2 }}>
                <a
                  href="/"
                  className="
                    relative
                    group
                    hover:text-blue-600
                    transition-colors
                    duration-300
                  "
                >
                  Services

                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
                      w-0
                      h-[2px]
                      bg-blue-600
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  ></span>
                </a>
              </motion.div>

              {/* DOCTORS */}
              <motion.div whileHover={{ y: -2 }}>
                <a
                  href="/"
                  className="
                    relative
                    group
                    hover:text-blue-600
                    transition-colors
                    duration-300
                  "
                >
                  Doctors

                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
                      w-0
                      h-[2px]
                      bg-blue-600
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  ></span>
                </a>
              </motion.div>

              {/* MORE PAGES */}
              <motion.div
                whileHover={{ y: -2 }}
                className="
                  relative
                  flex
                  items-center
                  gap-1
                  cursor-pointer
                  group
                  hover:text-blue-600
                  transition-colors
                  duration-300
                "
              >
                <span>More Pages</span>

                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoIosArrowDown className="text-sm opacity-70 mt-[2px]" />
                </motion.div>

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    w-0
                    h-[2px]
                    bg-blue-600
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                ></span>
              </motion.div>

              {/* DROPDOWN */}
              <motion.div
                whileHover={{ y: -2 }}
                className="
                  relative
                  flex
                  items-center
                  gap-1
                  cursor-pointer
                  group
                  hover:text-blue-600
                  transition-colors
                  duration-300
                "
              >
                <span>Dropdown</span>

                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoIosArrowDown className="text-sm opacity-70 mt-[2px]" />
                </motion.div>

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    w-0
                    h-[2px]
                    bg-blue-600
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                ></span>
              </motion.div>

              {/* CONTACT */}
              <motion.div whileHover={{ y: -2 }}>
                <a
                  href="/"
                  className="
                    relative
                    group
                    hover:text-blue-600
                    transition-colors
                    duration-300
                  "
                >
                  Contact

                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
                      w-0
                      h-[2px]
                      bg-blue-600
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  ></span>
                </a>
              </motion.div>

            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;