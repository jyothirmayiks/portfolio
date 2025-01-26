import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick"; 
import "./ProjectPageCss.css";
import Home from "/home/jyothirmayiks/Downloads/portfolio/src/assets/1 (5).png";
import Hardware1 from "/home/jyothirmayiks/Downloads/portfolio/src/assets/h1.jpeg"; 
import Hardware2 from "/home/jyothirmayiks/Downloads/portfolio/src/assets/h2.jpeg";

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
        <h1>Home Automation Using OpenThread</h1>
      </header>

      <div className="content">
      <p>
        Home automation enables you to effectively manage your living space by remotely
controlling and automating various devices and appliances. While current technologies
like Wi-Fi, Bluetooth, and Zigbee have played crucial roles in this field, each comes
with its own set of limitations. Wi-Fi, despite its broad connectivity options, can be
power-intensive and may not always deliver reliable connections for numerous devices.
Bluetooth, on the other hand, excels in short-range communication but may not suffice
for a comprehensive home automation network. Although Zigbee offers a low-power
mesh networking solution, its adoption can sometimes be restricted compared to more
prevalent protocols.</p>
<p>
To tackle these limitations, OpenThread emerges as a revolutionary solution. Built
upon the Thread networking protocol. It utilizes a mesh network paradigm, enabling
devices to connect and relay signals among themselves, thus establishing a robust
and self-repairing network that ensures data transmission even if certain devices are
momentarily inaccessible. Furthermore, OpenThread places a high priority on security,
incorporating built-in features to protect your network from unauthorized access.
In comparison to existing technologies, OpenThread distinguishes itself with
a trio of advantages—minimal power consumption, scalability to accommodate a
growing array of devices, and robust security—rendering it a future-proof solution
for constructing a dependable and efficient smart home automation ecosystem.
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
        The integration of the transmitter, receiver, and mobile application components
results in a unified home automation system.
The transmitter includes a server
component housing API keys and links to connected channels. Simultaneously, the
receiver incorporates a smart module,enabling control over two devices. A custom-
built mobile application, featuring a login page and control interface, complements
the system.
This application integrates API keys and channel links to facilitate
transmission, simplifying user interaction with the system.
        </p>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Jyothirmayi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomeAutomation;
