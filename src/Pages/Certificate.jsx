import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";
import certi1 from "../assets/Certi1.jpeg";
import certi2 from "../assets/Certi2.jpeg";
import certi3 from "../assets/Certi3.jpeg";
import certi4 from "../assets/Certi4.jpeg";
import certi5 from "../assets/Certi5.jpeg";
import certi6 from "../assets/Certi6.jpeg";
import certi7 from "../assets/Certi7.jpeg";
import certi8 from "../assets/Certi8.jpeg";
import certi9 from "../assets/Certi9.jpeg";
import certi10 from "../assets/Certi10.jpeg";
import certi11 from "../assets/Certi11.png";

const certificates = [
  {
    id: 1,
    title: "Summer training on Cancer biology and Technology 2024",
    image: certi1,
    details:
      "Completed hands-on training in cancer genomics, immunotherapy, and drug development at FCC, IIT Hyderabad.",
    date: "June 2024 - july 2024",
  },

  {
    id: 2,
    title:
      "7th International conference on contemporary developments at the biotech-bioinformatics Interface(CDBBI-2025)",
    image: certi2,
    details:
      "Presented a poster on AI-driven gene prediction and attended expert talks by global biotech leaders.",
    date: "February 202",
  },
  {
    id: 3,
    title:
      "National conference on Green Innovations for Sustainable Development : Exploring Ideas and Challanges (GiSD-2025)",
    image: certi3,
    details:
      "Explored sustainable biotech practices including biofuels, waste recycling, and eco-friendly materials.",
    date: "March 2025",
  },
  {
    id: 4,
    title:
      "6th national conference on contemporary developments at the biotech-bioinformatics Interface",
    image: certi4,
    details:
      "Focused on CRISPR technologies, transcriptomics, and AI integration in bioinformatics.",
    date: "March 2024",
  },
  {
    id: 5,
    title:
      "Hand on workshop on '16s Metagenomics' at Genexplore Diagnostics & Research Centre.",
    image: certi5,
    details:
      "Gained experience in DNA extraction, PCR amplification, and NGS-based microbial community analysis.",
    date: "March 2024",
  },
  {
    id: 6,
    title: "Introduction to medical Entomology at Udemy",
    image: certi6,
    details:
      "Learned identification, life cycles, and disease-transmission roles of medically important insects.",
    date: "May 2023",
  },
  {
    id: 7,
    title: "Workshop on GLP - Good Laboratory Practices",
    image: certi7,
    details:
      "Covered lab safety, documentation, calibration, and quality assurance essentials in biotech labs.",
    date: "January 2023",
  },
  {
    id: 8,
    title:
      "Workshop on In-silico Vaccine technology by Edufabrica in association with IIT Bombay.",
    image: certi8,
    details:
      "Designed peptide-based vaccines using bioinformatics tools such as VaxiJen and AutoDock.",
    date: "May 2024",
  },
  {
    id: 9,
    title:
      "NPTEL hands on Workshop on Basic Immunology Experiment at IISER BHOPAL",
    image: certi9,
    details:
      "Performed ELISA, flow cytometry, and antigen-antibody interaction experiments during lab sessions.",
    date: "December 2024",
  },
  {
    id: 10,
    title:
      "CSIR - Integrated Skill Initiative Program on Microalgal diversity and its biotechnological potential at CSIR CSMCRI, BHAVNAGAR.",
    image: certi10,
    details:
      "Explored algal cultivation, bioreactor design, and algal-based biofuel production processes.",
    date: "January 2025",
  },
  {
    id: 11,
    title: "Workshop on Introduction to laboratory instruments.",
    image: certi11,
    details:
      "Hands-on training on using pH meters, spectrophotometers, centrifuges, and autoclaves.",
    date: "May 2024",
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
        .group:hover .flip-card-inner , .group.is-flipped .flip-card-inner{
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 0.5rem; /* rounded-lg */
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); /* shadow-lg */
          overflow:hidden;
        }
        .flip-card-front {
          
        }
        .flip-card-back {
          background: #000000; /* blue-600 */
          color: white;
          transform: rotateY(180deg);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
         
        }
      `}</style>
      <div
        className={`flex h-screen ${
          isDarkMode
            ? "bg-gradient-to-br from-black via-gray-800 to-gray-900"
            : "bg-gray-100"
        }`}
      >
        <Sidebar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-3xl font-bold mb-6">Certificates</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certificates.map(({ id, title, image, details, date }) => (
              <div
                key={id}
                className="group perspective w-full h-64 sm:h-72 md:h-80 cursor-pointer"
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover "
                    />
                  </div>
                  <div className="flip-card-back">
                    <h2 className="text-xl font-semibold text-white mb-2">
                      {title}
                    </h2>
                    <p className="text-sm mb-2">{details}</p>
                    <p className="text-xs italic">{date}</p>
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
