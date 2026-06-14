import React from 'react';
import { Search, Mail, Users, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Paid Advertising & SEO',
      desc: 'Driving targeted traffic and maximizing ROI through Google Ads, Meta Ads, and comprehensive search engine optimization strategies.',
      icon: <Search size={24} />
    },
    {
      title: 'Marketing Automation',
      desc: 'Building robust email marketing funnels and automated customer journeys to nurture leads, increase retention, and lower CAC.',
      icon: <Mail size={24} />
    },
    {
      title: 'Community Growth',
      desc: 'Scaling highly engaged audiences from scratch using organic growth strategies, viral campaigns, and social media management.',
      icon: <Users size={24} />
    },
    {
      title: 'Conversion Optimization',
      desc: 'Analyzing user behavior, A/B testing landing pages, and utilizing data analytics to turn more of your traffic into paying customers.',
      icon: <TrendingUp size={24} />
    }
  ];

  return (
    <section id="services" className="wireframe-section">
      <div className="section-header">
        <h2>Services</h2>
        <span className="section-subtitle">Core Competencies</span>
      </div>
      
      <div className="services-grid">
        {services.map((service, idx) => (
          <div key={idx} className="service-card">
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
