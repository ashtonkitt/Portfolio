import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ProofVault() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProof, setSelectedProof] = useState(null);

  const filters = ['All', 'Websites', 'SEO', 'Communities', 'Revenue', 'Funnels', 'Automation', 'Branding'];

  const proofs = [
    {
      id: 1,
      title: '1.69M+ Twitter Network',
      category: 'Communities',
      role: 'Growth Lead & Strategist',
      outcome: 'Built a combined audience of 1.69 million followers across 5 major Web3/NFT brands (3dFrankenPunks, 3dPunks_, RaibbitHole, JungleFreaksNFT, Imaginary_Ones).',
      placeholderImg: 'https://via.placeholder.com/600x400/cc3900/ffffff?text=Twitter+Growth+Analytics',
    },
    {
      id: 2,
      title: 'Custom WordPress Infrastructure',
      category: 'Websites',
      role: 'Lead Developer & Strategist',
      outcome: 'Designed and deployed a full-stack website integrating local SEO, resulting in a 300% increase in inbound lead volume.',
      placeholderImg: 'https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Website+Architecture',
    },
    {
      id: 3,
      title: 'GoHighLevel CRM & Automation',
      category: 'Automation',
      role: 'Systems Architect',
      outcome: 'Built automated missed-call text-back and lead nurturing workflows, recovering $150K+ in abandoned pipeline value.',
      placeholderImg: 'https://via.placeholder.com/600x400/FF7B00/ffffff?text=GHL+Workflow+Screenshot',
    },
    {
      id: 4,
      title: 'Local SEO & Search Systems',
      category: 'SEO',
      role: 'SEO Strategist',
      outcome: 'Implemented a localized content and citation strategy, securing #1 rankings for high-intent commercial keywords and driving 40K organic visitors monthly.',
      placeholderImg: 'https://via.placeholder.com/600x400/cc3900/ffffff?text=Organic+Traffic+Systems',
    },
    {
      id: 5,
      title: 'Lead Generation Funnels',
      category: 'Funnels',
      role: 'Digital Growth Strategist',
      outcome: 'Engineered a multi-step qualification funnel that decreased CPA by 45% while significantly improving lead quality.',
      placeholderImg: 'https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Lead+Generation+Funnel',
    },
    {
      id: 6,
      title: 'Paid Media Tracking & Scaling',
      category: 'Revenue',
      role: 'Performance Marketer',
      outcome: 'Implemented robust tracking infrastructure and scaled monthly recurring revenue past $100K profitably using omni-channel paid media strategies.',
      placeholderImg: 'https://via.placeholder.com/600x400/FF7B00/ffffff?text=Tracking+Dashboard',
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
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={proof.id}
                className="proof-card"
                onClick={() => setSelectedProof(proof)}
              >
                <div className="proof-card-image" style={{ backgroundImage: `url(${proof.placeholderImg})` }}></div>
                <div className="proof-card-content">
                  <span className="proof-category">{proof.category}</span>
                  <h3 className="proof-title">{proof.title}</h3>
                </div>
              </motion.div>
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
              <img src={selectedProof.placeholderImg} alt={selectedProof.title} className="modal-image" />
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
