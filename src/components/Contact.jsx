import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaFacebookF } from 'react-icons/fa';
import Navbar from './Navbar';
import '../App.css';
import me from '../assets/me.png';

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/queenie-jane-canoy-905bb1359/"
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="social-icon">
          <FaLinkedin />
        </div>
      </a>
      <a
        href="https://github.com/dashboard"
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="social-icon">
          <FaGithub />
        </div>
      </a>
      <a
        href="https://www.facebook.com/urkweenbijj"
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="social-icon">
          <FaFacebookF />
        </div>
      </a>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="page-content">
        <div className="page-header">
          <h1 className="page-title">Contact Me</h1>
          <p className="page-subtitle">Have a question or want to work together? Feel free to reach out!</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-method">
              <div className="contact-details">
                <h3>Email</h3>
                <p>queeniecanoy0258@gmail.com</p>
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-details">
                <h3>Phone</h3>
                <p>0906652745</p>
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-details">
                <h3>Address</h3>
                <p>Tumaga, Zamboanga City, Philippines</p>
              </div>
            </div>
            <SocialLinks />
          </div>

          <div className="contact-form-container">
            <h2 className="form-title">Send Me a Message</h2>
            {formSubmitted && (
              <div className="form-success-message">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
