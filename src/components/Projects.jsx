import React, { useState } from 'react';
import Navbar from './Navbar';
import '../App.css';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "To do List",
      description: "A simple and interactive task management app that allows users to add, edit, complete, and delete tasks.",
      image: "/todo.png",
      category: "web",
      tags: ["React", "JavaScript", "CSS", "Local Storage",],
      github: "https://github.com/Kweennn/todo",
      liveDemo: "https://todoqueen.netlify.app"
    },
    {
      id: 2,
      title: "Pokedex",
      description: "A responsive website that lets users search and view Pokémon details using the PokéAPI, complete with images and basic stats.",
      image: "/pokedex.png",
      category: "web",
      tags: ["HTML", "CSS", "React", "PokéAPI"],
      github: "https://github.com/Kweennn/pokedex",
      liveDemo: "https://pokedexproj.netlify.app"
    },
    {
      id: 3,
      title: "Petpal",
      description: "A responsive website for pet adoption, fostering, and boarding with easy browsing, and shelter connection.",
      image: "/Petpal.png",
      category: "web",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/Kweennn/petpal",
      liveDemo: "https://ttechmart.online/",
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="page-container">
      <Navbar />
      <div className="page-content">
        <div className="page-header">
          <h1 className="page-title">Featured Projects</h1>
          <p className="page-subtitle">
            A collection of my work showcasing my skills and experience in web development.
          </p>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-buttons">
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="view-project-btn github-btn">
                        GitHub
                      </a>
                    )}
                  </div>
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
          ))}
        </div>

       
      </div>
    </div>
  );
}

export default Projects;
