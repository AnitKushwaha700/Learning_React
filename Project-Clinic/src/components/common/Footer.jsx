import React from "react";
import { motion } from "framer-motion";

import { FiMapPin, FiPhone, FiMail, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const footerData = [
    {
      title: "Studio",
      links: [
        "Our Story",
        "Design Process",
        "Portfolio",
        "Case Studies",
        "Awards",
      ],
    },

    {
      title: "Services",
      links: [
        "Brand Identity",
        "Web Design",
        "Mobile Apps",
        "Digital Strategy",
        "Consultation",
      ],
    },

    {
      title: "Resources",
      links: [
        "Design Blog",
        "Style Guide",
        "Free Assets",
        "Tutorials",
        "Inspiration",
      ],
    },

    {
      title: "Connect",
      links: [
        "Start Project",
        "Schedule Call",
        "Join Newsletter",
        "Follow Updates",
        "Partnership",
      ],
    },
  ];

  return (
    <>
      <footer className="w-full bg-[#f5f5f7] relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6">
          {/* ================= TOP FOOTER ================= */}
          <div className="pt-[95px] pb-[110px]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-[120px]">
              {/* ================= LEFT ================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                viewport={{ once: true }}
              >
                {/* LOGO */}
                <h2
                  className="
                    text-[#13254a]
                    text-[54px]
                    font-[300]
                    tracking-[-1.5px]
                    leading-none
                    mb-[42px]
                  "
                >
                  Clinic
                </h2>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-[#7b8190]
                    text-[18px]
                    leading-[2]
                    max-w-[520px]
                    font-[400]
                  "
                >
                  Crafting exceptional digital experiences through thoughtful
                  design and innovative solutions that elevate your brand
                  presence.
                </p>

                {/* CONTACT INFO */}
                <div className="mt-[58px] flex flex-col gap-[26px]">
                  {/* ADDRESS */}
                  <motion.div
                    whileHover={{
                      x: 3,
                    }}
                    className="flex items-center gap-4"
                  >
                    <FiMapPin className="text-[#2563eb] text-[18px]" />

                    <span
                      className="
                        text-[#5f6675]
                        text-[16px]
                      "
                    >
                      123 Creative Boulevard, Design District, NY 10012
                    </span>
                  </motion.div>

                  {/* PHONE */}
                  <motion.div
                    whileHover={{
                      x: 3,
                    }}
                    className="flex items-center gap-4"
                  >
                    <FiPhone className="text-[#2563eb] text-[18px]" />

                    <span
                      className="
                        text-[#5f6675]
                        text-[16px]
                      "
                    >
                      +1 (555) 987-6543
                    </span>
                  </motion.div>

                  {/* EMAIL */}
                  <motion.div
                    whileHover={{
                      x: 3,
                    }}
                    className="flex items-center gap-4"
                  >
                    <FiMail className="text-[#2563eb] text-[18px]" />

                    <span
                      className="
                        text-[#5f6675]
                        text-[16px]
                      "
                    >
                      hello@designstudio.com
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* ================= RIGHT NAV ================= */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-[55px]">
                {footerData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                  >
                    {/* TITLE */}
                    <h4
                      className="
                        text-[#13254a]
                        text-[18px]
                        font-[500]
                        mb-[28px]
                      "
                    >
                      {item.title}
                    </h4>

                    {/* LINKS */}
                    <div className="flex flex-col gap-[18px]">
                      {item.links.map((link, i) => (
                        <motion.a
                          key={i}
                          href="/"
                          whileHover={{
                            x: 3,
                          }}
                          className="
                            text-[#8b8f9c]
                            text-[16px]
                            font-[400]
                            hover:text-[#2563eb]
                            transition-all
                            duration-300
                          "
                        >
                          {link}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= BOTTOM ================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="
              border-t
              border-[#e6e7eb]
              py-[26px]
            "
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* COPYRIGHT */}
              <div
                className="
                  text-[#a0a4af]
                  text-[15px]
                  flex
                  items-center
                  gap-1
                "
              >
                ©<span className="text-[#13254a]">Clinic.</span>
                All rights reserved.
              </div>

              {/* RIGHT LINKS */}
              <div className="flex flex-wrap items-center justify-center gap-8">
                <a
                  href="/"
                  className="
                    text-[#a0a4af]
                    text-[14px]
                    hover:text-[#2563eb]
                    transition-all
                    duration-300
                  "
                >
                  Privacy Policy
                </a>

                <a
                  href="/"
                  className="
                    text-[#a0a4af]
                    text-[14px]
                    hover:text-[#2563eb]
                    transition-all
                    duration-300
                  "
                >
                  Terms of Service
                </a>

                <a
                  href="/"
                  className="
                    text-[#a0a4af]
                    text-[14px]
                    hover:text-[#2563eb]
                    transition-all
                    duration-300
                  "
                >
                  Cookie Policy
                </a>

                {/* CREDITS */}
                <div
                  className="
                    text-[#a0a4af]
                    text-[14px]
                    border-l
                    border-[#d7d9df]
                    pl-6
                  "
                >
                  Designed by{" "}
                  <a
                    href="/"
                    className="
                      text-[#2563eb]
                    "
                  >
                    BootstrapMade
                  </a>
                  . Distributed by{" "}
                  <a
                    href="/"
                    className="
                      text-[#2563eb]
                    "
                  >
                    ThemeWagon
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= SCROLL BUTTON ================= */}
        <motion.button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          whileHover={{
            y: -3,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
    fixed
    bottom-5
    right-5
    w-[42px]
    h-[42px]
    rounded-full
    bg-[#2563eb]
    text-white
    flex
    items-center
    justify-center
    shadow-lg
    z-50
  "
        >
          <FiArrowUp className="text-[16px]" />
        </motion.button>
      </footer>
    </>
  );
};

export default Footer;
