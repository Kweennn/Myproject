import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Hero from './components/hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import BlogPost from './components/Blog';
import BlogDay from './components/BlogDay';
import Contact from './components/Contact';
import Certificate from './components/Certificate';
import './App.css';

function App() {
  return (
    // Remove the Router/BrowserRouter wrapper
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<BlogPost />} />
      <Route path="/day/:dayId" element={<BlogDay />} />
      <Route path="/certificate" element={<Certificate />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
