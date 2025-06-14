import React, { useEffect, useState } from 'react';
import './Skills.css';

const Skills = () => {
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

    const element = document.querySelector('.skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "fas fa-code",
      skills: [
        { name: "C++", level: 95, icon: "devicon-cplusplus-plain" },
        { name: "C", level: 90, icon: "devicon-c-plain" },
        { name: "Java", level: 75, icon: "devicon-java-plain" },
        { name: "Python", level: 70, icon: "devicon-python-plain" },
        { name: "JavaScript", level: 65, icon: "devicon-javascript-plain" }
      ]
    },
    {
      title: "Web Technologies",
      icon: "fas fa-globe",
      skills: [
        { name: "HTML5", level: 85, icon: "devicon-html5-plain" },
        { name: "CSS3", level: 80, icon: "devicon-css3-plain" },
        { name: "React", level: 75, icon: "devicon-react-original" },
        { name: "Node.js", level: 70, icon: "devicon-nodejs-plain" },
        { name: "Express.js", level: 65, icon: "devicon-express-original" }
      ]
    },
    {
      title: "Databases",
      icon: "fas fa-database",
      skills: [
        { name: "MySQL", level: 85, icon: "devicon-mysql-plain" },
        { name: "MongoDB", level: 75, icon: "devicon-mongodb-plain" },
        { name: "PostgreSQL", level: 70, icon: "devicon-postgresql-plain" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "fas fa-tools",
      skills: [
        { name: "Git", level: 70, icon: "devicon-git-plain" },
        { name: "AWS", level: 85, icon: "devicon-amazonwebservices-original" },
        { name: "Linux", level: 60, icon: "devicon-linux-plain" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">
          <span className="gradient-text">Technical Skills</span>
        </h2>

        <div className={`skills-grid ${isVisible ? 'visible' : ''}`}>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-category"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="category-header">
                <i className={category.icon}></i>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-item"
                    style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="skill-info">
                      <i className={skill.icon}></i>
                      <span>{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      >
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
          <div className="decoration-dots"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 