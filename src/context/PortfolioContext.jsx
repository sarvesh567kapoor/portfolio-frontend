import { createContext, useContext, useEffect, useState } from 'react';

const PortfolioContext = createContext(null);

export const PortfolioProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [techAreas, setTechAreas] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBootstrap = async () => {
      try {
        setLoading(true);
        setError(null);

        // thanks to Vite proxy we only call /api/...
        const res = await fetch('/api/bootstrap');
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const json = await res.json();

        setProfile(json.profile || null);
        setSkills(json.skills || []);
        setTechAreas(json.techAreas || []);
        setExperiences(json.experiences || []);
        setProjects(json.projects || []);
      } catch (err) {
        console.error('Failed to load portfolio data', err);
        setError('Failed to load portfolio data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBootstrap();
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        skills,
        techAreas,
        experiences,
        projects,
        loading,
        error,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const ctx = useContext(PortfolioContext);
  if (!ctx) {
    throw new Error('usePortfolio must be used inside <PortfolioProvider>');
  }
  return ctx;
};
