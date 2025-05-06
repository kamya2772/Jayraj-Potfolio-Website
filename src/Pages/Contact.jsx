import React, { useState } from "react";
import Sidebar from "../Component/Sidebar"; // Assuming Sidebar component is responsive or handled separately
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
// Removed: import { useActionData } from "react-router-dom"; // Unused import

function Contact() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.className = newMode ? "dark-theme" : "light-theme";
      return newMode;
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_zi4wvfv", //Service ID
        "template_dhz79ms", //Template ID
        formData,
        "USC4_NklIkfrfLEQk" //Public Key(User ID)
      )
      .then(
        (result) => {
          alert("Message Sent Successfully");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          alert("Failed to Send Message. Please Try Again.");
        }
      );
  };

  const socialLinks = {
    instagram: "https://www.instagram.com/__.jayraj.__/",
    youtube: "https://www.youtube.com/@MorulaBiologybyJayrajRana",
    linkedin: "https://linkedin.com/in/jayraj-rana-3502841b2",
  };

  return (
    <div>
      {" "}
      {/* Outer container for potential page-level structure if needed */}
      <div
        className={`flex h-screen ${
          // Use min-h-screen for scrollability
          isDarkMode
            ? "bg-gradient-to-br from-black via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300"
        }`}
      >
        <Sidebar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        {/* Main content area */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center p-4 md:p-8 space-y-8 md:space-y-0 md:space-x-12 overflow-y-auto">
          {/* Contact Form */}
          <div
            className={`${
              isDarkMode ? "bg-white text-black" : "bg-black text-white"
            } p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-lg md:transform md:-translate-x-6`}
          >
            <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block font-bold mb-2" // Color will be inherited
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  required
                  // Input fields' text color will be default (usually black) on default white background.
                  // If you want inputs to match the card's dark/light theme, they'll need specific styling too.
                  className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                    isDarkMode ? "text-black" : "text-white"
                  } `}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block font-bold mb-2" // Color will be inherited
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block font-bold mb-2" // Color will be inherited
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject || ""}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block font-bold mb-2" // Color will be inherited
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message || ""}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
                ></textarea>
                <button
                  type="submit"
                  className="bg-yellow-600 text-black mt-4 px-8 py-2 rounded-lg shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transform transition-transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Owner's Contact Details */}
          <div
            className={`w-full max-w-lg md:w-80 p-6 rounded-2xl shadow-lg flex flex-col space-y-6 
                        md:border-l-2 md:border-gray-300 ${
                          // Border only for medium screens up
                          isDarkMode
                            ? "bg-white text-black"
                            : "bg-black text-white"
                        }`}
          >
            <h2 className="text-2xl font-bold">Contact Details</h2>
            {/* text-current will inherit color from parent (bg-white text-black OR bg-black text-white) */}
            <div className="space-y-3 text-current">
              <p>
                <strong>Phone:</strong> +91 92654-23807
              </p>
              <p>
                <strong>Address:</strong> Surat - 395009
              </p>
              <p>
                <strong>Email:</strong> jayrajrana2912@gmail.com
              </p>
            </div>
            <div className="flex space-x-6 mt-4">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-400 transition transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-400 transition transform hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube size={30} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-500 transition transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
