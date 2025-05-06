import React, { useEffect, useState } from "react";
import Sidebar from "../Component/Sidebar";
import Image from "../assets/ImageAbout.jpeg";
import Resume from "../assets/Resume.pdf";
import card1 from "../assets/PTsci.jpg";
import card2 from "../assets/vnsgu.jpg";
import {
  FaChalkboardTeacher,
  FaTheaterMasks,
  FaMusic,
  FaMicrophone,
  FaPenNib,
  FaBookOpen, // Keep if used elsewhere, otherwise remove
  FaBookReader,
} from "react-icons/fa";

function Introduction() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAchivementVisible, setIsAchivementVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Apply theme class to body or a top-level container
      document.body.className = newMode ? "dark-theme" : "light-theme";
      // Also update a state/class on the root element if needed for component-level styling
      // For example, you might have a main wrapper div
      const rootElement = document.getElementById("root") || document.body; // Adjust selector if needed
      if (newMode) {
        rootElement.classList.add("dark");
        rootElement.classList.remove("light");
      } else {
        rootElement.classList.add("light");
        rootElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  // Set initial theme based on preference or default
  useEffect(() => {
    // Example: check local storage or system preference
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;
    const initialMode =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && prefersDark);
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

  // Intersection Observer for Skills
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger earlier
    );
    const section = document.getElementById("skill-section");
    if (section) {
      observer.observe(section);
    }
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []); // Empty dependency array: run once on mount

  // Intersection Observer for Achievements
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAchivementVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger earlier
    );
    const section = document.getElementById("achivement-section");
    if (section) {
      observer.observe(section);
    }
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []); // Empty dependency array: run once on mount

  return (
    // Use theme class on the main container if Sidebar is outside it
    // Or rely on body class set in toggleTheme
    <div
      className={`flex flex-col md:flex-row h-screen ${
        isDarkMode ? "dark" : "light"
      }`}
    >
      {/* Sidebar */}
      <Sidebar
        className="fixed h-full" // Avoid fixed if it causes layout issues with scrolling content
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />
      {/* Main Content Area */}
      {/* Added 'dark:bg-gray-800' as an example dark mode background */}
      <div
        className={`flex-1 overflow-y-auto snap-y snap-mandatory ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* About Me Section */}
        <section
          // Use min-h-screen for flexibility, py for padding
          className={`min-h-screen flex items-center justify-center snap-start px-4 py-16 md:py-0 ${
            isDarkMode ? "bg-black text-gray-100" : "bg-gray-100 text-black" // Ensure text color contrasts
          }`}
          id="about" // Add IDs for navigation
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full items-center">
            {/* Left Section: Image */}
            <div className="relative flex justify-center items-center order-1 md:order-none">
              {/* Decorative Borders */}
              <div className="absolute -top-11 left-11 sm:left-8 md:left-11 w-64 h-80 sm:w-72 sm:h-96 border-[10px] sm:border-[12px] rounded-3xl hidden sm:block border-yellow-400 z-10"></div>
              <img
                src={Image}
                alt="Profile Jayraj Rana"
                className="relative border-2 border-black rounded-3xl w-64 h-80 sm:w-72 sm:h-96 object-cover z-20" // z-20 to be above border
              />
              <div className="absolute -bottom-11 right-11 sm:right-8 md:right-11 w-64 h-80 sm:w-72 sm:h-96 border-[10px] sm:border-[12px] rounded-3xl hidden sm:block border-yellow-400 z-10"></div>
            </div>
            {/* Right Section: Content */}
            <div className="flex flex-col justify-center items-start text-justify px-4 sm:px-0 order-2 md:order-none">
              <h2 className="text-3xl sm:text-4xl text-yellow-500 font-bold mb-4">
                About Me
              </h2>
              <p className="mb-6 text-base sm:text-lg">
                {" "}
                {/* Adjusted text size */}
                <b>Hi, I’m Jayraj Rana</b> — I'm a passionate Biology Lecturer
                with over five years of experience in academic institutions,
                specializing in vernacular language instruction. My journey in
                biological sciences has been driven by a commitment to
                education, research, and development. Beyond the classroom, I
                engage in acting and writing, bringing creativity and depth to
                my professional endeavors. I am eager to contribute my skills to
                initiatives that foster individual and organizational growth.
              </p>
              <div>
                <a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-bold py-2 px-6 rounded-lg shadow-md transition-colors ${
                    isDarkMode
                      ? "bg-yellow-500 text-black hover:bg-yellow-400"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section - REVISED FOR RESPONSIVENESS */}
        <section
          className={`min-h-screen flex flex-col justify-center items-center snap-start py-16 px-4 ${
            isDarkMode ? "bg-gray-900 text-gray-100" : "bg-blue-100 text-black"
          }`}
          id="education" // Add ID
        >
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-yellow-600 text-center">
              Education & Training
            </h1>
            <div className="flex flex-col items-center gap-6 md:gap-8">
              {/* Card 1 */}
              <div
                className={`flex flex-col sm:flex-row rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl w-full max-w-2xl h-auto ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <img
                  src={card2}
                  alt="Veer Narmad South Gujarat University"
                  className="w-full sm:w-1/3 h-48 sm:h-auto object-cover"
                />
                <div className="p-4 sm:p-6 flex flex-col justify-center">
                  <h2
                    className={`text-xl sm:text-2xl font-bold ${
                      isDarkMode ? "text-blue-300" : "text-blue-900"
                    }`}
                  >
                    Masters Of Science in Zoology
                  </h2>
                  <p
                    className={`text-base sm:text-lg mt-1 ${
                      isDarkMode ? "text-gray-300" : "text-black"
                    }`}
                  >
                    Veer Narmad South Gujarat University, Surat
                  </p>
                  <p className="text-green-500 font-semibold mt-2">
                    {" "}
                    {/* Adjusted color for dark mode visibility */}
                    2023-2025 | Completed
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className={`flex flex-col sm:flex-row rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl w-full max-w-2xl h-auto ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <img
                  src={card2}
                  alt="Veer Narmad South Gujarat University"
                  className="w-full sm:w-1/3 h-48 sm:h-auto object-cover"
                />
                <div className="p-4 sm:p-6 flex flex-col justify-center">
                  <h2
                    className={`text-xl sm:text-2xl font-bold ${
                      isDarkMode ? "text-blue-300" : "text-blue-900"
                    }`}
                  >
                    Post Graduate Diploma in Molecular and Biochemical
                    Technology
                  </h2>
                  <p
                    className={`text-base sm:text-lg mt-1 ${
                      isDarkMode ? "text-gray-300" : "text-black"
                    }`}
                  >
                    Veer Narmad South Gujarat University, Surat
                  </p>
                  <p className="text-green-500 font-semibold mt-2">
                    2018-2021 | Completed
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div
                className={`flex flex-col sm:flex-row rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl w-full max-w-2xl h-auto ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <img
                  src={card1}
                  alt="Sir P.T. Sarvajanik College of Science"
                  className="w-full sm:w-1/3 h-48 sm:h-auto object-cover"
                />
                <div className="p-4 sm:p-6 flex flex-col justify-center">
                  <h2
                    className={`text-xl sm:text-2xl font-bold ${
                      isDarkMode ? "text-blue-300" : "text-blue-900"
                    }`}
                  >
                    Bachelor Of Science in Zoology
                  </h2>
                  <p
                    className={`text-base sm:text-lg mt-1 ${
                      isDarkMode ? "text-gray-300" : "text-black"
                    }`}
                  >
                    Sir P.T. Sarvajanik College of Science, Surat
                  </p>
                  <p className="text-green-500 font-semibold mt-2">
                    2018-2021 | Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          className={`min-h-screen flex flex-col justify-center items-center snap-start py-16 px-4 ${
            isDarkMode
              ? "bg-gray-700 text-gray-100"
              : "bg-purple-100 text-black" // Lighter purple, adjusted text
          }`}
          id="skill-section" // ID already exists
        >
          <div className="max-w-4xl w-full mx-auto px-2">
            <h1 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-yellow-600 text-center">
              {" "}
              {/* Increased mb */}
              Skills & Hobbies
            </h1>
            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {" "}
              {/* Increased gap */}
              {/* Skill Items - Added responsive text size */}
              {[
                {
                  icon: FaChalkboardTeacher,
                  title: "Teaching",
                  desc: "Sharing knowledge and inspiring students.",
                  color: "text-blue-500",
                  duration: 1000,
                },
                {
                  icon: FaPenNib,
                  title: "Writing",
                  desc: "Blends logic and imagination through scientific articles and soulful poetry.",
                  color: "text-green-500",
                  duration: 1800,
                },
                {
                  icon: FaBookReader,
                  title: "Research & Development",
                  desc: "Conducting studies to uncover insights.",
                  color: "text-orange-500",
                  duration: 2000,
                },
                {
                  icon: FaTheaterMasks,
                  title: "Acting",
                  desc: "Bringing characters to life expressively.",
                  color: "text-red-500",
                  duration: 1200,
                },
                {
                  icon: FaMusic,
                  title: "Musical Enthusiast",
                  desc: "Passionate about classical music and singing.",
                  color: "text-purple-500",
                  duration: 1400,
                },
                {
                  icon: FaMicrophone,
                  title: "Public Speaking",
                  desc: "Engaging audiences with impactful speeches.",
                  color: "text-gray-500",
                  duration: 1600,
                },
              ].map((skill, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center gap-2 transform transition-transform ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-10 opacity-0" // Slightly less translation
                  }`}
                  style={{ transitionDuration: `${skill.duration}ms` }} // Apply duration dynamically
                >
                  <skill.icon
                    className={`${skill.color} text-4xl sm:text-5xl mb-3 sm:mb-4`}
                  />
                  <h2
                    className={`text-2xl sm:text-3xl font-bold ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {skill.title}
                  </h2>
                  <p
                    className={`text-base sm:text-lg ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section
          className={`min-h-screen flex flex-col justify-center items-center snap-start py-10 px-4 ${
            // Changed to flex-col for better centering control
            isDarkMode ? "bg-gray-600 text-gray-100" : "bg-green-100 text-black"
          }`}
          id="achivement-section" // ID already exists
        >
          <div className="max-w-4xl w-full mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center text-yellow-500">
              {/* Increased mb */}
              Achievements
            </h1>
            {/* Timeline container */}
            <div className="relative flex flex-col gap-10 sm:gap-12 pl-16 sm:pl-16 border-l-4 md:border-l-6 ${isDarkMode ? 'border-gray-400' : 'border-gray-400'}">
              {" "}
              {/* Added left padding and border */}
              {/* Achievement Items */}
              {[
                {
                  year: "2025",
                  title: "Gujarat State eligibility test (GSET) Qualified",
                  desc: "Qualified GSET, eligible for Assistant Professor roles in Gujarat.",
                  duration: 1000,
                },
                {
                  year: "2025",
                  title:
                    "Graduate Aptitude Test in Engineering (GATE) Qualified",
                  desc: "Qualified GATE Lifesciences(XL), eligible for higher studies and research.",
                  duration: 1300,
                },
                {
                  year: "2023",
                  title: "Exceptional Achievement Award",
                  desc: "Received by Surat Rana Samaj for outstanding contributions.",
                  duration: 1600,
                },

                {
                  year: "2021",
                  title: "Patent Filed & 1st Rank",
                  desc: "Filed and published a patent; achieved 1st rank in B.Sc Zoology.",
                  duration: 1900,
                },

                // Add more achievements here if needed
              ].map((ach, index) => (
                <div
                  key={index}
                  // Relative positioning for the dot
                  className={`relative flex items-start gap-4 transform transition-all ${
                    isAchivementVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-10 opacity-0" // Slide in effect
                  }`}
                  style={{ transitionDuration: `${ach.duration}ms` }} // Dynamic duration
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute -left-[calc(1.5rem+2px)] sm:-left-[calc(2.5rem+3px)] md:-left-[calc(2.5rem+4px)] top-1 w-12 h-12 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-black font-bold text-xs sm:text-sm ${
                      isDarkMode ? "bg-yellow-400" : "bg-yellow-400"
                    }`}
                  >
                    {/* Adjusted positioning and size */}
                    {ach.year}
                    {/* Optional Outer Ring */}
                    <div
                      className={`absolute w-16 h-16 sm:w-16 sm:h-16 border-2 sm:border-4 rounded-full -z-10 ${
                        isDarkMode ? "border-yellow-500" : "border-yellow-500"
                      }`}
                    ></div>
                  </div>
                  {/* Text Content */}
                  <div className="flex-1">
                    {/* Takes remaining space */}
                    <h2
                      className={`text-lg pl-10 sm:pl-6 sm:text-xl font-bold ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {ach.title}
                    </h2>
                    <p
                      className={`mt-1 text-base pl-10 sm:pl-6 sm:text-lg ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {ach.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>{" "}
      {/* End Main Content Area */}
    </div> // End Flex Container
  );
}

export default Introduction;
