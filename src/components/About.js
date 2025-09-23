import React, { useEffect } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import AOS from 'aos';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const coreSkills = portfolioData?.coreSkills || [];

  return (
    <section id="about" className="py-4 py-md-5 bg-light">
      <Container>
        {/* Section Header */}
        <Row>
          <Col xs={12} className="text-center mb-4 mb-md-5">
            <h2 className="section-title" data-aos="fade-up">About Me</h2>
            <div className="section-divider mx-auto"></div>
          </Col>
        </Row>
        
        <Row className="align-items-center">
          {/* Left Column - Content */}
          <Col lg={6} className="mb-4 mb-lg-0" data-aos="fade-right">
            <div className="about-content">
              <h3 className="mb-3 mb-md-4 text-primary h4 h-md-3">
                Software Developer & Graduate Student
              </h3>
              
              <p className="mb-3 mb-md-4">
                I am a passionate software developer with <strong>3.8+ years of professional experience</strong> at 
                <strong> Tata Consultancy Services</strong>, where I led full-stack development across 
                10+ enterprise projects and achieved 90% performance improvements.
              </p>
              
              <p className="mb-3 mb-md-4">
                Currently pursuing a <strong>Master's degree in Computer Science</strong> at SUNY Binghamton 
                with a perfect <strong>4.0 GPA</strong>, while serving as a Teaching Assistant for Database Systems.
              </p>
              
              {/* Achievements Section - Stacked on Mobile */}
              <div className="achievements-section mb-4">
                <h5 className="text-primary mb-3">🏆 Key Achievements</h5>
                <ul className="achievement-list list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <i className="fas fa-trophy text-warning me-2 mt-1 flex-shrink-0"></i>
                    <span className="small">5+ Star of the Month awards at TCS for exceptional delivery</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i className="fas fa-medal text-success me-2 mt-1 flex-shrink-0"></i>
                    <span className="small">Ranked 1st in TCS full-stack development certification</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i className="fas fa-chart-line text-primary me-2 mt-1 flex-shrink-0"></i>
                    <span className="small">Led 10+ enterprise projects with 90% performance improvements</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i className="fas fa-graduation-cap text-info me-2 mt-1 flex-shrink-0"></i>
                    <span className="small">Perfect 4.0 GPA in MS Computer Science program</span>
                  </li>
                </ul>
              </div>

              {/* Stats - Responsive Grid */}
              <div className="about-stats">
                <Row className="g-2 g-md-3">
                  <Col xs={4} className="text-center">
                    <div className="stat-item p-2 p-md-3 bg-white rounded shadow-sm">
                      <h4 className="text-primary fw-bold mb-1 h5 h-md-4">3.8+</h4>
                      <p className="small text-muted mb-0">Years Experience</p>
                    </div>
                  </Col>
                  <Col xs={4} className="text-center">
                    <div className="stat-item p-2 p-md-3 bg-white rounded shadow-sm">
                      <h4 className="text-primary fw-bold mb-1 h5 h-md-4">10+</h4>
                      <p className="small text-muted mb-0">Enterprise Projects</p>
                    </div>
                  </Col>
                  <Col xs={4} className="text-center">
                    <div className="stat-item p-2 p-md-3 bg-white rounded shadow-sm">
                      <h4 className="text-primary fw-bold mb-1 h5 h-md-4">4.0</h4>
                      <p className="small text-muted mb-0">Current GPA</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          
          {/* Right Column - Skills */}
          <Col lg={6} data-aos="fade-left">
            <div className="about-skills">
              <h4 className="mb-3 mb-md-4 h5 h-md-4">💻 Core Competencies</h4>
              {coreSkills.map((skill, index) => (
                <div key={index} className="skill-item mb-3 mb-md-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-semibold small">{skill.name}</span>
                    <span className="text-primary fw-bold small">{skill.level}%</span>
                  </div>
                  <ProgressBar 
                    now={skill.level} 
                    variant="primary"
                    className="custom-progress"
                    style={{ height: '8px' }}
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
