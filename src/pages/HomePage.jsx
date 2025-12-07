import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { SkillsSection } from '../components/SkillsSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ContactSection } from '../components/ContactSection';

const HomePage = () => {
  return (
    <main>
      <section id="hero" className="section">
        <div className="container">
          <Hero />
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <About />
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <SkillsSection />
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <ExperienceSection />
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <ProjectsSection />
        </div>
      </section>

      {/* contact info section stays on the homepage, no form here */}
      <section id="contact" className="section">
        <div className="container">
          <ContactSection />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
