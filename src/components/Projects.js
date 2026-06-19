import React, { useMemo, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const filters = ['All', 'Backend', 'AI/ML', 'AI-Assisted Tools', 'RAG and Evaluation'];

const projectMatchesFilter = (project, filter) => {
  if (filter === 'All') return true;
  if (filter === 'Backend') return ['JobPulse', 'FilingQuery'].includes(project.name);
  if (filter === 'AI/ML') return ['FraudSift', 'JobPulse', 'FilingQuery'].includes(project.name);
  if (filter === 'AI-Assisted Tools') return ['Resume Agent', 'JobFill AI Extension', 'ReviewBot'].includes(project.name);
  if (filter === 'RAG and Evaluation') return ['EvalTrace', 'FilingQuery'].includes(project.name);
  return true;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = useMemo(
    () => portfolioData.projects.filter((project) => projectMatchesFilter(project, activeFilter)),
    [activeFilter]
  );

  return (
    <section id="projects" className="section-band projects-section">
      <div className="container-wide">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Selected Systems</p>
            <h2>Seven applied projects across backend, AI/ML, RAG, evaluation, and agentic workflows.</h2>
          </div>
          <p>
            Each project highlights the problem area, system design, measurable outcome, and stack so the engineering depth is clear without extra explanation.
          </p>
        </div>

        <div className="filter-bar" aria-label="Project filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? 'active' : ''}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visibleProjects.map((project, index) => (
            <article className="project-card" key={project.name} style={{ '--delay': `${index * 70}ms` }}>
              <div className="project-card-top">
                <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="project-category">{project.category}</span>
              </div>
              <h3>{project.name}</h3>
              <p className="project-summary">{project.summary}</p>
              <p className="project-evidence">{project.evidence}</p>
              <p className="project-architecture">{project.architecture}</p>

              <div className="metric-row">
                {project.metrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>

              <div className="tech-stack-list">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
                View Repository
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
