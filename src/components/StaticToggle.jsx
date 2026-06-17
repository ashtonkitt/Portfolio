import React from 'react';
import { useStaticMode } from '../context/StaticModeContext';
import './StaticToggle.css';

const StaticToggle = () => {
  const { isStatic, toggleStaticMode } = useStaticMode();

  return (
    <div className="static-toggle-container">
      <span className={`toggle-label ${!isStatic ? 'active' : ''}`}>Dynamic</span>
      <button 
        className={`static-toggle-btn ${isStatic ? 'is-static' : ''}`}
        onClick={toggleStaticMode}
        aria-label="Toggle static mode"
      >
        <div className="toggle-thumb" />
      </button>
      <span className={`toggle-label ${isStatic ? 'active' : ''}`}>Static</span>
    </div>
  );
};

export default StaticToggle;
