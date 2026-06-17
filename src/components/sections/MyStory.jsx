import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';

function MyStory() {
  const targetRef = useRef(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  
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
    
    // Close modal on Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedEvent(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedEvent]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const storyEvents = [
    { 
      year: '2017', 
      text: 'Early Sales & E-Commerce Arbitrage',
      description: "My journey didn't start with a marketing degree; it started with raw hustle. Right out of high school, I recognized a pricing gap in consumer electronics across digital marketplaces. By carefully sourcing undervalued inventory and mastering direct sales, I flipped over $80,000 in just 9 months.",
      fullStory: [
        "My journey didn't start with a marketing degree or a corporate internship; it started with raw hustle and a keen eye for market inefficiencies. Right out of high school, I recognized a massive pricing gap in consumer electronics scattered across various digital marketplaces like eBay, Craigslist, and specialized forums.",
        "Instead of just observing, I built a systematized operation. I meticulously sourced undervalued, high-demand inventory, negotiated aggressively on buy prices, and mastered the art of direct, rapid-turnaround sales. Within just 9 months, I had flipped over $80,000 in inventory, operating entirely out of my bedroom.",
        "This wasn't just about making a quick profit—it was my foundational bootcamp in human psychology, negotiation, and supply-and-demand mechanics. I learned firsthand what makes a buyer hesitate, what builds instant trust, and exactly what triggers a purchasing decision. Those fundamental lessons in perceived value still dictate how I architect high-converting, multi-million dollar campaigns for the organizations I join today."
      ]
    },
    { 
      year: '2017 - 2019', 
      text: 'Experiential & Event Marketing',
      description: "Wanting to understand how to move people at scale, I dove headfirst into the high-stakes world of nightlife and experiential marketing. Working alongside massive regional promoters like National Entity and Cinematic Events, my job was simple but ruthless: manufacture hype from thin air and put bodies in rooms.",
      fullStory: [
        "Wanting to understand how to move people at scale, I dove headfirst into the high-stakes, hyper-competitive world of nightlife and experiential marketing. I began working alongside massive regional promoters like National Entity and Cinematic Events, where the stakes were incredibly high and the feedback loop was instantaneous.",
        "My job was simple on paper but ruthless in execution: manufacture hype from thin air and put physical bodies in rooms. There was no relying on multi-touch attribution models; if the venue was empty, you failed. I learned how to identify emerging cultural trends, mobilize massive physical audiences through aggressive grassroots campaigns, and turn fleeting digital attention into sold-out, hard-ticket sales.",
        "This era taught me the raw mechanics of momentum. I discovered how to leverage influencer networks, engineer scarcity, and create genuine FOMO. For an employer today, this translates directly to my ability to engineer genuine excitement and unbreakable urgency around company product launches and high-stakes initiatives."
      ]
    },
    { 
      year: '2017 - 2021', 
      text: 'E-Commerce Growth Specialist',
      description: "I took my understanding of physical sales and transitioned into the digital space, spearheading growth for an emerging e-commerce brand, Daily Warm. I didn't just want to run ads; I wanted to build an internal ecosystem. By engineering structured email sequences and rigorously A/B testing creative assets, I scaled their sales by 250%.",
      fullStory: [
        "Realizing the limitations of physical, localized marketing, I took my understanding of human psychology and transitioned aggressively into the digital space. I spearheaded growth for an emerging e-commerce brand, Daily Warm. My mandate wasn't just to 'run ads'—it was to build a self-sustaining internal revenue ecosystem.",
        "I immediately recognized that the company was bleeding revenue at the bottom of the funnel. I architected and deployed complex, behavior-triggered email sequences designed to relentlessly recapture abandoned carts and re-engage dormant buyers. Simultaneously, I established a rigorous A/B testing protocol for our creative assets across Meta and Pinterest, killing losing ads mercilessly and scaling winners with surgical precision.",
        "The results were transformative. By focusing entirely on unit economics and backend retention, I scaled their top-line sales by 250% and drove over $500K in strictly incremental revenue. This experience taught me that true growth doesn't come from a single viral ad—it comes from compounding, data-driven optimization and flawless retention mechanics driven by a dedicated team."
      ]
    },
    { 
      year: '2019 - 2021', 
      text: 'Viral Audience Acquisition',
      description: "Fascinated by the sheer scale of the internet, I became obsessed with organic reach. I wanted to know exactly why certain content exploded while the rest faded into obscurity. I started reverse-engineering social algorithms, building viral distribution frameworks that eventually scaled a network of digital assets to over 1.69 million followers.",
      fullStory: [
        "Fascinated by the sheer, unbridled scale of the internet, I became obsessed with organic reach. I didn't want to just buy attention; I wanted to understand exactly why certain content exploded into cultural phenomena while the rest faded into obscurity. I began systematically reverse-engineering social algorithms on platforms like Twitter and Instagram.",
        "Through relentless testing of content formats, posting velocities, and engagement triggers, I built proprietary viral distribution frameworks. Using these systems, I rapidly scaled a network of owned digital assets to a massive audience of over 1.69 million active followers. It was an exercise in pure algorithmic leverage.",
        "I mastered the art of the pattern interrupt, high-retention hook creation, and leveraging native platform features to hack organic reach. For the organizations I work with, this means I don't sit around and guess what will perform. I engineer content that is mathematically designed to capture attention and exploit platform algorithms for maximum visibility, driving tangible brand growth."
      ]
    },
    { 
      year: '2021 - 2022', 
      text: 'Digital Marketing Foundations',
      description: "Having mastered how to capture attention, I needed to master how to monetize it. I pivoted hard into direct-response marketing, translating organic reach into predictable pipeline. I built my first end-to-end sales funnels, dominated local SEO rankings, and obsessively split-tested landing pages.",
      fullStory: [
        "Having mastered how to capture massive amounts of attention, I realized the critical next step: I needed to master how to monetize it. I pivoted hard into the ruthless world of direct-response marketing, with the singular goal of translating raw organic reach into predictable, highly-qualified sales pipeline for the business.",
        "I began building my first true end-to-end sales funnels, architecting every single touchpoint from the first ad impression to the final checkout page. I dove deep into local SEO, dominating search rankings to capture high-intent, bottom-of-funnel traffic that was ready to buy. I became obsessed with Conversion Rate Optimization (CRO), relentlessly split-testing headlines, button colors, and VSLs to squeeze every possible ounce of conversion out of a click.",
        "This period bridged the critical gap between 'getting views' and 'getting paid.' It ingrained in me the philosophy that the most beautiful, creative campaign in the world is completely useless if it doesn't drive measurable, positive ROI for the company."
      ]
    },
    { 
      year: '2023', 
      text: 'Brand & Acquisition Director',
      description: "I stepped into an internal Director role to overhaul the acquisition engines for two rapidly growing solar companies: Solar Sense Solutions and Flare Solar. The industry was plagued by aggressive, high-friction sales pitches. I flipped the script. I architected full-scale rebrands and deployed educational content funnels.",
      fullStory: [
        "Ready for a larger operational challenge, I stepped into an internal Director-level role to completely overhaul the acquisition engines for two rapidly growing solar companies: Solar Sense Solutions and Flare Solar. The solar industry at the time was plagued by aggressive, high-friction, door-knocking sales pitches that alienated consumers.",
        "I decided to entirely flip the script. I led the internal team to architect full-scale rebrands for both entities, shifting their positioning from 'pushy commodity sellers' to 'trusted energy advisors.' I deployed sophisticated, multi-stage educational content funnels that systematically answered buyer objections and built massive trust long before the prospect ever spoke to a sales rep.",
        "The impact was immediate and undeniable. We lifted our inbound lead conversion rates by a staggering 18%, while simultaneously slashing our overall Customer Acquisition Cost (CAC) by a full 20%. I proved at scale that positioning the company as an absolute authority isn't just good PR—it is objectively the most profitable acquisition strategy an organization can deploy."
      ]
    },
    { 
      year: '2023 - 2024', 
      text: 'Automation & CRM Architecture',
      description: "I realized a painful truth: generating leads is completely pointless if your team's follow-up is broken. I dove deep into the technical side of growth, mastering GoHighLevel to architect bulletproof CRM automations. I built missed-call text-back systems and dynamic lead-nurturing sequences.",
      fullStory: [
        "While managing lead generation, I realized a painful truth: generating a massive volume of leads is completely pointless if the internal follow-up infrastructure is broken. I watched companies burn through marketing budgets simply because their sales teams couldn't respond fast enough. I knew I had to fix the leaks across departments.",
        "I dove deep into the highly technical side of growth architecture, mastering platforms like GoHighLevel to build bulletproof, automated CRM ecosystems. I architected complex missed-call text-back systems, dynamic multi-channel lead-nurturing sequences (SMS, Email, Voicemail drops), and automated review generation campaigns that helped the organization completely dominate local Google Maps pack rankings.",
        "By systematically removing human error and latency from the follow-up process, I ensured that no lead ever slipped through the cracks. This infrastructure work exponentially maximized the ROI of every single marketing dollar spent, turning leaky buckets into watertight revenue machines for the business."
      ]
    },
    { 
      year: '2024 - 2025', 
      text: 'Performance Marketing & Paid Media',
      description: "I took my systems-thinking approach and applied it directly to paid media, managing strict performance marketing budgets in highly competitive spaces. It ceased being about 'running ads' and became a ruthless game of unit economics, optimizing Meta Ads to continuously drive down CAC.",
      fullStory: [
        "Armed with airtight backend systems, I took my highly analytical approach and applied it directly to front-end paid media. I began managing strict performance marketing budgets for the organization in brutally competitive, high-ticket spaces. At this level, it ceased being about 'running ads' and became a ruthless, high-stakes game of unit economics.",
        "I implemented rigorous, full-funnel KPI tracking mechanisms to monitor every cent of spend. I optimized complex Meta Ad account structures, utilizing dynamic creative testing and precise audience exclusions to continuously drive down Customer Acquisition Cost (CAC) while maximizing Lifetime Value (LTV) through upsell pathways.",
        "By treating ad spend as a strict mathematical equation rather than an art project, I eliminated emotional decision-making. I built predictable, highly scalable acquisition systems that leadership could rely on to confidently forecast revenue and grow the business month over month."
      ]
    },
    { 
      year: '2025 - Present', 
      text: 'Sales & Revenue Operations',
      description: "To truly engineer end-to-end growth, I knew I had to understand the final mile. I stepped directly onto the sales floor in a high-velocity environment. I mastered objection-handling, closing discipline, and pipeline management, bridging the gap between marketing and sales departments.",
      fullStory: [
        "Despite having mastered traffic generation and automated follow-up, I knew there was one final frontier left to conquer to truly engineer end-to-end growth: the final mile. To understand exactly why leads convert or die, I stepped out from behind the marketing dashboard and directly onto the sales floor in a cutthroat, high-velocity sales environment.",
        "I immersed myself in the psychology of the close. I mastered live objection-handling, rigorous closing discipline, script optimization, and pipeline management. I learned exactly what information a sales rep needs from the marketing team to confidently close a deal, and exactly how poor lead quality destroys floor morale.",
        "This was the missing puzzle piece. By understanding exactly what happens when a lead finally gets on the phone, I was able to bridge the massive, critical gap that exists in most companies between a marketing-generated prospect and closed-won revenue. I learned how to ensure that marketing and sales departments operate as a single, frictionless, unstoppable machine."
      ]
    },
    { 
      year: '2026 - Present', 
      text: 'Full-Stack Growth Strategist',
      description: "Today, I operate as an internal Full-Stack Growth Strategist. I don't just bring isolated skills; I bring a decade of trenches experience spanning organic audience building, paid media execution, complex CRM automation, and direct sales. I synthesize these disciplines into a single, unified engine tailored to the company's goals.",
      fullStory: [
        "Today, I operate as a true internal Full-Stack Growth Strategist. I don't just bring a single isolated skill to a team like 'just SEO' or 'just Facebook ads.' Instead, I bring a full decade of trenches experience spanning organic audience building, aggressive paid media execution, complex CRM automation architecture, and direct, high-ticket sales.",
        "I synthesize these distinct, highly specialized disciplines into a single, unified growth engine for the organization I'm part of. I look at the company holistically, collaborating with cross-functional teams to identify the exact bottlenecks—whether it's top-of-funnel traffic, middle-of-funnel friction, or bottom-of-funnel sales inefficiency—and I deploy the exact right strategy to fix it.",
        "Whether a company needs to scale lead generation to the moon, automate manual follow-up processes, or completely tear down and rebuild acquisition infrastructure from scratch, I build predictable, data-driven systems that turn raw attention into measurable, compounding revenue for the organization."
      ]
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
  let pathD = ``;
  const nodes = [];

  storyEvents.forEach((event, i) => {
    const isTop = i % 2 === 0;
    const targetY = isTop ? windowSize.height * 0.2 : windowSize.height * 0.9;
    const prevY = isTop ? windowSize.height * 0.9 : windowSize.height * 0.2;
    
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
      pathD += `M ${cardCenterX} ${targetY} `;
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
    // Only use vertical scroll progress for active index on desktop
    if (window.innerWidth > 992) {
      const newIndex = Math.round(latest * (storyEvents.length - 1));
      setActiveIndex(newIndex);
    }
  });

  const scrollToCard = (index) => {
    if (window.innerWidth <= 992) {
      // Mobile horizontal scroll
      const container = document.querySelector('.horizontal-map');
      if (container) {
        const cardWidth = window.innerWidth * 0.8 + 20; // width + gap
        container.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
        setActiveIndex(index);
      }
      return;
    }

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

  const scrollMobileTo = (direction) => {
    const newIndex = direction === 'next' ? activeIndex + 1 : activeIndex - 1;
    if (newIndex >= 0 && newIndex < storyEvents.length) {
      scrollToCard(newIndex);
    }
  };

  // JS Scroll Snapping for the timeline - Re-added with longer timeout for smoothness
  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (!targetRef.current) return;
        
        const rect = targetRef.current.getBoundingClientRect();
        
        // Only snap if the timeline section is completely filling the viewport
        const isInsideSection = rect.top <= 0 && rect.bottom >= window.innerHeight;
        
        if (isInsideSection) {
          const sectionTop = rect.top + window.scrollY;
          const currentScroll = window.scrollY;
          
          const scrollDistanceIntoSection = currentScroll - sectionTop;
          const nearestIndex = Math.round(scrollDistanceIntoSection / windowSize.height);
          
          // Disable JS snapping on mobile where we use CSS horizontal scroll snapping
          if (window.innerWidth <= 992) return;
          
          // Clamp index to available cards
          const safeIndex = Math.max(0, Math.min(nearestIndex, storyEvents.length - 1));
          const targetScroll = sectionTop + (safeIndex * windowSize.height);
          
          // Only snap if we're off by more than 50 pixels to prevent micro-jumps
          if (Math.abs(currentScroll - targetScroll) > 50) {
            window.scrollTo({
              top: targetScroll,
              behavior: 'smooth'
            });
          }
        }
      }, 500); // Wait 500ms after scroll ends before snapping (allows trackpad momentum to stop)
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [windowSize.height, storyEvents.length]);

  return (
    <section id="story" className="horizontal-scroll-section" style={{ height: `${sectionHeight}vh` }} ref={targetRef}>
      
      <div className="sticky-container">
        <h2 className="section-title" style={{ position: 'absolute', top: 'clamp(10px, 3vh, 40px)', left: '0', width: '100%', textAlign: 'center', zIndex: 10, margin: 0, fontSize: 'clamp(2rem, 6vh, 3rem)' }}>MY JOURNEY</h2>
        
        {/* Mobile Navigation Arrows */}
        {activeIndex > 0 && (
          <button className="mobile-nav-arrow arrow-prev" onClick={() => scrollMobileTo('prev')}>
            &larr;
          </button>
        )}
        {activeIndex < storyEvents.length - 1 && (
          <button className="mobile-nav-arrow arrow-next" onClick={() => scrollMobileTo('next')}>
            &rarr;
          </button>
        )}

        <motion.div 
          className="horizontal-map" 
          style={{ width: `${TOTAL_WIDTH}px`, x: xTransform }}
          onScroll={(e) => {
            if (window.innerWidth <= 992) {
              const scrollLeft = e.target.scrollLeft;
              const cardWidth = window.innerWidth * 0.8;
              const index = Math.round(scrollLeft / cardWidth);
              setActiveIndex(Math.max(0, Math.min(index, storyEvents.length - 1)));
            }
          }}
        >
          
          <div className="map-svg-container">
            <svg viewBox={`0 0 ${TOTAL_WIDTH} ${windowSize.height}`} className="circuit-board-svg">
              <path 
                d={pathD} 
                fill="transparent" stroke="rgba(0,0,0,0.1)" strokeWidth="2" strokeDasharray="4 4"
              />
              <motion.path 
                d={pathD} 
                fill="transparent" stroke="var(--orange-dark)" strokeWidth="4"
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
                  <div 
                    className="circuit-card card-hover"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <span className="circuit-year">{event.year}</span>
                    <h3 className="circuit-text">{event.text}</h3>
                    <p className="circuit-description">{event.description}</p>
                    <span className="read-more-hint">Read full story &rarr;</span>
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

      {/* Full-Page Story Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            className="story-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div 
              className="story-modal-container"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="story-modal-close" onClick={() => setSelectedEvent(null)}>
                &times;
              </button>
              <div className="story-modal-content">
                <span className="modal-year">{selectedEvent.year}</span>
                <h2 className="modal-title">{selectedEvent.text}</h2>
                <div className="modal-body">
                  {selectedEvent.fullStory.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default MyStory;
