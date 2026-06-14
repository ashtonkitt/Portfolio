import { useEffect, useRef } from 'react';

export default function SmoothCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (cursorRef.current) {
        // Use direct translate3d for the absolute lowest latency hardware-accelerated movement
        cursorRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;

        // Determine if we are hovering over a light area
        const isLightArea = e.target.closest('.side-right, .main-content, .resume-page');
        
        // Determine if we are hovering over a dark button/element within a light area
        const isDarkElement = e.target.closest('.cert-tag, .filter-btn.active, .timeline-dot');
        
        if (isLightArea && !isDarkElement) {
          cursorRef.current.style.backgroundColor = 'var(--text-dark)';
        } else {
          cursorRef.current.style.backgroundColor = 'var(--text-white)';
        }
      }
    };

    // Use { passive: true } to ensure the event listener doesn't block scrolling/rendering
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor-dot"
      style={{
        backgroundColor: 'var(--text-white)'
      }}
    />
  );
}
