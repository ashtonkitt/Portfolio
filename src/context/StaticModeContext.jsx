import React, { createContext, useContext, useState, useEffect } from 'react';

const StaticModeContext = createContext();

export function useStaticMode() {
  return useContext(StaticModeContext);
}

export function StaticModeProvider({ children }) {
  const [isStatic, setIsStatic] = useState(() => {
    // Check local storage for preference
    const saved = localStorage.getItem('ashton-kitt-static-mode');
    return saved === 'true';
  });
  
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth <= 992 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effective static mode is always true on mobile
  const effectiveIsStatic = isMobile ? true : isStatic;

  useEffect(() => {
    if (!isMobile) {
      localStorage.setItem('ashton-kitt-static-mode', isStatic);
    }
    if (effectiveIsStatic) {
      document.body.classList.add('static-mode');
    } else {
      document.body.classList.remove('static-mode');
    }
  }, [isStatic, effectiveIsStatic, isMobile]);

  const toggleStaticMode = () => {
    setIsStatic(prev => !prev);
  };

  return (
    <StaticModeContext.Provider value={{ isStatic: effectiveIsStatic, toggleStaticMode }}>
      {children}
    </StaticModeContext.Provider>
  );
}
