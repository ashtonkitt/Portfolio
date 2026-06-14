import React from 'react';

function FeaturedProjects() {
  const projects = [
    {
      title: 'Kits Inc',
      type: 'Marketing Infrastructure & Growth Systems',
      problem: 'SMBs needing a complete, scalable digital presence, lead generation funnel, and CRM without dealing with 5 different vendors.',
      strategy: 'Designed and deployed custom WordPress websites, integrated GoHighLevel CRM, and built automated lead capture systems.',
      result: 'Delivered end-to-end revenue infrastructure for service-based and local businesses.',
      link: '#'
    },
    {
      title: 'Daily Warm',
      type: 'Performance Marketing',
      problem: 'High CPA and low retention rate for their flagship product.',
      strategy: 'Redesigned the entire landing page experience and implemented a post-purchase email sequence.',
      result: 'Lowered CPA by 38% and increased LTV by 22% within 90 days.',
      link: '#'
    },
    {
      title: 'Solar Sense',
      type: 'Branding & Lead Generation',
      problem: 'Local competitors were dominating search results, making inbound acquisition impossible.',
      strategy: 'Executed a local SEO domination strategy alongside targeted Google Search Ads.',
      result: 'Ranked #1 for 15+ local commercial keywords, driving 100+ exclusive inbound leads/mo.',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="featured-projects-section">
      <div className="projects-container">
        <h2 className="section-title">FEATURED PROJECTS</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-type">{project.type}</span>
              </div>
              <div className="project-body">
                <div className="project-detail">
                  <h4>Problem</h4>
                  <p>{project.problem}</p>
                </div>
                <div className="project-detail">
                  <h4>Strategy</h4>
                  <p>{project.strategy}</p>
                </div>
                <div className="project-detail">
                  <h4>Result</h4>
                  <p className="highlight-result">{project.result}</p>
                </div>
              </div>
              <a href={project.link} className="view-case-study">View Case Study &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
