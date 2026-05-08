import React from "react";

import { motion } from "framer-motion";

import { MdEmail } from "react-icons/md";

import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMobileAlt,
} from "react-icons/fa";

const Topbar = () => {
  return (
    <>
      {/* TOPBAR */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="
          bg-[#175CDD]
          min-h-11
          flex
          items-center
          justify-center
          border-b
          border-blue-400/20
          px-3
          py-2
        "
      >

        {/* CONTAINER */}
        <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[68%] max-w-[1320px]">

          {/* FLEX */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              justify-between
              items-center
              gap-3
              text-white
            "
          >

            {/* =====================================================
                            LEFT SIDE
            ===================================================== */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                items-center
                gap-3
                sm:gap-6
                text-[12px]
                sm:text-[13px]
                md:text-[14px]
                font-medium
              "
            >

              {/* EMAIL */}
              <motion.div
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
                className="
                  flex
                  items-center
                  gap-2
                  cursor-pointer
                  text-center
                "
              >
                <MdEmail className="text-[15px]" />

                <a
                  href="/"
                  className="
                    hover:underline
                    underline-offset-4
                    break-all
                  "
                >
                  contact@example.com
                </a>
              </motion.div>

              {/* PHONE */}
              <motion.div
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
                className="
                  flex
                  items-center
                  gap-2
                  cursor-pointer
                "
              >
                <FaMobileAlt className="text-[13px]" />

                <span>
                  +1 5589 55488 55
                </span>
              </motion.div>
            </div>

            {/* =====================================================
                            RIGHT SIDE
            ===================================================== */}

            <div
              className="
                flex
                items-center
                gap-4
                sm:gap-5
              "
            >

              {/* TWITTER */}
              <motion.a
                whileHover={{
                  y: -2,
                  scale: 1.1,
                }}
                transition={{ duration: 0.2 }}
                href="/"
                className="
                  text-white/75
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                <FaTwitter className="text-[13px] sm:text-[14px]" />
              </motion.a>

              {/* FACEBOOK */}
              <motion.a
                whileHover={{
                  y: -2,
                  scale: 1.1,
                }}
                transition={{ duration: 0.2 }}
                href="/"
                className="
                  text-white/75
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                <FaFacebookF className="text-[12px] sm:text-[13px]" />
              </motion.a>

              {/* INSTAGRAM */}
              <motion.a
                whileHover={{
                  y: -2,
                  scale: 1.1,
                }}
                transition={{ duration: 0.2 }}
                href="/"
                className="
                  text-white/75
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                <FaInstagram className="text-[13px] sm:text-[14px]" />
              </motion.a>

              {/* LINKEDIN */}
              <motion.a
                whileHover={{
                  y: -2,
                  scale: 1.1,
                }}
                transition={{ duration: 0.2 }}
                href="/"
                className="
                  text-white/75
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                <FaLinkedinIn className="text-[13px] sm:text-[14px]" />
              </motion.a>

            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Topbar;