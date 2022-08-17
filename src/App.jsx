import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./styles/global.scss";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ThemeContext from "./context/ThemeContext";
import { AnimatePresence } from "framer-motion";

function App() {
  const [contactClass, setContactClass] = useState(false);
  const location = useLocation();

  return (
    <ThemeContext.Provider value={{ contactClass, setContactClass }}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}

export default App;
