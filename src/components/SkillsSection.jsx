import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  Cell,
} from 'recharts';

// 👇 icons for technologies
import {
  FaPhp,
  FaWordpress,
  FaLaravel,
  FaShopify,
  FaReact,
  FaDatabase,
} from 'react-icons/fa';
import { SiWoocommerce, SiMysql } from 'react-icons/si';

const pieColors = ['#22c55e', '#3b82f6', '#a855f7', '#eab308', '#ec4899'];

export const SkillsSection = () => {
  const { skills, techAreas } = usePortfolio();

  const skillsChartData = skills.map((s) => ({
    name: s.name,
    level: s.proficiency_level,
  }));

  const techStackDistribution = techAreas.map((t) => ({
    name: t.name,
    value: t.value,
    color: t.color,
  }));

  // 👇 icons row data
  const coreTechIcons = [
    { label: 'PHP', icon: <FaPhp /> },
    { label: 'WordPress', icon: <FaWordpress /> },
    { label: 'WooCommerce', icon: <SiWoocommerce /> },
    { label: 'Laravel', icon: <FaLaravel /> },
    { label: 'Shopify', icon: <FaShopify /> },
    { label: 'React', icon: <FaReact /> },
    { label: 'MySQL', icon: <SiMysql /> },
  ];

  return (
    <div>
      <h2 className="section-title">Skills &amp; Stack</h2>
      <p className="section-subtitle">
        A snapshot of the technologies I use most often, visualised with charts for a quick overview.
      </p>

      <div className="skills-grid">
        {/* Left card: core skills text + tech icons */}
        <div className="card">
          <h3 style={{ marginTop: 0, marginBottom: '0.8rem', fontSize: '1rem' }}>Core skills</h3>

          {/* 👇 new icons row to use the empty space better */}
          <div className="core-tech-grid">
            {coreTechIcons.map((item) => (
              <div key={item.label} className="core-tech-pill">
                <span className="core-tech-icon">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '0.9rem', color: '#9ca3af', marginBottom: '1rem' }}>
            I specialise in PHP-based stacks and CMS platforms, with strong experience in WordPress,
            WooCommerce, Laravel and Shopify. On the frontend, I use React, modern JavaScript and
            component-driven UI patterns.
          </p>

          <div className="skill-list">
            {[
              'WordPress plugins',
              'WooCommerce',
              'Laravel APIs',
              'Shopify themes',
              'React dashboards',
              'REST & JSON',
              'MySQL',
              'Performance & SEO',
            ].map((item) => (
              <span key={item} className="tag-pill">
                {item}
              </span>
            ))}
          </div>

          <div style={{ marginTop: '1.25rem', fontSize: '0.85rem', color: '#9ca3af' }}>
            I&apos;m comfortable reading legacy code, refactoring it into cleaner modules and adding
            tests or logging where it matters. I pay special attention to performance, caching and DX
            when building internal tools.
          </div>
        </div>

        {/* Right card: charts (unchanged) */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Bar chart */}
          <div style={{ height: 180 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.4rem',
              }}
            >
              <span style={{ fontSize: '0.9rem' }}>Skill level by technology</span>
              <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Scale: 0–100</span>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skillsChartData}>
                <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#020617',
                    border: '1px solid rgba(148,163,184,0.6)',
                    fontSize: 12,
                    color: '#e5e7eb',
                  }}
                />
                <Bar dataKey="level" radius={[4, 4, 0, 0]} fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie chart */}
          <div style={{ height: 257 }}>
            <div style={{ marginBottom: '0.4rem', fontSize: '0.9rem' }}>
              Where I spend most of my time
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={techStackDistribution}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={35}
                  paddingAngle={3}
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name.split(' ')[0]} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {techStackDistribution.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color || pieColors[index % pieColors.length]}
                    />
                  ))}
                </Pie>
                <Legend
                  verticalAlign="bottom"
                  height={40}
                  wrapperStyle={{ fontSize: 10, color: '#e5e7eb' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#020617',
                    border: '1px solid rgba(148,163,184,0.6)',
                    fontSize: 12,
                    color: '#e5e7eb',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
