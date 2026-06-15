import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';

const ProofCard = ({ proof, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      style={{ perspective: 1200 }}
      onClick={() => onClick(proof)}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
      >
        <div className="proof-card">
          <div 
            className="proof-card-image" 
            style={{ 
              backgroundImage: `url(${proof.placeholderImg})`,
              transform: "translateZ(0px)"
            }}
          ></div>
          <div 
            className="proof-card-content"
            style={{ transform: "translateZ(80px)" }}
          >
            <span className="proof-category">{proof.category}</span>
            <h3 className="proof-title">{proof.title}</h3>
            <div className="proof-cta">
              View Proof <span className="arrow">→</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

function ProofVault() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProof, setSelectedProof] = useState(null);

  const filters = ['All', 'Websites', 'SEO', 'Communities', 'Revenue', 'Funnels', 'Automation', 'Branding'];

  const proofs = [
    {
      id: 1,
      title: '$8M+ Web3 Launch Volume',
      category: 'Communities',
      role: 'Growth Lead & Strategist',
      outcome: 'Built a combined audience of 1.69 million followers across major Web3 brands and managed communities exceeding 1M members, supporting over $8M in launch revenue.',
      gallery: ['/web3-1.png', '/web3-2.png', '/web3-3.png', '/web3-4.png'],
      placeholderImg: '/web3-cover.png',
    },
    {
      id: 2,
      title: '$500k E-Com Revenue Capture',
      category: 'Funnels',
      role: 'Performance Marketer',
      outcome: 'Generated $500,000 in additional revenue for Daily Warm by optimizing the lead capture funnel, deploying lifecycle emails, and dropping CPA by 38%.',
      placeholderImg: '/ecom-revenue.jpg',
    },
    {
      id: 3,
      title: '50% Inbound Lead Growth',
      category: 'Branding',
      role: 'Branding Director',
      outcome: 'Executed complete brand redevelopment for Solar Sense Solutions, increasing inbound lead generation by 50% and improving lead conversion rates by 18%.',
      placeholderImg: '/solar-sense.png',
    },
    {
      id: 4,
      title: '11.6K Member B2B Network',
      category: 'Communities',
      role: 'Growth Strategist',
      outcome: 'Scaled a marketing-focused B2B community (SMMA Pros) to over 11,600 active members by engineering educational content strategies and automated engagement loops.',
      placeholderImg: '/b2b-community.png',
    },
    {
      id: 5,
      title: 'Automated CRM Architecture',
      category: 'Automation',
      role: 'Lead Digital Growth Strategist',
      outcome: 'Implemented robust GoHighLevel infrastructure with automated missed-call text-back, appointment scheduling, and lead routing for service businesses.',
      placeholderImg: '/crm-automation.png',
    },
    {
      id: 6,
      title: '$4k to $30k/mo Revenue Scaling',
      category: 'Omnichannel',
      role: 'Growth Marketing Manager',
      outcome: 'Scaled AC Wrapss from $4,000 to $30,000/month in year one by deploying a full-stack growth engine including local SEO, website redevelopment, Google Ads, and CRM automations.',
      placeholderImg: '/ac-wrapss.png',
    }
  ];

  const filteredProofs = activeFilter === 'All' 
    ? proofs 
    : proofs.filter(proof => proof.category === activeFilter);

  return (
    <section id="proof" className="proof-vault-section">
      <div className="proof-container">
        <h2 className="section-title">PROOF VAULT</h2>
        
        <div className="filters">
          {filters.map(filter => (
            <button 
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="proof-grid">
          <AnimatePresence>
            {filteredProofs.map(proof => (
              <ProofCard key={proof.id} proof={proof} onClick={setSelectedProof} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProof && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedProof(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="modal-content"
              onClick={e => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProof(null)}>×</button>
              {selectedProof.gallery ? (
                <div className="modal-gallery">
                  {selectedProof.gallery.map((img, i) => (
                    <img key={i} src={img} alt={`${selectedProof.title} ${i+1}`} className="modal-gallery-image" />
                  ))}
                </div>
              ) : (
                <img src={selectedProof.placeholderImg} alt={selectedProof.title} className="modal-image" />
              )}
              <div className="modal-details">
                <span className="modal-category">{selectedProof.category}</span>
                <h2>{selectedProof.title}</h2>
                <div className="modal-info-grid">
                  <div className="info-block">
                    <h4>My Role</h4>
                    <p>{selectedProof.role}</p>
                  </div>
                  <div className="info-block">
                    <h4>The Outcome</h4>
                    <p className="highlight-outcome">{selectedProof.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ProofVault;
