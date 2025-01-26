import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "./ProjectPageCss.css";

import Hardware1 from "/home/jyothirmayiks/Downloads/portfolio/src/assets/h13.jpeg";
import Hardware2 from "/home/jyothirmayiks/Downloads/portfolio/src/assets/h14.jpeg";
import Hardware3 from "/home/jyothirmayiks/Downloads/portfolio/src/assets/h15.jpeg";
import Hardware4 from "/home/jyothirmayiks/Downloads/portfolio/src/assets/h16.jpeg";
import Hardware5 from "/home/jyothirmayiks/Downloads/portfolio/src/assets/h17.jpeg";
import Hardware6 from "/home/jyothirmayiks/Downloads/portfolio/src/assets/h18.jpeg";

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
        <h1>MCU SITE</h1>
      </header>

      <div className="content">
        <p>
          The Marvel Cinematic Universe (MCU) has captivated audiences worldwide
          with its iconic characters and compelling storylines. Each character
          brings a unique blend of personality, power, and purpose, making the
          MCU a rich and interconnected universe of heroes, villains, and
          everything in between. An MCU character page serves as a comprehensive
          hub to explore the fascinating details about these beloved
          characters—their origins, powers, affiliations, and their pivotal
          roles in shaping the overarching narrative. Whether you're a casual
          fan or a Marvel enthusiast, this page offers an exciting glimpse into
          the world of your favorite superheroes and villains.
        </p>

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
              alt="Hardware Setup Image 1"
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
              alt="Hardware Setup Image 1"
              className="slider-image"
            />
          </div>
          <div>
            <img
              src={Hardware6}
              alt="Hardware Setup Image 2"
              className="slider-image"
            />
          </div>
        </Slider>

        <p>
          The MCU character page is more than just a collection of profiles—it's
          a gateway to understanding the essence of what makes these characters
          unforgettable. From their heroic journeys to their struggles and
          triumphs, every story contributes to the larger Marvel tapestry. By
          diving into their backgrounds, relationships, and iconic moments, fans
          can relive the magic of the MCU while discovering new dimensions of
          their favorite characters. Whether you're revisiting old favorites or
          discovering new ones, this page is a celebration of the Marvel
          universe and its enduring legacy.
        </p>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Jyothirmayi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomeAutomation;
