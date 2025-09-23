import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Modal } from 'react-bootstrap';
import AOS from 'aos';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const getStatusVariant = (status) => {
    switch (status) {
      case 'In Development': return 'warning';
      case 'Completed': return 'success';
      default: return 'secondary';
    }
  };

  return (
    <section id="projects" className="py-4 py-md-5 bg-light">
      <Container>
        {/* Section Header */}
        <Row>
          <Col xs={12} className="text-center mb-4 mb-md-5">
            <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>
            <div className="section-divider mx-auto"></div>
            <p className="lead text-muted mb-0" data-aos="fade-up" data-aos-delay="200">
              Showcasing enterprise-level projects and innovative solutions
            </p>
          </Col>
        </Row>
        
        <Row className="g-3 g-md-4">
          {portfolioData.projects.map((project, index) => (
            <Col xs={12} md={6} lg={4} key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="project-card h-100 border-0 shadow-sm">
                {/* Project Image/Icon */}
                <div className="project-image d-flex align-items-center justify-content-center">
                  <i className={`${project.icon} fa-2x fa-md-3x text-white`}></i>
                </div>
                
                <Card.Body className="p-3 p-md-4 d-flex flex-column">
                  {/* Header */}
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h5 className="project-title mb-0 fw-bold flex-grow-1 me-2">
                      {project.title}
                    </h5>
                    <Badge bg={getStatusVariant(project.status)} className="flex-shrink-0">
                      {project.status}
                    </Badge>
                  </div>
                  
                  {/* Description */}
                  <p className="project-description text-muted mb-3 small">
                    {project.description}
                  </p>
                  
                  {/* Technologies - Show fewer on mobile */}
                  <div className="project-tech mb-3">
                    {project.technologies.slice(0, window.innerWidth < 768 ? 3 : 4).map((tech, techIndex) => (
                      <Badge key={techIndex} bg="light" text="primary" className="me-1 mb-2 tech-badge small">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > (window.innerWidth < 768 ? 3 : 4) && (
                      <Badge bg="secondary" className="me-1 mb-2 small">
                        +{project.technologies.length - (window.innerWidth < 768 ? 3 : 4)} more
                      </Badge>
                    )}
                  </div>
                  
                  {/* Duration */}
                  <div className="project-duration mb-3">
                    <small className="text-muted">
                      <i className="fas fa-calendar me-1"></i>
                      {project.duration}
                    </small>
                  </div>
                  
                  {/* Key Highlights */}
                  <div className="project-highlights mb-3 flex-grow-1">
                    <ul className="list-unstyled small mb-0">
                      {project.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="mb-2 d-flex align-items-start">
                          <i className="fas fa-star text-warning me-2 mt-1 flex-shrink-0"></i>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Action Button */}
                  <Button 
                    variant="outline-primary" 
                    size="sm"
                    onClick={() => handleShowModal(project)}
                    className="w-100 mt-auto"
                  >
                    <span className="d-none d-sm-inline">View Details</span>
                    <span className="d-sm-none">Details</span>
                    <i className="fas fa-arrow-right ms-1"></i>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Responsive Project Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        {selectedProject && (
          <>
            <Modal.Header closeButton className="border-0 bg-light">
              <Modal.Title className="d-flex align-items-center h5">
                <i className={`${selectedProject.icon} me-2 me-md-3 text-primary`}></i>
                <span>{selectedProject.title}</span>
              </Modal.Title>
            </Modal.Header>
            
            <Modal.Body className="px-3 px-md-4 py-3 py-md-4">
              <div className="mb-3 mb-md-4">
                <Badge bg={getStatusVariant(selectedProject.status)} className="mb-3 p-2">
                  {selectedProject.status}
                </Badge>
                <p className="text-muted mb-0">{selectedProject.description}</p>
              </div>
              
              {/* Technologies */}
              <div className="mb-3 mb-md-4">
                <h6 className="text-primary mb-3">
                  <i className="fas fa-tools me-2"></i>Technologies Used
                </h6>
                <div className="d-flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <Badge key={index} bg="light" text="dark" className="p-2 border">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-3 mb-md-4">
                <h6 className="text-primary mb-3">
                  <i className="fas fa-star me-2"></i>Key Highlights
                </h6>
                <ul className="list-unstyled">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li key={index} className="mb-2 d-flex align-items-start">
                      <i className="fas fa-check-circle text-success me-2 mt-1 flex-shrink-0"></i>
                      <span className="small">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Info */}
              <div className="bg-light p-3 rounded">
                <div className="d-flex align-items-center text-muted small">
                  <i className="fas fa-calendar me-2 text-primary"></i>
                  <strong className="me-2">Duration:</strong> 
                  <span>{selectedProject.duration}</span>
                </div>
              </div>
            </Modal.Body>
            
            <Modal.Footer className="border-0 px-3 px-md-4">
              <Button variant="secondary" onClick={handleCloseModal} size="sm">
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
