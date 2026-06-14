import React from 'react';

function Specializations() {
  const skills = [
    'Custom WordPress Websites',
    'SEO & Local Search Systems',
    'GoHighLevel CRM Implementation',
    'Automated Lead Nurturing',
    'High-Converting Funnels',
    'Review & Reputation Systems',
    'Missed-Call Text Back Systems',
    'Appointment Booking Workflows',
    'Marketing Infrastructure',
    'Data Tracking & Analytics'
  ];

  return (
    <section className="specializations-section">
      <div className="specializations-container">
        <h2 className="section-title">WHAT I BUILD</h2>
        <div className="skills-checklist">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="checkmark">✓</span>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specializations;
