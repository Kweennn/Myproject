import React from 'react';
import me from '../assets/me.png';
import '../App.css';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

function Hero() {
    const navigate = useNavigate();

    return (
      <div className="hero-container">
        <Navbar />
  
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, It's Me</h1>
            <h1>Queenie Canoy</h1><br/>
            <h2>I'm a Web Developer</h2><br/>
            <h3>Developing easy-to-use websites with creative<br/>  design and smooth, efficient code.</h3><br/>
            <button className="hero-cv-button" onClick={() => navigate('/portfolio')}>
              Experience
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