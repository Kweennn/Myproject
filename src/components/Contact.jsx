import React, { useState } from 'react';
import Navbar from './Navbar';
import '../App.css';

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
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
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
          <p className="page-subtitle">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-method">
              <div className="contact-details">
                <h3>Email</h3>
                <p>hello@example.com</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+1 (123) 456-7890</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-details">
                <h3>Location</h3>
                <p>Manila, Philippines</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link">
                <div className="social-icon">LinkedIn</div>
              </a>
              <a href="#" className="social-link">
                <div className="social-icon">GitHub</div>
              </a>
              <a href="#" className="social-link">
                <div className="social-icon">Twitter</div>
              </a>
            </div>
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
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
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
              
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
      
      </div>
    </div>
  );
}

export default Contact;
