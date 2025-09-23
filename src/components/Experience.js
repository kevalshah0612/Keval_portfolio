import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import AOS from 'aos';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="experience" className="py-4 py-md-5">
      <Container>
        {/* Section Header */}
        <Row>
          <Col xs={12} className="text-center mb-4 mb-md-5">
            <h2 className="section-title" data-aos="fade-up">Professional Experience</h2>
            <div className="section-divider mx-auto"></div>
            <p className="lead text-muted mb-0" data-aos="fade-up" data-aos-delay="200">
              3.8+ years of enterprise-level software development at TCS
            </p>
          </Col>
        </Row>
        
        <Row>
          <Col xs={12}>
            <div className="timeline">
              {portfolioData.experience.map((exp, index) => (
                <div key={exp.id} className="timeline-item mb-4" data-aos="fade-up" data-aos-delay={index * 200}>
                  <Card className="timeline-card border-0 shadow-sm h-100">
                    <Card.Body className="p-3 p-md-4">
                      {/* Date Badge */}
                      <div className="timeline-date mb-3">
                        <Badge bg="primary" className="fs-6 fs-md-5 px-2 px-md-3 py-2">
                          {exp.duration}
                          {exp.current && (
                            <>
                              {' '}
                              <i className="fas fa-circle text-success ms-2 pulse"></i>
                              <span className="ms-1 small d-none d-sm-inline">Current</span>
                            </>
                          )}
                        </Badge>
                      </div>
                      
                      {/* Job Title */}
                      <h3 className="timeline-title text-dark mb-2 fw-bold h4 h-md-3">
                        {exp.title}
                      </h3>
                      
                      {/* Company */}
                      <div className="timeline-company text-primary fw-semibold mb-2 mb-md-3 h6 h-md-5">
                        <i className="fas fa-building me-2"></i>
                        <span className="d-inline d-sm-inline">{exp.company}</span>
                      </div>
                      
                      {/* Location */}
                      <div className="timeline-location text-muted mb-3 small">
                        <i className="fas fa-map-marker-alt me-2"></i>
                        {exp.location}
                      </div>
                      
                      {/* Leadership Badge */}
                      {exp.isLeadership && (
                        <div className="mb-3">
                          <Badge bg="warning" text="dark" className="small">
                            <i className="fas fa-star me-1"></i>
                            Leadership Role
                          </Badge>
                        </div>
                      )}
                      
                      {/* Description */}
                      <ul className="timeline-description list-unstyled mb-0">
                        {exp.description.map((desc, descIndex) => (
                          <li key={descIndex} className="mb-2 mb-md-3 d-flex align-items-start">
                            <div className="flex-shrink-0">
                              <i className="fas fa-check-circle text-success me-2 me-md-3 mt-1"></i>
                            </div>
                            <div className="flex-grow-1">
                              <span className="text-dark small">{desc}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Experience Summary - Responsive Grid */}
        <Row className="mt-4 mt-md-5">
          <Col xs={12} data-aos="fade-up">
            <div className="experience-summary bg-primary text-white p-3 p-md-4 rounded">
              <h4 className="text-center mb-3 mb-md-4 h5 h-md-4">🎯 Experience Highlights</h4>
              <Row className="g-2 g-md-3">
                <Col xs={6} md={3} className="text-center mb-2 mb-md-3">
                  <h3 className="fw-bold mb-1 h4 h-md-3">$1.2M+</h3>
                  <p className="mb-0 opacity-75 small">Annual Cost Savings</p>
                </Col>
                <Col xs={6} md={3} className="text-center mb-2 mb-md-3">
                  <h3 className="fw-bold mb-1 h4 h-md-3">10M+</h3>
                  <p className="mb-0 opacity-75 small">Records Processed</p>
                </Col>
                <Col xs={6} md={3} className="text-center mb-2 mb-md-3">
                  <h3 className="fw-bold mb-1 h4 h-md-3">90%</h3>
                  <p className="mb-0 opacity-75 small">Performance Improvement</p>
                </Col>
                <Col xs={6} md={3} className="text-center mb-2 mb-md-3">
                  <h3 className="fw-bold mb-1 h4 h-md-3">5+</h3>
                  <p className="mb-0 opacity-75 small">Awards Received</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
