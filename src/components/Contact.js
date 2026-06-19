import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personal, contactFocus } = portfolioData;

  return (
    <section id="contact" className="section-band contact-section">
      <div className="container-wide contact-layout">
        <div className="section-heading contact-heading">
          <p className="eyebrow">Resume and Contact</p>
          <h2>Software engineering profile for full-time opportunities.</h2>
          <p>
            Open to SWE, full-stack, backend, AI-assisted tool development, AI/ML, and platform roles across the United States.
          </p>
        </div>

        <div className="resume-panel">
          <h3>Download Resumes</h3>
          <p>Two focused resume versions are available for backend systems and AI/ML systems roles.</p>
          <div className="resume-actions">
            {personal.resumes.map((resume) => (
              <a href={resume.href} target="_blank" rel="noreferrer" key={resume.label}>
                <i className="fa-solid fa-file-pdf"></i>
                <span>
                  <strong>{resume.label}</strong>
                  <small>{resume.focus}</small>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-card">
          <h3>Contact</h3>
          <a href={`mailto:${personal.email}`}>
            <i className="fa-solid fa-envelope"></i>
            {personal.email}
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
            LinkedIn
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
            GitHub
          </a>
          <p>
            <i className="fa-solid fa-location-dot"></i>
            {personal.location}
          </p>
        </div>

        <div className="role-cloud" aria-label="Target roles">
          {contactFocus.map((role) => (
            <span key={role}>{role}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
