import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaDownload } from 'react-icons/fa';
import me from '../assets/me.png'; 
import '../App.css';

function AboutMe() {
    const navigate = useNavigate();

    return (
        <div className="about-page">
            {/* Navbar */}
            <header className="about-header">
                <div className="about-logo">Queen</div>
                <nav>
                    <ul className="about-nav-links">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/about")}>About Me</li>
                        <li>Projects</li>
                        <li>CV</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <div className="about-container">
                {/* Left Side: Image */}
                <div className="about-image">
                    <img src={me} alt="Queenie Jane Canoy" />
                </div>

                {/* Right Side: Content */}
                <div className="about-content">
                    <h1 className="about-title"><span className="highlight">Queenie Jane Canoy</span></h1>
                    <p className="about-subtitle">UI/UX Designer & Frontend Developer</p>
                    <p className="about-description">
                    Passionate about crafting intuitive and beautiful digital experiences, I specialize in creating user-friendly designs and sleek frontend interfaces. As a student, I am always exploring new design trends and technologies to enhance my skills. I focus on blending creativity with functionality to solve problems and deliver seamless, accessible user experiences. Eager to learn and grow, I’m particularly interested in front-end development with frameworks like React.
                    </p>

                    {/* Skills Section */}
                    <div className="about-section">
                        <h3>Skills & Tools</h3>
                        <ul className="skills-list">
                            <li>UI/UX Design</li>
                            <li>Adobe</li>
                            <li>HTML, CSS</li>
                            <li>Bootstrap</li>
                            <li>Design Thinking</li>
                        </ul>
                    </div>

                    {/* Experience & Education */}
                    <div className="about-section">
                        <h3>Certification</h3>
                        <div className="about-cards">
                            <div className="about-card">
                                <h4>Python for beginners</h4>
                                <p>Code Red Online Course</p>
                            </div>
                            <div className="about-card">
                                <h4>Build your Own Netapp Storage Lab </h4>
                                <p>Code Red Online Course</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
