import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const [isHiding, setIsHiding] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // 1. A promise that resolves when the animation finishes (2.8 seconds)
    const animationPromise = new Promise((resolve) => {
      setTimeout(resolve, 2800);
    });

    // 2. A promise that resolves when all assets (images, fonts) finish loading
    const loadPromise = new Promise((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', resolve);
      }
    });

    // Wait for BOTH the animation to finish AND the site to actually load
    Promise.all([animationPromise, loadPromise]).then(() => {
      setIsHiding(true);
      setTimeout(() => {
        setIsRemoved(true);
        if (onComplete) onComplete();
      }, 500); // Wait for CSS fade-out transition
    });

    return () => {
      window.removeEventListener('load', () => {});
    };
  }, [onComplete]);

  if (isRemoved) return null;

  return (
    <div className={`p2m-loading-container ${isHiding ? 'p2m-hide' : ''}`}>
      <div className="p2m-content-wrapper">
        
        <div className="p2m-wordmark-container">
          <h1 className="p2m-wordmark-text">
            <span className="p2m-letter" id="letter-A">A</span>
            <span className="p2m-letter" id="letter-s">s</span>
            <span className="p2m-letter" id="letter-h">h</span>
            <span className="p2m-letter" id="letter-t">t</span>
            <span className="p2m-letter" id="letter-o">o</span>
            <span className="p2m-letter" id="letter-n">n</span>
            <span className="p2m-space">&nbsp;</span>
            <span className="p2m-letter" id="letter-K">K</span>
            <span className="p2m-letter" id="letter-i">i</span>
            <span className="p2m-letter" id="letter-t1">t</span>
            <span className="p2m-letter" id="letter-t2">t</span>
          </h1>
          
          <svg
            className="p2m-swoosh-svg"
            viewBox="0 0 500 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path id="swoosh" d="M 20 25 Q 250 45 480 25" pathLength="1" />
          </svg>
        </div>

        <div className="p2m-loading-indicator">
          <span>LOADING PORTFOLIO</span>
          <div className="p2m-loading-dots">
            <div className="p2m-dot"></div>
            <div className="p2m-dot"></div>
            <div className="p2m-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
