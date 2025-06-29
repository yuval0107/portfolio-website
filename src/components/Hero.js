import React, { useEffect, useState } from 'react';
import './Hero.css';
import HeroAnimation from './HeroAnimation';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const roles = [
    "Software Developer",
    "Problem Solver",
    "Full Stack Developer",
    "Competitive Programmer"
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <HeroAnimation />
      </div>

      <div className="hero-container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-greeting">
            <span className="wave">👋</span> Hi, I'm
          </div>
          <h1 className="hero-name">
            <span className="gradient-text">YUVAL AMIT BHAYANI</span>
          </h1>
          <div className="hero-role">
            <span className="role-text">I'm a </span>
            <div className="role-animation">
              {roles.map((role, index) => (
                <span key={index} className="role-item">{role}</span>
              ))}
            </div>
          </div>
          <div className="hero-description">
            <p>Computer Science Student at Nirma University</p>
            <p>Passionate about crafting impactful software and solving complex problems through clean code and logical thinking.</p>
          </div>
          <div className="hero-contact">
            <a href="tel:+919429579234" className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+91 9429579234</span>
            </a>
            <a href="mailto:yuvalbhayani.55@gmail.com" className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>yuvalbhayani.55@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/yuval-bhayani-b34b05265/" target="_blank" rel="noopener noreferrer" className="contact-item">
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <a href="https://leetcode.com/u/yuvall_b/" target="_blank" rel="noopener noreferrer" className="stat-link">
                <span className="stat-number">2167</span>
                <span className="stat-label">LeetCode Rating</span>
                <span className="stat-username">@yuvall_b</span>
              </a>
            </div>
            <div className="stat-item">
              <a href="https://www.codechef.com/users/yuvall_b" target="_blank" rel="noopener noreferrer" className="stat-link">
                <span className="stat-number">1851</span>
                <span className="stat-label">CodeChef Rating</span>
                <span className="stat-username">@yuvall_b</span>
              </a>
            </div>
            <div className="stat-item">
              <a href="https://codeforces.com/profile/yuval_b" target="_blank" rel="noopener noreferrer" className="stat-link">
                <span className="stat-number">1601</span>
                <span className="stat-label">Codeforces Rating</span>
                <span className="stat-username">@yuval_b</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;