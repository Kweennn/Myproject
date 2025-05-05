import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import '../App.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`cute-navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <span className="logo-text">QJC</span>
          <span className="logo-dot"></span>
        </div>

        {/* Hamburger Icon */}
        <button 
          className="navbar-hamburger" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`navbar-menu ${menuOpen ? "menu-active" : ""}`}>
          <ul className="navbar-links">
            <li 
              className={isActive("/") ? "active" : ""} 
              onClick={() => { navigate("/"); toggleMenu(); }}
            >
              <span className="nav-icon"></span>
              <span className="nav-text">Home</span>
            </li>
            <li 
              className={isActive("/about") ? "active" : ""} 
              onClick={() => { navigate("/about"); toggleMenu(); }}
            >
              <span className="nav-icon"></span>
              <span className="nav-text">About</span>
            </li>
            <li 
              className={isActive("/experience") ? "active" : ""} 
              onClick={() => { navigate("/experience"); toggleMenu(); }}
            >
              <span className="nav-icon"></span>
              <span className="nav-text">Experience</span>
            </li>
            <li 
              className={isActive("/projects") ? "active" : ""} 
              onClick={() => { navigate("/projects"); toggleMenu(); }}
            >
              <span className="nav-icon"></span>
              <span className="nav-text">Projects</span>
            </li>
            <li 
              className={isActive("/blog") ? "active" : ""} 
              onClick={() => { navigate("/blog"); toggleMenu(); }}
            >
              <span className="nav-icon"></span>
              <span className="nav-text">Blog</span>
            </li>
            <li 
              className={isActive("/contact") ? "active" : ""} 
              onClick={() => { navigate("/contact"); toggleMenu(); }}
            >
              <span className="nav-icon"></span>
              <span className="nav-text">Contact</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
