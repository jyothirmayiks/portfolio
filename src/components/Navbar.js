import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="personalnavbar">
      <a href="#home" className="personalnavbar-name">
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
          onClick={() => scrollToSection("home")}
        >
          Home
        </a>
        <a
          className={activeSection === "about" ? "active" : ""}
          onClick={() => scrollToSection("about")}
        >
          About
        </a>
        <a
          className={activeSection === "skills" ? "active" : ""}
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </a>
        <a
          className={activeSection === "education" ? "active" : ""}
          onClick={() => scrollToSection("education")}
        >
          Education
        </a>
        <a
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </a>
        <a
          className={activeSection === "contact" ? "active" : ""}
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
