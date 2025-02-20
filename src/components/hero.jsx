import React from 'react';
import me from '../assets/me.png'
import '../App.css'

function Hero() {
    return (
      <div className="hero-container">
        <header className="hero-header">
          <div className="hero-logo">Queen</div>
          <nav>
            <ul className="hero-nav-links">
              <li>About Me</li>
              <li>Projects</li>
              <li>CV</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
  
        <div className="hero-content">
        <div className="hero-text">
          <h1>Queenie Jane Canoy</h1>
          <h2>UI / UX Designer</h2><br/>
          <p> I craft seamless, user-focused interfaces that deliver exceptional digital experiences and lasting impressions.</p>
          <button className="hero-cv-button">Learn More</button>
        </div>

        <div className="hero-image-container">
          <img src={me} alt="Hero" className="hero-image" />
        </div>
      </div>
      </div>
    );
  }
  
  export default Hero;

