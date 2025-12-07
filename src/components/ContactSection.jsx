import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export const ContactSection = () => {
  const { profile } = usePortfolio();

  if (!profile) return null; // safety guard

  return (
    <div>
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">
        Let&apos;s talk about WordPress, plugins, ecommerce or full-stack web projects.
      </p>

      <div className="grid" style={{ gap: '1.5rem' }}>
        <div className="card">
          <h3 style={{ marginTop: 0, marginBottom: '0.8rem', fontSize: '1rem' }}>Get in touch</h3>
          <p style={{ fontSize: '0.9rem', color: '#9ca3af', marginBottom: '1rem' }}>
            The fastest way to reach me is over email, but I&apos;m also available on WhatsApp for project
            discussions, estimates and technical deep dives.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', lineHeight: 1.9 }}>
            <li>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${profile.email}`} style={{ color: '#60a5fa' }}>
                {profile.email}
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{' '}
              <a href={`tel:${profile.phone}`} style={{ color: '#60a5fa' }}>
                {profile.phone}
              </a>
            </li>
            {profile.linkedin_url && (
              <li>
                <strong>LinkedIn:</strong>{' '}
                {(() => {
                  // ensure we always have a full absolute URL
                  const raw = profile.linkedin_url.trim();
                  const href = raw.startsWith('http://') || raw.startsWith('https://')
                    ? raw
                    : `https://${raw.replace(/^\/+/, '')}`;

                  return (
                    <a
                      href={href}
                      style={{ color: '#60a5fa' }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View profile
                    </a>
                  );
                })()}
              </li>
            )}

            <li>
              <strong>Location:</strong> {profile.location}
            </li>
          </ul>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0, marginBottom: '0.8rem', fontSize: '1rem' }}>Project starter</h3>
          <p style={{ fontSize: '0.9rem', color: '#9ca3af', marginBottom: '0.8rem' }}>
            When you reach out, it helps if you can share a short brief:
          </p>
          <ul style={{ fontSize: '0.9rem', color: '#9ca3af', paddingLeft: '1.15rem' }}>
            <li>What you&apos;re building (new site, plugin, feature or refactor).</li>
            <li>Any tech constraints (WordPress only, Laravel API, Shopify, React, etc.).</li>
            <li>Rough timelines and whether you prefer hourly or fixed price.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
