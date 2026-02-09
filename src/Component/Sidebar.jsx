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
import resume from "../assets/Jayraj_Rana_RESUME_2025.pdf";

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
          isMinimized ? "w-20" : "w-72"
        } h-screen sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-r border-gray-200 dark:border-gray-800 transition-all duration-300 overflow-y-auto p-4 flex-shrink-0 z-30 shadow-xl`}
      >
        <div className="flex flex-col items-center mt-4 mb-8">
          <Link to="/" className="relative group">
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-dark rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 ${isMinimized ? "w-12 h-12" : "w-28 h-28"}`}></div>
            <img
              src={Image}
              alt="Profile"
              className={`relative rounded-full border-4 border-white dark:border-slate-800 object-cover ${
                isMinimized ? "w-12 h-12" : "w-28 h-28"
              } transition-all duration-300`}
            />
          </Link>
          {!isMinimized && (
            <div className="text-center mt-4">
              <p className="text-xs uppercase tracking-widest text-primary font-bold mb-1">Research Scholar</p>
              <h2 className="text-xl font-serif font-bold text-gray-800 dark:text-white">Jayraj Rana</h2>
            </div>
          )}
        </div>

        <ul className="flex flex-col space-y-2 flex-grow">
          {[
            { to: "/", icon: FaUser, label: "Abstract" },
            { to: "/introduction", icon: FaBook, label: "Introduction" },
            { to: "/experience", icon: FaBriefcase, label: "Experience" },
            { to: "/certificate", icon: FaAward, label: "Certificates" },
            { to: "/writing", icon: FaFileAlt, label: "Work" },
            { to: "/media", icon: FaImages, label: "Media" },
            { to: "/contact", icon: FaPhone, label: "Contact" },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group
                  hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary-dark dark:hover:text-primary
                  text-gray-600 dark:text-gray-400 font-medium
                `}
              >
                <item.icon className="text-xl group-hover:scale-110 transition-transform" />
                {!isMinimized && <span className="ml-4">{item.label}</span>}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={resume}
              download="Jayraj_Rana_Resume.pdf"
               className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group
                  hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-600 dark:hover:text-green-400
                  text-gray-600 dark:text-gray-400 font-medium cursor-pointer
                `}
            >
              <FaDownload className="text-xl group-hover:scale-110 transition-transform" />
              {!isMinimized && <span className="ml-4">Resume/CV</span>}
            </a>
          </li>
        </ul>

        <div className={`flex ${isMinimized ? "flex-col gap-4" : "justify-between"} items-center mt-4 px-2 pt-4 border-t border-gray-200 dark:border-gray-800`}>
          <button
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <FaSun className="text-orange-400 text-xl" /> : <FaMoon className="text-slate-600 text-xl" />}
          </button>
          <button
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
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
