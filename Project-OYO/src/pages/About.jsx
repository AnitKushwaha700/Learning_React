import React from "react";
import { motion } from "framer-motion";

import AboutHero from "../components/about/AboutHero";
import CompanyStory from "../components/about/CompanyStory";
import StatsSection from "../components/about/StatsSection";
import TeamSection from "../components/about/TeamSection";
import FAQSection from "../components/about/FAQSection";
import CTASection from "../components/about/CTASection";

const About = () => {
  return (
    <main className="overflow-hidden bg-white">

      {/* Hero Section */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <AboutHero />
      </motion.div>

      {/* Company Story */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
      >
        <CompanyStory />
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
      >
        <StatsSection />
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
      >
        <TeamSection />
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
      >
        <FAQSection />
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
      >
        <CTASection />
      </motion.div>

    </main>
  );
};

export default About;