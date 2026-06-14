import React from 'react';
import { Link } from 'react-router-dom';

function SocialProof() {
  const certs = [
    'Google Ads Certified',
    'HubSpot Inbound Marketing',
    'Google Analytics 4',
    'Meta Blueprint Certified',
    'B.S. Marketing - University'
  ];

  return (
    <>
      <section className="social-proof-section">
        <div className="proof-container text-center">
          <h2 className="section-title">CERTIFICATIONS</h2>
          <div className="certs-list">
            {certs.map((cert, index) => (
              <span key={index} className="cert-tag">{cert}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="footer-cta-section">
        <div className="cta-container">
          <h2>LET'S CONNECT</h2>
          <div className="cta-actions">
            <Link to="/resume" className="view-work-btn primary-btn">See Resume</Link>
            <a href="https://linkedin.com/in/ashtonkitt" target="_blank" rel="noreferrer" className="view-work-btn secondary-btn" style={{borderColor: 'var(--orange-dark)', color: 'var(--orange-dark)'}}>View LinkedIn</a>
            <a href="mailto:ashton@example.com" className="view-work-btn secondary-btn" style={{borderColor: 'var(--orange-dark)', color: 'var(--orange-dark)'}}>Email Ashton</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default SocialProof;
