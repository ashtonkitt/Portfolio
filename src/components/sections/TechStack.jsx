import React from 'react';

function TechStack() {
  const categories = [
    {
      title: 'AI & Agentic Workflows',
      tools: ['Claude 3.5 Sonnet / Opus', 'ChatGPT Enterprise', 'OpenAI Assistants API', 'Cursor (AI IDE)', 'Perplexity Pro', 'V0 by Vercel', 'Midjourney', 'ElevenLabs', 'HeyGen', 'Agentic Automations']
    },
    {
      title: 'Front-End Development',
      tools: ['React.js', 'JavaScript (ES6+)', 'Node.js', 'Tailwind CSS', 'Vercel', 'GitHub', 'NPM', 'Framer Motion', 'Motion', 'Aceternity UI', 'ReactBits', 'GoodComponents', 'SVGL', 'Astro.js', 'Headless CMS']
    },
    {
      title: 'CRM & Revenue Ops',
      tools: ['GoHighLevel (Expert)', 'Salesforce', 'HubSpot', 'ActiveCampaign', 'Klaviyo', 'Zapier (Advanced)', 'Make / Integromat', 'n8n', 'Apollo.io']
    },
    {
      title: 'Growth & Paid Media',
      tools: ['Meta Ads Manager', 'Google Ads', 'TikTok Ads', 'LinkedIn Campaign Manager', 'Google Analytics 4', 'Google Tag Manager']
    },
    {
      title: 'SEO & Organic Content',
      tools: ['Ahrefs', 'SEMrush', 'Google Search Console', 'SearchAtlas', 'Screaming Frog', 'SurferSEO', 'Clearscope']
    },
    {
      title: 'Conversion & Web',
      tools: ['Figma', 'Webflow', 'WordPress', 'Cloudways', 'Shopify', 'ClickFunnels', 'Unbounce', 'Hotjar', 'VWO (A/B Testing)']
    }
  ];

  return (
    <section id="tech-stack" className="tech-stack-section">
      <div className="tech-stack-container">
        <h2 className="section-title">THE ENGINE ROOM</h2>
        <p className="tech-stack-subtitle">The software, AI models, and infrastructure I use to architect automated revenue systems.</p>
        
        <div className="tech-stack-grid">
          {categories.map((category, index) => (
            <div key={index} className="tech-category-card">
              <h3 className="category-title">{category.title}</h3>
              <div className="tools-list">
                {category.tools.map((tool, idx) => (
                  <span key={idx} className="tool-pill">{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
