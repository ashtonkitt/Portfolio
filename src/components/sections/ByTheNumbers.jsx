import React from 'react';

function ByTheNumbers() {
  const stats = [
    { number: '1.69M+', label: 'Followers Built' },
    { number: '$8M+', label: 'Launch Revenue Supported' },
    { number: '$100K+', label: 'eCommerce Revenue' },
    { number: '14K+', label: 'Community Members' },
    { number: '10+', label: 'Years Marketing Experience' },
    { number: '20+', label: 'Websites & Growth Systems Built' },
  ];

  return (
    <section id="numbers" className="by-the-numbers-section">
      <div className="numbers-container">
        <h2 className="section-title">BY THE NUMBERS</h2>
        <div className="numbers-grid">
          {stats.map((stat, index) => (
            <a href="#proof" key={index} className="number-card">
              <h3 className="huge-number">{stat.number}</h3>
              <p className="number-label">{stat.label}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ByTheNumbers;
