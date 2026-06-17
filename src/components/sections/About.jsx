import React from 'react';
import { CometCard } from '../ui/CometCard';

const About = () => {
  const workHistory = [
    { year: '2026 - Present', role: 'Full-Stack Growth Strategist', company: 'Independent Consulting' },
    { year: '2025 - Present', role: 'Sales & Revenue Operations', company: 'High-Velocity Sales Floor' },
    { year: '2024 - 2025', role: 'Performance Marketing & Paid Media', company: 'Digital Agency & Client Portfolios' },
    { year: '2023 - 2024', role: 'Automation & CRM Architecture', company: 'GoHighLevel Systems' },
    { year: '2023', role: 'Brand & Acquisition Director', company: 'Solar Sense Solutions & Flare Solar' },
    { year: '2021 - 2022', role: 'Digital Marketing Foundations', company: 'Local Businesses & Direct Response' },
    { year: '2019 - 2021', role: 'Viral Audience Acquisition', company: '1.69M+ Network (Twitter/IG)' },
    { year: '2017 - 2021', role: 'E-Commerce Growth Specialist', company: 'Daily Warm' },
    { year: '2017 - 2019', role: 'Experiential & Event Marketing', company: 'National Entity & Cinematic Events' },
    { year: '2017', role: 'Early Sales & E-Commerce Arbitrage', company: 'Independent Sourcing' },
  ];

  return (
    <section id="about" className="wireframe-section" style={{ borderBottom: 'none' }}>
      <div className="section-header" style={{ display: 'flex', alignItems: 'baseline', gap: '20px', flexWrap: 'wrap' }}>
        <h2 style={{ margin: 0 }}>My Story</h2>
        <span className="section-subtitle" style={{ margin: 0 }}>Engineering Customer Acquisition & Growth</span>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p className="lead-text">
            I'm a growth-focused marketing strategist and systems builder with over 10 years of experience engineering customer acquisition engines.
          </p>
          
          <div className="mobile-only-about-image">
            <CometCard>
              <img 
                src="/ashton-about.jpg" 
                alt="Ashton Kitt" 
                style={{ 
                  width: '100%', 
                  height: '350px', 
                  objectFit: 'cover', 
                  borderRadius: '20px',
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 30px 0px",
                  marginBottom: '20px'
                }} 
              />
            </CometCard>
          </div>

          <p>
            I specialize in designing conversion-focused websites, deploying CRM automations, and executing omni-channel acquisition strategies that turn attention into measurable revenue.
          </p>
          <p>
            Over the last four years, I've served as a Lead Digital Growth Strategist, combining deep technical expertise with growth architecture to build scalable systems for lead capture, review generation, and automated customer follow-up.
          </p>
          <p>
            I deliver end-to-end infrastructure that supports business growth from the very first click to the closed deal. I'm an execution-driven specialist who thrives on building the systems that actually move the needle.
          </p>
          
          <div className="experience-timeline">
            <h3>Experience</h3>
            {workHistory.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-date">{item.year}</div>
                <div className="timeline-details">
                  <h4>{item.role}</h4>
                  <span>{item.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="about-image-placeholder desktop-only-about-image" style={{ flexDirection: 'column', gap: '15px', height: 'auto' }}>
          <div style={{ width: '100%', height: '420px' }}>
            <CometCard>
              <img 
                src="/ashton-about.jpg" 
                alt="Ashton Kitt" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  borderRadius: '20px',
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 30px 0px" 
                }} 
              />
            </CometCard>
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--orange-light)', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.8, marginTop: '5px' }}>
            // Hover To Interact
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
