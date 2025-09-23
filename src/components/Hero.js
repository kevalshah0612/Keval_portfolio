import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AOS from 'aos';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center min-vh-100">
          {/* Left Column - Content */}
          <Col lg={6} className="order-2 order-lg-1" data-aos="fade-right">
            <div className="hero-content text-white mobile-center">
              <h1 className="display-4 fw-bold mb-3">
                Hi, I'm <span className="text-primary">{portfolioData.personal.name}</span>
              </h1>

              <h2 className="h3 text-light mb-4 opacity-90">
                <i className="fas fa-laptop-code me-2 text-primary"></i>
                {portfolioData.personal.title}
              </h2>

              <p className="lead mb-4 opacity-90">
                {portfolioData.personal.summary}
              </p>

              {/* Stats Grid - Stack on Mobile */}
              <div className="hero-highlights mb-4">
                <Row className="g-2 g-md-3">
                  <Col xs={6} md={3}>
                    <div className="highlight-item text-center">
                      <h4 className="text-warning fw-bold mb-1">3.8+</h4>
                      <small className="text-light opacity-75 d-block">Years at TCS</small>
                    </div>
                  </Col>
                  <Col xs={6} md={3}>
                    <div className="highlight-item text-center">
                      <h4 className="text-warning fw-bold mb-1">4.0</h4>
                      <small className="text-light opacity-75 d-block">Current GPA</small>
                    </div>
                  </Col>
                  <Col xs={6} md={3}>
                    <div className="highlight-item text-center">
                      <h4 className="text-warning fw-bold mb-1">10+</h4>
                      <small className="text-light opacity-75 d-block">Projects</small>
                    </div>
                  </Col>
                  <Col xs={6} md={3}>
                    <div className="highlight-item text-center">
                      <h4 className="text-warning fw-bold mb-1">5+</h4>
                      <small className="text-light opacity-75 d-block">Awards</small>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* Bright Green Seeking Badge - Same theme as Skills */}
              <div className="seeking-container mb-4">
                <div className="seeking-badge-bright">
                  <p className="mb-0 fw-bold text-center seeking-text-bright">
                    <i className="fas fa-rocket me-2 seeking-rocket-icon"></i>
                    <span className="seeking-label">Currently seeking:</span>
                    <span className="d-block d-sm-inline ms-sm-2 seeking-description">
                      {portfolioData.personal.seeking}
                    </span>
                  </p>
                </div>
              </div>


              {/* Buttons - Stack on Small Screens */}
              <div className="hero-buttons d-grid d-sm-flex gap-2 justify-content-sm-center justify-content-lg-start">
                <Button
                  variant="primary"
                  size="lg"
                  className="hero-btn"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <i className="fas fa-envelope me-2"></i>
                  Get In Touch
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="hero-btn"
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin me-2"></i>
                  LinkedIn Profile
                </Button>
              </div>

              {/* Social Links - Center on Mobile */}
              <div className="hero-social-links text-center text-lg-start">
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light social-icon"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light social-icon"
                  title="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="text-light social-icon"
                  title="Email"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </Col>

          {/* Right Column - Profile */}
          <Col lg={6} className="order-1 order-lg-2" data-aos="fade-left">
            <div className="hero-image text-center">
              <div className="profile-image-container">
                <div className="profile-placeholder">
                  <div className="profile-avatar-image bg-primary text-white d-flex align-items-center justify-content-center rounded-circle mx-auto">
                    <img
                      src="/images/profile.jpg"
                      alt="Keval Shah - Full Stack Software Developer"
                      className="profile-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="profile-rings">
                    <div className="profile-ring"></div>
                    <div className="profile-ring-2"></div>
                    <div className="profile-ring-3"></div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="profile-info mt-3 mt-md-4">
                  <h4 className="text-white fw-bold mb-2">
                    {portfolioData.personal.name}
                  </h4>
                  <p className="text-light opacity-75 mb-3 small">
                    <i className="fas fa-graduation-cap me-2"></i>
                    MS Computer Science @ SUNY Binghamton
                  </p>

                  {/* Available Badge */}
                  <div className="mb-3">
                    <span className="badge bg-success status-badge">
                      <i className="fas fa-circle pulse me-2"></i>
                      <strong>Available for Opportunities</strong>
                    </span>
                  </div>

                  {/* Tech Stack */}
                  <div className="tech-stack">
                    <span className="badge bg-light text-dark me-1 mb-2">Java</span>
                    <span className="badge bg-light text-dark me-1 mb-2">Python</span>
                    <span className="badge bg-light text-dark me-1 mb-2">React</span>
                    <span className="badge bg-light text-dark me-1 mb-2">Spring Boot</span>
                    <span className="badge bg-light text-dark me-1 mb-2">AWS</span>
                  </div>
                </div>
              </div>

            </div>
          </Col>
        </Row>

        {/* Scroll Indicator - Hidden on Mobile */}
        <div className="scroll-indicator text-center d-none d-md-block" data-aos="fade-up" data-aos-delay="1000">
          <a
            href="#about"
            className="text-white text-decoration-none"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="scroll-down">
              <span className="text-light opacity-75 small">Scroll to explore</span><br />
              <i className="fas fa-chevron-down fa-lg mt-2 bounce"></i>
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
