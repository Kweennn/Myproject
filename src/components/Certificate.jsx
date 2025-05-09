import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import "../App.css";

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  
  // Certificate data with details and categories
  const certificates = [
    {
      id: 1,
      title: "Data Science",
      image: "Data Science.jpg",
      issuer: "Coursera",
      date: "2023",
      description: "Comprehensive data science certification",
      category: "Data Science"
    },
    {
      id: 2,
      title: "App Builder",
      image: "App Builder.jpg",
      issuer: "Udemy",
      date: "2023",
      description: "Mobile and web application development",
      category: "Development"
    },
    {
      id: 3,
      title: "Business Analytics",
      image: "Business.jpg",
      issuer: "LinkedIn Learning",
      date: "2023",
      description: "Business intelligence and analytics",
      category: "Business"
    },
    {
      id: 4,
      title: "Libraries & Frameworks",
      image: "Libraries.jpg",
      issuer: "Pluralsight",
      date: "2023",
      description: "Modern JavaScript libraries and frameworks",
      category: "Development"
    },
    {
      id: 5,
      title: "Development Tools",
      image: "Dev Tools.jpg",
      issuer: "edX",
      date: "2023",
      description: "Software development tools and practices",
      category: "Development"
    },
    {
      id: 6,
      title: "Excel Advanced",
      image: "Excel.jpg",
      issuer: "Microsoft",
      date: "2023",
      description: "Advanced Excel functions and data analysis",
      category: "Business"
    },
    {
      id: 7,
      title: "Machine Learning",
      image: "Machine Learning.jpg",
      issuer: "Coursera",
      date: "2023",
      description: "Machine learning algorithms and applications",
      category: "Data Science"
    },
    {
      id: 8,
      title: "Machine Engineering",
      image: "Machine.jpg",
      issuer: "Udacity",
      date: "2023",
      description: "Machine engineering principles and practices",
      category: "Engineering"
    },
    {
      id: 9,
      title: "Power BI",
      image: "Power Bi.jpg",
      issuer: "Microsoft",
      date: "2023",
      description: "Data visualization with Power BI",
      category: "Data Science"
    },
    {
      id: 10,
      title: "Python Programming",
      image: "Python.jpg",
      issuer: "Codecademy",
      date: "2023",
      description: "Python programming language",
      category: "Development"
    },
    {
      id: 11,
      title: "React Development",
      image: "React.jpg",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "React.js front-end development",
      category: "Development"
    },
    {
      id: 12,
      title: "Data Visualization",
      image: "Visualization.jpg",
      issuer: "DataCamp",
      date: "2023",
      description: "Advanced data visualization techniques",
      category: "Data Science"
    }
  ];

  // Extract unique categories and count certificates in each category
  const categories = ["All", ...new Set(certificates.map(cert => cert.category))];
  const categoryCounts = {};
  certificates.forEach(cert => {
    categoryCounts[cert.category] = (categoryCounts[cert.category] || 0) + 1;
  });
  categoryCounts["All"] = certificates.length;

  // Category colors for visual distinction
  const categoryColors = {
    "All": "#6B7280",
    "Data Science": "#3B82F6",
    "Development": "#10B981",
    "Business": "#F59E0B",
    "Engineering": "#EF4444"
  };

  // Close popup when escape key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) closeImage();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Particle background effect
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
    
    // Certificate-themed particle class
    class Particle {
      constructor() {
        this.reset();
      }
      
      reset() {
        // Random position
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        
        // Random size
        this.size = Math.random() * 8 + 2;
        
        // Slow movement for gentle floating
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        
        // Certificate-themed colors based on category colors
        const colorValues = Object.values(categoryColors);
        this.color = colorValues[Math.floor(Math.random() * colorValues.length)];
        this.opacity = Math.random() * 0.3 + 0.1; // Lower opacity for subtlety
        
        // Certificate-themed shapes
        this.shapes = ['certificate', 'star', 'circle', 'diploma'];
        this.shape = this.shapes[Math.floor(Math.random() * this.shapes.length)];
        
        // Certificate-themed emojis (15% chance)
        this.isEmoji = Math.random() > 0.85;
        const emojis = ['🎓', '📜', '🏆', '✅', '⭐', '📚', '🔍', '💯', '🎯', '📊'];
        this.emoji = emojis[Math.floor(Math.random() * emojis.length)];
      }
      
      update() {
        // Move particle
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges with some padding
        if (this.x > canvas.width + 50 || this.x < -50) {
          this.speedX = -this.speedX;
        }
        
        if (this.y > canvas.height + 50 || this.y < -50) {
          this.speedY = -this.speedY;
        }
        
        // Reset if way off screen (safety check)
        if (this.x < -100 || this.x > canvas.width + 100 ||
            this.y < -100 || this.y > canvas.height + 100) {
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
          else if (this.shape === 'certificate') {
            // Simple certificate shape
            const width = this.size * 1.5;
            const height = this.size;
            
            ctx.beginPath();
            ctx.roundRect(this.x - width/2, this.y - height/2, width, height, [2]);
            ctx.fill();
            
            // Certificate lines (details)
            if (this.size > 5) {
              ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
              ctx.fillRect(this.x - width/3, this.y - height/4, width/1.5, height/10);
              ctx.fillRect(this.x - width/3, this.y, width/1.5, height/10);
            }
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
          else if (this.shape === 'diploma') {
            // Rolled diploma shape
            const radius = this.size / 2;
            const height = this.size * 2;
            
            // Diploma roll
            ctx.beginPath();
            ctx.arc(this.x - radius, this.y - height/2 + radius, radius, Math.PI/2, 3*Math.PI/2);
            ctx.arc(this.x + radius, this.y + height/2 - radius, radius, 3*Math.PI/2, Math.PI/2);
            ctx.closePath();
            ctx.fill();
            
            // Ribbon
            if (this.size > 5) {
              ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
              ctx.beginPath();
              ctx.arc(this.x, this.y, radius/1.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
        
        ctx.globalAlpha = 1;
      }
    }
    
    // Create particles (adjust count as needed)
    const particles = [];
    const particleCount = 60; // Fewer particles for a subtle effect
    
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

  const openImage = (src) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  // Filter certificates based on selected category
  const filteredCertificates = selectedCategory === "All"
    ? certificates
    : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <div className="page-container">
      <Navbar />
      
      {/* Particle background canvas */}
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
      
      <div className="page-content certificates-page" style={{ position: 'relative', zIndex: 1 }}>
        <div className="certificates-header">
          <h1>My Certifications</h1>
          <p>Personal qualifications and achievements.</p>
        </div>
        
        <div className="category-filter-section">
          <h2 className="filter-heading">Browse by Category</h2>
          <div className="category-tabs">
            {categories.map(category => (
              <div
                key={category}
                className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
                style={{
                  '--category-color': categoryColors[category] || '#6B7280'
                }}
              >
                <span className="category-name">{category}</span>
                <span className="category-count">{categoryCounts[category]}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="certificates-container">
          {filteredCertificates.map((cert) => (
            <div className="cert-card" key={cert.id}>
              <div className="cert-image-wrapper">
                <img
                  src={cert.image}
                  alt={`${cert.title} Certificate`}
                  loading="lazy"
                  onClick={() => openImage(cert.image)}
                  className="clickable-image"
                />
                <div className="cert-overlay">
                  <button
                    className="view-cert-btn-icon"
                    onClick={() => openImage(cert.image)}
                    aria-label="View Certificate"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                      <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div
                  className="cert-category"
                  style={{ backgroundColor: categoryColors[cert.category] }}
                >
                  {cert.category}
                </div>
              </div>
              <div className="cert-details">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <p className="cert-desc">{cert.description}</p>
              </div>
            </div>
          ))}
          
          {filteredCertificates.length === 0 && (
            <div className="no-results">
              <p>No certificates found in this category.</p>
              <button
                className="reset-filter-btn"
                onClick={() => setSelectedCategory("All")}
              >
                Show All Certificates
              </button>
            </div>
          )}
        </div>
        
        {selectedImage && (
          <div className="cert-modal" onClick={closeImage}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="close-modal" onClick={closeImage}>×</button>
              <img src={selectedImage} alt="Certificate" />
            </div>
          </div>
        )}
        
        {/* Add a cute floating achievement badge */}
        <div 
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: 'linear-gradient(135deg, #3B82F6, #10B981)',
            color: 'white',
            padding: '15px 20px',
            borderRadius: '50px',
            boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            zIndex: 10,
            animation: 'float 3s ease-in-out infinite',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '500'
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span role="img" aria-label="trophy" style={{ fontSize: '1.2rem' }}>🏆</span>
          Total Achievements: {certificates.length}
        </div>
        
        {/* Add floating animation */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          .cert-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .cert-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
          }
          
          .view-cert-btn-icon {
            transition: transform 0.3s ease, background-color 0.3s ease;
          }
          
          .view-cert-btn-icon:hover {
            transform: scale(1.1);
          }
          
          .category-tab {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .category-tab:hover:not(.active) {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          }
        `}</style>
      </div>
    </div>
  );
}

export default Certificates;
