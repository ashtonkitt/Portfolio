import React from 'react';
import { TrendingUp, Users, DollarSign, Target, Award, ShoppingCart } from 'lucide-react';

const About = () => {
  const metrics = [
    { value: '$8M+', label: 'Launch Revenue Supported', icon: <Target size={20} /> },
    { value: '500K+', label: 'Followers Built', icon: <Users size={20} /> },
    { value: '$500K+', label: 'Revenue Growth Generated', icon: <TrendingUp size={20} /> },
    { value: '14K+', label: 'Community Members', icon: <Users size={20} /> },
    { value: '$100K+', label: 'E-Commerce Revenue', icon: <ShoppingCart size={20} /> },
    { value: '10+', label: 'Years Marketing Experience', icon: <Award size={20} /> },
  ];

  return (
    <section id="about" className="wireframe-section">
      <div className="section-header">
        <h2>My Story</h2>
        <span className="section-subtitle">From Heavy Equipment to High Growth</span>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p className="lead-text">
            Before marketing, I was operating heavy equipment and working construction jobs.
          </p>
          <p>
            At night I was building e-commerce stores, growing Instagram pages, and learning how attention turns into revenue.
          </p>
          <p>
            What started with social media growth evolved into e-commerce, product launches, Web3 communities, lead generation, SEO, paid advertising, automation, and growth marketing.
          </p>
          <p>
            Today I help businesses acquire customers and build systems that scale.
          </p>

          <div className="metrics-grid">
            {metrics.map((metric, idx) => (
              <div key={idx} className="metric-box">
                <div className="metric-icon">{metric.icon}</div>
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
          
          <div className="experience-timeline">
            <h3>Experience</h3>
            <div className="timeline-item">
              <div className="timeline-date">2022 - Present</div>
              <div className="timeline-details">
                <h4>Founder & CMO</h4>
                <span>Kits Inc.</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2020 - 2022</div>
              <div className="timeline-details">
                <h4>Growth Marketing Manager</h4>
                <span>Daily Warm</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2018 - 2020</div>
              <div className="timeline-details">
                <h4>Marketing Strategist</h4>
                <span>Solar Sense</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-image-placeholder">
          <span>Profile Image Placeholder</span>
        </div>
      </div>
    </section>
  );
};

export default About;
