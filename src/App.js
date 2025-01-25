import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contactme";
import Footer from "./components/Footer";
import HearingAid from "./components/HearingAid";
import Fire from "./components/Fire";
import HomeAutomation from "./components/HomeAutomation";
import Grieve from "./components/Grieve";
import MCU from "./components/MCU";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Home />
              <About />
              <Skills />
              <Education />
              <Projects />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route path="/hearingaid" element={<HearingAid />} />
        <Route path="/fire" element={<Fire />} />
        <Route path="/homeautomation" element={<HomeAutomation />} />
        <Route path="/grieve" element={<Grieve />} />
        <Route path="/mcu" element={<MCU />} />
      </Routes>
    </Router>
  );
}

export default App;
