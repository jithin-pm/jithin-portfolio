import React from 'react';
import '../styles/zoom.css';

const ZoomSection = () => {
  return (
    <div className="zoom-section">
      <video 
        className="zoom-video-bg" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        {/* Replace this URL with your actual background video URL or local import */}
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="zoom-overlay"></div>
      <div className="zoom-content" data-aos="fade-up" data-aos-duration="1500">
        <h1 className="zoom-text">
          <span>zoom</span>
          <br />
          <span>into the</span>
          <br />
          <span className="highlight">extraordinary.</span>
        </h1>
      </div>
    </div>
  );
};

export default ZoomSection;
