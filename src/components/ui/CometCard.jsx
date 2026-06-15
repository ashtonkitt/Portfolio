import React, { useRef, useState } from 'react';

export const CometCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate rotation based on mouse position relative to center
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const rotateY = ((mouseX / width) - 0.5) * 30; // Max tilt angle
    const rotateX = ((mouseY / height) - 0.5) * -30;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    // Reset back to flat when mouse leaves
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`comet-card-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1200px',
        width: '100%',
        height: '100%',
        display: 'flex',
      }}
    >
      <div
        className="comet-card-inner"
        style={{
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: isHovering ? 'none' : 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          willChange: 'transform',
        }}
      >
        <div style={{ width: '100%', height: '100%', transform: 'translateZ(20px)' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
