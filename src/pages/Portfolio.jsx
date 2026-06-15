import React, { useState, useEffect } from 'react';
import TextPressure from '../components/TextPressure';
import MagneticButton from '../components/MagneticButton';
import LiquidEther from '../components/LiquidEther';
import SmoothCursor from '../components/SmoothCursor';
import { Link } from 'react-router-dom';
import { LinkedIn, Facebook, Twitter } from '../components/SocialIcons';
import { Mail } from 'lucide-react';

// New sections
import ByTheNumbers from '../components/sections/ByTheNumbers';
import About from '../components/sections/About';
import MyStory from '../components/sections/MyStory';
import ProofVault from '../components/sections/ProofVault';
import TechStack from '../components/sections/TechStack';
import Specializations from '../components/sections/Specializations';
import SocialProof from '../components/sections/SocialProof';

const RotatingRoles = () => {
  const roles = [
    <>Growth Marketing<br/>Manager</>,
    <>Digital Marketing<br/>Manager</>,
    <>Marketing Operations<br/>Manager</>,
    <>Revenue Operations<br/>Specialist</>,
    <>Demand Generation<br/>Manager</>,
    <>Customer Acquisition<br/>Manager</>,
    <>Director of<br/>Growth</>,
    <>Head of<br/>Growth</>
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 500);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <h2 style={{
      transition: 'opacity 0.5s ease-in-out',
      opacity: fade ? 1 : 0,
      height: '110px',
      display: 'flex',
      alignItems: 'flex-start',
      whiteSpace: 'nowrap'
    }}>
      {roles[roleIndex]}
    </h2>
  );
};

function Portfolio() {

  return (
    <>
      <SmoothCursor />
      <div className="split-layout">
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
          <LiquidEther
            colors={['#B75818', '#E26E21', '#E88C4F']}
            mouseForce={15}
            cursorSize={150}
            isViscous={true}
            viscous={30}
            iterationsViscous={12}
            iterationsPoisson={12}
            resolution={0.25}
            isBounce={false}
            autoDemo
            autoSpeed={0.3}
            autoIntensity={1.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        
        <div className="scroll-indicator">
          <span>Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        {/* Orange Side (Left) */}
        <div className="side-left">
          <div className="left-content">
            <div className="social-links" style={{ display: 'flex', gap: '20px', zIndex: 10, position: 'relative', alignItems: 'center' }}>
              <a href="https://www.facebook.com/ashtonkxtt/" target="_blank" rel="noreferrer" style={{ color: '#fff', opacity: 0.8, transition: 'transform 0.2s, opacity 0.2s', width: '24px', height: '24px', display: 'flex' }} onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseLeave={e => { e.currentTarget.style.opacity = 0.8; e.currentTarget.style.transform = 'scale(1)'; }}>
                <Facebook width="100%" height="100%" />
              </a>
              <a href="https://www.linkedin.com/in/ashton-kitt-3326b9236/" target="_blank" rel="noreferrer" style={{ color: '#fff', opacity: 0.8, transition: 'transform 0.2s, opacity 0.2s', width: '24px', height: '24px', display: 'flex' }} onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseLeave={e => { e.currentTarget.style.opacity = 0.8; e.currentTarget.style.transform = 'scale(1)'; }}>
                <LinkedIn width="100%" height="100%" />
              </a>
              <a href="https://x.com/kitsinc" target="_blank" rel="noreferrer" style={{ color: '#fff', opacity: 0.8, transition: 'transform 0.2s, opacity 0.2s', width: '24px', height: '24px', display: 'flex' }} onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseLeave={e => { e.currentTarget.style.opacity = 0.8; e.currentTarget.style.transform = 'scale(1)'; }}>
                <Twitter width="100%" height="100%" />
              </a>
              <a href="mailto:Ashtonkits@gmail.com" style={{ color: '#fff', opacity: 0.8, transition: 'transform 0.2s, opacity 0.2s', display: 'flex' }} onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseLeave={e => { e.currentTarget.style.opacity = 0.8; e.currentTarget.style.transform = 'scale(1)'; }}>
                <Mail size={24} />
              </a>
            </div>
            
            <div className="hero-text">
              <div className="huge-title-container" style={{ width: '85%', position: 'relative', marginBottom: '20px', marginTop: '8px' }}>
                <TextPressure
                  text="ASHTON KITT"
                  fontFamily='"Bricolage Grotesque", sans-serif'
                  fontUrl={false}
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={false} /* Bricolage does not have ital axis on Google Fonts by default */
                  scale={false}
                  textColor="#ffffff"
                  minFontSize={36}
                  minWdth={75}
                  maxWdth={100}
                  minWght={200}
                  maxWght={800}
                />
              </div>
              <p className="subtitle">I Build Revenue-Generating Marketing Systems.<br/>Websites • Funnels • CRM • Automation • SEO</p>
              <MagneticButton className="magnetic-button-container">
                <a href="#proof" className="view-work-btn">VIEW PROOF ↗</a>
              </MagneticButton>
            </div>

            <div className="trusted-by">
              <div className="avatars">
                <img src="/profile.png" alt="User 1" />
                <img src="/profile.png" alt="User 2" />
                <img src="/profile.png" alt="User 3" />
                <img src="/profile.png" alt="User 4" />
                <div className="more-count">+12</div>
              </div>
              <p>Trusted by forward-thinking brands worldwide.</p>
            </div>
          </div>
        </div>

        {/* White Side (Right) */}
        <div className="side-right">
          <div className="top-nav">
            <nav>
              <a href="#proof">PROOF</a>
              <a href="#tech-stack">TECH STACK</a>
              <Link to="/resume">RESUME</Link>
              <a href="#story">TIMELINE</a>
            </nav>
            <button className="menu-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="right-content">
            <section id="home" className="wireframe-section home-section">
              <div className="availability">
                <span className="availability-label">AVAILABLE FOR <div className="dot"></div></span>
                <RotatingRoles />
              </div>

              <div className="testimonial">
                <p>"We've collaborated on various projects together, he's very professional and a master in his craft."</p>
                <div className="author">
                  <div>
                    <strong>Aman V.</strong>
                    <span>Founder & CEO, Studio Nova</span>
                  </div>
                  <img src="/profile.png" alt="Aman V." />
                </div>
              </div>
            </section>
          </div>
        </div>
        
        {/* Center Image (Absolute Positioned) */}
        <div className="center-image-container">
          <img src="/ashton-hero-original.png" alt="Stylish Man" className="center-image" />
        </div>
      </div>

      <main className="main-content">
        <ByTheNumbers />
        <About />
        <MyStory />
        <ProofVault />
        <TechStack />
        <Specializations />
        <SocialProof />
      </main>
    </>
  );
}

export default Portfolio;
