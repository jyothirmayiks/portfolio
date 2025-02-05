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
import ProjectDetails from "./components/ProjectDetails";
import Contact from "./components/Contactme";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";

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
          path="/project/:id"
          element={
            <div>
              <Navbar activePage="projects" />
              <ProjectDetails />
              <Footer />
            </div>
          }
        />

       
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
