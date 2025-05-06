import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduction from "./Pages/Introduction";
import Experience from "./Pages/Experience";
import Writing from "./Pages/Writing";
import Media from "./Pages/Media";

import Contact from "./Pages/Contact";
import Certificate from "./Pages/Certificate";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
