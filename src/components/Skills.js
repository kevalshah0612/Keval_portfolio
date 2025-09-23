import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skillIcons = {
    "Programming Languages": "fas fa-code",
    "Web Technologies": "fas fa-laptop-code", 
    "Backend Technologies": "fas fa-server",
    "Frameworks & Libraries": "fas fa-tools",
    "Databases": "fas fa-database",
    "Cloud & DevOps": "fas fa-cloud",
    "Development Methodologies": "fas fa-project-diagram"
  };

  const skillColors = {
    "Programming Languages": "primary",
    "Web Technologies": "info",
    "Backend Technologies": "success", 
    "Frameworks & Libraries": "warning",
    "Databases": "danger",
    "Cloud & DevOps": "secondary",
    "Development Methodologies": "light"
  };

  return (
    <section id="skills" className="py-5 skills-dark-section">
      <Container>
        {/* Section Header */}
        <Row>
          <Col xs={12} className="text-center mb-5">
            <h2 className="section-title text-white" data-aos="fade-up">Technical Skills</h2>
            <div className="section-divider mx-auto bg-gradient-primary"></div>
            <p className="lead text-light opacity-75 mb-0" data-aos="fade-up" data-aos-delay="200">
              Comprehensive technical expertise across full-stack development
            </p>
          </Col>
        </Row>
        
        <Row className="g-4">
          {Object.entries(portfolioData.skills).map(([category, skills], index) => (
            <Col xs={12} sm={6} lg={4} key={category} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="skill-category-dark h-100 border-0">
                <Card.Body className="p-4 text-center">
                  {/* Skill Icon with Glow Effect */}
                  <div className="skill-icon-container mb-4">
                    <div className={`skill-icon-glow bg-${skillColors[category]}`}>
                      <i className={`${skillIcons[category] || 'fas fa-cog'} fa-2x text-white`}></i>
                    </div>
                  </div>
                  
                  {/* Category Title */}
                  <h5 className={`text-${skillColors[category]} mb-4 fw-bold category-title`}>
                    {category}
                  </h5>
                  
                  {/* Skills List */}
                  <div className="skill-list d-flex flex-wrap justify-content-center gap-2">
                    {skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="skill-tag-dark badge bg-dark-subtle text-light border border-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Professional Highlights - Modern Dark */}
        <Row className="mt-5">
          <Col xs={12} className="text-center" data-aos="fade-up">
            <div className="skills-summary-dark">
              <div className="summary-content">
                <h4 className="mb-4 fw-bold text-white">
                  <span className="highlight-icon">🚀</span>
                  Professional Highlights at TCS
                </h4>
                
                <Row className="g-4 mb-4">
                  {[
                    { value: '3.8+', label: 'Years Experience', icon: 'fas fa-calendar-alt', gradient: 'gradient-blue' },
                    { value: '10+', label: 'Enterprise Projects', icon: 'fas fa-project-diagram', gradient: 'gradient-purple' },
                    { value: '90%', label: 'Performance Boost', icon: 'fas fa-chart-line', gradient: 'gradient-green' },
                    { value: '4.0', label: 'Current GPA', icon: 'fas fa-graduation-cap', gradient: 'gradient-orange' }
                  ].map((stat, index) => (
                    <Col xs={6} md={3} key={index}>
                      <div className={`stat-card-dark ${stat.gradient}`}>
                        <div className="stat-icon-wrapper">
                          <i className={`${stat.icon} fa-2x mb-3`}></i>
                        </div>
                        <h3 className="fw-bold mb-2">{stat.value}</h3>
                        <p className="mb-0 stat-label">{stat.label}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
                
                {/* Awards Section */}
                <div className="awards-dark-section">
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    <div className="award-badge">
                      <i className="fas fa-trophy me-2"></i>
                      <span>5+ Star Awards</span>
                    </div>
                    <div className="award-badge">
                      <i className="fas fa-medal me-2"></i>
                      <span>#1 Certification Rank</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
