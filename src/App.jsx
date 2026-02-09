import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import Spinner from "./Component/Spinner"; // We might need to create this or use a simple fallback

// Lazy load pages
const Home = lazy(() => import("./Pages/Home"));
const Introduction = lazy(() => import("./Pages/Introduction"));
const Experience = lazy(() => import("./Pages/Experience"));
const Certificate = lazy(() => import("./Pages/Certificate"));
const Writing = lazy(() => import("./Pages/Writing"));
const Media = lazy(() => import("./Pages/Media"));
const Contact = lazy(() => import("./Pages/Contact"));

// Simple loading fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
