import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export const About = () => {
  const { profile } = usePortfolio();

  // In case data hasn’t arrived yet (should be rare because App gates on loading)
  if (!profile) return null;

  return (
    <div>
      <h2 className="section-title">About</h2>
      <p className="section-subtitle">
        A quick overview of who I am, how I work and what I like to build.
      </p>

      <div className="grid" style={{ gap: '1.75rem' }}>
        <div className="card">
          {/* summary now comes from DB (profiles table) */}
          <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>{profile.summary}</p>
          <p
            style={{
              fontSize: '0.9rem',
              lineHeight: 1.7,
              marginTop: '1rem',
              color: '#9ca3af',
            }}
          >
            I&apos;ve worked across agencies, product teams and freelance projects, collaborating with
            designers, PMs and founders to turn requirements into maintainable, production-ready code.
            I enjoy jumping between WordPress, Laravel and React, and I&apos;m comfortable owning a
            feature from database schema to UI.
          </p>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0, marginBottom: '0.8rem', fontSize: '1rem' }}>At a glance</h3>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '0.9rem',
              lineHeight: 1.9,
            }}
          >
            <li>
              <strong>Location:</strong> {profile.location}
            </li>
            <li>
              <strong>Experience:</strong> 4+ years building production web apps
            </li>
            <li>
              <strong>Core expertise:</strong> WordPress plugins, WooCommerce, Laravel APIs, Shopify themes,
              React dashboards
            </li>
            <li>
              <strong>Also worked with:</strong> Node.js, Python, Socket.io, Comax, Twilio
            </li>
            <li>
              <strong>Soft skills:</strong> ownership mindset, clear communication, remote collaboration,
              mentoring junior devs
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
