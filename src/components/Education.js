import React, { useEffect, useState } from 'react';
import './Education.css';

const Education = () => {
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

    const element = document.querySelector('.education');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const educationData = [
    {
      degree: "Bachelor of Technology",
      major: "Computer Science and Engineering",
      institution: "Nirma University",
      location: "Ahmedabad, Gujarat",
      duration: "2022 - 2026",
      gpa: "8.2/10",
      highlights: [
        "Active member of the Coding Club",
        "Participated in various hackathons and coding competitions"
      ]
    }
  ];

  const coursework = [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "Machine Learning",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Cloud Computing",
    "Computer Architecture"
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2 className="section-title">
          <span className="gradient-text">Education</span>
        </h2>

        <div className={`education-timeline ${isVisible ? 'visible' : ''}`}>
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-card-content">
                <div className="education-header">
                  <h3 className="degree">{edu.degree}</h3>
                  <span className="gpa-badge">{edu.gpa}</span>
                </div>

                <div className="education-details">
                  <div className="institution">
                    <i className="fas fa-university"></i>
                    <span>{edu.institution}</span>
                  </div>
                  <div className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{edu.location}</span>
                  </div>
                  <div className="duration">
                    <i className="fas fa-calendar-alt"></i>
                    <span>{edu.duration}</span>
                  </div>
                </div>

                <div className="major">
                  <i className="fas fa-graduation-cap"></i>
                  <span>{edu.major}</span>
                </div>

                <div className="coursework-section">
                  <h4 className="coursework-title">
                    <i className="fas fa-book"></i>
                    Relevant Coursework
                  </h4>
                  <div className="coursework-grid">
                    {coursework.map((course, idx) => (
                      <div key={idx} className="course-item">
                        <i className="fas fa-check-circle"></i>
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div className="highlights">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="highlight-item">
                      <i className="fas fa-star"></i>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>

        <div className="education-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
          <div className="decoration-dots"></div>
        </div>
      </div>
    </section>
  );
};

export default Education; 