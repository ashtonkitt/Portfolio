import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Link as LinkIcon, Globe } from 'lucide-react';
import '../style-resume.css';

const Resume = () => {
  return (
    <div className="resume-page">
      <div className="resume-container">
        <div className="resume-actions">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
          <button onClick={() => window.print()} className="print-btn">Save as PDF</button>
        </div>

        <div className="resume-content">
          <header className="resume-header">
            <h1>ASHTON KITT</h1>
            <h2>Digital Growth Strategist | Growth Marketing Manager | Marketing Operations</h2>
            <div className="contact-info">
              <span><MapPin size={16}/> Rocklin, California</span>
              <span><Phone size={16}/> 279-200-8378</span>
              <span><Mail size={16}/> ashtonkits@gmail.com</span>
              <span><LinkIcon size={16}/> linkedin.com/in/ashtonkitt</span>
              <span><Globe size={16}/> ashtonkitt.com</span>
            </div>
          </header>

          <section className="resume-section">
            <h3>PROFESSIONAL SUMMARY</h3>
            <p>Digital Growth Strategist and systems builder with a track record of implementing full-stack marketing infrastructure that drives measurable revenue. I specialize in designing custom websites, deploying CRM automations, engineering lead generation funnels, and executing omni-channel acquisition strategies.</p>
            <p>Over the last 4 years at Kits Inc, I have served as the primary strategist and operator for service-based and local businesses, building scalable systems for lead capture, review generation, and automated customer follow-up using modern marketing technologies.</p>
            <p>Combines hands-on technical execution with high-level growth strategy to deliver end-to-end customer acquisition infrastructure, from first click to closed deal.</p>
          </section>

          <section className="resume-section">
            <h3>CORE COMPETENCIES</h3>
            <div className="competencies-grid">
              {[
                "Digital Growth Strategy", "Marketing Infrastructure", "GoHighLevel CRM", 
                "WordPress Development", "Lead Generation Funnels", "SEO & Local Search", 
                "Marketing Automation", "Performance Marketing", "Conversion Optimization", 
                "Email Workflows", "Data Analytics & Tracking", "Project Management"
              ].map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </section>

          <section className="resume-section">
            <h3>SELECTED CAREER ACHIEVEMENTS</h3>
            <ul className="highlights-list">
              <li><strong>Revenue Generation:</strong> Supported launch initiatives generating $8M+ in cumulative sales volume.</li>
              <li><strong>Audience Building:</strong> Grew social audiences exceeding 1.69M combined followers across X and Instagram for major Web3 and NFT brands.</li>
              <li><strong>Community Management:</strong> Built and managed online communities exceeding 1M cumulative members across Discord communities and social platforms.</li>
              <li><strong>E-Commerce:</strong> Generated over $100K in e-commerce revenue through independently operated direct-to-consumer online brands.</li>
            </ul>
          </section>

          <section className="resume-section">
            <h3>PROFESSIONAL EXPERIENCE</h3>
            
            <div className="job-entry">
              <div className="job-header">
                <div>
                  <h4>DIGITAL GROWTH STRATEGIST</h4>
                  <span className="company">Kits Inc</span>
                </div>
                <span className="date">2020 – Present</span>
              </div>
              <p className="job-desc" style={{marginBottom: '5px', fontStyle: 'italic', fontWeight: '500'}}>
                Selected Industries: Home Services, Renewable Energy, Ecommerce, Technology, Professional Services, Web3
              </p>
              <p className="job-desc" style={{marginBottom: '10px'}}>
                Growth technology and customer acquisition company helping businesses generate leads, automate operations, and improve online visibility through websites, CRM systems, SEO, automation, and marketing infrastructure.
              </p>
              <ul>
                <li>Designed and launched custom websites, funnels, and lead generation systems for businesses across multiple industries.</li>
                <li>Implemented CRM and automation systems using GoHighLevel, improving lead management and customer follow-up.</li>
                <li>Developed local SEO strategies, content systems, and online visibility initiatives.</li>
                <li>Built review generation, appointment scheduling, lead nurturing, and customer communication workflows.</li>
                <li>Managed full project lifecycle including discovery, strategy, development, deployment, and optimization.</li>
                <li>Consulted business owners on growth strategy, customer acquisition, and marketing operations.</li>
              </ul>
            </div>

            <div className="job-entry">
              <div className="job-header">
                <div>
                  <h4>ONLINE MARKETING SPECIALIST</h4>
                  <span className="company">Daily Warm</span>
                </div>
                <span className="date">2017 – 2021</span>
              </div>
              <p className="job-desc" style={{marginBottom: '10px'}}>Managed customer acquisition and growth marketing initiatives for a direct-to-consumer e-commerce brand.</p>
              <ul>
                <li>Lowered CPA by 38% and increased LTV by 22% by redesigning the landing page experience and implementing post-purchase email sequences.</li>
                <li>Increased website traffic by more than 200% and scaled online sales by 40% through targeted performance marketing.</li>
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
