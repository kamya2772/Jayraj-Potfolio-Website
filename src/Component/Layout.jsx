import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { AnimatePresence, motion } from "framer-motion";

const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  // Theme Toggle Logic
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.className = newMode ? "dark-theme" : "light-theme";
      
      const rootElement = document.getElementById("root") || document.body;
      if (newMode) {
        rootElement.classList.add("dark");
        rootElement.classList.remove("light");
        localStorage.setItem("theme", "dark");
      } else {
        rootElement.classList.add("light");
        rootElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  // Initialize Theme from LocalStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialMode = savedTheme === "dark" || (!savedTheme && prefersDark);
    
    setIsDarkMode(initialMode);
    document.body.className = initialMode ? "dark-theme" : "light-theme";
    
    const rootElement = document.getElementById("root") || document.body;
    if (initialMode) {
      rootElement.classList.add("dark");
      rootElement.classList.remove("light");
    } else {
      rootElement.classList.add("light");
      rootElement.classList.remove("dark");
    }
  }, []);

  const handleSidebarToggle = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <div className={`flex flex-col md:flex-row min-h-screen ${isDarkMode ? "dark" : "light"}`}>
      <Sidebar
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        onSidebarToggle={handleSidebarToggle}
      />
      <div className={`flex-1 overflow-y-auto h-screen ${isDarkMode ? "bg-dark-bg text-white" : "bg-light-bg text-gray-900"}`}>
         <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
               <Outlet context={{ isDarkMode }} />
            </motion.div>
         </AnimatePresence>
      </div>
    </div>
  );
};

export default Layout;
