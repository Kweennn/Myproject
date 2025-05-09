import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Experience() {
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const shapes = ['circle', 'heart', 'star', 'triangle', 'square', 'cloud', 'flower', 'bow', 'cat', 'rabbit'];
    const colors = [
      '#ff9a9e',
      '#fad0c4', 
      '#a18cd1', 
      '#fbc2eb', 
      '#d4fc79', 
      '#96e6a1', 
      '#84fab0',
      '#8fd3f4', 
      '#fccb90', 
      '#d8b5ff',
      '#243c4c', 
      '#faf3f3', 
    ];

    const emojis = ['✨', '🌟', '💖', '🌸', '🍬', '🌈', '🦄', '🎀', '🍭', '🌺'];
    
    class SuperCuteParticle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 8 + 3; // Slightly larger for better visibility
        this.baseSize = this.size; // Store original size for pulsing effect
        this.speedX = Math.random() * 0.7 - 0.35; // Slightly slower for gentler movement
        this.speedY = Math.random() * 0.7 - 0.35;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.shape = shapes[Math.floor(Math.random() * shapes.length)];
        this.rotation = 0;
        this.rotationSpeed = Math.random() * 0.015 - 0.0075; // Gentler rotation
        this.opacity = Math.random() * 0.5 + 0.3; // More visible
        this.pulseSpeed = Math.random() * 0.03 + 0.01; // For size pulsing
        this.pulseDirection = Math.random() > 0.5 ? 1 : -1; // Random pulse direction
        this.pulseAmount = 0; // Current pulse state
        this.glitter = Math.random() > 0.7; // Some particles will have glitter effect
        this.glitterTimer = 0;
        this.wobble = Math.random() * 0.5; // Wobble amount for movement
        this.wobbleSpeed = Math.random() * 0.05; // Speed of wobble
        this.wobbleOffset = Math.random() * Math.PI * 2; // Random starting point
        this.useEmoji = Math.random() > 0.8; // Some particles will be emojis
        this.emoji = emojis[Math.floor(Math.random() * emojis.length)];
        this.twinkle = Math.random() > 0.7; // Twinkle effect
        this.twinkleSpeed = Math.random() * 0.05 + 0.02;
        this.twinkleAmount = 0;
        this.hasFace = Math.random() > 0.5; // Some particles will have cute faces
      }

      update() {
        // Wobble movement for more playful motion
        this.x += this.speedX + Math.sin(this.wobbleOffset + Date.now() * this.wobbleSpeed) * this.wobble;
        this.y += this.speedY + Math.cos(this.wobbleOffset + Date.now() * this.wobbleSpeed) * this.wobble;
        this.rotation += this.rotationSpeed;
        
        // Bounce off edges with slight randomization for more natural movement
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX * (0.9 + Math.random() * 0.2);
          if (Math.random() > 0.8) this.speedY += (Math.random() - 0.5) * 0.3; // Add some randomness
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY * (0.9 + Math.random() * 0.2);
          if (Math.random() > 0.8) this.speedX += (Math.random() - 0.5) * 0.3; // Add some randomness
        }
        
        // Pulsing size effect
        this.pulseAmount += this.pulseSpeed * this.pulseDirection;
        if (Math.abs(this.pulseAmount) > 0.3) {
          this.pulseDirection *= -1; // Reverse direction when reaching threshold
        }
        
        // Glitter effect timer
        if (this.glitter) {
          this.glitterTimer += 0.05;
        }
        
        // Twinkle effect
        if (this.twinkle) {
          this.twinkleAmount += this.twinkleSpeed;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Apply pulsing to size
        const pulseSize = this.baseSize * (1 + this.pulseAmount);
        
        // Twinkle effect
        if (this.twinkle) {
          const twinkleOpacity = 0.3 + Math.abs(Math.sin(this.twinkleAmount)) * 0.7;
          ctx.globalAlpha = this.opacity * twinkleOpacity;
        } else {
          ctx.globalAlpha = this.opacity;
        }
        
        // Glitter effect
        if (this.glitter && Math.sin(this.glitterTimer) > 0.7) {
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 15;
        } else {
          ctx.shadowBlur = 0;
        }
        
        // Draw emoji or shape
        if (this.useEmoji) {
          this.drawEmoji(pulseSize);
        } else {
          ctx.fillStyle = this.color;
          
          switch (this.shape) {
            case 'heart':
              this.drawHeart(pulseSize);
              break;
            case 'star':
              this.drawStar(pulseSize);
              break;
            case 'triangle':
              this.drawTriangle(pulseSize);
              break;
            case 'square':
              this.drawSquare(pulseSize);
              break;
            case 'cloud':
              this.drawCloud(pulseSize);
              break;
            case 'flower':
              this.drawFlower(pulseSize);
              break;
            case 'bow':
              this.drawBow(pulseSize);
              break;
            case 'cat':
              this.drawCat(pulseSize);
              break;
            case 'rabbit':
              this.drawRabbit(pulseSize);
              break;
            default:
              this.drawCircle(pulseSize);
          }
          
          // Add cute faces to some shapes
          if (this.hasFace && !this.useEmoji && ['circle', 'square', 'cloud'].includes(this.shape)) {
            this.drawCuteFace(pulseSize);
          }
        }
        
        ctx.restore();
      }
      
      drawEmoji(size) {
        ctx.font = `${size * 2}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.emoji, 0, 0);
      }

      drawCircle(size) {
        ctx.beginPath();
        ctx.arc(0, 0, size, 0, Math.PI * 2);
        ctx.fill();
      }

      drawHeart(size) {
        const s = size * 0.8;
        ctx.beginPath();
        ctx.moveTo(0, s * 0.3);
        ctx.bezierCurveTo(s, -s, s * 2, s * 0.3, 0, s * 1.5);
        ctx.bezierCurveTo(-s * 2, s * 0.3, -s, -s, 0, s * 0.3);
        ctx.fill();
      }

      drawStar(size) {
        const spikes = 5;
        const outerRadius = size;
        const innerRadius = size / 2;
        
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
        
        // Add sparkle to stars
        if (Math.random() > 0.7) {
          ctx.strokeStyle = 'white';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      drawTriangle(size) {
        const s = size * 1.2;
        ctx.beginPath();
        ctx.moveTo(0, -s);
        ctx.lineTo(-s, s * 0.8);
        ctx.lineTo(s, s * 0.8);
        ctx.closePath();
        ctx.fill();
      }

      drawSquare(size) {
        const s = size * 0.9;
        // Rounded corners for square
        ctx.beginPath();
        ctx.roundRect(-s, -s, s * 2, s * 2, s/3);
        ctx.fill();
      }
      
      drawCloud(size) {
        const s = size * 0.8;
        ctx.beginPath();
        ctx.arc(0, 0, s, Math.PI, Math.PI * 2);
        ctx.arc(-s, 0, s * 0.7, Math.PI, Math.PI * 2);
        ctx.arc(s, 0, s * 0.7, Math.PI, Math.PI * 2);
        ctx.arc(-s/2, -s/2, s * 0.5, Math.PI, Math.PI * 2);
        ctx.arc(s/2, -s/2, s * 0.5, Math.PI, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      
      drawFlower(size) {
        const s = size;
        const petalCount = 5;
        
        // Draw petals
        ctx.fillStyle = this.color;
        for (let i = 0; i < petalCount; i++) {
          ctx.beginPath();
          const angle = (Math.PI * 2 * i) / petalCount;
          ctx.ellipse(
            Math.cos(angle) * s, 
            Math.sin(angle) * s, 
            s, s/2, 
            angle, 0, Math.PI * 2
          );
          ctx.fill();
        }
        
        // Draw center
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
      
      drawBow(size) {
        const s = size;
        
        // Draw bow loops
        ctx.beginPath();
        ctx.ellipse(-s, 0, s * 1.2, s * 0.8, Math.PI/4, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.ellipse(s, 0, s * 1.2, s * 0.8, -Math.PI/4, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw center knot
        ctx.beginPath();
        ctx.ellipse(0, 0, s * 0.6, s * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw ribbons
        ctx.beginPath();
        ctx.moveTo(-s/2, s/2);
        ctx.lineTo(-s, s*1.5);
        ctx.lineTo(-s/3, s);
        ctx.closePath();
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(s/2, s/2);
        ctx.lineTo(s, s*1.5);
        ctx.lineTo(s/3, s);
        ctx.closePath();
        ctx.fill();
      }
      
      drawCat(size) {
        const s = size;
        
        // Cat head
        ctx.beginPath();
        ctx.arc(0, 0, s, 0, Math.PI * 2);
        ctx.fill();
        
        // Cat ears
        ctx.beginPath();
        ctx.moveTo(-s/2, -s/2);
        ctx.lineTo(-s, -s*1.5);
        ctx.lineTo(-s/5, -s);
        ctx.closePath();
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(s/2, -s/2);
        ctx.lineTo(s, -s*1.5);
        ctx.lineTo(s/5, -s);
        ctx.closePath();
        ctx.fill();
        
        // Cat face
        if (s > 4) {
          // Eyes
          ctx.fillStyle = 'white';
          ctx.beginPath();
          ctx.ellipse(-s/3, -s/5, s/4, s/3, 0, 0, Math.PI * 2);
          ctx.ellipse(s/3, -s/5, s/4, s/3, 0, 0, Math.PI * 2);
          ctx.fill();
          
            // Pupils
            ctx.fillStyle = 'black';
            ctx.beginPath();
            ctx.ellipse(-s/3, -s/5, s/8, s/5, 0, 0, Math.PI * 2);
            ctx.ellipse(s/3, -s/5, s/8, s/5, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Nose
            ctx.fillStyle = 'pink';
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(-s/5, s/5);
            ctx.lineTo(s/5, s/5);
            ctx.closePath();
            ctx.fill();
            
            // Mouth
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(-s/4, s/3);
            ctx.lineTo(0, s/2);
            ctx.lineTo(s/4, s/3);
            ctx.stroke();
            
            // Whiskers
            ctx.beginPath();
            ctx.moveTo(-s/5, s/5);
            ctx.lineTo(-s, s/6);
            ctx.moveTo(-s/5, s/5);
            ctx.lineTo(-s, s/3);
            ctx.moveTo(s/5, s/5);
            ctx.lineTo(s, s/6);
            ctx.moveTo(s/5, s/5);
            ctx.lineTo(s, s/3);
            ctx.stroke();
          }
        }
        
        drawRabbit(size) {
          const s = size;
          
          // Rabbit head
          ctx.beginPath();
          ctx.arc(0, 0, s, 0, Math.PI * 2);
          ctx.fill();
          
          // Rabbit ears
          ctx.beginPath();
          ctx.ellipse(-s/2, -s*1.5, s/3, s, -Math.PI/8, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.beginPath();
          ctx.ellipse(s/2, -s*1.5, s/3, s, Math.PI/8, 0, Math.PI * 2);
          ctx.fill();
          
          // Rabbit face
          if (s > 4) {
            // Eyes
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(-s/3, -s/5, s/4, 0, Math.PI * 2);
            ctx.arc(s/3, -s/5, s/4, 0, Math.PI * 2);
            ctx.fill();
            
            // Pupils
            ctx.fillStyle = 'black';
            ctx.beginPath();
            ctx.arc(-s/3, -s/5, s/8, 0, Math.PI * 2);
            ctx.arc(s/3, -s/5, s/8, 0, Math.PI * 2);
            ctx.fill();
            
            // Nose
            ctx.fillStyle = 'pink';
            ctx.beginPath();
            ctx.ellipse(0, s/5, s/5, s/8, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Mouth
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, s/5);
            ctx.lineTo(0, s/3);
            ctx.moveTo(-s/5, s/3);
            ctx.lineTo(s/5, s/3);
            ctx.stroke();
          }
        }
        
        drawCuteFace(size) {
          if (size < 4) return;
          
          const s = size;
          const smileType = Math.floor(Math.random() * 3); 
          
          // Eyes
          ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
          
          if (Math.random() > 0.9) {
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(-s/3 - s/5, -s/5);
            ctx.lineTo(-s/3 + s/5, -s/5);
            ctx.moveTo(s/3 - s/5, -s/5);
            ctx.lineTo(s/3 + s/5, -s/5);
            ctx.stroke();
          } else {
            ctx.beginPath();
            ctx.arc(-s/3, -s/5, s/5, 0, Math.PI * 2);
            ctx.arc(s/3, -s/5, s/5, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(-s/3 + s/10, -s/5 - s/10, s/10, 0, Math.PI * 2);
            ctx.arc(s/3 + s/10, -s/5 - s/10, s/10, 0, Math.PI * 2);
            ctx.fill();
          }
          
          ctx.strokeStyle = 'rgba(0, 0, 0, 0.7)';
          ctx.lineWidth = 1.5;
          
          switch (smileType) {
            case 0: 
              ctx.beginPath();
              ctx.arc(0, s/5, s/3, 0, Math.PI);
              ctx.stroke();
              break;
            case 1: 
              ctx.beginPath();
              ctx.arc(0, s/5, s/3, 0, Math.PI);
              ctx.stroke();
              
              ctx.fillStyle = 'rgba(255, 150, 150, 0.8)';
              ctx.beginPath();
              ctx.ellipse(0, s/3, s/6, s/8, 0, 0, Math.PI);
              ctx.fill();
              break;
            case 2: 
              ctx.beginPath();
              ctx.moveTo(-s/3, s/5);
              ctx.quadraticCurveTo(0, s/2, s/3, s/5);
              ctx.stroke();
              break;
          }
          
          if (Math.random() > 0.5) {
            ctx.fillStyle = 'rgba(255, 150, 150, 0.4)';
            ctx.beginPath();
            ctx.arc(-s/2, s/5, s/4, 0, Math.PI * 2);
            ctx.arc(s/2, s/5, s/4, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
  
      const particlesArray = [];
      const numberOfParticles = 70;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new SuperCuteParticle());
      }
  
      let mouseX = undefined;
      let mouseY = undefined;
      
      canvas.addEventListener('mousemove', (event) => {
        mouseX = event.x;
        mouseY = event.y;
      });
      
      canvas.addEventListener('mouseleave', () => {
        mouseX = undefined;
        mouseY = undefined;
      });
  
      setInterval(() => {
        if (particlesArray.length < 100 && Math.random() > 0.7) {
          particlesArray.push(new SuperCuteParticle());
        }
      }, 1000);
  
      function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
          
          if (mouseX !== undefined && mouseY !== undefined) {
            const dx = particlesArray[i].x - mouseX;
            const dy = particlesArray[i].y - mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              const angle = Math.atan2(dy, dx);
              const force = (100 - distance) / 1500;
              particlesArray[i].x += Math.cos(angle) * force;
              particlesArray[i].y += Math.sin(angle) * force;
            }
          }
          
          particlesArray[i].draw();
        }
        
        connectParticles();
      }
      
      function connectParticles() {
        for (let i = 0; i < particlesArray.length; i++) {
          for (let j = i + 1; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              const gradient = ctx.createLinearGradient(
                particlesArray[i].x,
                particlesArray[i].y,
                particlesArray[j].x,
                particlesArray[j].y
              );
              gradient.addColorStop(0, particlesArray[i].color);
              gradient.addColorStop(1, particlesArray[j].color);
              
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 0.5;
              ctx.globalAlpha = (100 - distance) / 200;
              
              ctx.beginPath();
              ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
              ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
              ctx.stroke();
              ctx.globalAlpha = 1;
            }
          }
        }
      }
  
      animate();
  
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
  
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const handleCertificateClick = () => {
      navigate('/certificate');
    };
  
    const handleButtonMouseEnter = (e) => {
      const button = e.currentTarget;
      
      for (let i = 0; i < 20; i++) {
        createButtonParticle(button);
      }
    };
    
    const createButtonParticle = (button) => {
      const particle = document.createElement('span');
      particle.className = 'particle';
      
      const size = Math.floor(Math.random() * 10 + 5);
      const xPos = Math.random() * 100 - 50;
      const yPos = Math.random() * 100 - 50;
      const scale = Math.random() * 0.6 + 0.2;
      const delay = Math.random() * 0.2;
      
      particle.style.setProperty('--x', `${xPos}px`);
      particle.style.setProperty('--y', `${yPos}px`);
      particle.style.setProperty('--scale', scale);
      particle.style.setProperty('--delay', `${delay}s`);
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      button.querySelector('.button-particles').appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 600 + delay * 1000);
    };
  
    return (
      <div className="page-container">
        <Navbar />
        <canvas ref={canvasRef} className="background-canvas"></canvas>
        
        <div className="page-content" style={{ position: "relative", zIndex: 5 }}>
          <div className="page-header" style={{ marginTop: "-50px",}}>
          <h1 className="page-title" style={{ 
  background: "none", 
  color: "#d89292",

  WebkitBackgroundClip: "unset" 
}}>
  My Experience</h1>
  <p className="page-subtitle" style={{ color: "#4ecdc4 ", }}>
  A journey through my professional career and projects.
</p>


            
            <div style={{ 
              display: "flex", 
              justifyContent: "center", 
              marginTop: "25px", 
              marginBottom: "40px",
              position: "relative",
              zIndex: 10
            }}>
              <button 
                onClick={handleCertificateClick}
                onMouseEnter={handleButtonMouseEnter}
                className="square-button"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  background: "#34d399",
                  border: "none",
                  background:" linear-gradient(45deg, #4ecdc4, #6c5ce7)",
                  height: "50px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  zIndex: 10
                }}
              >
                <div className="button-particles"></div>
                <span className="button-text">View Certifications</span>
              </button>
            </div>
          </div>
          
          <div className="experience-timeline">
            <div className="experience-item">
              <span className="experience-date">January - April 2024</span>
              <h3 className="experience-title">Frontend Developer / Project Manager</h3>
              <h4 className="experience-company">Orion Tech Solutions</h4>
              <p className="experience-description">
                Developing responsive web applications using React and modern JavaScript. Collaborating with UX/UI designers to implement pixel-perfect interfaces and working with backend developers to integrate APIs.
              </p>
              <div className="experience-skills">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">Responsive Design</span>
              </div>
            </div>
            
            <div className="experience-item">
              <span className="experience-date">February - April 2024</span>
              <h3 className="experience-title">Web Developer</h3>
              <h4 className="experience-company">Terra Inc.</h4>
              <p className="experience-description">
              Built and maintained websites for various clients using HTML, CSS, and JavaScript. Implemented responsive designs and ensured cross-browser compatibility. Collaborated with the design team to create engaging user experiences.
            </p>
            <div className="experience-skills">
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">BootStrap</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
