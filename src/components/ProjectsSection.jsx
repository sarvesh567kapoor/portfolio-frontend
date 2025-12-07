import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export const ProjectsSection = () => {
  const { projects } = usePortfolio();

  if (!projects || projects.length === 0) return null;

  return (
    <div>
      <h2 className="section-title">Selected Projects</h2>
      <p className="section-subtitle">
        A mix of plugins, ecommerce builds and backend systems that represent the kind of work I enjoy.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="card">
            <header style={{ marginBottom: '0.6rem' }}>
              <div className="project-title">{project.name}</div>
              <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{project.role}</div>
            </header>

            <p
              style={{
                fontSize: '0.9rem',
                color: '#e5e7eb',
                marginBottom: '0.8rem',
              }}
            >
              {project.description}
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.35rem',
                marginBottom: '0.6rem',
              }}
            >
              {project.teches?.map((tag) => (
                <span key={tag.id} className="tag-pill">
                  {tag.tech_name}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {project.live_url && (
                <a
                  href={project.live_url}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  View live project
                </a>
              )}
              {project.github_url && (
                <a
                  href={project.github_url}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  View source
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
