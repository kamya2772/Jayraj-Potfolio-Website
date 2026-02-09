import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
import reviewPaperPdf from "../assets/RPaper.pdf";
import image from "../assets/RPaperIMG.png";
import noteIMG1 from "../assets/note1.jpeg";
import noteIMG2 from "../assets/note2.jpeg";
import noteIMG3 from "../assets/note3.jpeg";
import noteIMG4 from "../assets/note4.jpeg";
import noteIMG5 from "../assets/note5.jpeg";
import noteIMG6 from "../assets/note6.jpeg";
import noteIMG7 from "../assets/note7.jpeg";
import note1 from "../assets/note1.pdf";
import note2 from "../assets/note2.pdf";
import note3 from "../assets/note3.pdf";
import note4 from "../assets/note4.pdf";
import note5 from "../assets/note5.pdf";
import note6 from "../assets/note6.pdf";
import note7 from "../assets/note7.pdf";

const notes = [
  { id: 1, topic: "Topic 1", image: noteIMG1, notesUrl: note1 },
  { id: 2, topic: "Topic 2", image: noteIMG2, notesUrl: note2 },
  { id: 3, topic: "Topic 3", image: noteIMG3, notesUrl: note3 },
  { id: 4, topic: "Topic 4", image: noteIMG4, notesUrl: note4 },
  { id: 5, topic: "Topic 5", image: noteIMG5, notesUrl: note5 },
  { id: 6, topic: "Topic 6", image: noteIMG6, notesUrl: note6 },
  { id: 7, topic: "Topic 7", image: noteIMG7, notesUrl: note7 },
];

const youtubeVideoId = "3pUdoL6MHd8";

function Writing() {
  const { isDarkMode } = useOutletContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleNotes = 3;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + visibleNotes < notes.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="h-full p-8 overflow-y-scroll">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-2">
            My Work
          </h1>
          <p className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
             Research papers, study notes, and video content.
          </p>
        </motion.div>

        {/* Review Paper Card */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
             <div className="md:w-1/3">
                 <h2 className={`text-2xl font-bold font-serif mb-4 flex items-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    <span className="w-8 h-1 bg-primary mr-4 rounded-full"></span>
                    Review Paper
                 </h2>
                 <p className={`mb-6 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    A comprehensive review of recent advancements in the field. Click the preview to read the full paper.
                 </p>
                  <button
                    onClick={() => window.open(reviewPaperPdf, "_blank")}
                    className="px-6 py-2 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary-dark transition-colors"
                  >
                    Read Paper
                  </button>
             </div>

             <div className="md:w-2/3 w-full">
                <div
                    onClick={() => window.open(reviewPaperPdf, "_blank")}
                    className={`cursor-pointer group relative rounded-xl overflow-hidden glass-card shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-white/10 ${isDarkMode ? "bg-slate-800/40" : "bg-white/60"}`}
                >
                    <img
                    src={image}
                    alt="Review Paper Preview"
                    className="w-full h-64 md:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-bold text-lg px-4 py-2 border-2 border-white rounded-lg">Read Full Paper</span>
                    </div>
                </div>
             </div>
          </motion.div>
        </section>

        {/* Notes Section */}
        <section className="mb-16">
           <h2 className={`text-2xl font-bold font-serif mb-8 flex items-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              <span className="w-8 h-1 bg-primary mr-4 rounded-full"></span>
              Study Notes
           </h2>

           <div className="relative">
              <div className="flex items-center space-x-4">
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                    ◀
                </button>

                <div className="flex-1 overflow-hidden">
                    <motion.div 
                        className="flex gap-6"
                        initial={false}
                        animate={{ x: `-${currentIndex * (220 + 24)}px` }} // Approx width + gap, purely visual approx
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                    {notes.map(({ id, topic, image, notesUrl }) => (
                        <div key={id} className="min-w-[220px] pb-4">
                            <div className={`rounded-xl overflow-hidden glass-card shadow hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-white/10  ${isDarkMode ? "bg-slate-800/40" : "bg-white/60"}`}>
                                <img
                                    src={image}
                                    alt={topic}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4 flex flex-col items-center">
                                     <h3 className={`font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>{topic}</h3>
                                     <button
                                        onClick={() => window.open(notesUrl, "_blank")}
                                        className="w-full py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-colors font-medium text-sm"
                                    >
                                        View Notes
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    </motion.div>
                </div>

                <button
                    onClick={handleNext}
                    disabled={currentIndex + visibleNotes >= notes.length}
                     className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                    ▶
                </button>
            </div>
           </div>
        </section>

        {/* YouTube Video Section */}
        <section>
           <h2 className={`text-2xl font-bold font-serif mb-8 flex items-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              <span className="w-8 h-1 bg-primary mr-4 rounded-full"></span>
              Featured Video
           </h2>
          <div className={`max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 ${isDarkMode ? "border-slate-800" : "border-white"}`}>
            <div className="aspect-w-16 aspect-h-9 relative pt-[56.25%]">
               <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title="Owner's YouTube Video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Writing;
