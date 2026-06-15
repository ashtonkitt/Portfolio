import React from 'react';
import { TrendingUp, Users, DollarSign, Target, Award, ShoppingCart } from 'lucide-react';

function ByTheNumbers() {
  const metrics = [
    { value: '$8M+', label: 'Launch Revenue Supported', icon: <Target size={24} /> },
    { value: '500K+', label: 'Followers Built', icon: <Users size={24} /> },
    { value: '$500K+', label: 'Revenue Growth Generated', icon: <TrendingUp size={24} /> },
    { value: '14K+', label: 'Community Members', icon: <Users size={24} /> },
    { value: '$100K+', label: 'E-Commerce Revenue', icon: <ShoppingCart size={24} /> },
    { value: '10+', label: 'Years Marketing Experience', icon: <Award size={24} /> },
  ];

  // We duplicate the metrics a few times to create a seamless infinite scroll
  const scrollingMetrics = [...metrics, ...metrics, ...metrics];

  return (
    <section id="numbers" className="by-the-numbers-section" style={{ position: 'relative', overflow: 'hidden', padding: '0' }}>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333% - 10px)); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        
        /* Hover Effects */
        .ticker-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }

        @media (hover: hover) {
          .ticker-wrap:hover .ticker-track { animation-play-state: paused; }
        }
      `}</style>

      <div style={{ width: '100%', position: 'relative', backgroundColor: 'transparent' }}>
        <div style={{ position: 'relative', padding: '15px 0 20px 0' }}>

          {/* Ticker Rows */}
          <div className="ticker-wrap" style={{ position: 'relative', width: '100%', marginBottom: 0 }}>
            <div className="ticker-track" style={{ animationDirection: 'normal' }}>
              {scrollingMetrics.map((metric, i) => (
                <div key={i} className="ticker-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, padding: '0 10px', width: 'auto' }}>
                  <div className="metric-box">
                    <div className="metric-icon">{metric.icon}</div>
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ByTheNumbers;
