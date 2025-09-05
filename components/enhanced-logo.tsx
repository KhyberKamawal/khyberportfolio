'use client';

import { useState } from 'react';

export const EnhancedLogo = ({ onClick }: { onClick?: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <div 
      className="enhanced-logo-container group cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onBlur={() => setIsActive(false)}
      tabIndex={0}
    >
      {/* Energy Waves */}
      <div className="energy-waves">
        <div className="energy-wave wave-1"></div>
        <div className="energy-wave wave-2"></div>
        <div className="energy-wave wave-3"></div>
        <div className="energy-wave wave-4"></div>
      </div>

      {/* Orbiting Particles */}
      <div className="particle-system">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
        <div className="particle particle-7"></div>
        <div className="particle particle-8"></div>
      </div>

      {/* Core Spinning Logo */}
      <div className={`spinning-logo ${isHovered ? 'hovered' : ''} ${isActive ? 'active' : ''}`}>
        <div className="logo-glow"></div>
        <div className="logo-text">
          <span className="k-letter k-1">K</span>
          <span className="k-letter k-2">K</span>
        </div>
      </div>
    </div>
  );
};