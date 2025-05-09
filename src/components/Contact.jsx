import React, { useState, useRef, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaFacebookF, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
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
        aria-label="LinkedIn Profile"
      >
        <div className="social-icon">
          <FaLinkedin />
        </div>
      </a>
      <a
        href="https://github.com/Kweennn"
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
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
        aria-label="Facebook Profile"
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Add canvas ref for particle background
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormSubmitted(true);
      setIsSubmitting(false);
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1000);
  };
  
  // Add cute particle background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class with cute elements
    class Particle {
      constructor() {
        this.reset();
      }
      
      reset() {
        // Random position
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        
        // Random size (smaller for subtlety)
        this.size = Math.random() * 10 + 3;
        
        // Random movement speed (very slow for gentle floating)
        this.speedX = Math.random() * 0.7 - 0.35;
        this.speedY = Math.random() * 0.7 - 0.35;
        
        // Contact-themed colors (soft blues, pinks, and purples)
        const colors = [
          'rgba(173, 216, 230, 0.7)', // Light blue
          'rgba(221, 160, 221, 0.7)', // Plum
          'rgba(255, 182, 193, 0.7)', // Light pink
          'rgba(176, 196, 222, 0.7)', // Light steel blue
          'rgba(230, 230, 250, 0.7)', // Lavender
          'rgba(216, 191, 216, 0.7)'  // Thistle
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Contact-themed shapes
        this.shapes = ['circle', 'heart', 'envelope', 'star'];
        this.shape = this.shapes[Math.floor(Math.random() * this.shapes.length)];
        
        // Contact-themed emojis (20% chance)
        this.isEmoji = Math.random() > 0.8;
        const emojis = ['✉️', '💌', '📱', '💬', '🌸', '💕', '✨', '📞', '🔔', '📩'];
        this.emoji = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Lower opacity for subtlety
        this.opacity = Math.random() * 0.4 + 0.2;
      }
      
      update() {
        // Move particle
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
        
        // Reset if off screen (safety check)
        if (this.x < -50 || this.x > canvas.width + 50 ||
            this.y < -50 || this.y > canvas.height + 50) {
          this.reset();
        }
      }
      
      draw() {
        ctx.globalAlpha = this.opacity;
        
        if (this.isEmoji) {
          // Draw emoji
          ctx.font = `${this.size * 2}px Arial`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(this.emoji, this.x, this.y);
        } else {
          // Draw shape
          ctx.fillStyle = this.color;
          
          if (this.shape === 'circle') {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
          }
          else if (this.shape === 'heart') {
            ctx.beginPath();
            const size = this.size * 0.7;
            ctx.moveTo(this.x, this.y - size * 0.5);
            ctx.bezierCurveTo(
              this.x + size, this.y - size * 1.5,
              this.x + size * 2, this.y - size * 0.5,
              this.x, this.y + size
            );
            ctx.bezierCurveTo(
              this.x - size * 2, this.y - size * 0.5,
              this.x - size, this.y - size * 1.5,
              this.x, this.y - size * 0.5
            );
            ctx.fill();
          }
          else if (this.shape === 'envelope') {
            // Simple envelope shape
            const width = this.size * 1.5;
            const height = this.size;
            
            ctx.beginPath();
            ctx.rect(this.x - width/2, this.y - height/2, width, height);
            ctx.fill();
            
            // Envelope flap
            ctx.beginPath();
            ctx.moveTo(this.x - width/2, this.y - height/2);
            ctx.lineTo(this.x, this.y);
            ctx.lineTo(this.x + width/2, this.y - height/2);
            ctx.closePath();
            ctx.fill();
          }
          else if (this.shape === 'star') {
            const spikes = 5;
            const outerRadius = this.size;
            const innerRadius = this.size / 2;
            
            ctx.beginPath();
            for (let i = 0; i < spikes * 2; i++) {
              const radius = i % 2 === 0 ? outerRadius : innerRadius;
              const angle = (Math.PI * i) / spikes;
              const x = this.x + Math.cos(angle) * radius;
              const y = this.y + Math.sin(angle) * radius;
              
              if (i === 0) {
                ctx.moveTo(x, y);
              } else {
                ctx.lineTo(x, y);
              }
            }
            ctx.closePath();
            ctx.fill();
          }
        }
        
        ctx.globalAlpha = 1;
      }
    }
    
    // Create particles (fewer for contact page to keep it subtle)
    const particles = [];
    const particleCount = 70;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animation loop
    function animate() {
      // Clear canvas with slight fade for trails
      ctx.fillStyle = 'rgba(239, 238, 234, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="page-container">
      <Navbar />
      
      {/* Add canvas for particle background */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: 0.8
        }}
      />
      
      <div className="page-content contact-page" style={{ position: 'relative', zIndex: 1 }}>
        <div className="page-header">
        <h1 className="page-title" style={{ 
  background: "none", 
  color: "#d89292",

  WebkitBackgroundClip: "unset" 
}}>
            Get In Touch</h1>
            <p className="page-subtitle" style={{ 
  marginTop: '5px', 
  marginBottom: '25px',
  color: '#4ecdc4',
}}>
            Have a question or want to work together? I'd love to hear from you!</p>
        </div>

        <div className="contact-container">
          <div className="contact-info-card">
            <div className="profile-image-container">
              <img src={me} alt="Queenie Jane Canoy" className="profile-image" />
            </div>
            
            <h2 className="contact-info-title">Contact Information</h2>
            
            <div className="contact-method">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:queeniecanoy0258@gmail.com">queeniecanoy0258@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <a href="tel:+63906652745">+63 906 652 745</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h3>Address</h3>
                <p>Tumaga, Zamboanga City, Philippines</p>
              </div>
            </div>
            
            <div className="social-links-container">
              <h3>Connect With Me</h3>
              <SocialLinks />
            </div>
          </div>

          <div className="contact-form-card">
            <h2 className="form-title">Send Me a Message</h2>
            {formSubmitted && (
              <div className="form-success-message">
                <div className="success-icon">✓</div>
                <div className="success-text">
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </div>
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="form-input"
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
                    placeholder="john@example.com"
                    required
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  className="form-input"
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
                  placeholder="Tell me about your project, question, or just say hello!"
                  required
                  className="form-input"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
