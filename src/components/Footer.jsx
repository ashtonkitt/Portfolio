import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>&copy; {currentYear} Ashton Kitt. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <p>Architected with React & Vite.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
