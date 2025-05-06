import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";

function Experience() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isExVisible, setIsExVisible] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.className = newMode ? "dark-theme" : "light-theme";
      return newMode;
    });
  };

  const experiences = [
    {
      title: "Biology NEET Faculty [Part Time]",
      organization: "Vanita Vishram Girls’ High School | Surat",
      duration: "Oct 2023 - Present",
      description: [
        "Designed engaging lesson plans for high school biology classes.",
        "Guided two student groups focused on Bioenzyme and Nutritional Pesticides, leading them to participate in the inter-school science fair, where they won first prize and received a grant from SSIP at the district level.",
      ],
    },
    {
      title: "Assistant Lecturer",
      organization: "Aakash Institute | Surat, Anand",
      duration: "July 2022 – Aug 2023",
      description: [
        "Collaborated with a team to develop and deliver high-quality educational content.",
        "Conducted workshops and training sessions for students preparing for competitive exams.",
        "Leveraged my biology expertise to enhance teaching materials.",
      ],
    },
    {
      title: "Research Trainee",
      organization: "Main Cotton Research Center, NAU | Surat",
      duration: "Mar 2022 – April 2022",
      description: [
        "Worked in the microbiology and biotechnology department.",
        "Learned several hands-on trainings both In vitro and In silico.",
      ],
    },
  ];

  return (
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
      <div className="flex-1 p-8 overflow-y-scroll justify-center items-center snap-y snap-mandatory">
        <h1 className="text-4xl font-bold text-yellow-500 mb-12 text-center">
          Work Experience
        </h1>
        <div className="relative">
          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start mb-16 group">
              {/* Dot */}
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 h-full w-1 bg-green-500 "></div>
              <div className="absolute left-4 top-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center z-10 shadow-lg">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>

              {/* Content */}
              <div className="ml-16 bg-white p-6 rounded-lg shadow-lg  group-hover:translate-x-2 transition-transform duration-300">
                <h2 className="text-2xl font-bold text-gray-800 ">
                  {exp.title}
                </h2>
                <p className="text-sm text-gray-600 italic mb-2">
                  {exp.organization}
                </p>
                <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
