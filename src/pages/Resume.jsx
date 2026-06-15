import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Link as LinkIcon, Globe } from 'lucide-react';
import SmoothCursor from '../components/SmoothCursor';
import '../style-resume.css';

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="resume-page">
      <SmoothCursor />
      {isModalOpen && (
        <div className="calendly-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="calendly-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="calendly-close-btn" onClick={() => setIsModalOpen(false)}>×</button>
            <iframe 
              src="https://calendly.com/ashtonkits/30min?hide_event_type_details=1&hide_gdpr_banner=1" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              title="Book an Interview"
            ></iframe>
          </div>
        </div>
      )}
      <div className="resume-container">
        <div className="resume-actions">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button onClick={() => setIsModalOpen(true)} className="book-call-btn">Book an Interview</button>
            <button onClick={() => window.print()} className="print-btn">Save as PDF</button>
          </div>
        </div>

        <div className="resume-content">
          <header className="resume-header">
            <h1>ASHTON KITT</h1>
            <h2>Growth Marketing Manager | Marketing Operations | Customer Acquisition</h2>
            <div className="contact-info">
              <span><MapPin size={16}/> Rocklin, California</span>
              <a href="tel:279-200-8378"><span><Phone size={16}/> 279-200-8378</span></a>
              <a href="mailto:ashtonkits@gmail.com"><span><Mail size={16}/> ashtonkits@gmail.com</span></a>
              <a href="https://linkedin.com/in/ashtonkitt" target="_blank" rel="noopener noreferrer"><span><LinkIcon size={16}/> linkedin.com/in/ashtonkitt</span></a>
              <a href="https://ashtonkitt.com" target="_blank" rel="noopener noreferrer"><span><Globe size={16}/> ashtonkitt.com</span></a>
            </div>
          </header>

          <section className="resume-section">
            <h3>PROFESSIONAL SUMMARY</h3>
            <p>Growth-focused marketing strategist and systems builder with 10+ years of experience engineering customer acquisition engines, generating demand, and driving business growth through technical marketing. I specialize in designing conversion-focused websites, deploying CRM automations, and executing omni-channel acquisition strategies.</p>
            <p>Over the last 4 years at Kits Inc, I served as the Lead Digital Growth Strategist for service-based and local businesses, combining deep technical expertise with growth architecture to build scalable systems for lead capture, review generation, and automated customer follow-up.</p>
            <p>I deliver end-to-end customer acquisition infrastructure that supports measurable revenue growth, from the first click to the closed deal. I am an execution-driven specialist who thrives on building the systems that actually move the needle.</p>
          </section>

          <section className="resume-section">
            <h3>CORE COMPETENCIES</h3>
            <div className="competencies-grid">
              {[
                "Digital Growth Strategy", "Customer Acquisition", "Demand Generation", "GoHighLevel CRM", 
                "WordPress Development", "Lead Generation Funnels", "SEO & Local Search", 
                "Marketing Automation", "Performance Marketing", "Conversion Optimization (CRO)", 
                "Email Workflows", "Data Analytics & Tracking"
              ].map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </section>

          <section className="resume-section">
            <h3>SELECTED CAREER ACHIEVEMENTS</h3>
            <ul className="highlights-list">
              <li><strong>Revenue Generation:</strong> Engineered growth initiatives and supported product launches generating $8M+ in cumulative sales volume across Web3 and emerging technology projects.</li>
              <li><strong>Audience Building:</strong> Built and scaled social media audiences exceeding 1.69M combined followers across X and Instagram through organic growth, viral mechanics, and content strategy.</li>
              <li><strong>Community Management:</strong> Managed and mobilized online communities exceeding 1M cumulative members across Discord-based projects and social platforms.</li>
              <li><strong>E-Commerce Growth:</strong> Scaled direct-to-consumer online brands to over $100K in revenue through end-to-end funnel optimization and performance marketing.</li>
            </ul>
          </section>

          <section className="resume-section">
            <h3>PROFESSIONAL EXPERIENCE</h3>
            
            <div className="job-entry">
              <div className="job-header">
                <div>
                  <h4>LEAD DIGITAL GROWTH STRATEGIST</h4>
                  <span className="company">Kits Inc</span>
                </div>
                <span className="date">January 2020 – Present</span>
              </div>
              <p className="job-desc" style={{marginBottom: '5px', fontStyle: 'italic', fontWeight: '500'}}>
                Selected Industries: Home Services, Renewable Energy, Technology, Professional Services
              </p>
              <p className="job-desc" style={{marginBottom: '10px'}}>
                Led end-to-end customer acquisition and marketing infrastructure for a portfolio of B2B and B2C clients.
              </p>
              <ul>
                <li>Designed and launched custom websites, lead generation funnels, and digital growth systems for small and mid-sized businesses.</li>
                <li>Implemented highly-automated CRM systems using GoHighLevel, building logic for lead nurturing, missed-call text-back, and appointment scheduling.</li>
                <li>Developed local SEO strategies, conversion-focused website architectures, and service pages to dominate search visibility and capture intent.</li>
                <li>Managed full project lifecycles from initial discovery and technical architecture through to deployment, optimization, and client onboarding.</li>
                <li>Scaled a marketing-focused community to over 14,000 members by executing educational content strategies and engagement initiatives.</li>
                <li>Drove direct revenue growth through the development and optimization of digital products, educational resources, and targeted marketing programs.</li>
              </ul>
            </div>

            <div className="job-entry">
              <div className="job-header">
                <div>
                  <h4>BRANDING DIRECTOR (CONTRACT)</h4>
                  <span className="company">Solar Sense Solutions & Flare Solar</span>
                </div>
                <span className="date">2023</span>
              </div>
              <p className="job-desc" style={{marginBottom: '10px'}}>Led branding, digital marketing, and customer acquisition initiatives for renewable energy companies.</p>
              <ul>
                <li>Executed complete brand redevelopment projects including websites, messaging, positioning, visual identity, and marketing collateral.</li>
                <li>Increased inbound lead generation by 50% and reduced customer acquisition costs by 20% through digital marketing strategy and campaign optimization.</li>
                <li>Increased lead conversion rates by 18% through customer education and conversion-focused content initiatives.</li>
              </ul>
            </div>

            <div className="job-entry">
              <div className="job-header">
                <div>
                  <h4>ONLINE MARKETING SPECIALIST</h4>
                  <span className="company">Daily Warm</span>
                </div>
                <span className="date">May 2017 – May 2021</span>
              </div>
              <p className="job-desc" style={{marginBottom: '10px'}}>Managed digital acquisition and performance marketing initiatives for a direct-to-consumer e-commerce brand.</p>
              <ul>
                <li>Generated approximately $500,000 in additional revenue through funnel optimization, lead capture systems, and lifecycle marketing strategies.</li>
                <li>Lowered CPA by 38% and increased LTV by 22% by redesigning the landing page experience and implementing post-purchase email sequences.</li>
                <li>Increased website traffic by more than 200% and scaled online sales by 40% through targeted performance marketing.</li>
                <li>Improved click-through rates by 35% through creative testing, campaign analysis, and performance optimization.</li>
              </ul>
            </div>
          </section>

          <div className="resume-footer-grid">
            <section className="resume-section">
              <h3>EDUCATION</h3>
              <div className="education-block">
                <h4>Bachelor of Science in Business Administration</h4>
                <p>Minor in Consumer Psychology</p>
                <strong>Liberty University | GPA: 4.0</strong>
              </div>
            </section>

            <section className="resume-section">
              <h3>CERTIFICATIONS</h3>
              <ul className="cert-list">
                <li>Google Ads Search Certification</li>
                <li>Google Analytics Certification</li>
                <li>HubSpot Digital Marketing Certification</li>
                <li>HubSpot Email Marketing Certification</li>
                <li>HubSpot Social Media Marketing Certification</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
