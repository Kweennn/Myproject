import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

function Hero() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ['Web Developer', 'UI/UX Designer'];

  useEffect(() => {
    const current = roles[index];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === current.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((index + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, roles]);

  return (
    <div className="hero-container">
      <Navbar />
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Queenie</h1>

          <div className="typing-container">
            <span>{text}</span><span className="cursor">|</span>
          </div>

          <h3>
            I create user-friendly websites with innovative designs
            and<br /> efficient code emphasizing seamless interfaces.
          </h3>

          <button className="hero-cv-button" onClick={() => navigate('/Projects')}>
            View Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
