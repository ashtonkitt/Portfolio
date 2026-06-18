import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-white)', color: 'var(--text-dark)', minHeight: '100vh', padding: '100px 20px 60px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Link to="/" style={{ color: 'var(--orange-dark)', textDecoration: 'none', fontWeight: 'bold', marginBottom: '40px', display: 'inline-block' }}>
          ← Back to Portfolio
        </Link>
        <h1 style={{ fontFamily: '"Oswald", sans-serif', fontSize: '3rem', marginBottom: '20px' }}>Terms of Service</h1>
        <p style={{ color: 'rgba(0,0,0,0.6)', marginBottom: '40px' }}>Last updated: {new Date().toLocaleDateString()}</p>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>1. Acceptance of Terms</h2>
          <p style={{ lineHeight: '1.6' }}>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>2. Intellectual Property</h2>
          <p style={{ lineHeight: '1.6' }}>The site and its original content, features, and functionality are owned by Ashton Kitt and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>3. Disclaimer of Warranties</h2>
          <p style={{ lineHeight: '1.6' }}>The materials on this website are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>4. Limitations</h2>
          <p style={{ lineHeight: '1.6' }}>In no event shall Ashton Kitt or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.</p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>5. Revisions and Errata</h2>
          <p style={{ lineHeight: '1.6' }}>The materials appearing on this website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on this website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.</p>
        </section>
      </div>
    </div>
  );
}

export default Terms;
