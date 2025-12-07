import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export const ExperienceSection = () => {
  const { experiences } = usePortfolio();

  if (!experiences || experiences.length === 0) return null;

  const formatPeriod = (exp) => {
    if (!exp.start_date) return '';
    const start = new Date(exp.start_date);
    const startLabel = start.toLocaleString('default', {
      month: 'short',
      year: 'numeric',
    });

    let endLabel = 'Present';
    if (!exp.is_current && exp.end_date) {
      const end = new Date(exp.end_date);
      endLabel = end.toLocaleString('default', {
        month: 'short',
        year: 'numeric',
      });
    }

    return `${startLabel} – ${endLabel}`;
  };

  return (
    <div>
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">
        Roles where I&apos;ve shipped real features, debugged tricky issues and collaborated with teams.
      </p>

      <div className="grid" style={{ gap: '1.5rem' }}>
        {experiences.map((item) => (
          <article key={item.id} className="card">
            <header
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '0.75rem',
              }}
            >
              <div>
                <h3 style={{ margin: 0, fontSize: '1rem' }}>{item.role}</h3>
                <div style={{ fontSize: '0.9rem', color: '#9ca3af' }}>
                  {item.company}
                </div>
                {item.website_url && (
                  <a
                    href={item.website_url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: '0.8rem', color: '#60a5fa' }}
                  >
                    Visit website
                  </a>
                )}
              </div>
              <div
                style={{
                  textAlign: 'right',
                  fontSize: '0.8rem',
                  color: '#9ca3af',
                }}
              >
                <div>{formatPeriod(item)}</div>
                <div>{item.location}</div>
              </div>
            </header>

            <p
              style={{
                marginTop: '0.8rem',
                fontSize: '0.9rem',
                color: '#e5e7eb',
              }}
            >
              {item.summary}
            </p>

            <ul
              style={{
                fontSize: '0.9rem',
                color: '#9ca3af',
                paddingLeft: '1.15rem',
              }}
            >
              {item.highlights?.map((point) => (
                <li key={point.id} style={{ marginBottom: '0.35rem' }}>
                  {point.highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
};
