import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-dark-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Column - Info */}
          <Col xs={12} lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
            <div className="footer-brand mb-3">
              <h5 className="mb-2 fw-bold text-white footer-name">
                <i className="fas fa-code me-2 text-primary"></i>
                {portfolioData.personal.name}
              </h5>
              <p className="mb-2 text-light opacity-75 footer-subtitle">
                Full-Stack Software Developer | MS Computer Science Student
              </p>
            </div>
            <p className="mb-0 small text-light opacity-50 copyright">
              &copy; {currentYear} {portfolioData.personal.name}. All rights reserved.
            </p>
          </Col>
          
          {/* Right Column - Links & Contact */}
          <Col xs={12} lg={6} className="text-center text-lg-end">
            {/* Social Buttons */}
            <div className="mb-3 d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-end">
              <a 
                href={portfolioData.personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn footer-btn-linkedin"
              >
                <i className="fab fa-linkedin me-2"></i>
                LinkedIn
              </a>
              <a 
                href={portfolioData.personal.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn footer-btn-github"
              >
                <i className="fab fa-github me-2"></i>
                GitHub
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="footer-contact mb-3">
              <p className="mb-2 small">
                <i className="fas fa-envelope me-2 text-primary"></i>
                <a href={`mailto:${portfolioData.personal.email}`} className="text-light text-decoration-none footer-email">
                  {portfolioData.personal.email}
                </a>
              </p>
              <p className="mb-0 small text-light opacity-75 footer-tech">
                <i className="fas fa-code me-1"></i>
                Built with React & Bootstrap | Open for opportunities
              </p>
            </div>
          </Col>
        </Row>
        
        <hr className="footer-divider my-4" />
        
        {/* Bottom CTA */}
        <Row>
          <Col xs={12} className="text-center">
            <div className="footer-cta-dark">
              <p className="mb-0 fw-bold">
                <span className="cta-icon">🚀</span>
                <span className="cta-text">Currently seeking Summer 2026 internships and full-time SDE roles</span>
                <span className="cta-icon ms-2">🚀</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
