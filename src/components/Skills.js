import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="section-band skills-section">
      <div className="container-wide">
        <div className="section-heading">
          <p className="eyebrow">Technical Capability Map</p>
          <h2>Skills grouped by the systems they support.</h2>
          <p>
            Backend, AI/ML, cloud, data, frontend, security, and reliability skills are organized around the work they support.
          </p>
        </div>

        <div className="skill-matrix">
          {portfolioData.skills.map((group, index) => (
            <article className="skill-card" key={group.group} style={{ '--delay': `${index * 80}ms` }}>
              <div className="skill-card-header">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{group.group}</h3>
              </div>
              <div className="skill-tags">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="education-strip">
          {portfolioData.education.map((item) => (
            <article key={item.school}>
              <p className="eyebrow">{item.dates}</p>
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
              <span>{item.location} | {item.detail}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
