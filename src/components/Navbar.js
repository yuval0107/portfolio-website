import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    if (path === '/Home') {
      return location.pathname === '/Home';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/Home">
            <span className="logo-text">YUVAL BHAYANI</span>
          </Link>
        </div>
        <button className="mobile-menu-button" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link
            to="/Home"
            className={isActive('/Home') ? 'active' : ''}
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/Education"
            className={isActive('/Education') ? 'active' : ''}
            onClick={toggleMobileMenu}
          >
            Education
          </Link>
          <Link
            to="/Skills"
            className={isActive('/Skills') ? 'active' : ''}
            onClick={toggleMobileMenu}

          >
            Skills
          </Link>
          <Link
            to="/Projects"
            className={isActive('/Projects') ? 'active' : ''}
            onClick={toggleMobileMenu}

          >
            Projects
          </Link>
          <Link
            to="/Achievements"
            className={isActive('/Achievements') ? 'active' : ''}
            onClick={toggleMobileMenu}

          >
            Achievements
          </Link>
          <Link
            to="/Leadership"
            className={isActive('/Leadership') ? 'active' : ''}
            onClick={toggleMobileMenu}

          >
            Leadership
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 