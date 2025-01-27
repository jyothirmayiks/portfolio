import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "./ProjectPageCss.css";
import Home from "/home/jyothirmayiks/Downloads/portfolio/src/assets/archigrieve.png";
import Hardware1 from "/home/jyothirmayiks/Downloads/portfolio/src/assets/h8.jpeg";
import Hardware2 from "/home/jyothirmayiks/Downloads/portfolio/src/assets/h9.jpeg";
import Hardware3 from "/home/jyothirmayiks/Downloads/portfolio/src/assets/h10.jpeg";
import Hardware4 from "/home/jyothirmayiks/Downloads/portfolio/src/assets/h11.jpeg";
import Hardware5 from "/home/jyothirmayiks/Downloads/portfolio/src/assets/h12.jpeg";

const HomeAutomation = () => {
  const navigate = useNavigate();

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const goToProjects = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-automation-page">
      <nav className="pronavbar">
        <button className="go-back-btn" onClick={goToProjects}>
          <i className="bi bi-box-arrow-left"></i>
        </button>
      </nav>

      <header className="page-header">
        <h1>GRIEVANCE MANAGEMENT SYSTEM</h1>
      </header>

      <div className="content">
        <p>
          A Grievance Management System is a structured platform designed to
          streamline the process of addressing and resolving grievances in an
          efficient and transparent manner. This system ensures that issues
          raised by users—whether students, employees, or other stakeholders—are
          documented, tracked, and resolved systematically. By leveraging
          technology, the system bridges the gap between users and
          administrators, providing a clear and organized approach to
          problem-solving. It not only enhances accountability but also fosters
          trust, collaboration, and a sense of fairness among all participants.
          In the context of organizations and institutions, a Grievance
          Management System becomes an indispensable tool to maintain harmony,
          boost productivity, and uphold integrity.
        </p>

        <h2>ARCHITECTURE</h2>
        <div className="archimage">
          <img src={Home} alt="Architecture Diagram" />
        </div>

        <h2>WEBPAGE DESIGN</h2>
        <Slider {...sliderSettings} className="hardware-slider">
          <div>
            <img
              src={Hardware1}
              alt="Hardware Setup Image 1"
              className="slider-image"
            />
          </div>
          <div>
            <img
              src={Hardware2}
              alt="Hardware Setup Image 2"
              className="slider-image"
            />
          </div>
          <div>
            <img
              src={Hardware3}
              alt="Hardware Setup Image 2"
              className="slider-image"
            />
          </div>
          <div>
            <img
              src={Hardware4}
              alt="Hardware Setup Image 2"
              className="slider-image"
            />
          </div>
          <div>
            <img
              src={Hardware5}
              alt="Hardware Setup Image 2"
              className="slider-image"
            />
          </div>
        </Slider>

        <p>
          The integration of the transmitter, receiver, and mobile application
          components results in a unified home automation system. The
          transmitter includes a server component housing API keys and links to
          connected channels. Simultaneously, the receiver incorporates a smart
          module,enabling control over two devices. A custom- built mobile
          application, featuring a login page and control interface, complements
          the system. This application integrates API keys and channel links to
          facilitate transmission, simplifying user interaction with the system.
        </p>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Jyothirmayi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomeAutomation;
