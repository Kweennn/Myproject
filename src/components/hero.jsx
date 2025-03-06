import React, { useState } from 'react';
import me from '../assets/me.png';
import '../App.css';
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
      <div className="hero-container">
        <header className="hero-header">
          <div className="hero-logo">Queen</div>

          {/* Hamburger Icon */}
          <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
            ☰
          </button>

          {/* Navigation Menu */}
          <nav className={`nav-menu ${menuOpen ? "menu-active" : ""}`}>
            <ul className="hero-nav-links">
              <li onClick={() => { navigate("/"); toggleMenu(); }}>Home</li>
              <li onClick={() => { navigate("/about"); toggleMenu(); }}>About Me</li>
              <li onClick={() => { navigate("/projects"); toggleMenu(); }}>Projects</li>
              <li onClick={() => { navigate("/cv"); toggleMenu(); }}>CV</li>
              <li onClick={() => { navigate("/contact"); toggleMenu(); }}>Contact</li>
            </ul>
          </nav>
        </header>
  
        <div className="hero-content">
          <div className="hero-text">
            <h1>Queenie Jane Canoy</h1>
            <h2>UI / UX Designer</h2><br/>
            <button className="hero-cv-button" onClick={() => navigate('/portfolio')}>
              View Work
            </button>
          </div>

          <div className="hero-image-container">
            <img src={me} alt="Hero" className="hero-image" />
          </div>
        </div>
      </div>
    );
}

export default Hero;
