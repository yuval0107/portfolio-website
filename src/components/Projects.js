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
      icon: 'fas fa-comments',
      demoLink: 'https://chat-app-g6ti.onrender.com/login',
      githubLink: 'https://github.com/yuval0107/chat-app'
    },
    {
      title: 'Full-stack EdTech Platform',
      description: 'A full-stack EdTech platform (MERN stack) enabling students to explore and purchase courses, and instructors to create and manage content with payment integration, secure auth, and cloud media handling.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Payment Integration', 'Cloud Media', 'JWT Auth'],
      icon: 'fas fa-graduation-cap',
      githubLink: 'https://github.com/yuval0107/Hey-Yu-Learn'
    },
    {
      title: 'Full-stack B2B SaaS Project Management System',
      description: 'A full-stack B2B SaaS project management tool with multi-workspace support, task collaboration, role-based access, Google OAuth, and analytics, built using MERN stack, TypeScript, Tailwind CSS, and Mongoose transactions.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'Mongoose', 'Google OAuth'],
      icon: 'fas fa-tasks',
      githubLink: 'https://github.com/yuval0107/HeyYu-Management-System'
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
                {(project.demoLink || project.githubLink) && (
                  <div className="project-links">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="demo-link"
                        style={{ animationDelay: `${(index * 0.2) + 0.3}s` }}
                      >
                        <i className="fas fa-external-link-alt"></i>
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                        style={{ animationDelay: `${(index * 0.2) + 0.4}s` }}
                      >
                        <i className="fab fa-github"></i>
                        GitHub
                      </a>
                    )}
                  </div>
                )}
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