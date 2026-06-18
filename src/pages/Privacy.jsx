import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-white)', color: 'var(--text-dark)', minHeight: '100vh', padding: '100px 20px 60px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Link to="/" style={{ color: 'var(--orange-dark)', textDecoration: 'none', fontWeight: 'bold', marginBottom: '40px', display: 'inline-block' }}>
          ← Back to Portfolio
        </Link>
        <h1 style={{ fontFamily: '"Oswald", sans-serif', fontSize: '3rem', marginBottom: '20px' }}>Privacy Policy</h1>
        <p style={{ color: 'rgba(0,0,0,0.6)', marginBottom: '40px' }}>Last updated: {new Date().toLocaleDateString()}</p>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>1. Information We Collect</h2>
          <p style={{ lineHeight: '1.6' }}>We collect information you provide directly to us, such as when you fill out a contact form or communicate with us via email. This may include your name, email address, phone number, and any other information you choose to provide.</p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>2. How We Use Information</h2>
          <p style={{ lineHeight: '1.6' }}>We use the information we collect primarily to respond to your inquiries, provide the services you request, and improve our website and offerings. We do not sell or rent your personal information to third parties.</p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>3. Analytics and Cookies</h2>
          <p style={{ lineHeight: '1.6' }}>We may use cookies and similar tracking technologies to track activity on our website and hold certain information. This helps us analyze traffic and improve the user experience.</p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>4. Third-Party Services</h2>
          <p style={{ lineHeight: '1.6' }}>We may employ third-party companies and individuals to facilitate our website, provide services on our behalf, or assist us in analyzing how our website is used. These third parties have access to your Personal Data only to perform these tasks on our behalf.</p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>5. Contact Us</h2>
          <p style={{ lineHeight: '1.6' }}>If you have any questions about this Privacy Policy, please contact us at ashtonkits@gmail.com.</p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;
