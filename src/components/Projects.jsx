import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import '../App.css';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      id: 1,
      title: "To do List",
      description: "A simple and interactive task management app that allows users to add, edit, complete, and delete tasks.",
      image: "/todo.png",
      category: "web",
      tags: ["React", "JavaScript", "CSS", "Local Storage"],
      github: "https://github.com/Kweennn/todo",
      liveDemo: "https://todoqueen.netlify.app"
    },
    {
      id: 2,
      title: "Pokedex",
      description: "A responsive website that lets users search and view Pokémon details using the PokéAPI, complete with images and basic stats.",
      image: "/pokedex.png",
      category: "api",
      tags: ["HTML", "CSS", "React", "PokéAPI"],
      github: "https://github.com/Kweennn/pokedex",
      liveDemo: "https://pokedexproj.netlify.app"
    },
    {
      id: 3,
      title: "Petpal",
      description: "A responsive website for pet adoption, fostering, and boarding with easy browsing, and shelter connection.",
      image: "/Petpal.png",
      category: "frontend",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/Kweennn/petpal",
      liveDemo: "https://ttechmart.online/",
    },
    {
      id: 4,
      title: "  Self-Potrait Degital",
      description: "A modern interpretation of self through digital art, reflecting identity, emotion, and personal expression in a contemporary visual form.",
      image: "/Collage.png", 
      category: "graphic",
      tags: ["Digital Art", "Adobe Photoshop"],
      github: null,
      liveDemo: null,
      gallery: [
        {
          id: 'g1',
          image: "/Collage.png",
          caption: "Image"
        }
      ],
      detailedDescription: "This brand identity project was created for a fictional eco-friendly startup. The design process involved market research, competitor analysis, and multiple iterations of sketches and digital designs. The final deliverables included a primary logo, secondary marks, a comprehensive color palette, typography guidelines, and mockups showing real-world applications."
    },
    {
      id: 5,
      title: " Advocacy Poster",  
      description: "Highlights water conservation through the “text behind the subject” technique, showing how every drop sustains life.",
      image: "/Poster.png",
      category: "graphic",
      tags: ["Digital Art", "Adobe Photoshop"],
      github: null,
      liveDemo: null,
      gallery: [
        {
          id: 'g1',
          image: "/Poster.png",
          caption: "Image"
        }
      ],
      detailedDescription: "This brand identity project was created for a fictional eco-friendly startup. The design process involved market research, competitor analysis, and multiple iterations of sketches and digital designs. The final deliverables included a primary logo, secondary marks, a comprehensive color palette, typography guidelines, and mockups showing real-world applications."
    },
    {
      id: 6,
      title: " Sport Poster",  
      description:" This vibrant poster features five athletes in action, with dynamic graphics and bold text to capture the energy and spirit of WMSU Palaro 2024.",









      image: "/Canoy.png",
      category: "graphic",
      tags: ["Digital Art", "Adobe Photoshop"],
      github: null,
      liveDemo: null,
      gallery: [
        {
          id: 'g1',
          image: "/Canoy.png",
          caption: "Image"
        }
      ],
      detailedDescription: "This brand identity project was created for a fictional eco-friendly startup. The design process involved market research, competitor analysis, and multiple iterations of sketches and digital designs. The final deliverables included a primary logo, secondary marks, a comprehensive color palette, typography guidelines, and mockups showing real-world applications."
    },
  ];

  const categoryData = [
    {
      id: 'all',
      name: 'All Projects',
      count: projects.length,
      color: '#243c4c',
    },
    {
      id: 'web',
      name: 'Web Apps',
      count: projects.filter(p => p.category === 'web').length,
      color: '#3B82F6',
    },
    {
      id: 'api',
      name: 'API Projects',
      count: projects.filter(p => p.category === 'api').length,
      color: '#10B981',
    },
    {
      id: 'frontend',
      name: 'Frontend',
      count: projects.filter(p => p.category === 'frontend').length,
      color: '#F59E0B',
    },
    {
      id: 'graphic',
      name: 'Graphic Design',
      count: projects.filter(p => p.category === 'graphic').length,
      color: '#EC4899',
    }
  ];

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    class Particle {
      constructor() {
        this.reset();
      }
      
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        
        this.size = Math.random() * 15 + 5;
        
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        
        const colors = [
          '#FFB6C1', 
          '#ADD8E6', 
          '#E6E6FA', 
          '#FFFACD', 
          '#E0FFFF', 
          '#D8BFD8'  
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        this.shapes = ['circle', 'heart', 'star'];
        this.shape = this.shapes[Math.floor(Math.random() * this.shapes.length)];
        
        this.isEmoji = Math.random() > 0.7;
        const emojis = ['✨', '💫', '🌟', '💕', '🌸', '🌈', '🍭', '🌺'];
        this.emoji = emojis[Math.floor(Math.random() * emojis.length)];
        
        this.opacity = Math.random() * 0.5 + 0.3;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
        
        if (this.x < -50 || this.x > canvas.width + 50 ||
            this.y < -50 || this.y > canvas.height + 50) {
          this.reset();
        }
      }
      
      draw() {
        ctx.globalAlpha = this.opacity;
        
        if (this.isEmoji) {
          ctx.font = `${this.size * 2}px Arial`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(this.emoji, this.x, this.y);
        } else {
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
    
    const particles = [];
    const particleCount = 100; 
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    function animate() {
      ctx.fillStyle = 'rgba(239, 238, 234, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    }
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  useEffect(() => {
    setIsAnimating(true);
    
    setTimeout(() => {
      const filtered = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);
      
      setFilteredProjects(filtered);
      setIsAnimating(false);
    }, 300);
  }, [activeCategory]);

  useEffect(() => {
    setFilteredProjects(projects);
  }, []);

  const handleCategoryChange = (category) => {
    if (category !== activeCategory) {
      setActiveCategory(category);
    }
  };

  return (
    <div className="page-container">
      <Navbar />
      
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
          opacity: 1
        }}
      />
      
      <div className="page-content" style={{ position: 'relative', zIndex: 1 }}>
        <div className="page-header" style={{ marginTop: '-30px', marginBottom: '30px', paddingTop: '0' }}>
          <h1 className="page-title" style={{ marginTop: '30px',color:'4ecdc4'}}>Featured Projects</h1>
          <p className="page-subtitle" style={{ marginTop: '5px', marginBottom: '25px' }}>
            A collection of my work showcasing my skills and experience in web development and design.
          </p>
        </div>
        
        <div className="category-filter-section">
          <div className="category-tabs">
            {categoryData.map(category => (
              <button
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
                style={{'--category-color': category.color}}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
                <span className="category-count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="current-category">
          <h2>
            {categoryData.find(c => c.id === activeCategory)?.icon} {' '}
            {categoryData.find(c => c.id === activeCategory)?.name}
          </h2>
          <span className="cert-count">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          </span>
        </div>
        
        <div className={`projects-grid ${isAnimating ? 'fade-out' : 'fade-in'}`}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <div
                className="project-card"
                key={project.id}
                style={{ cursor: project.category === 'graphic' ? 'default' : 'default' }}
              >
                <div className="project-image">
                  {project.category === 'graphic' ? (
                    <>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="clickable-image"
                        onClick={() => openImageModal(project.image)}
                        style={{ cursor: 'zoom-in' }}
                      />
                      <div className="project-overlay">
                        <div className="overlay-buttons">
                          {project.gallery && project.gallery.map((item) => (
                            <button
                              key={item.id}
                              className="icon-btn"
                              onClick={(e) => {
                                e.stopPropagation();
                                openImageModal(item.image);
                              }}
                              title={`View ${item.caption}`}
                              aria-label={`View ${item.caption}`}
                              style={{
                                backgroundColor: 'rgba(236, 72, 153, 0.8)', 
                                margin: '5px',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '0',
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                transition: 'all 0.3s ease'
                              }}
                            >
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="white" 
                                width="20px" 
                                height="20px"
                              >
                                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                              </svg>
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <img src={project.image} alt={project.title} />
                      <div className="project-overlay">
                        <div className="overlay-buttons">
                          {project.liveDemo && (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="view-project-btn"
                            >
                              Live Demo
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="view-project-btn github-btn"
                            >
                              GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                  <div className="project-category" style={{
                    backgroundColor: categoryData.find(c => c.id === project.category)?.color || '#243c4c'
                  }}>
                    {categoryData.find(c => c.id === project.category)?.icon} {' '}
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span className="project-tag" key={index}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No projects found in this category.</p>
              <button
                className="reset-filter-btn"
                onClick={() => setActiveCategory('all')}
              >
                Show All Projects
              </button>
            </div>
          )}
        </div>
        
        {showModal && selectedImage && (
          <div className="image-modal" onClick={closeImageModal}>
            <div className="modal-content">
              <button className="close-modal" onClick={closeImageModal}>×</button>
              <img src={selectedImage} alt="Project Preview" className="modal-image" />
            </div>
          </div>
        )}
        
        <div className="projects-cta" style={{
          textAlign: 'center',
          marginTop: '50px',
          padding: '30px',
          background: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '16px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ color: '#243c4c', marginBottom: '15px', fontSize: '1.5rem' }}>Want to see more of my work?</h3>
          <p style={{ color: '#4a5963', marginBottom: '20px' }}>
            Check out my GitHub profile for additional projects and contributions!
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/Kweennn"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(45deg, #243c4c, #3B82F6)',
                color: 'white',
                padding: '12px 25px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'inline-block',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              Visit My GitHub
            </a>
    
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .image-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        
        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .modal-image {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 4px;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
        }
        
        .close-modal {
          position: absolute;
          top: -40px;
          right: 0;
          background-color: transparent;
          color: white;
          border: none;
          font-size: 30px;
          cursor: pointer;
          z-index: 1001;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.3s ease;
        }
        
        .close-modal:hover {
          transform: rotate(90deg);
        }
        
        .clickable-image {
          cursor: zoom-in;
          transition: transform 0.3s ease;
        }
        
        .clickable-image:hover {
          transform: scale(1.03);
        }
        
        /* Add a subtle indicator that the image is clickable */
        .project-card:hover .clickable-image::after {
          content: "🔍";
          position: absolute;
          bottom: 10px;
          right: 10px;
          background-color: rgba(255, 255, 255, 0.8);
          color: #243c4c;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
        }
        
        .icon-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}

export default Projects;
