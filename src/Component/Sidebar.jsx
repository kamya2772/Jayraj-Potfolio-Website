import React, { useState } from "react";
import {
  FaSun,
  FaMoon,
  FaUser,
  FaBook,
  FaBriefcase,
  FaFileAlt,
  FaImages,
  FaDownload,
  FaPhone,
  FaAward,
} from "react-icons/fa";
import Image from "../assets/croped.jpg";
import { Link } from "react-router-dom";
import resume from "../assets/Resume.pdf";

function Sidebar({ toggleTheme, isDarkMode, onSidebarToggle }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
    if (onSidebarToggle) {
      onSidebarToggle(!isMinimized);
    }
  };
  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
    if (onSidebarToggle) {
      onSidebarToggle(!isMobileOpen);
    }
  };

  return (
    <>
      <div
        className={`hidden sm:flex flex-col ${
          isMinimized ? "w-16" : "w-64"
        } h-screen sticky top-0 bg-gradient-to-b from-yellow-400 via-orange-400 to-orange-500  transition-all duration-300 overflow-y-auto p-1  rounded-3xl flex-shrink-0 z-30`}
      >
        <div className="flex flex-col items-center mt-4">
          <Link to="/">
            <img
              src={Image} // Replace with your profile photo URL
              alt="Profile"
              className={`rounded-full border-2 border-gray-500 ${
                isMinimized ? "w-10 h-10" : "w-24 h-24"
              } transition-all duration-300`}
            />
          </Link>
          {!isMinimized && (
            <div className="text-center mt-2">
              <p className="text-sm ">Research Scholar</p>
              <p className="text-lg font-bold ">Jayraj Rana</p>
            </div>
          )}
        </div>

        <ul className="flex flex-col mt-4 space-y-4">
          <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/" className="flex items-center">
              <FaUser />
              {!isMinimized && (
                <span className="ml-4 font-semibold">Abstract</span>
              )}
            </Link>
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/introduction" className="flex items-center">
              <FaBook />
              {!isMinimized && (
                <span className="ml-4 font-semibold">Introduction</span>
              )}
            </Link>
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/experience" className="flex items-center">
              <FaBriefcase />
              {!isMinimized && (
                <span className="ml-4 font-semibold">Experience</span>
              )}
            </Link>
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/certificate" className="flex items-center">
              <FaAward />
              {!isMinimized && (
                <span className="ml-4 font-semibold">Certificates</span>
              )}
            </Link>
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/writing" className="flex items-center">
              <FaFileAlt />
              {!isMinimized && <span className="ml-4 font-semibold">Work</span>}
            </Link>
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/media" className="flex items-center">
              <FaImages />
              {!isMinimized && (
                <span className="ml-4 font-semibold">Media</span>
              )}
            </Link>
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/contact" className="flex items-center">
              <FaPhone />
              {!isMinimized && (
                <span className="ml-4 font-semibold">Contact Me</span>
              )}
            </Link>
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <a
              href={resume}
              download="Jayraj_Rana_Resume.pdf"
              className=" flex items-center"
            >
              <FaDownload />
              {!isMinimized && (
                <span className="ml-4 font-semibold">Resume/CV</span>
              )}
            </a>
          </li>
        </ul>
        <div
          className={`flex ${
            isMinimized ? "flex-col" : "justify-between"
          } items-center mt-10 px-2`}
        >
          <button
            className=" p-2 text-lg focus:outline-none hover:bg-gray-700 rounded-full transition duration-300"
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <FaMoon className="text-blue-300" />
            ) : (
              <FaSun className=" text-red-900" />
            )}
          </button>
          <button
            className={`p-2 text-lg focus:outline-none hover:bg-gray-700 rounded-full transition duration-300 ${
              isMinimized ? "mt-4" : ""
            }`}
            onClick={toggleSidebar}
          >
            {isMinimized ? ">" : "<"}
          </button>
        </div>
      </div>
      <div className="sm:hidden">
        <button
          className="fixed top-4 left-4 z-50 bg-orange-500 text-white p-2 rounded-full shadow-lg"
          onClick={toggleMobileSidebar}
        >
          {isMobileOpen ? "X" : "☰"}
        </button>
        {isMobileOpen && (
          <div className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-yellow-400 via-orange-400 to-orange-500 z-40 p-4">
            <div className="flex flex-col items-center">
              <Link to="/">
                <img
                  src={Image}
                  alt="Profile"
                  className="rounded-full w-16 h-16 border-2 border-gray-500"
                />
              </Link>
              <p className="text-center mt-2 text-sm">Research Scholar</p>
              <p className="text-center text-lg font-bold">Jayraj Rana</p>
            </div>
            <ul className="flex flex-col mt-4 space-y-4">
              <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <Link to="/" className="flex items-center">
                  <FaUser />
                  <span className="ml-4 font-semibold">Abstract</span>
                </Link>
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <Link to="/introduction" className="flex items-center">
                  <FaBook />
                  {!isMinimized && (
                    <span className="ml-4 font-semibold">Introduction</span>
                  )}
                </Link>
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <Link to="/experience" className="flex items-center">
                  <FaBriefcase />
                  {!isMinimized && (
                    <span className="ml-4 font-semibold">Experience</span>
                  )}
                </Link>
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <Link to="/certificate" className="flex items-center">
                  <FaAward />
                  {!isMinimized && (
                    <span className="ml-4 font-semibold">Certificates</span>
                  )}
                </Link>
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <Link to="/writing" className="flex items-center">
                  <FaFileAlt />
                  {!isMinimized && (
                    <span className="ml-4 font-semibold">Work</span>
                  )}
                </Link>
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <Link to="/media" className="flex items-center">
                  <FaImages />
                  {!isMinimized && (
                    <span className="ml-4 font-semibold">Media</span>
                  )}
                </Link>
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <Link to="/contact" className="flex items-center">
                  <FaPhone />
                  {!isMinimized && (
                    <span className="ml-4 font-semibold">Contact Me</span>
                  )}
                </Link>
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <a
                  href={resume}
                  download="Jayraj_Rana_Resume.pdf"
                  className=" flex items-center"
                >
                  <FaDownload />
                  {!isMinimized && (
                    <span className="ml-4 font-semibold">Resume/CV</span>
                  )}
                </a>
              </li>
            </ul>
            <div
              className={`flex ${
                isMinimized ? "flex-col" : "justify-between"
              } items-center mt-10 px-2`}
            >
              <button
                className=" p-2 text-lg focus:outline-none hover:bg-gray-700 rounded-full transition duration-300"
                onClick={toggleTheme}
              >
                {isDarkMode ? (
                  <FaMoon className="text-blue-300" />
                ) : (
                  <FaSun className=" text-red-900" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar;
