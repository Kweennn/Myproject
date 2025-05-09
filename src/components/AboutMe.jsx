import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import '../App.css';
import { FaCode, FaLaptopCode, FaScroll, FaFilm, FaBook, FaMusic } from 'react-icons/fa';

function AboutMe() {
  const [activeTab, setActiveTab] = useState('professional');
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Hello, I'm Kween!";
  const [typingComplete, setTypingComplete] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const canvasRef = useRef(null);

  // Typing effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      setTypingComplete(true);
      setTimeout(() => setShowEmoji(true), 500);
    }
  }, [typedText]);

  // Fade-in effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Cute background particles effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Cute shapes and colors
    const shapes = ['circle', 'heart', 'star', 'triangle', 'square'];
    const colors = [
      '#ff9a9e', // Soft pink
      '#fad0c4', // Light peach
      '#a18cd1', // Soft purple
      '#fbc2eb', // Light pink
      '#d4fc79', // Light green
      '#96e6a1', // Mint green
      '#84fab0', // Aqua
      '#8fd3f4', // Light blue
      '#cfd9df', // Light gray
      '#e2ebf0'  // Very light blue
    ];

    // Particle class with cute shapes
    class CuteParticle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 6 + 2;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.speedY = Math.random() * 0.8 - 0.4;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.shape = shapes[Math.floor(Math.random() * shapes.length)];
        this.rotation = 0;
        this.rotationSpeed = Math.random() * 0.02 - 0.01;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Boundary check with bounce effect
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;

        switch (this.shape) {
          case 'heart':
            this.drawHeart();
            break;
          case 'star':
            this.drawStar();
            break;
          case 'triangle':
            this.drawTriangle();
            break;
          case 'square':
            this.drawSquare();
            break;
          default:
            this.drawCircle();
        }

        ctx.restore();
      }

      drawCircle() {
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      drawHeart() {
        const size = this.size * 0.8;
        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.bezierCurveTo(size, -size * 2, size * 2, -size / 2, 0, size);
        ctx.bezierCurveTo(-size * 2, -size / 2, -size, -size * 2, 0, -size);
        ctx.fill();
      }

      drawStar() {
        const spikes = 5;
        const outerRadius = this.size;
        const innerRadius = this.size / 2;
        
        ctx.beginPath();
        for (let i = 0; i < spikes * 2; i++) {
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          const angle = (Math.PI * i) / spikes;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.fill();
      }

      drawTriangle() {
        const size = this.size * 1.2;
        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.lineTo(-size, size);
        ctx.lineTo(size, size);
        ctx.closePath();
        ctx.fill();
      }

      drawSquare() {
        const size = this.size * 0.9;
        ctx.fillRect(-size, -size, size * 2, size * 2);
      }
    }

    // Create particles
    const particlesArray = [];
    const numberOfParticles = 60;

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new CuteParticle());
    }

    // Animation function
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
    }

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Fun facts that will rotate
  const funFacts = [
    "I can code for hours without realizing I haven't eaten until my stomach starts sending error messages.",
    "My debugging process: 1) Try to fix it 2) Google it 3) Take a break 4) Realize I missed a semicolon.",
    "I talk to my rubber duck more than I talk to most people during coding sessions.",
    "My favorite HTTP status code is 418: I'm a teapot.",
    "I've dreamt in code before. It was mostly syntax errors.",
  ];

  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % funFacts.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container">
      <Navbar />
      
      <div className="hero-container">
        <canvas ref={canvasRef} className="background-canvas"></canvas>
        
        <div className="about-me-container" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease' }}>
          {/* Animated Intro */}
          <div className="about-intro">
            <div className="typing-container">
              {typedText}
              {!typingComplete && <span className="cursor"></span>}
              {showEmoji && <span className="wave-emoji">👋</span>}
            </div>
            
            <h2 className="about-subtitle">Web Developer & UI Designer</h2>
          </div>
          
          {/* Interactive Profile Section */}
          <div className="profile-section">
            <div className="profile-card-container">
              <div className="profile-card-3d">
                <div className="card-front">
                  <img src="me.png" alt="Profile" className="profile-image-3d" />
                  <div className="card-overlay">
                    <span>Click to flip</span>
                  </div>
                </div>
                <div className="card-back">
                  <div className="fun-fact-container">
                    <h3>Did you know?</h3>
                    <p className="fun-fact">{funFacts[currentFactIndex]}</p>
                    <div className="fact-indicator">
                      {funFacts.map((_, index) => (
                        <span
                          key={index}
                          className={`fact-dot ${index === currentFactIndex ? 'active' : ''}`}
                        ></span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-content-tabs">
              <div className="tab-buttons">
                <button
                  className={`tab-btn ${activeTab === 'professional' ? 'active' : ''}`}
                  onClick={() => setActiveTab('professional')}
                >
                  <FaLaptopCode className="tab-icon" /> <span>Professional</span>
                </button>
                <button
                  className={`tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
                  onClick={() => setActiveTab('personal')}
                >
                  <FaFilm className="tab-icon" /> <span>Personal</span>
                </button>
                <button
                  className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
                  onClick={() => setActiveTab('skills')}
                >
                  <FaCode className="tab-icon" /> <span>Skills</span>
                </button>
              </div>
              
              <div className="tab-content">
                {activeTab === 'professional' && (
                  <div className="tab-pane fade-in">
                    <h3>My Professional Journey</h3>
                    <p>
                      I specialize in creating responsive, user-friendly websites and applications that combine creative design with efficient functionality.
                      With a background in Information Technology and a love for continuous learning, I enjoy tackling complex problems and turning ideas into reality through code.
                    </p>
                    <p>
                      My journey in web development started during my university years, and I've been honing my skills ever since, working on projects ranging from e-commerce platforms to interactive data visualizations.
                    </p>
                  </div>
                )}
                
                {activeTab === 'personal' && (
                  <div className="tab-pane fade-in">
                    <h3>Beyond The Code</h3>
                    <div className="interests-grid">
                      <div className="interest-item">
                        <FaScroll className="interest-icon" />
                        <h4>Scrolling</h4>
                        <p>When I need a break, you'll find me endlessly scrolling through social media for inspiration and memes.</p>
                      </div>
                      <div className="interest-item">
                        <FaFilm className="interest-icon" />
                        <h4>Anime</h4>
                        <p>I'm a huge anime fan! I love getting immersed in different worlds and storytelling styles.</p>
                      </div>
                      <div className="interest-item">
                        <FaBook className="interest-icon" />
                        <h4>Reading</h4>
                        <p>Science fiction and technical books fill my shelves and my mind.</p>
                      </div>
                      <div className="interest-item">
                        <FaMusic className="interest-icon" />
                        <h4>Music</h4>
                        <p>My coding sessions are always accompanied by the perfect playlist.</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'skills' && (
                  <div className="tab-pane fade-in">
                    <h3>My Toolbox</h3>
                    <div className="skills-showcase">
                      <div className="skill-category">
                        <h4>Frontend</h4>
                        <div className="skill-pills">
                          <span className="skill-pill">React</span>
                          <span className="skill-pill">JavaScript</span>
                          <span className="skill-pill">HTML5</span>
                          <span className="skill-pill">CSS3</span>
                          <span className="skill-pill">Responsive Design</span>
                        </div>
                      </div>
                      <div className="skill-category">
                        <h4>Tools & Others</h4>
                        <div className="skill-pills">
                          <span className="skill-pill">VS Code</span>
                          <span className="skill-pill">Adobe PhotoShop</span>
                          <span className="skill-pill">Git</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
