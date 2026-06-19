import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'systems', label: 'Systems' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className={`site-nav ${scrolled ? 'site-nav-scrolled' : ''}`}>
      <a
        className="brand-mark"
        href="#home"
        onClick={(event) => {
          event.preventDefault();
          goToSection('home');
        }}
        aria-label="Go to home"
      >
        <span className="brand-symbol">KS</span>
        <span>
          <strong>{portfolioData.personal.name}</strong>
          <small>Backend, Full-Stack, AI-Assisted Tools</small>
        </span>
      </a>

      <button
        className="nav-toggle"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-links ${open ? 'nav-links-open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(event) => {
              event.preventDefault();
              goToSection(item.id);
            }}
          >
            {item.label}
          </a>
        ))}
        <a className="nav-resume" href={portfolioData.personal.resumes[0].href} target="_blank" rel="noreferrer">
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
