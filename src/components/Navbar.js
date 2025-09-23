import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar 
      expand="lg" 
      variant="dark" 
      fixed="top"
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand 
          href="#home" 
          className="fw-bold d-flex align-items-center"
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
        >
          <i className="fas fa-code me-2 text-primary d-none d-sm-inline"></i>
          <span className="navbar-brand-text">Keval Shah</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {[
              { id: 'home', label: 'Home', icon: 'fas fa-home' },
              { id: 'about', label: 'About', icon: 'fas fa-user' },
              { id: 'experience', label: 'Experience', icon: 'fas fa-briefcase' },
              { id: 'projects', label: 'Projects', icon: 'fas fa-project-diagram' },
              { id: 'skills', label: 'Skills', icon: 'fas fa-cogs' },
              { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
            ].map((section) => (
              <Nav.Link
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(section.id); }}
                className="nav-item-custom text-center"
              >
                <i className={`${section.icon} me-2 d-lg-inline`}></i>
                <span className="nav-text">{section.label}</span>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
