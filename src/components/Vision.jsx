import React from 'react';
import '../styles/vision.css';

const Vision = () => {
  return (
    <div className="vision-section">
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="wavy" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="40" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <div className="wavy-wrapper" style={{ filter: 'url(#wavy)' }}>
        {[...Array(30)].map((_, i) => (
          <div 
            className="ring" 
            key={i} 
            style={{ 
              width: `${(i + 1) * 60}px`, 
              height: `${(i + 1) * 60}px`,
              animationDelay: `${i * 0.12}s` 
            }}
          ></div>
        ))}
      </div>
      <div className="vision-text-container">
        <h2 className="vision-text phrase-1">Visuals into Pure Magic.</h2>
        <h2 className="vision-text phrase-2">Brands into Icons.</h2>
        <h2 className="vision-text phrase-3">Ideas into Reality.</h2>
        <h2 className="vision-text phrase-4">Visions into Excellence.</h2>
      </div>
    </div>
  );
};

export default Vision;
