import React from 'react';
import me from '../assets/me.png'; 
import '../App.css';
import { useNavigate } from "react-router-dom";

function AboutMe() {
    const navigate = useNavigate();

    return (
        <div className="hero-container"> 
            <header className="hero-header">
                <div className="hero-logo">Queen</div>
                <nav>
                    <ul className="hero-nav-links">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li>About Me</li>
                        <li>Projects</li>
                        <li>CV</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>

            <div className="hero-content">
                <div className="hero-text">
                    <h2>About Me</h2>
                    <p>
                        Hello! I'm <strong>Queenie Jane Canoy</strong>, a passionate UI/UX Designer dedicated to creating seamless, user-friendly digital experiences.  
                        With a keen eye for detail and a love for innovative design, I strive to craft interfaces that are both functional and visually appealing.
                    </p>

                    <h3>📚 Education</h3>
                    <p>Bachelor’s Degree in Information Technology - Western Mindanao State University</p>
                </div>

                <div className="hero-image-container">
                    <img src={me} alt="Queenie Jane Canoy" className="hero-image" />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
