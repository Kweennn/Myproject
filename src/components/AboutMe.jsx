import React from 'react';
import Navbar from './Navbar';
import '../App.css';

function AboutMe() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="about-content">
        <div className="about-title">
          <h2>About Me</h2>
        </div>

        <div className="profile-card">
          <div className="profile-image">
            <img src="me.png" alt="Profile" />
            <div className="hover-hint">HOVER TO SEE MORE</div>
          </div>

          <div className="profile-overlay">
            <div className="profile-text">
              <p>
                I specialize in creating responsive, user-friendly websites and applications that combine creative design with efficient functionality.
                With a background in Information Technology and a love for continuous learning, I enjoy tackling complex problems and turning ideas into reality through code. My journey in web development started during my university years, and I've been honing my skills ever since.
                I can code for hours without realizing I haven’t eaten until my stomach starts sending error messages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
