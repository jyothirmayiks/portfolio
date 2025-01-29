import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); 
  const navigate = useNavigate();
  const location = useLocation(); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  
  const handleNavigation = (path) => {
    if (location.pathname === "/") {
      
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); 
    }
    setMenuOpen(false); 
  };

 
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "education", "projects", "contact"];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      
      setActiveSection(""); 
    }
  }, [location.pathname]);

  return (
    <nav className="personalnavbar">
      <a
        className="personalnavbar-name"
        onClick={() => navigate("/")} 
        role="button"
        tabIndex="0"
      >
        Jyothi.
      </a>
      <button className="menu-toggle" onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </button>
      <div className={`menu ${menuOpen ? "menu-open" : ""}`}>
        <a
          className={activeSection === "home" ? "active" : ""}
          onClick={() => handleNavigation("home")}
          role="button"
          tabIndex="0"
        >
          Home
        </a>
        <a
          className={activeSection === "about" ? "active" : ""}
          onClick={() => handleNavigation("about")}
          role="button"
          tabIndex="0"
        >
          About
        </a>
        <a
          className={activeSection === "skills" ? "active" : ""}
          onClick={() => handleNavigation("skills")}
          role="button"
          tabIndex="0"
        >
          Skills
        </a>
        <a
          className={activeSection === "education" ? "active" : ""}
          onClick={() => handleNavigation("education")}
          role="button"
          tabIndex="0"
        >
          Education
        </a>
        <a
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => handleNavigation("projects")}
          role="button"
          tabIndex="0"
        >
          Projects
        </a>
        <a
          className={activeSection === "contact" ? "active" : ""}
          onClick={() => handleNavigation("contact")}
          role="button"
          tabIndex="0"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
