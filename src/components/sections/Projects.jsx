import React from 'react';
import { ExternalLink, Link as LinkIcon } from 'lucide-react';

const Projects = () => {
  const highlights = [
    { title: 'Film Production', category: 'Video Content', link: 'https://www.tiktok.com/@coresend/video/7215485521017965866', image: '/film_production.png', className: 'bento-large' },
    { title: 'Solar Advertising', category: 'Ad Campaign', link: 'https://drive.google.com/drive/folders/1gjkUGjwNk4-hJOu-pOyy0hj47IInjcAe?usp=sharing', image: '/solar_ads.png', className: 'bento-tall' },
    { title: 'Ad Funnels', category: 'Marketing', link: 'https://drive.google.com/drive/folders/1gbR4mLQYC2vxUugKzAKpVKyn4IZqA6nC?usp=sharing', image: '/ad_funnels.png', className: 'bento-square' },
    { title: 'Strategy Plan', category: 'Strategy', link: 'https://docs.google.com/document/d/1JLCWU2psmirODfFMMH0YwjvBdagu3KkVklEisijH0no/edit?usp=sharing', image: '/strategy_plan.png', className: 'bento-square' },
    { title: 'Kits Case Studies', category: 'Case Study', link: 'https://docs.google.com/document/d/1yusDoKIqP2-eZqA_q0g-nyz0-TzAEtXMGNx8R6QuZVA/edit?usp=sharing', image: '/case_studies.png', className: 'bento-wide' },
    { title: '2D Animation', category: 'Motion Graphics', link: 'https://www.facebook.com/reel/373209321936973?mibextid=YMEMSu', image: '/animation_visual.png', className: 'bento-wide' },
  ];

  const communityStats = [
    { title: 'Instagram Niche Page', stat: '127k', label: 'Followers', link: 'https://www.instagram.com/nftregion' },
    { title: 'Facebook Group', stat: '10k', label: 'Members', link: 'https://www.facebook.com/groups/smmapro/?mibextid=S66gvF' },
  ];

  const partnerships = [
    { name: 'Imaginary Ones', role: 'Marketing Team', link: 'https://x.com/Imaginary_Ones' },
    { name: 'Jungle Freaks', role: 'Marketing Team', link: 'https://x.com/JungleFreaksNFT' },
    { name: 'HyTopia', role: 'Marketing Team', link: 'https://x.com/HYTOPIAgg' },
    { name: '3DFranken Punks', role: 'Marketing Team', link: 'https://x.com/3dFrankenPunks' },
    { name: 'RaibbitHole', role: 'Lead Marketer', link: 'https://x.com/RaibbitHole' },
    { name: 'Hydex.gg Blog', role: 'Content Writer', link: 'https://medium.com/exploring-hydex-buy-swap-sell-nfts-2a1f1889c4f5' },
  ];

  return (
    <section id="work" className="wireframe-section">
      <div className="section-header">
        <h2>Selected Work</h2>
        <span className="section-subtitle">Portfolio Highlights & Case Studies</span>
      </div>
      
      <div className="bento-grid">
        {highlights.map((item, idx) => (
          <a key={idx} href={item.link} target="_blank" rel="noreferrer" className={`bento-card ${item.className}`}>
            <img src={item.image} alt={item.title} className="bento-image" />
            <div className="bento-overlay">
              <div className="bento-content">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
              <div className="bento-icon">
                <ExternalLink size={24} />
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="section-header" style={{ marginTop: '80px' }}>
        <h2>Community Growth</h2>
        <span className="section-subtitle">Scaling Audiences</span>
      </div>

      <div className="stats-grid">
        {communityStats.map((stat, idx) => (
          <a key={idx} href={stat.link} target="_blank" rel="noreferrer" className="stat-card">
            <div className="stat-number">{stat.stat}</div>
            <div className="stat-details">
              <h3>{stat.title}</h3>
              <p>{stat.label}</p>
            </div>
            <ExternalLink size={20} className="external-icon-stat" />
          </a>
        ))}
      </div>

      <div className="section-header" style={{ marginTop: '80px' }}>
        <h2>Partnerships & Teams</h2>
        <span className="section-subtitle">Extended Highlights</span>
      </div>

      <div className="partnerships-grid">
        {partnerships.map((partner, idx) => (
          <a key={idx} href={partner.link} target="_blank" rel="noreferrer" className="partner-card">
            <div className="partner-info">
              <h3>{partner.name}</h3>
              <p>{partner.role}</p>
            </div>
            <LinkIcon size={18} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
