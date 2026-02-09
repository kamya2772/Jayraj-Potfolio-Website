import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import Image from "../assets/BGremovedImage.png";
import { motion } from "framer-motion";

function Home() {
  const { isDarkMode } = useOutletContext();

  return (
    <div
      className={`h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10`}
    >
      {/* Left Section */}
      <div className="flex flex-col items-center sm:items-start space-y-6 px-2 sm:px-0 text-center sm:text-left max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl font-medium text-primary tracking-wide"
        >
          Hello There!
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`text-5xl sm:text-6xl md:text-7xl font-serif font-bold leading-tight ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          I’m <span className="text-primary relative inline-block">
            Jayraj Rana
            <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10 skew-x-12 transform"></span>
          </span>,<br />
          Research Scholar.
        </motion.h1>
        <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3 }}
          className={`text-lg sm:text-xl leading-relaxed ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          I’m a researcher and artist, inspired by innovation, blending
          <span className="font-semibold text-primary"> research</span>, 
          <span className="font-semibold text-primary"> development</span>, and 
          <span className="font-semibold text-primary"> teaching</span> to ignite curiosity and paint
          the vast canvas of knowledge.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
        >
          <Link to="introduction" className="w-full sm:w-auto">
             <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-primary/50 hover:bg-primary-dark transition-all transform hover:-translate-y-1 font-bold text-lg tracking-wide">
              View Portfolio
            </button>
          </Link>
          <button
            className={`w-full sm:w-auto border-2 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 ${
               isDarkMode 
               ? "border-gray-700 text-white hover:bg-gray-800" 
               : "border-gray-300 text-gray-800 hover:bg-gray-100"
            }`}
             onClick={() => {
                const PhoneNumber = "9265423807";
                const message = "Hello, It's nice to connecting with you 😊!";
                window.open(
                  `https://wa.me/${PhoneNumber}?text=${encodeURIComponent(
                    message
                  )}`,
                  "_blank"
                );
              }}
          >
            WhatsApp
          </button>
        </motion.div>
      </div>
      
      {/* Right Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative mt-12 sm:mt-0"
      >
        <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-transparent rounded-full blur-2xl opacity-30"></div>
        <div
          className={`relative border-4 rounded-3xl overflow-hidden glass-card p-2 w-80 h-[28rem] sm:w-96 sm:h-[32rem] ${
            isDarkMode ? "border-white/10" : "border-black/5"
          }`}
        >
          <div className="absolute inset-0 bg-primary/5"></div>
          <img
            src={Image}
            alt="Jayraj Rana"
            className="relative w-full h-full object-cover rounded-2xl shadow-inner"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
