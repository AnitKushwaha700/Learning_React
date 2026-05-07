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
          h-11
          flex
          items-center
          justify-center
          border-b
          border-blue-400/20
        "
      >

        {/* CONTAINER */}
        <div className="w-[68%] max-w-[1320px]">

          {/* FLEX */}
          <div className="flex justify-between items-center text-white">

            {/* =====================================================
                            LEFT SIDE
            ===================================================== */}

            <div className="flex items-center gap-6 text-[14px] font-medium">

              {/* EMAIL */}
              <motion.div
                whileHover={{ y: -1 }}
                className="
                  flex
                  items-center
                  gap-2
                  cursor-pointer
                "
              >
                <MdEmail className="text-[15px]" />

                <a
                  href="/"
                  className="
                    hover:underline
                    underline-offset-4
                  "
                >
                  contact@example.com
                </a>
              </motion.div>

              {/* PHONE */}
              <motion.div
                whileHover={{ y: -1 }}
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

            <div className="flex items-center gap-5">

              {/* TWITTER */}
              <motion.a
                whileHover={{
                  y: -2,
                  scale: 1.1,
                }}
                href="/"
                className="
                  text-white/75
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                <FaTwitter className="text-[14px]" />
              </motion.a>

              {/* FACEBOOK */}
              <motion.a
                whileHover={{
                  y: -2,
                  scale: 1.1,
                }}
                href="/"
                className="
                  text-white/75
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                <FaFacebookF className="text-[13px]" />
              </motion.a>

              {/* INSTAGRAM */}
              <motion.a
                whileHover={{
                  y: -2,
                  scale: 1.1,
                }}
                href="/"
                className="
                  text-white/75
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                <FaInstagram className="text-[14px]" />
              </motion.a>

              {/* LINKEDIN */}
              <motion.a
                whileHover={{
                  y: -2,
                  scale: 1.1,
                }}
                href="/"
                className="
                  text-white/75
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                <FaLinkedinIn className="text-[14px]" />
              </motion.a>

            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Topbar;