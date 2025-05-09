import '../BlogDay.css';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Rizal_Monument from '../assets/Rizal_Monument.jpg'; 
import Fort_Santiago from '../assets/Fort_Santiago.jpg';
import Moa from '../assets/Moa.jpg';
import national from '../assets/national.jpg';
import quezon from '../assets/quezon.jpg';
import national_museo from '../assets/national_museo.jpg';
import hytecc from '../assets/hytecc.jpg';
import BSP from '../assets/BSP.jpg';
import hytec from '../assets/hytec.jpg';
import lrt2 from '../assets/lrt2.jpg';
import mmda2 from '../assets/mmda2.jpg';
import lrt3 from '../assets/lrt3.jpg';
import center from '../assets/center.jpg';
import law from '../assets/law.jpg';
import sea from '../assets/sea.jpg';
import farm from '../assets/farm.jpg';
import bell from '../assets/bell.jpg';
import pma from '../assets/pma.jpg';
import smm from '../assets/smm.jpg';
import sm from '../assets/sm.jpg';
import ham from '../assets/ham.jpg';

function BlogPost() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeDay, setActiveDay] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const timelineRef = useRef(null);
  const cardsRef = useRef(null);
  
  const cardWidth = 340;
  const visibleCards = window.innerWidth >= 1200 ? 3 : 
                      window.innerWidth >= 768 ? 2 : 1;

  const blogPosts = [
    {
      id: 1,
      images: [Rizal_Monument, Fort_Santiago, Moa],
      title: "Day 1",
      date: "April 07, 2025",
      excerpt: "A fun-filled day tour in Manila from historic Intramuros, Rizal Park to Fort Santiago and the Mall of Asia.",
      link: "/day/1", 
    },
    {
      id: 2,
      images: [center, law, sea],
      title: "Day 2",
      date: "April 08, 2025",
      excerpt: "An educational tour in Subic featuring SBMA Law Enforcement, Seaport Departments, and Convention Center.",
      link: "/day/2", 
    },
    {
      id: 3,
      images: [national, quezon, national_museo],
      title: "Day 3",
      date: "April 09, 2025",
      excerpt: "A cultural and historical tour featuring Museo ni Manuel Quezon and the National Museum of Natural History.",
      link: "/day/3", 
    },
    {
      id: 4,
      images: [hytecc, BSP, hytec],
      title: "Day 4",
      date: "April 10, 2025",
      excerpt: "Explored industry operations at Bangko Sentral ng Pilipinas and Hytec Power Inc., ending the day with a visit to Trinoma Mall.",
      link: "/day/4", 
    },
    {
      id: 5,
      images: [lrt2, mmda2, lrt3],
      title: "Day 5",
      date: "April 11, 2025",
      excerpt: "Field visits in Metro Manila, from the LRT Line 2 to the Traffic Engineering Center, exploring the city's transport systems.",
      link: "/day/5", 
    },
    {
      id: 6,
      images: [farm, bell, pma],
      title: "Day 6",
      date: "April 12, 2025",
      excerpt: "Baguio tour featuring Strawberry Farm, Bell Church, Mines View, The Mansion, and Philippine Military Academy.",
      link: "/day/6", 
    },
    {
      id: 7,
      images: [smm, ham, sm],
      title: "Day 7",
      date: "April 13, 2025",
      excerpt:"Free hours pleasantly spent exploring Baguio, SM Baguio, and visiting Burnham Park.",
      link: "/day/7", 
    },
  ];

  const [imageIndices, setImageIndices] = useState(Array(blogPosts.length).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices(prevIndices =>
        prevIndices.map((index, i) =>
          (index + 1) % blogPosts[i].images.length
        )
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, [blogPosts]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNext = () => {
    const maxIndex = blogPosts.length - visibleCards;
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDayClick = (dayId) => {
    setActiveDay(dayId);
    cardsRef.current?.scrollIntoView({ behavior: 'smooth' });
    
    // Set the current index to show the selected day
    const newIndex = Math.min(
      Math.max(0, dayId - 1 - Math.floor(visibleCards / 2)), 
      blogPosts.length - visibleCards
    );
    setCurrentIndex(newIndex);
  };

  return (
    <div className="blog-page">
      <Navbar />
      
      {/* Hero Section */}
      <div className="blog-hero">
  <img 
    src="/national.jpg"
    alt="IVET Tour Group Photo" 
    className="blog-hero-image" 
  />
  
  <div className="blog-header" style={{ marginTop: '50px', paddingTop: '30px' }}>
  <h1 className="blog-title">Industry Visit Education Tour (IVET)</h1>
  <p className="blog-description" style={{ color: "#ffffff" }}>
  Sharing my journey and experiences from this educational trip, where WMSU IT students
  explore real-world industry practices and learn valuable insights. Enjoy reading!
</p>

</div>


  <div className="scroll-indicator" onClick={scrollToTimeline}>
    <span>Explore the journey</span>
    <div className="scroll-arrow">↓</div>
  </div>
</div>

      
      {/* Timeline Section */}
      <div className="tour-timeline" 
  ref={timelineRef}
  style={{
    backgroundColor: "#58707e",
    padding: '60px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    margin: '40px 20px',
    marginTop: '-20px',
  }}
>
  <div className="timeline-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
    <h2 style={{ color: "#d89292 ", marginBottom: '15px' }}>Our 7-Day Journey</h2>
    <p style={{ color: "#4ecdc4", }}>
      Follow our educational adventure day by day
      and discover the exciting places we visited.
    </p>
  </div>

        
  <div className="timeline-track" style={{ position: 'relative' }}>
  <div className="timeline-line" style={{ 
    backgroundColor: "#3b82f6",
    height: '4px',
    position: 'absolute',
    top: '50%',
    left: '0',
    right: '0',
    transform: 'translateY(-50%)',
    zIndex: 1
  }}></div>
  
  {blogPosts.map(post => (
    <div
      key={post.id}
      className={`timeline-day ${activeDay === post.id ? 'active' : ''}`}
      onClick={() => handleDayClick(post.id)}
      style={{
        position: 'relative',
        display: 'inline-block',
        margin: '0 20px',
        cursor: 'pointer',
        zIndex: 2,
        transition: 'transform 0.3s ease'
      }}
    >
      <div className="timeline-marker" style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: activeDay === post.id ? "#4ecdc4" : "#d89292",
        color: '#faf3f3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        boxShadow: activeDay === post.id ? 
          '0 0 0 4px rgba(78, 205, 196, 0.3), 0 4px 10px rgba(0, 0, 0, 0.2)' : 
          '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease'
      }}>{post.id}</div>
      <div className="timeline-date" style={{
        marginTop: '10px',
        fontSize: '0.85rem',
        color: activeDay === post.id ? "#" : "#d89292",
        fontWeight: activeDay === post.id ? 'bold' : 'normal'
      }}>{post.date}</div>
    </div>
  ))}
</div>

      </div>
      
      {/* Blog Cards Section */}
      <div className="blog-slider-container" 
  ref={cardsRef}
  style={{
    backgroundColor: "#60a5fa",
    padding: '40px 20px',
    marginTop: '-50px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
  }}>
        <button 
          className="back-btn" 
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous cards"
          style={{
            marginTop: "-100px",

            backgroundColor: "#243c4c",
            color: "#faf3f3",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          ❮
        </button>
        
        <div className="blog-content-wrapper">
          <div
            className="blog-content"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
              transition: "transform 0.5s ease"
            }}
          >
            {blogPosts.map((post) => (
              <div 
                className={`blog-card ${activeDay === post.id ? 'active' : ''}`} 
                key={post.id}
                onClick={() => navigate(post.link)}
              >
                <div className="image-slider">
                  <div
                    className="slider-track"
                    style={{
                      transform: `translateX(-${imageIndices[post.id - 1] * 100}%)`,
                      transition: "transform 0.5s ease",
                    }}
                  >
                    {post.images.map((img, index) => (
                      <img key={index} src={img} alt={`${post.title} - ${index}`} className="slider-image" />
                    ))}
                  </div>
                  
                  <div className="slider-dots">
                    {post.images.map((_, index) => (
                      <div 
                        key={index} 
                        className={`slider-dot ${index === imageIndices[post.id - 1] ? 'active' : ''}`}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="blog-card-content" style={{ 
  backgroundColor: "#d89292",
}}>
  <span className="card-date" style={{ color: "#ffffff" }}>{post.date}</span>
  <h3 className="card-title" style={{ color: "#d89292" }}>{post.title}</h3>
  <p className="card-excerpt" style={{ color: "#ffffff  " }}>{post.excerpt}</p>
  <div className="card-learn-more" style={{ 
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}}>
  <span className="learn-more-link" style={{ color: "#4ecdc4" }}>LEARN MORE</span>
  <button className="arrow-btn" aria-label="View details" style={{
    backgroundColor: "#4ecdc4",
    color: "#faf3f3"
  }}>❯</button>
</div>

</div>

              </div>
            ))}
          </div>
        </div>
        
        <button
  className="next-btn"
  onClick={handleNext}
  disabled={currentIndex >= blogPosts.length - visibleCards}
  aria-label="Next cards"
  style={{
    backgroundColor: "#243c4c",
    color: "#faf3f3",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}
>
  ❯
</button>

      </div>
      
      {/* Footer */}
      <div className="blog-footer" style={{
  backgroundColor: "#58707e",
  color: "#faf3f3",
  padding: "30px 20px",
  textAlign: "center"
}}>
  <p style={{ 
    color: "#faf3f3", 
    margin: "0 0 15px 0" 
  }}> © 2025 Queenie Canoy. All rights reserved.</p>
  
  <div className="footer-nav" style={{
    display: "flex",
    justifyContent: "center",
    gap: "30px"
  }}>
    <span 
      onClick={() => navigate("/")}
      style={{
        color: "#faf3f3",
        cursor: "pointer",
        transition: "color 0.3s ease"
      }}
      onMouseOver={(e) => e.target.style.color = "#4ecdc4"}
      onMouseOut={(e) => e.target.style.color = "#faf3f3"}
    >Home</span>
    
    <span 
      onClick={() => navigate("/about")}
      style={{
        color: "#faf3f3",
        cursor: "pointer",
        transition: "color 0.3s ease"
      }}
      onMouseOver={(e) => e.target.style.color = "#4ecdc4"}
      onMouseOut={(e) => e.target.style.color = "#faf3f3"}
    >About</span>
    
    <span 
      onClick={() => navigate("/contact")}
      style={{
        color: "#faf3f3",
        cursor: "pointer",
        transition: "color 0.3s ease"
      }}
      onMouseOver={(e) => e.target.style.color = "#4ecdc4"}
      onMouseOut={(e) => e.target.style.color = "#faf3f3"}
    >Contact</span>
  </div>
</div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button 
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default BlogPost;
