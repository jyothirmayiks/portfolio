import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "./ProjectPageCss.css";
import Home from "/home/jyothirmayiks/Downloads/portfolio/src/assets/archifire.png";
import Hardware1 from "/home/jyothirmayiks/Downloads/portfolio/src/assets/h5.jpeg";
import Hardware2 from "/home/jyothirmayiks/Downloads/portfolio/src/assets/h6.jpeg";
import Hardware3 from "/home/jyothirmayiks/Downloads/portfolio/src/assets/h7.jpeg";

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
        <h1>FIRE FIGHTING ROBOT</h1>
      </header>

      <div className="content">
        <p>
          This advanced project allows a user to control a fire fighter robot
          equipped with water tank and gun remotely wirelessly for extinguishing
          fires. For this purposes the system uses an Rf remote for remote
          operation along with rf receive based microcontroller circuit for
          operating the robotic vehicle and water pump. The rf based remote
          transfers users commands through rf signals which are received by the
          receiver circuit. The receiver circuit now decodes the data commands
          sent. It then forwards it to the microcontroller. Now the
          microcontroller processes these instructions and then instructions the
          vehicle motors to run the vehicle in desired directions. It also
          operates the water pump motor and pump direction motor to spray water
          based on users commands. This allows the user to operate the robot and
          put off the fire by standing at a safe distance. The robot operates
          within a 8 meter range of the remote.
        </p>

        <h2>ARCHITECTURE</h2>
        <div className="archimage">
          <img src={Home} alt="Architecture Diagram" />
        </div>

        <h2>HARDWARE SETUP</h2>
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
        </Slider>

        <p>
        The firefighting robotic vehicle using Arduino project has successfully demonstrated the potential of using robotics and
microcontroller technology to improve the safety and effectiveness of firefighting operations. By integrating sensors and
GSM systems into the vehicle, it can detect fire and smoke alert through hazardous environments, while using a water
pump and nozzle to extinguish fires.
        </p>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Jyothirmayi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomeAutomation;
