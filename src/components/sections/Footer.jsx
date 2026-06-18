import React from 'react';
import './Footer.css';
import { LinkedIn, Twitter, Facebook } from '../SocialIcons';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <div className="footer-bottom">
          <div className="footer-brand">
            <span className="footer-logo">ASHTON KITT</span>
            <span className="footer-copyright">© {new Date().getFullYear()} All rights reserved.</span>
            <span className="footer-links-divider">|</span>
            <Link to="/privacy" className="footer-legal-link">Privacy Policy</Link>
            <span className="footer-links-divider">|</span>
            <Link to="/terms" className="footer-legal-link">Terms of Service</Link>
          </div>
          
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/ashtonkitt/" target="_blank" rel="noreferrer"><LinkedIn style={{ width: '20px', height: '20px' }} /></a>
            <a href="https://x.com/kitsinc" target="_blank" rel="noreferrer"><Twitter style={{ width: '20px', height: '20px' }} /></a>
            <a href="https://www.facebook.com/ashtonkxtt/" target="_blank" rel="noreferrer"><Facebook style={{ width: '20px', height: '20px' }} innerColor="var(--bg-white)" /></a>
            <a href="mailto:ashtonkits@gmail.com"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
