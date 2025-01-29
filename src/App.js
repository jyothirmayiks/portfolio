import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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
              <Navbar activePage="home" />
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

       
        <Route
          path="/projects"
          element={
            <div>
              <Navbar activePage="projects" />
              <Projects />
              <Footer />
            </div>
          }
        />

        
        <Route
          path="/hearingaid"
          element={
            <div>
              <Navbar activePage="projects" />
              <HearingAid />
              <Footer />
            </div>
          }
        />
        <Route
          path="/fire"
          element={
            <div>
              <Navbar activePage="projects" />
              <Fire />
              <Footer />
            </div>
          }
        />
        <Route
          path="/homeautomation"
          element={
            <div>
              <Navbar activePage="projects" />
              <HomeAutomation />
              <Footer />
            </div>
          }
        />
        <Route
          path="/grieve"
          element={
            <div>
              <Navbar activePage="projects" />
              <Grieve />
              <Footer />
            </div>
          }
        />
        <Route
          path="/mcu"
          element={
            <div>
              <Navbar activePage="projects" />
              <MCU />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
