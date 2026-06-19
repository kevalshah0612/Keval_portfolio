import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal, heroStats, proofPillars } = portfolioData;
  const [isSpeaking, setIsSpeaking] = useState(false);

  const playIntro = () => {
    if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
      return;
    }

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new window.SpeechSynthesisUtterance(personal.voiceIntro);
    utterance.rate = 0.92;
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <section id="home" className="hero-section section-band">
      <div className="hero-grid-bg" aria-hidden="true"></div>
      <div className="container-wide hero-layout">
        <div className="hero-copy reveal-up">
          <p className="eyebrow">Welcome to my portfolio</p>
          <h1>{personal.headline}</h1>
          <p className="hero-subheadline">{personal.subheadline}</p>
          <p className="hero-summary">{personal.summary}</p>

          <div className="hero-actions" aria-label="Portfolio actions">
            <button type="button" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              <i className="fa-solid fa-layer-group"></i>
              View Projects
            </button>
            <button type="button" className="voice-button" onClick={playIntro}>
              <i className={`fa-solid ${isSpeaking ? 'fa-stop' : 'fa-volume-high'}`}></i>
              {isSpeaking ? 'Stop Intro' : 'Play Intro'}
            </button>
            {personal.resumes.map((resume) => (
              <a key={resume.label} href={resume.href} target="_blank" rel="noreferrer">
                <i className="fa-solid fa-file-arrow-down"></i>
                {resume.label}
              </a>
            ))}
          </div>

          <div className="hero-stats" aria-label="Key impact metrics">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="hero-console reveal-up delay-1" aria-label="Keval Shah profile summary">
          <div className="console-topbar">
            <span></span>
            <span></span>
            <span></span>
            <p>Systems Snapshot</p>
          </div>
          <div className="profile-orbit">
            <div className="profile-frame">
              <img src="/images/profile.jpg" alt="Keval Shah" />
            </div>
            <div className="orbit-ring orbit-ring-one"></div>
            <div className="orbit-ring orbit-ring-two"></div>
          </div>

          <div className="console-lines">
            <p><span>name</span>{personal.name}</p>
            <p><span>location</span>{personal.location}</p>
            <p><span>focus</span>Backend + Cloud + AI/ML</p>
            <p><span>systems</span>Production work + applied projects</p>
          </div>
        </aside>
      </div>

      <div className="container-wide proof-pillar-grid">
        {proofPillars.map((pillar, index) => (
          <article className="proof-pillar reveal-up" style={{ '--delay': `${index * 90}ms` }} key={pillar.title}>
            <div className="pillar-icon">
              <i className={`fa-solid ${pillar.icon}`}></i>
            </div>
            <div>
              <h2>{pillar.title}</h2>
              <p className="pillar-signal">{pillar.signal}</p>
              <p>{pillar.detail}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="container-wide signal-marquee" aria-label="Core technical stack">
        <div>
          <span>Java</span>
          <span>Spring Boot</span>
          <span>AWS</span>
          <span>RAG</span>
          <span>LLM Evaluation</span>
          <span>pgvector</span>
          <span>LangGraph</span>
          <span>DeepEval</span>
          <span>FastAPI</span>
          <span>PostgreSQL</span>
          <span>Docker</span>
          <span>Kubernetes</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
