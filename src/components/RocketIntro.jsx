// components/RocketIntro.js
import React from "react";
import { motion } from "framer-motion";

const RocketIntro = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden relative z-10 bg-transparent">
      {/* Rocket Animation */}
      <motion.div
        initial={{ x: "-100vw", rotate: -45 }}
        animate={{ x: "30vw", y: "-10vh", rotate: 0 }}
        transition={{ type: "spring", stiffness: 70, duration: 2 }}
        className="absolute text-4xl sm:text-5xl lg:text-6xl mt-[-60px]"
      >
        🚀
      </motion.div>

      {/* Name flies in from rocket trail */}
      <motion.h1
        initial={{ opacity: 0, x: "-100vw", scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 60 }}
        className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-lobster mt-[-40px]"
      >
        Hi, I'm Khushi
      </motion.h1>
    </div>
  );
};

export default RocketIntro;
