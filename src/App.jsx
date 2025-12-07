import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import HomePage from './pages/HomePage';
import ContactFormPage from './pages/ContactFormPage';
import { usePortfolio } from './context/PortfolioContext';
import { FullScreenLoader } from './components/FullScreenLoader';

function App() {
  const { loading, error } = usePortfolio();

  if (loading) {
    return <FullScreenLoader />;
  }

  if (error) {
    return <div className="app-error">{error}</div>;
  }

  return (
    <div className="app-root">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactFormPage />} />
      </Routes>

      <footer className="footer">
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
            <span>© {new Date().getFullYear()} Sarvesh Kapoor. All rights reserved.</span>
            <span>Built with React, Vite &amp; Recharts.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
