import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";
import certi1 from "../assets/certi1.jpeg";
import certi2 from "../assets/certi2.jpeg";
import certi3 from "../assets/certi3.jpeg";
import certi4 from "../assets/certi4.jpeg";
import certi5 from "../assets/certi5.jpeg";
import certi6 from "../assets/certi6.jpeg";
import certi7 from "../assets/certi7.jpeg";
import certi8 from "../assets/certi8.jpeg";
import certi9 from "../assets/certi9.jpeg";
import certi10 from "../assets/certi10.jpeg";
import certi11 from "../assets/certi11.jpeg";

const certificates = [
  {
    id: 1,
    title: "Summer training on Cancer biology and Technology 2024",
    image: certi1,
    details: "FCC, IIT Hydrabad in association with Remarkskill education.",
    date: "June 2024 - july 2024",
  },

  {
    id: 2,
    title: "Summer training on Cancer biology and Technology 2024",
    image: certi2,
    details: "FCC, IIT Hydrabad in association with Remarkskill education.",
    date: "June 2024 - july 2024",
  },
  {
    id: 3,
    title: "Summer training on Cancer biology and Technology 2024",
    image: certi3,
    details: "FCC, IIT Hydrabad in association with Remarkskill education.",
    date: "June 2024 - july 2024",
  },
  {
    id: 4,
    title: "Summer training on Cancer biology and Technology 2024",
    image: certi4,
    details: "FCC, IIT Hydrabad in association with Remarkskill education.",
    date: "June 2024 - july 2024",
  },
  {
    id: 5,
    title: "Summer training on Cancer biology and Technology 2024",
    image: certi5,
    details: "FCC, IIT Hydrabad in association with Remarkskill education.",
    date: "June 2024 - july 2024",
  },
  {
    id: 6,
    title: "Summer training on Cancer biology and Technology 2024",
    image: certi6,
    details: "FCC, IIT Hydrabad in association with Remarkskill education.",
    date: "June 2024 - july 2024",
  },
  {
    id: 7,
    title: "Summer training on Cancer biology and Technology 2024",
    image: certi7,
    details: "FCC, IIT Hydrabad in association with Remarkskill education.",
    date: "June 2024 - july 2024",
  },
  {
    id: 8,
    title: "Summer training on Cancer biology and Technology 2024",
    image: certi8,
    details: "FCC, IIT Hydrabad in association with Remarkskill education.",
    date: "June 2024 - july 2024",
  },
  {
    id: 9,
    title: "Summer training on Cancer biology and Technology 2024",
    image: certi9,
    details: "FCC, IIT Hydrabad in association with Remarkskill education.",
    date: "June 2024 - july 2024",
  },
  {
    id: 10,
    title: "Summer training on Cancer biology and Technology 2024",
    image: certi10,
    details: "FCC, IIT Hydrabad in association with Remarkskill education.",
    date: "June 2024 - july 2024",
  },
  {
    id: 11,
    title: "Summer training on Cancer biology and Technology 2024",
    image: certi11,
    details: "FCC, IIT Hydrabad in association with Remarkskill education.",
    date: "June 2024 - july 2024",
  },
];

function Certificate() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.className = newMode ? "dark-theme" : "light-theme";
      return newMode;
    });
  };
  return (
    <>
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .flip-card-inner {
          transition: transform 0.7s;
          transform-style: preserve-3d;
          position: relative;
          width: 100%;
          height: 100%;
        }
        .group:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 0.5rem; /* rounded-lg */
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); /* shadow-lg */
        }
        .flip-card-front {
          background: black;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .flip-card-back {
          background: #2563eb; /* blue-600 */
          color: white;
          transform: rotateY(180deg);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-radius: 0.5rem;
        }
      `}</style>
      <div
        className={`flex h-screen ${
          isDarkMode
            ? "bg-gradient-to-br from-black via-gray-800 to-gray-900"
            : "bg-gray-100"
        }`}
      >
        <Sidebar
          className="fixed h-full"
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
        />
        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-3xl font-bold mb-6">Certificates</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certificates.map(({ id, title, image, details, date }) => (
              <div
                key={id}
                className="group perspective w-full h-64 cursor-pointer"
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={image}
                      alt={title}
                      className="w-82 h-82 object-cover "
                    />
                  </div>
                  <div className="flip-card-back">
                    <h2 className="text-xl font-semibold text-white">
                      {title}
                    </h2>
                    <p className="mb-2">{details}</p>
                    <p className="text-sm italic">{date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default Certificate;
