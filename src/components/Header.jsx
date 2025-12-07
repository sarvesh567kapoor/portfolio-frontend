import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { profile } = usePortfolio();

  const name = profile?.full_name || profile?.name || 'Sarvesh Kapoor';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (id) => {
    if (id === 'contact-page') {
      // open dedicated contact form page
      if (location.pathname !== '/contact') {
        navigate('/contact');
      }
      return;
    }

    // Other links scroll on the homepage
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollTo(id), 50);
    } else {
      scrollTo(id);
    }
  };

  const initials = name
    .split(' ')
    .map((p) => p[0])
    .join('');

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="nav-brand">
          <div className="nav-brand-avatar">{initials}</div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>{name}</div>
            <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
              Software Engineer · WordPress &amp; PHP Developer
            </div>
          </div>
        </div>
        <nav className="nav-links">
          {['hero', 'about', 'skills', 'experience', 'projects'].map((id) => (
            <span key={id} className="nav-link" onClick={() => handleNavClick(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </span>
          ))}
          {/* Contact now goes to separate page */}
          <span className="nav-link" onClick={() => handleNavClick('contact-page')}>
            Contact
          </span>
        </nav>
      </div>
    </header>
  );
};
