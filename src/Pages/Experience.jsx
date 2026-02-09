import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";

function Experience() {
  const { isDarkMode } = useOutletContext();
  const [isExVisible, setIsExVisible] = useState(false);

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
      <div className="h-full p-8 overflow-y-scroll justify-center items-center">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16 mt-8"
        >
           <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-4">
            Work Experience
          </h1>
          <p className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
             My professional journey and contributions.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
           <div className="absolute left-4 sm:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-transparent sm:-translate-x-1/2 opacity-30"></div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}`}
            >
               {/* Dot */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10 shadow-[0_0_10px_rgba(212,175,55,0.8)] ring-4 ring-white dark:ring-slate-900"></div>

              {/* Content Spacer for Alignment */}
              <div className="w-full sm:w-1/2"></div>
              
              {/* Card */}
              <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${index % 2 === 0 ? "sm:pr-12 text-left sm:text-right" : "sm:pl-12 text-left"}`}>
                <div className={`p-6 rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100 dark:border-white/10 ${isDarkMode ? "bg-slate-800/40" : "bg-white/60"}`}>
                   <h2 className={`text-xl font-bold font-serif mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    {exp.title}
                  </h2>
                  <p className="text-sm font-medium text-primary mb-2 italic">
                    {exp.organization}
                  </p>
                   <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4">
                    {exp.duration}
                  </span>
                  <ul className={`list-disc list-inside space-y-2 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"} ${index % 2 === 0 ? "sm:rtl" : ""}`}>
                     {/* RTL hack only affects bullet position if direction is supported, mainly just for text alignment */}
                    {exp.description.map((desc, i) => (
                      <li key={i} className="leading-relaxed">{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
  );
}

export default Experience;
