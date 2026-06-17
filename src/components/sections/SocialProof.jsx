import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';

function SocialProof() {
  const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );

  const HubSpotIcon = () => (
    <img src="https://cdn.simpleicons.org/hubspot/ff7a59" alt="HubSpot" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  );

  const DegreeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--text-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  );

  const certs = [
    { title: 'Google Ads Search Certification', type: 'google' },
    { title: 'Google Analytics Certification', type: 'google' },
    { title: 'HubSpot Digital Marketing', type: 'hubspot' },
    { title: 'HubSpot Email Marketing', type: 'hubspot' },
    { title: 'HubSpot Social Media Marketing', type: 'hubspot' },
    { title: 'B.S. Business Administration', subtitle: 'Liberty University', type: 'degree' }
  ];

  const getIcon = (type) => {
    if (type === 'google') return <GoogleIcon />;
    if (type === 'hubspot') return <HubSpotIcon />;
    return <DegreeIcon />;
  };

  return (
    <>
      <section className="social-proof-section">
        <div className="proof-container text-center">
          <h2 className="section-title">CERTIFICATIONS</h2>
          <div className="certs-grid">
            {certs.map((cert, index) => (
              <div key={index} className="cert-card">
                <div className="cert-icon">
                  {getIcon(cert.type)}
                </div>
                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  {cert.subtitle && <p className="cert-subtitle">{cert.subtitle}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-card-section">
        <div className="contact-card-container">
          <div className="contact-card contact-split">
            
            <div className="contact-info-side">
              <div className="contact-avatar-wrapper">
                <img src="/profile.jpg" alt="Ashton Kitt" className="contact-avatar" />
              </div>
              <h2 className="contact-title">Ready to build?</h2>
              <p className="contact-subtitle">I'm currently looking for my next full-time role. Let's discuss how I can bring value to your team.</p>
              
              <div className="contact-links-list">
                <a href="tel:+12792008378" className="contact-link-item">
                  (279) 200-8378
                </a>
                <a href="mailto:ashtonkits@gmail.com" className="contact-link-item">
                  ashtonkits@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/ashtonkitt/" target="_blank" rel="noreferrer" className="contact-link-item">
                  linkedin.com/in/ashtonkitt
                </a>
              </div>
            </div>

            <div className="contact-calendar-side">
              {/* Direct Iframe for faster loading */}
              <div className="calendly-wrapper">
                <iframe
                  src="https://calendly.com/ashtonkits/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=cc3900"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Schedule a call with Ashton Kitt"
                  style={{ minHeight: '600px', display: 'block' }}
                ></iframe>
              </div>
            </div>

          </div>
          
          <ScrollToTop />
        </div>
      </section>
    </>
  );
}

export default SocialProof;
