import React from 'react';

function Specializations() {
  const pillars = [
    {
      id: '01',
      title: 'Traffic & Acquisition Architecture',
      description: "I design and deploy multi-channel paid and organic systems that don't just 'get clicks', but capture high-intent attention mathematically designed to scale. No guesswork, just strictly monitored unit economics."
    },
    {
      id: '02',
      title: 'Revenue Operations (RevOps)',
      description: "Marketing budgets burn when follow-up infrastructure is broken. I architect bulletproof CRM environments and automated lead-nurturing sequences that eliminate latency and ensure zero pipeline leakage."
    },
    {
      id: '03',
      title: 'AI & Agentic Automation',
      description: "I leverage advanced LLMs and programmatic workflows to replace manual, error-prone tasks with self-sustaining automated systems, radically multiplying output without expanding headcount."
    },
    {
      id: '04',
      title: 'Front-End & Conversion Engineering',
      description: "A campaign is only as strong as its conversion mechanism. I build incredibly fast, highly-optimized web applications and funnels where every pixel is rigorously A/B tested to maximize ROI."
    }
  ];

  return (
    <section id="competencies" className="competencies-section">
      <div className="competencies-container">
        <h2 className="section-title">CORE COMPETENCIES</h2>
        <div className="competencies-grid">
          {pillars.map((pillar, index) => (
            <div key={index} className="competency-card">
              <span className="competency-number">{pillar.id}</span>
              <h3 className="competency-title">{pillar.title}</h3>
              <p className="competency-description">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specializations;
