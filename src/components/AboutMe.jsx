import React from 'react';
import Navbar from './Navbar';
import '../App.css';

function AboutMe() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="page-content">
        <div className="page-header">
          <h1 className="page-title">About Me</h1>
  
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Queenie Canoy, a passionate web developer based in the Philippines. 
              I specialize in creating responsive, user-friendly websites and applications 
              that combine creative design with efficient functionality.
            </p>
            <p>
              With a background in Information Technology and a love for continuous learning, 
              I enjoy tackling complex problems and turning ideas into reality through code. 
              My journey in web development started during my university years, and I've been 
              honing my skills ever since.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutMe;
