import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "./ProjectPageCss.css";
import Home from "/home/jyothirmayiks/Downloads/portfolio/src/assets/archhearing.png";
import Hardware1 from "/home/jyothirmayiks/Downloads/portfolio/src/assets/h3.jpg";
import Hardware2 from "/home/jyothirmayiks/Downloads/portfolio/src/assets/h4.jpeg";

const HomeAutomation = () => {
  const navigate = useNavigate();

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
      <nav className="navbar">
        <button className="go-back-btn" onClick={goToProjects}>
          <i className="bi bi-box-arrow-left"></i>
        </button>
      </nav>

      <header className="page-header">
        <h1>Hearing aid using IC741 Opamp</h1>
      </header>

      <div className="content">
        <p>
          The circuit describes here is used to amplify the weak signals so that
          it can be heard properly. Many people lose there their hearing power
          because of old age or due to hearing loud music or because of any
          another reason. So to amplify the weak signals they can use this
          circuit which is used to enhance the weak signals as similar to common
          audio amplifier. Advantage of this circuit is high sensitivity; it
          consumes low current and uses commonly available components and light
          weight. A hearing aid is a device designed to improve hearing by
          making sound audible to a person with hearing loss.
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
