import { useOutletContext } from 'react-router-dom';
import Image from '../assets/ImageAbout.jpeg';
import Resume from '../assets/Resume.pdf';
function Introduction() {
  const { isDarkMode } = useOutletContext();
  return (
      <div
        className={`h-full overflow-y-auto snap-y snap-proximity ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <header className="page-heading"><p className="eyebrow">BACKGROUND & QUALIFICATIONS</p><h1>About the scholar</h1><p>A journey through biological sciences, education, and creative practice.</p></header><nav className="about-navigation" aria-label="About page sections"><a href="#about">Biography</a><a href="#education">Education</a><a href="#skill-section">Skills & hobbies</a><a href="#achivement-section">Achievements</a></nav>
        <section
          // Use min-h-0 for flexibility, py for padding
          className={`min-h-0 flex items-center justify-center snap-start px-4 py-16 md:py-12 ${
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
            <div className="flex flex-col justify-center items-start text-left px-4 sm:px-0 order-2 md:order-none">
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
          className={`min-h-0 flex flex-col items-center snap-start py-16 px-4 ${
            isDarkMode ? "bg-gray-900 text-gray-100" : "bg-blue-100 text-black"
          }`}
          id="education"
        >
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-yellow-600 text-center">
              Education & Training
            </h2>

            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6  ">
              {/* CARD COMPONENT START */}
              <div
                className={`flex flex-col rounded-lg shadow-lg transform transition-transform hover:border-primary hover:shadow-xl h-full ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h2
                      className={`text-xl sm:text-2xl font-bold ${
                        isDarkMode ? "text-blue-300" : "text-blue-900"
                      }`}
                    >
                      Doctor of Philosophy - PhD, Nanobiotechnology
                    </h2>
                    <p
                      className={`text-base sm:text-lg mt-1 ${
                        isDarkMode ? "text-gray-300" : "text-black"
                      }`}
                    >
                      Sardar Vallabhbhai National Institute of Technology
                      (SVNIT), Surat-395009
                    </p>
                  </div>
                  <p className="text-green-500 font-semibold mt-4">
                    2025 – Present | Pursuing
                  </p>
                </div>
              </div>
              {/* CARD COMPONENT END */}
              {/* CARD COMPONENT START */}
              <div
                className={`flex flex-col rounded-lg shadow-lg transform transition-transform hover:border-primary hover:shadow-xl h-full ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
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
                  </div>
                  <p className="text-green-500 font-semibold mt-4">
                    2023-2025 | Completed
                  </p>
                </div>
              </div>
              {/* CARD COMPONENT END */}

              {/* CARD COMPONENT START */}
              <div
                className={`flex flex-col rounded-lg shadow-lg transform transition-transform hover:border-primary hover:shadow-xl h-full ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
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
                  </div>
                  <p className="text-green-500 font-semibold mt-4">
                    2018-2021 | Completed
                  </p>
                </div>
              </div>
              {/* CARD COMPONENT END */}

              {/* CARD COMPONENT START */}
              <div
                className={`flex flex-col rounded-lg shadow-lg transform transition-transform hover:border-primary hover:shadow-xl h-full ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
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
                  </div>
                  <p className="text-green-500 font-semibold mt-4">
                    2018-2021 | Completed
                  </p>
                </div>
              </div>
              {/* CARD COMPONENT END */}
            </div>
          </div>
        </section>

        <section id="skill-section" className="scholar-section" aria-labelledby="skills-heading">
          <div className="scholar-section-intro"><p className="eyebrow">KNOWLEDGE & CREATIVE PRACTICE</p><h2 id="skills-heading">Skills & hobbies</h2><p>Academic work and creative interests that shape how I learn, teach, and communicate.</p></div>
          <div className="skills-columns">
            {[
              { label: 'Academic practice', items: [
                ['Teaching', 'Sharing knowledge and inspiring students.'],
                ['Research & Development', 'Conducting studies to uncover insights.'],
                ['Public Speaking', 'Engaging audiences with impactful speeches.'],
              ] },
              { label: 'Creative interests', items: [
                ['Writing', 'Blends logic and imagination through scientific articles and soulful poetry.'],
                ['Acting', 'Bringing characters to life expressively.'],
                ['Musical Enthusiast', 'Passionate about classical music and singing.'],
              ] },
            ].map(group => <div className="skill-group" key={group.label}><p className="skill-group-label">{group.label}</p><dl>{group.items.map(([title, description], index) => <div className="skill-entry" key={title}><span className="skill-index" aria-hidden="true">0{index + 1}</span><div><dt>{title}</dt><dd>{description}</dd></div></div>)}</dl></div>)}
          </div>
        </section>
        <section id="achivement-section" className="scholar-section" aria-labelledby="achievements-heading">
          <div className="scholar-section-intro"><p className="eyebrow">MILESTONES & RECOGNITION</p><h2 id="achievements-heading">Achievements</h2><p>Selected qualifications, recognition, and milestones along my academic journey.</p></div>
          <ol className="recognition-list">
            {[
              ['2025', 'Qualification', 'Gujarat State Eligibility Test (GSET) Qualified', 'Qualified GSET, eligible for Assistant Professor roles in Gujarat.'],
              ['2025', 'Qualification', 'Graduate Aptitude Test in Engineering (GATE) Qualified', 'Qualified GATE Life Sciences (XL), eligible for higher studies and research.'],
              ['2023', 'Recognition', 'Exceptional Achievement Award', 'Received from Surat Rana Samaj for outstanding contributions.'],
              ['2021', 'Research & academic distinction', 'Patent Filed & 1st Rank', 'Filed and published a patent; achieved 1st rank in B.Sc. Zoology.'],
            ].map(([year, category, title, description]) => <li className="recognition-entry" key={title}><span className="recognition-year">{year}</span><div><p className="eyebrow">{category}</p><h3>{title}</h3><p className="recognition-description">{description}</p></div></li>)}
          </ol>
        </section>
      </div>
    );
}

export default Introduction;






