import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";
import img10 from "../assets/img10.jpeg";
import img11 from "../assets/img11.jpeg";
import img12 from "../assets/img12.jpeg";
import img13 from "../assets/img13.jpeg";
import img14 from "../assets/img14.jpeg";
import img15 from "../assets/img15.jpeg";
import img16 from "../assets/img16.jpeg";
import img17 from "../assets/img17.jpeg";
import img18 from "../assets/img18.jpeg";
import img19 from "../assets/img19.jpeg";
import img20 from "../assets/img20.jpeg";
import img21 from "../assets/img21.jpeg";
import img22 from "../assets/img22.jpeg";
import img23 from "../assets/img23.jpeg";
import img24 from "../assets/img24.jpeg";
import img25 from "../assets/img25.jpeg";
import img26 from "../assets/img26.jpeg";
import img27 from "../assets/img27.jpeg";
import img28 from "../assets/img28.jpeg";
import img29 from "../assets/img29.jpeg";
import img30 from "../assets/img30.jpeg";
import img31 from "../assets/img31.jpeg";
import img32 from "../assets/img32.jpeg";
import img33 from "../assets/img33.jpeg";
import img34 from "../assets/img34.jpeg";
import img35 from "../assets/img35.jpeg";
import img36 from "../assets/img36.jpeg";
import img37 from "../assets/img37.jpeg";
import img38 from "../assets/img38.jpeg";
import img39 from "../assets/img39.jpeg";
import img40 from "../assets/img40.jpeg";
import img41 from "../assets/img41.jpeg";
import img42 from "../assets/img42.jpeg";
import img43 from "../assets/img43.jpeg";
import img44 from "../assets/img44.jpeg";

const images = [
  {
    src: img1,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img2,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img3,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img4,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img5,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img6,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img7,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img8,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img9,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img10,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img11,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img12,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img13,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img14,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img15,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img16,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img17,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img18,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img19,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img20,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img21,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img22,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img23,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img24,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img25,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img26,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img27,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img28,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img29,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img30,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img31,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img32,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img33,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img34,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img35,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img36,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img37,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img38,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img39,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img40,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img41,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img42,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img43,
    title: "Owner Image 1 - Research Lab",
  },
  {
    src: img44,
    title: "Owner Image 1 - Research Lab",
  },
];

function Media() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Function to handle card tap/click
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.className = newMode ? "dark-theme" : "light-theme";
      return newMode;
    });
  };
  const handleCardClick = (index) => {
    // If the clicked card is already active, deactivate it. Otherwise, activate it.
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div
      className={`flex h-screen ${
        isDarkMode
          ? "bg-gradient-to-br from-black via-gray-800 to-gray-900 "
          : "bg-gray-100"
      } `}
    >
      <Sidebar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="flex-1 p-6 overflow-auto">
        <h1
          className={`text-3xl font-bold ${
            isDarkMode ? "text-white" : "text-black"
          } mb-6 text-center`}
        >
          Owner's Images
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-start">
          {images.map(({ src, title }, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => handleCardClick(index)}
            >
              <img
                src={src}
                alt={title}
                className="w-full h-auto block object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg 
                            transition-opacity duration-300 
                            ${
                              activeIndex === index
                                ? "opacity-100"
                                : "opacity-0"
                            } 
                            group-hover:opacity-100`}
                // Apply opacity-100 if activeIndex matches, OR on group-hover
                // The initial opacity-0 ensures it's hidden by default unless active or hovered
              >
                <p className="text-white text-lg font-semibold px-2 text-center">
                  {title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Media;
