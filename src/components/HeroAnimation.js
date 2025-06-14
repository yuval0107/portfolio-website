import React from 'react';
import './HeroAnimation.css';

const HeroAnimation = () => {
  return (
    <div className="hero-animation">
      {/* Floating Tech Elements */}
      <div className="tech-elements">
        <div className="tech-element code-bracket">{'</>'}</div>
        <div className="tech-element curly-brace">{'{'}</div>
        <div className="tech-element parenthesis">(</div>
        <div className="tech-element semicolon">;</div>
        <div className="tech-element arrow">→</div>
      </div>

      {/* Animated Circles */}
      <div className="animated-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
      </div>

      {/* Tech Grid */}
      <div className="tech-grid">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="grid-cell"></div>
        ))}
      </div>

      {/* Floating Icons */}
      <div className="floating-icons">
        <div className="icon-container">
          <i className="fab fa-react"></i>
        </div>
        <div className="icon-container">
          <i className="fab fa-node-js"></i>
        </div>
        <div className="icon-container">
          <i className="fab fa-python"></i>
        </div>
        <div className="icon-container">
          <i className="fab fa-aws"></i>
        </div>
        {/* New Tech Icons */}
        <div className="icon-container">
          <i className="devicon-cplusplus-plain"></i>
        </div>
        <div className="icon-container">
          <i className="devicon-c-plain"></i>
        </div>
        <div className="icon-container">
          <i className="devicon-mysql-plain"></i>
        </div>
        <div className="icon-container">
          <i className="fas fa-microchip"></i>
        </div>
      </div>

      {/* Animated Lines */}
      <div className="animated-lines">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="glowing-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
    </div>
  );
};

export default HeroAnimation; 