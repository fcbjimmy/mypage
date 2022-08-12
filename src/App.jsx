import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/global.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [projectClass, setProjectClass] = useState(false);

  // const currentPath = (path) => {
  //   if (path === "/contact") {
  //     setProjectClass(true);
  //   } else {
  //     setProjectClass(false);
  //   }
  // };

  return (
    <ThemeContext.Provider value={{ projectClass, setProjectClass }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/contact"
          element={<Contact setProjectClass={setProjectClass} />}
        />
      </Routes>
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
