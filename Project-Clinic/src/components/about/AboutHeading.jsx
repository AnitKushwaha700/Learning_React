import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutHeading = () => {
  return (
    <>
      <section className="w-full bg-[#f8fbff] overflow-hidden">
        
        {/* Top Content */}
        <div className="relative py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-5">

            <div className="flex justify-center text-center">
              <div className="w-full lg:w-[70%]">

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="text-4xl lg:text-5xl  text-gray-900 tracking-tight mb-6"
                >
                  About
                </motion.h1>

                {/* Paragraph */}
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-gray-600 text-base lg:text-md max-w-4xl mx-auto"
                >
                  Odio et unde deleniti. Deserunt numquam exercitationem.
                  Officiis quo odio sint voluptas consequatur ut a odio
                  voluptatem. Sit dolorum debitis veritatis natus dolores.
                  Quasi ratione sint. Sit quaerat ipsum dolorem.
                </motion.p>
              </div>
            </div>
          </div>

          {/* Background Blur */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-40 -z-10"></div>
        </div>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}

        >
          <div className="max-w-7xl mx-auto px-5 py-5">
            <ol className="flex items-center justify-start gap-3 text-sm lg:text-base font-medium">
              
              <li>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-blue-600 transition-all duration-300"
                >
                  Home
                </Link>
              </li>

              <li className="text-gray-400">/</li>

              <li className="text-blue-600 font-semibold">
                About
              </li>
            </ol>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default AboutHeading;