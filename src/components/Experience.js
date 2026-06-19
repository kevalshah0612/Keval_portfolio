import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section-band experience-section">
      <div className="container-wide">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Production systems, full-stack analytics, and technical code review.</h2>
          <p>
            Backend ownership, full-stack workflows, AI/ML analytics, release infrastructure, and code-review practice across professional and academic settings.
          </p>
        </div>

        <div className="experience-stack">
          {portfolioData.experience.map((role, index) => (
            <article className="experience-card" key={`${role.company}-${role.role}`}>
              <div className="experience-marker">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="experience-main">
                <div className="experience-topline">
                  <div>
                    <p className="role-dates">{role.dates}</p>
                    <h3>{role.role}</h3>
                    <p className="role-company">{role.company}</p>
                  </div>
                  <p className="role-location">{role.location}</p>
                </div>

                {role.activeDelivery && <p className="active-delivery">{role.activeDelivery}</p>}

                <div className="tag-row">
                  {role.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <ul className="evidence-list">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
