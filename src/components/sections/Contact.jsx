import React from 'react';
import { Mail, Camera, MessageSquare, Share2 } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="wireframe-section contact-section">
      <div className="section-header">
        <h2>Let's Talk</h2>
        <span className="section-subtitle">Ready to start a project?</span>
      </div>
      
      <div className="contact-container">
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label>Project Details</label>
            <textarea rows="4" placeholder="Tell me about your project..."></textarea>
          </div>
          <button type="button" className="submit-btn">Send Message</button>
        </form>
        
        <div className="contact-info">
          <div className="info-block">
            <h3>Direct Contact</h3>
            <a href="mailto:ashtonkits@gmail.com" className="email-link">ashtonkits@gmail.com</a>
          </div>
          
          <div className="info-block">
            <h3>Socials</h3>
            <div className="social-links">
              <a href="#" className="social-btn"><Camera size={20} /></a>
              <a href="#" className="social-btn"><MessageSquare size={20} /></a>
              <a href="#" className="social-btn"><Share2 size={20} /></a>
              <a href="#" className="social-btn"><Mail size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
