import React from "react";
import "./Contactme.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-left">
          <h2 className="contact-title">Contact Me</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

        
        <div className="contact-right">
          <h3>Get In Touch</h3>
          <p>Email: <a href="mailto:jothirmayi@gmail.com">jothirmayi@gmail.com</a></p>
          <p>Phone: <a href="tel:+919562222500">+91 9562222500</a></p>
          <p>Location: Thrissur, Kerala, India</p>
          <div className="contact-icons">
            <a href="https://github.com/jyothirmayiks" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/jyothirmayi-k-s" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://x.com/jyothik05?t=F9t7GAhNHDC0EYoLvUcO4g&s=09" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
