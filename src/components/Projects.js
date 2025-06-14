import React, { useEffect, useState } from 'react';
import './Projects.css';

const Projects = () => {
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

    const element = document.querySelector('.projects');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const projects = [
    {
      title: 'Real-Time Chatting Platform',
      description: 'Engineered a secure and scalable messaging app using React.js, Node.js and MongoDB. Integrated JWT-based authentication and WebSockets for real-time communication. Optimized UX with responsive design and caching to handle 100+ concurrent users.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'WebSockets', 'JWT'],
      icon: 'fas fa-comments'
    },
    {
      title: 'Full-Stack Job Portal Web App',
      description: 'Built an interactive job portal using React.js, Spring Boot, MongoDB, and Redux. Features include job listings, application workflows, admin panel, and mobile-responsive UI with Tailwind CSS and Mantine. Designed scalable RESTful APIs to manage user and job data.',
      technologies: ['React.js', 'Spring Boot', 'MongoDB', 'Redux', 'Tailwind CSS', 'Mantine'],
      icon: 'fas fa-briefcase'
    },
    {
      title: 'Automated Attendance Management System',
      description: 'Developed a web dashboard using PHP and MySQL for tracking and analyzing student attendance. Integrated CSV exports, visual analytics, and secure login for ease of academic use.',
      technologies: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
      icon: 'fas fa-clipboard-check'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">
          <span className="gradient-text">Projects</span>
        </h2>
        <div className={`projects-grid ${isVisible ? 'visible' : ''}`}>
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-icon">
                <i className={project.icon}></i>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      className="tech-tag"
                      key={techIndex}
                      style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.1)}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-dots"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;