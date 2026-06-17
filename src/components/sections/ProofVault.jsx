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
              backgroundPosition: proof.imagePosition || 'center',
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
  const [activeFilter, setActiveFilter] = useState('Featured');
  const [selectedProof, setSelectedProof] = useState(null);

  const filters = ['Featured', 'Funnels', 'Websites', 'Branding', 'Revenue', 'SEO', 'Social Media', 'Automation'];

  const proofs = [
    {
      id: 1,
      title: '$8M+ Web3 Launch Volume',
      category: 'Social Media',
      role: 'Growth Lead & Strategist',
      outcome: 'Built a combined audience of 1.69 million followers across major Web3 brands and managed communities exceeding 1M members, supporting over $8M in launch revenue.',
      gallery: ['/web3-1.png', '/web3-2.png', '/web3-3.png', '/web3-4.png'],
      placeholderImg: '/web3-cover.png',
    },
    {
      id: 2,
      title: '$500k E-Com Revenue Capture',
      category: 'Revenue',
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
      category: 'Social Media',
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
      category: 'SEO',
      role: 'Growth Marketing Manager',
      outcome: 'Scaled AC Wrapss from $4,000 to $30,000/month in year one by deploying a full-stack growth engine including local SEO, website redevelopment, Google Ads, and CRM automations.',
      placeholderImg: '/ac-wrapss.png',
    },
    {
      id: 7,
      title: 'Pristine Shine Cleaning',
      category: 'Websites',
      role: 'Web Designer & Developer',
      outcome: 'Designed and developed a conversion-optimized website for a local cleaning business to capture more local leads.',
      placeholderImg: '/pristine-shine-cleaning.png',
    },
    {
      id: 8,
      title: 'Tree Removal Sacramento',
      category: 'Websites',
      role: 'Web Designer',
      outcome: 'Created a high-converting landing page structure tailored for a local tree removal service.',
      placeholderImg: '/tree-removal-sacramento.png',
    },
    {
      id: 9,
      title: 'Longmont Peak Dentistry',
      category: 'Websites',
      role: 'Web Designer & Developer',
      outcome: 'Developed a professional, modern website for a dental practice to improve patient acquisition.',
      placeholderImg: '/longmont-peak-dentistry.jpg',
    },
    {
      id: 10,
      title: 'California Plumbing',
      category: 'Websites',
      role: 'Web Developer',
      outcome: 'Redesigned the web presence for California Plumbing, optimizing for local search and mobile users.',
      placeholderImg: '/california-plumbing.jpg',
    },
    {
      id: 11,
      title: 'Austin Legal Team',
      category: 'Websites',
      role: 'Web Designer',
      outcome: 'Delivered a professional web design that builds trust and authority for a local law firm.',
      placeholderImg: '/austin-legal-team.jpg',
    },
    {
      id: 12,
      title: 'SEO Performance - Lighthouse',
      category: 'SEO',
      role: 'SEO Specialist',
      outcome: 'Achieved near-perfect Lighthouse scores, ensuring rapid load times and excellent technical SEO.',
      placeholderImg: '/seo-lighthouse.jpg',
    },
    {
      id: 13,
      title: 'Local SEO Map Pack',
      category: 'SEO',
      role: 'Local SEO Specialist',
      outcome: 'Dominated the Google Local Map Pack for target keywords, driving significant local organic traffic.',
      placeholderImg: '/seo-map-pack.jpg',
    },
    {
      id: 14,
      title: '$54k Revenue Generated',
      category: 'Revenue',
      role: 'Growth Marketer',
      outcome: 'Generated $54k in tracked revenue through optimized marketing campaigns and sales funnels.',
      placeholderImg: '/revenue-54k.png',
    },
    {
      id: 15,
      title: '$8k Revenue Captured',
      category: 'Revenue',
      role: 'Growth Marketer',
      outcome: 'Drove $8k in targeted revenue for a specialized offer, maximizing ROI on ad spend.',
      placeholderImg: '/revenue-8k.png',
    },
    {
      id: 16,
      title: 'Asset Realty Funnel',
      category: 'Funnels',
      role: 'Funnel Architect',
      outcome: 'Built a high-converting real estate lead generation funnel to capture motivated buyer and seller leads.',
      placeholderImg: '/asset-realty-funnel.jpg',
      imagePosition: 'center 90%',
    },
    {
      id: 17,
      title: 'Berkshire Funnel',
      category: 'Funnels',
      role: 'Funnel Architect',
      outcome: 'Developed a comprehensive sales funnel resulting in increased lead capture and lower CPA.',
      placeholderImg: '/berkshire-funnel.jpg',
      imagePosition: 'center 90%',
    },
    {
      id: 18,
      title: 'Beyond Carrier Funnel',
      category: 'Funnels',
      role: 'Funnel Architect',
      outcome: 'Streamlined the customer journey with a dedicated funnel that accelerated lead qualification.',
      placeholderImg: '/beyond-carrier-funnel.jpg',
      imagePosition: 'center 90%',
    },
    {
      id: 19,
      title: 'Brittney Batla Funnel',
      category: 'Funnels',
      role: 'Funnel Architect',
      outcome: 'Crafted a personal brand funnel to capture high-value leads and establish authority.',
      placeholderImg: '/brittney-batla-funnel.jpg',
      imagePosition: 'center 90%',
    },
    {
      id: 20,
      title: 'Five Boroughs Funnel',
      category: 'Funnels',
      role: 'Funnel Architect',
      outcome: 'Designed a localized marketing funnel to capture and convert regional traffic efficiently.',
      placeholderImg: '/five-boroughs-funnel.jpg',
      imagePosition: 'center 90%',
    },
    {
      id: 21,
      title: 'Huberman Funnel',
      category: 'Funnels',
      role: 'Funnel Architect',
      outcome: 'Implemented an optimized funnel strategy to effectively segment and nurture prospects.',
      placeholderImg: '/huberman-funnel.jpg',
    },
    {
      id: 22,
      title: 'Nadya Mazeli Funnel',
      category: 'Funnels',
      role: 'Funnel Architect',
      outcome: 'Developed a premium coaching/consulting funnel to drive high-ticket conversions.',
      placeholderImg: '/nadya-mazeli-funnel.jpg',
      imagePosition: 'center 90%',
    },
    {
      id: 23,
      title: 'Ebook Automation Workflow',
      category: 'Automation',
      role: 'Automation Specialist',
      outcome: 'Set up an end-to-end automated system for ebook delivery and email follow-up sequences.',
      placeholderImg: '/ebook-automation.png',
    },
    {
      id: 24,
      title: 'AC Wraps Branding',
      category: 'Branding',
      role: 'Brand Designer',
      outcome: 'Developed a cohesive and striking visual brand identity for AC Wraps to stand out locally.',
      placeholderImg: '/ac-wraps-branding.png',
    },
    {
      id: 25,
      title: 'Kangarieux Branding',
      category: 'Branding',
      role: 'Brand Designer',
      outcome: 'Crafted a unique brand identity and visual guidelines for the Kangarieux brand.',
      placeholderImg: '/kangarieux-branding.png',
    },
    {
      id: 26,
      title: 'Kits Branding',
      category: 'Branding',
      role: 'Brand Director',
      outcome: 'Designed the complete Kits brand ecosystem, including logos, typography, and visual assets.',
      placeholderImg: '/kits-branding.jpg',
    }
  ];

  const filteredProofs = activeFilter === 'Featured' 
    ? proofs.slice(0, 6) 
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
