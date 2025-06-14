import React, { useEffect, useState } from 'react';
import './Achievements.css';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.achievements');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const achievements = [
    {
      title: 'Google India Student Launchpad 2025',
      description: "Selected for Google's premier upskilling program based on outstanding aptitude and DSA performance.",
      icon: 'fab fa-google',
      color: '#4285F4'
    },
    {
      title: 'Research Publication',
      description: 'First-author paper on ML-based cybersecurity for autonomous vehicles published in IEEE Xplore.',
      icon: 'fas fa-microscope',
      color: '#FF6B6B'
    },
    {
      title: 'Amazon ML Summer School Scholar 2024',
      description: "Ranked among top 0.5% in India for selection into Amazon's advanced ML program with practical labs and mentorship.",
      icon: 'fab fa-amazon',
      color: '#FF9900'
    },
    {
      title: 'Competitive Programming',
      icon: 'fas fa-code',
      color: '#4CAF50',
      achievements: [
        { text: 'LeetCode – Guardian Rank (Max Rating: 2167)', icon: 'fas fa-trophy' },
        { text: 'CodeChef – 4-Star Coder (Max Rating: 1848)', icon: 'fas fa-star' },
        { text: 'Codeforces – Specialist (Max Rating: 1596)', icon: 'fas fa-medal' }
      ]
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="achievements-container">
        <h2 className="section-title">
          <span className="gradient-text">Achievements & Honors</span>
        </h2>
        <div className={`achievements-grid ${isVisible ? 'visible' : ''}`}>
          {achievements.map((achievement, index) => (
            <div
              className="achievement-card"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="achievement-icon" style={{ backgroundColor: achievement.color }}>
                <i className={achievement.icon}></i>
              </div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                {achievement.description ? (
                  <p>{achievement.description}</p>
                ) : (
                  <ul className="achievement-list">
                    {achievement.achievements.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        style={{ animationDelay: `${(index * 0.2) + (itemIndex * 0.1)}s` }}
                      >
                        <i className={item.icon}></i>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="achievements-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-dots"></div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;