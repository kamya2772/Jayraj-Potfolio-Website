import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";
import reviewPaperPdf from "../assets/RPaper.pdf";
import image from "../assets/RPaperIMG.png";
import noteImg from "../assets/notes.jpg";
import note1 from "../assets/note1.pdf";
import note2 from "../assets/note2.pdf";
import note3 from "../assets/note3.pdf";
import note4 from "../assets/note4.pdf";
import note5 from "../assets/note5.pdf";
import note6 from "../assets/note6.pdf";
import note7 from "../assets/note7.pdf";

const notes = [
  {
    id: 1,
    topic: "Topic 1",
    image: noteImg,
    notesUrl: note1,
  },
  {
    id: 2,
    topic: "Topic 2",
    image: "https://via.placeholder.com/200x150?text=Topic+2",
    notesUrl: note2,
  },
  {
    id: 3,
    topic: "Topic 3",
    image: "https://via.placeholder.com/200x150?text=Topic+3",
    notesUrl: note3,
  },
  {
    id: 4,
    topic: "Topic 4",
    image: "https://via.placeholder.com/200x150?text=Topic+3",
    notesUrl: note4,
  },
  {
    id: 5,
    topic: "Topic 5",
    image: "https://via.placeholder.com/200x150?text=Topic+3",
    notesUrl: note5,
  },
  {
    id: 6,
    topic: "Topic 6",
    image: "https://via.placeholder.com/200x150?text=Topic+3",
    notesUrl: note6,
  },
  {
    id: 7,
    topic: "Topic 7",
    image: "https://via.placeholder.com/200x150?text=Topic+3",
    notesUrl: note7,
  },
];

const youtubeVideoId = "3pUdoL6MHd8"; // Sample YouTube video ID

function Writing() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleNotes = 3; // Show 3 notes at a time
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.className = newMode ? "dark-theme" : "light-theme";
      return newMode;
    });
  };
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
    <div
      className={`flex h-screen ${
        isDarkMode
          ? "bg-gradient-to-br from-black via-gray-800 to-gray-900"
          : " bg-gray-100"
      }`}
    >
      <Sidebar
        className="fixed h-screen"
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />
      <main className="flex-1 p-6 overflow-auto max-w-6xl mx-auto">
        <h1
          className={`text-3xl ${
            isDarkMode ? "text-white" : "text-black"
          } font-bold mb-6`}
        >
          Jayraj's work
        </h1>

        {/* Review Paper Card */}
        <section className="mb-10">
          <h2
            className={`text-2xl ${
              isDarkMode ? "text-white" : "text-black"
            } font-semibold mb-4`}
          >
            Review Paper
          </h2>
          <div
            onClick={() => window.open(reviewPaperPdf, "_blank")}
            className="cursor-pointer max-w-md rounded-lg shadow-lg overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300"
            title="View Owner's Research Paper"
          >
            <img
              src={image}
              alt="Review Paper Preview"
              className="w-full h-68 object-cover"
            />
            <div className="p-4 bg-black">
              <h3 className="text-lg font-semibold text-gray-100">
                Research Review Paper
              </h3>
            </div>
          </div>
        </section>

        {/* Notes Section */}
        <section className="mb-10">
          <h2
            className={`text-2xl ${
              isDarkMode ? "text-white" : "text-black"
            } font-semibold mb-4`}
          >
            Notes
          </h2>

          <div className="flex items-center space-x-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-3 py-2 bg-gray-300 hover:bg-gray-400 text-black rounded disabled:opacity-50"
            >
              ◀
            </button>

            <div className="flex space-x-6 overflow-hidden">
              {notes
                .slice(currentIndex, currentIndex + visibleNotes)
                .map(({ id, topic, image, notesUrl }) => (
                  <div key={id} className="flex flex-col items-center">
                    <img
                      src={image}
                      alt={topic}
                      className="w-48 h-36 object-cover rounded-md shadow-md mb-2"
                    />
                    <button
                      onClick={() => window.open(notesUrl, "_blank")}
                      className="w-48 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                    >
                      View Notes
                    </button>
                  </div>
                ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex + visibleNotes >= notes.length}
              className="px-3 py-2 bg-gray-300 hover:bg-gray-400 text-black rounded disabled:opacity-50"
            >
              ▶
            </button>
          </div>
        </section>

        {/* YouTube Video Section */}
        <section>
          <h2
            className={`text-2xl font-semibold ${
              isDarkMode ? "text-white" : "text-black"
            } mb-4`}
          >
            YouTube Video
          </h2>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title="Owner's YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-120 rounded-lg"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Writing;
