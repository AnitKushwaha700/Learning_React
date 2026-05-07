// App.jsx

import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import About from "./pages/About";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },

  animate: {
    opacity: 1,
    y: 0,
  },

  exit: {
    opacity: 0,
    y: -20,
  },
};

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <BrowserRouter>

      <div className="bg-white overflow-hidden">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="pt-[75px]">

          <AnimatePresence mode="wait">

            <Routes>

              {/* Home */}
              <Route
                path="/"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                      duration: 0.6,
                    }}
                  >
                    <Home />
                  </motion.div>
                }
              />

              {/* About */}
              <Route
                path="/about"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                      duration: 0.6,
                    }}
                  >
                    <About />
                  </motion.div>
                }
              />

            </Routes>

          </AnimatePresence>

        </div>

        {/* Footer */}
        <Footer />

      </div>

    </BrowserRouter>
  );
};

export default App;