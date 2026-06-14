import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

function MyStory() {
  const targetRef = useRef(null);
  
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleResize = () => setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const storyEvents = [
    { 
      year: '2017', 
      text: 'Early Sales & E-Commerce Arbitrage',
      description: 'Generated $80,000+ in 9 months through consumer electronics arbitrage, developing foundational skills in negotiation, sourcing, and direct sales right out of high school.'
    },
    { 
      year: '2017 - 2019', 
      text: 'Experiential & Event Marketing',
      description: 'Led grassroots event marketing for massive regional promoters (National Entity, Cinematic Events). Learned how to build hype, drive ticket sales, and mobilize physical audiences at scale.'
    },
    { 
      year: '2017 - 2021', 
      text: 'E-Commerce Growth Specialist',
      description: 'Drove a 250% increase in sales and $500K in incremental revenue for Daily Warm through structured email funnels, rigorous A/B creative testing, and multi-channel paid acquisition across Meta and Pinterest.'
    },
    { 
      year: '2019 - 2021', 
      text: 'Viral Audience Acquisition',
      description: 'Engineered viral content distribution frameworks to scale massive digital audiences, reaching over 1M+ followers on Twitter and 500K+ on Instagram.'
    },
    { 
      year: '2021 - 2022', 
      text: 'Digital Marketing Foundations',
      description: 'Transitioned from organic audience building to direct-response monetization. Built my first comprehensive funnels, local SEO strategies, and high-converting landing pages.'
    },
    { 
      year: '2023', 
      text: 'Brand & Acquisition Director',
      description: 'Architected full-scale rebrands and acquisition strategies for Solar Sense Solutions and Flare Solar. Decreased CAC by 20% while lifting conversion rates by 18% through educational content funnels.'
    },
    { 
      year: '2023 - 2024', 
      text: 'Automation & CRM Architecture',
      description: 'Built robust GoHighLevel automation stacks and engineered comprehensive lead-nurturing funnels designed to dominate local Google Maps pack rankings.'
    },
    { 
      year: '2024 - 2025', 
      text: 'Performance Marketing & Paid Media',
      description: 'Managed performance marketing and Meta Ads budgets with strict KPI tracking. Refined customer acquisition costs (CAC) against lifetime value (LTV) to build predictable scaling systems.'
    },
    { 
      year: '2025 - Present', 
      text: 'Sales & Revenue Operations',
      description: 'Developed strict closing discipline and objection-handling in a high-velocity sales environment, bridging the critical gap between marketing-generated pipeline and closed-won revenue.'
    },
    { 
      year: '2026', 
      text: 'Full-Stack Growth Strategist',
      description: 'Consolidated deep expertise across organic audience growth, paid acquisition, technical CRM automation, and direct sales into a unified, predictable revenue engine.'
    },
  ];

  const windowWidth = windowSize.width;
  const sectionHeight = storyEvents.length * 100; // 100vh per card
  const TOTAL_WIDTH = storyEvents.length * windowWidth;
  
  const xTransform = useTransform(
    scrollYProgress, 
    [0, 1], 
    ["0px", `-${TOTAL_WIDTH - windowWidth}px`]
  );
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Generate Circuit Board SVG Path
  let pathD = `M 0 50 `;
  const nodes = [];

  storyEvents.forEach((event, i) => {
    const isTop = i % 2 === 0;
    const targetY = isTop ? 20 : 80;
    const prevY = i === 0 ? 50 : (isTop ? 80 : 20);
    
    const cardCenterX = (i * windowWidth) + (windowWidth / 2);
    
    // Segment where card sits
    const segmentRadius = Math.min(400, windowWidth * 0.35); // Responsive horizontal line
    const startX = cardCenterX - segmentRadius;
    const endX = cardCenterX + segmentRadius;
    
    const prevEndX = i === 0 ? 0 : ((i - 1) * windowWidth) + (windowWidth / 2) + segmentRadius;
    
    const dirY = targetY > prevY ? 1 : -1;
    const diffY = Math.abs(targetY - prevY);
    const corner = Math.min(30, diffY / 2); // Prevent overlapping loops
    
    if (i === 0) {
      pathD += `L ${startX - corner} 50 `;
      pathD += `Q ${startX} 50, ${startX} ${50 + corner * dirY} `;
      pathD += `L ${startX} ${targetY - corner * dirY} `;
      pathD += `Q ${startX} ${targetY}, ${startX + corner} ${targetY} `;
    } else {
      const midX = prevEndX + (startX - prevEndX) / 2;
      pathD += `L ${midX - corner} ${prevY} `;
      pathD += `Q ${midX} ${prevY}, ${midX} ${prevY + corner * dirY} `;
      pathD += `L ${midX} ${targetY - corner * dirY} `;
      pathD += `Q ${midX} ${targetY}, ${midX + corner} ${targetY} `;
    }
    
    // Draw the horizontal segment, stop exactly on the last node
    if (i === storyEvents.length - 1) {
      pathD += `L ${cardCenterX} ${targetY} `;
    } else {
      pathD += `L ${endX} ${targetY} `;
    }
    
    nodes.push({
      event,
      isTop,
      cx: cardCenterX,
      y: targetY
    });
  });

  // Track active card for the navigation
  const [activeIndex, setActiveIndex] = useState(0);
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map 0-1 progress to the array index
    const newIndex = Math.round(latest * (storyEvents.length - 1));
    setActiveIndex(newIndex);
  });

  const scrollToCard = (index) => {
    if (!targetRef.current) return;
    // Calculate absolute position on the document
    const rect = targetRef.current.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    
    // Each card represents exactly 100vh of scroll distance
    const scrollTarget = sectionTop + (index * windowSize.height);
    
    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth'
    });
  };

  return (
    <section id="story" className="horizontal-scroll-section" style={{ height: `${sectionHeight}vh` }} ref={targetRef}>
      
      <div className="sticky-container">
        <h2 className="section-title" style={{ position: 'absolute', top: 'clamp(10px, 3vh, 40px)', left: '0', width: '100%', textAlign: 'center', zIndex: 10, margin: 0, fontSize: 'clamp(2rem, 6vh, 3rem)' }}>THE JOURNEY</h2>
        
        <motion.div className="horizontal-map" style={{ width: `${TOTAL_WIDTH}px`, x: xTransform }}>
          
          <div className="map-svg-container">
            <svg viewBox={`0 0 ${TOTAL_WIDTH} 100`} preserveAspectRatio="none" className="circuit-board-svg">
              <path 
                d={pathD} 
                fill="transparent" stroke="rgba(0,0,0,0.1)" strokeWidth="2" strokeDasharray="4 4" vectorEffect="non-scaling-stroke"
              />
              <motion.path 
                d={pathD} 
                fill="transparent" stroke="var(--orange-dark)" strokeWidth="4" vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
              />
            </svg>
          </div>

          <div className="map-nodes">
            {nodes.map((node, index) => {
              const { event, isTop, cx } = node;

              return (
                <div 
                  key={index} 
                  className={`circuit-card-wrapper ${isTop ? 'circuit-card-top' : 'circuit-card-bottom'}`}
                  style={{ left: `${cx}px` }}
                >
                  <div className="circuit-node-dot"></div>
                  <div className="circuit-card card-hover">
                    <span className="circuit-year">{event.year}</span>
                    <h3 className="circuit-text">{event.text}</h3>
                    <p className="circuit-description">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
        </motion.div>
        
        {/* Timeline Navigation Mini-Map */}
        <div className="timeline-nav-container">
          {storyEvents.map((event, i) => (
            <div 
              key={i}
              className={`timeline-nav-dot ${activeIndex === i ? 'active' : ''}`}
              onClick={() => scrollToCard(i)}
            >
              <span className="timeline-nav-tooltip">{event.year}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MyStory;
