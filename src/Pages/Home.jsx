import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";
import Image from "../assets/BGremovedImage.png";
import { Link } from "react-router-dom";

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.className = newMode ? "dark-theme" : "light-theme";
      return newMode;
    });
  };
  const handleSidebarToggle = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <div
      className={`flex h-screen ${
        isDarkMode
          ? "bg-gradient-to-br from-black via-gray-800 to-gray-900 "
          : "bg-gray-100 "
      } `}
    >
      <Sidebar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        onSidebarToggle={handleSidebarToggle}
      />
      <div
        className={` flex-1 flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-8`}
      >
        {/* Left Section */}
        <div className="flex flex-col items-center sm:items-start space-y-4 px-2 sm:px-0 text-center sm:text-left">
          <p
            className={`text-lg font-medium  ${
              isDarkMode ? "text-white" : "text-gray-600"
            }`}
          >
            Hello There!
          </p>
          <h1
            className={`text-4xl sm:text-3xl md:text-6xl font-bold  ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            I’m <span className="text-yellow-500">Jayraj Rana</span>,<br />
            Research Scholar Based in India.
          </h1>
          <p
            className={` ${
              isDarkMode ? "text-white" : "text-gray-600"
            } text-base sm:text-lg`}
          >
            I’m a researcher and artist, inspired by innovation, blending
            research, development, and teaching to ignite curiosity and paint
            the vast canvas of knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center sm:justify-start space-x-4">
            <button className="bg-yellow-600 text-gray-950 px-4 md:px-6 py-3 rounded-lg shadow-md font-bold w-full sm:w-auto hover:bg-yellow-500">
              <Link to="introduction"> View My Portfolio</Link>
            </button>
            <button
              className="border-2 border-gray-800 text-whaite md:px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 font-bold hover:text-white"
              onClick={() => {
                const PhoneNumber = "9265423807";
                const message = "Hello,It's nice to connecting with you 😊!";
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
          </div>
        </div>
        {/* Right Section */}
        <div className="relative mt-8 sm:mt-0">
          <div className="absolute -top-10 -right-6 sm:w-68 sm:h-74 bg-yellow-500  z-0"></div>
          <div
            className={`relative border-4  w-84 h-100 sm:w-84 sm:h-100 ${
              isDarkMode ? "border-white" : "border-black"
            }`}
          >
            <img
              src={Image} // Replace with your profile image path
              alt="Jayraj Rana"
              className="relative  mt-2 z-20 w-84 h-120 object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
