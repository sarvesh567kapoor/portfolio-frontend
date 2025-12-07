import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export const Hero = () => {
  const { profile, experiences } = usePortfolio();

  if (!profile) return null;

  const name = profile.full_name || profile.name || 'Sarvesh Kapoor';

  // pick current experience (or fallback to first)
  const currentExp =
    experiences?.find((exp) => exp.is_current) || (experiences && experiences[0]);

  const currentRole = currentExp?.role || 'Software Engineer';
  const currentCompany = currentExp?.company || 'Virtual Employee Pvt Ltd';

  return (
    <div className="hero hero-grid">
      <div>
        <div className="chip">
          <span>Portfolio</span>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: '#22c55e',
            }}
          />
          <span>Open to remote & hybrid roles</span>
        </div>

        <h1 className="hero-title">
          Hi, I&apos;m <span className="hero-highlight">{name}</span>
          <br />
          {profile.headline || 'WordPress & PHP Developer'}
        </h1>

        <p className="hero-subtitle">
          I build high-performing WordPress, Shopify and custom PHP solutions – from AI-powered plugins and
          ecommerce stores to React dashboards and scalable backend APIs.
        </p>

        <div className="hero-meta">
          <span className="badge">4+ years of experience</span>
          <span className="badge">Full Stack Web Developer</span>
          <span className="badge">Plugins · APIs · React · Shopify</span>
        </div>

        <div className="hero-actions">
          <button
            className="btn-primary"
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            View selected projects
          </button>
          <button
            className="btn-ghost"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Contact me
          </button>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-card">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <div>
              <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Current role</div>
              <div style={{ fontSize: '1rem', fontWeight: 600 }}>{currentRole}</div>
              <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{currentCompany}</div>
            </div>
            <div className="tag-pill">Backend-heavy · Full stack</div>
          </div>

          <div className="hero-stat-grid">
            <div className="hero-stat">
              <div className="hero-stat-label">Primary stack</div>
              <div className="hero-stat-value">WordPress · PHP · Laravel</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-label">E-commerce</div>
              <div className="hero-stat-value">WooCommerce · Shopify</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-label">Frontend</div>
              <div className="hero-stat-value">React · jQuery · Ajax</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-label">APIs &amp; AI</div>
              <div className="hero-stat-value">REST · OpenAI · Comax</div>
            </div>
          </div>

          <div
            style={{
              marginTop: '1.1rem',
              fontSize: '0.8rem',
              color: '#9ca3af',
            }}
          >
            Currently focused on building scalable backends, React-based dashboards and AI-assisted workflows that
            automate content and operations for clients.
          </div>
        </div>
      </div>
    </div>
  );
};
