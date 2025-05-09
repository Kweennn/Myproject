import React, { useEffect, useState, useRef } from 'react';
import '../App.css';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

function Hero() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const roles = ['Web Developer', 'UI/UX Designer'];
  const canvasRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const floatingElements = useRef([]);
  
  // Typing effect
  useEffect(() => {
    const current = roles[index];
    let timeout;
    
    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    }
    
    if (!isDeleting && charIndex === current.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((index + 1) % roles.length);
    }
    
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, roles]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.color = `hsl(${Math.random() * 360}, 70%, 70%)`;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      
      update() {
        const dx = mousePosition.current.x - this.x;
        const dy = mousePosition.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        
        const maxDistance = 100;
        let force = (maxDistance - distance) / maxDistance;
        
        if (force < 0) force = 0;
        
        const directionX = (forceDirectionX * force * this.density);
        const directionY = (forceDirectionY * force * this.density);
        
        if (distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }
    }
    
    const init = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 9000;
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };
    
    init();
    
    const createFloatingElements = () => {
      const elements = [];
      const shapes = ['circle', 'square', 'triangle', 'diamond'];
      
      for (let i = 0; i < 15; i++) {
        elements.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 30 + 10,
          speedX: (Math.random() - 0.5) * 1,
          speedY: (Math.random() - 0.5) * 1,
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          color: `hsla(${Math.random() * 360}, 70%, 70%, 0.3)`,
          rotation: 0,
          rotationSpeed: (Math.random() - 0.5) * 0.02
        });
      }
      
      return elements;
    };
    
    floatingElements.current = createFloatingElements();
    
    const drawFloatingElement = (element) => {
      ctx.save();
      ctx.translate(element.x, element.y);
      ctx.rotate(element.rotation);
      ctx.fillStyle = element.color;
      
      switch (element.shape) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, element.size, 0, Math.PI * 2);
          ctx.fill();
          break;
        case 'square':
          ctx.fillRect(-element.size / 2, -element.size / 2, element.size, element.size);
          break;
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -element.size / 2);
          ctx.lineTo(element.size / 2, element.size / 2);
          ctx.lineTo(-element.size / 2, element.size / 2);
          ctx.closePath();
          ctx.fill();
          break;
        case 'diamond':
          ctx.beginPath();
          ctx.moveTo(0, -element.size / 2);
          ctx.lineTo(element.size / 2, 0);
          ctx.lineTo(0, element.size / 2);
          ctx.lineTo(-element.size / 2, 0);
          ctx.closePath();
          ctx.fill();
          break;
        default:
          ctx.fillRect(-element.size / 2, -element.size / 2, element.size, element.size);
      }
      
      ctx.restore();
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      floatingElements.current.forEach(element => {
        element.x += element.speedX;
        element.y += element.speedY;
        element.rotation += element.rotationSpeed;
        
        if (element.x < -element.size) element.x = canvas.width + element.size;
        if (element.x > canvas.width + element.size) element.x = -element.size;
        if (element.y < -element.size) element.y = canvas.height + element.size;
        if (element.y > canvas.height + element.size) element.y = -element.size;
        
        drawFloatingElement(element);
      });
      
      particles.forEach(particle => {
        particle.draw();
        particle.update();
      });
      
      connectParticles();
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    const connectParticles = () => {
      const maxDistance = 100;
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="hero-container">
      <canvas
        ref={canvasRef}
        className="background-canvas"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      />
      
      <Navbar />
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="animated-name">Hi, I'm Queenie</h1>
          <div className="role-container">
            
            <div className="typing-container">
              <span className="typed-text">{text}</span><span className="cursor">|</span>
            </div>
          </div>
          <h3 className="animated-description">
            I create user-friendly websites with innovative designs
            and<br /> efficient code emphasizing seamless interfaces.
          </h3>
          
          <button
            className={`square-button ${buttonHovered ? 'button-hovered' : ''}`}
            onClick={() => navigate('/Projects')}
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
          >
            <span className="button-text">View Projects</span>
            <div className="button-particles">
              {buttonHovered && Array.from({ length: 10 }).map((_, i) => (
                <span
                  key={i}
                  className="particle"
                  style={{
                    '--i': i,
                    '--x': Math.random() * 100 - 50 + 'px',
                    '--y': Math.random() * 100 - 50 + 'px',
                    '--scale': Math.random() * 0.5 + 0.5,
                    '--delay': Math.random() * 0.2 + 's'
                  }}
                />
              ))}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
