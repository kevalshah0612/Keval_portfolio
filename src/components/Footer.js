import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container-wide footer-layout">
        <div>
          <strong>{portfolioData.personal.name}</strong>
          <p>Software Engineer for Backend, Full-Stack and AI-Assisted Systems</p>
        </div>
        <div className="footer-links">
          <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={portfolioData.personal.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${portfolioData.personal.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
