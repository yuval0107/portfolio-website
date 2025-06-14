import React, { useEffect, useState } from 'react';
import './Leadership.css';

const Leadership = () => {
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

    const element = document.querySelector('.leadership');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const leadershipRoles = [
    {
      title: 'Technical Director, CSI Nirma University',
      period: '2024 – Present',
      icon: 'fas fa-laptop-code',
      color: '#4CAF50',
      description: [
        'Organized and hosted regular fortnightly coding contests to foster consistent practice and engagement.',
        'Led and supported various technical and semi-technical events under CSI.',
        'Contributed to planning, coordination, and execution of events.',
        'Played a key role in community-building through workshops and peer learning initiatives.'
      ]
    },
    {
      title: 'Executive Committee Member, ACES Nirma University',
      period: '2023 – 2024',
      icon: 'fas fa-users',
      color: '#2196F3',
      description: [
        'Helped organize college-level technical events and coding competitions.',
        'Involved in end-to-end execution including event planning and logistics.',
        'Mentored fellow students in technical activities.'
      ]
    }
  ];

  return (
    <section id="leadership" className="leadership">
      <div className="leadership-container">
        <h2 className="section-title">
          <span className="gradient-text">Leadership & Involvement</span>
        </h2>
        <div className={`leadership-grid ${isVisible ? 'visible' : ''}`}>
          {leadershipRoles.map((role, index) => (
            <div
              className="leadership-card"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="leadership-header">
                <div className="leadership-icon" style={{ backgroundColor: role.color }}>
                  <i className={role.icon}></i>
                </div>
                <div className="leadership-title">
                  <h3>{role.title}</h3>
                  <span className="leadership-period">{role.period}</span>
                </div>
              </div>
              <ul className="leadership-list">
                {role.description.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    style={{ animationDelay: `${(index * 0.2) + (itemIndex * 0.1)}s` }}
                  >
                    <i className="fas fa-check-circle"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="leadership-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-dots"></div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;