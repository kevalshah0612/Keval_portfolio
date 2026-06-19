import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { systemsMap, personal } = portfolioData;

  return (
    <section id="systems" className="section-band systems-section">
      <div className="container-wide">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Systems Narrative</p>
            <h2>Backend foundation, full-stack delivery, and AI-assisted systems.</h2>
          </div>
          <p>
            Work spans production reliability at TCS, full-stack analytics platforms, AI/ML workflows, RAG, LLM evaluation, application automation, and developer tools.
          </p>
        </div>

        <div className="system-flow" aria-label="Career system flow">
          <span>Backend APIs</span>
          <span>Full-Stack Apps</span>
          <span>Cloud Delivery</span>
          <span>RAG and Evaluation</span>
          <span>AI-Assisted Tools</span>
        </div>

        <div className="systems-track">
          {systemsMap.map((item, index) => (
            <article className={`system-node accent-${item.accent}`} key={item.title}>
              <span className="node-index">0{index + 1}</span>
              <p className="node-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.proof}</p>
            </article>
          ))}
        </div>

        <div className="about-panel">
          <div>
            <p className="eyebrow">Positioning</p>
            <h3>Software engineer with 3+ years of production ownership and MS CS AI specialization.</h3>
          </div>
          <p>
            I am focused on backend systems, full-stack applications, cloud infrastructure, AI/ML workflows, RAG, LLM evaluation, and AI-assisted developer tools. The throughline is ownership: production incidents, release workflows, APIs, data systems, retrieval pipelines, evaluation gates, and automation tools.
          </p>
          <div className="inline-links">
            <a href={personal.linkedin} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
              LinkedIn
            </a>
            <a href={personal.github} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
