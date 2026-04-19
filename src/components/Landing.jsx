import React, { useContext } from 'react'
import '../styles/landing.css'
import { ColorContext } from '../context/ContextShare';
import { Link as ScrollLink } from 'react-scroll';

function Landing() {
  const { color } = useContext(ColorContext);
  return (
    <>
      <div className='landing'>
        <div className='hero-text-container' data-aos="fade-up" data-aos-duration="1200">
          <h1 className='hero-main-text'>
            <span className="full-stack-wrapper">
              <span className='hero-main-text-span'>Full Stack Developer</span> <span className="hand-emoji">✌️</span>
            </span> I design and build fast, scalable, user—first web experiences —with clean code and modern <span style={{ color, fontStyle: 'italic' }}>design.</span>
          </h1>
          <p className='hero-sub-status' data-aos="fade-up" data-aos-duration="1400" data-aos-delay="200">
            FULL STACK DEVELOPER @ LUNAR ENTERPRISES
          </p>
        </div>

        <div className='marquee-group-wrapper'>
          <div className='marquee-container' data-aos="fade-in" data-aos-duration="2000">
            <div className='marquee-content'>
              <span>JITHIN PM</span>
              <span>JITHIN PM</span>
              <span>JITHIN PM</span>
              <span>JITHIN PM</span>
              <span>JITHIN PM</span>
              <span>JITHIN PM</span>
            </div>
          </div>

          <div className='marquee-container mobile-only-marquee' data-aos="fade-in" data-aos-duration="2000">
            <div className='marquee-content reverse'>
              <span>JITHINPM</span>
              <span>JITHINPM</span>
              <span>JITHINPM</span>
              <span>JITHINPM</span>
              <span>JITHINPM</span>
              <span>JITHINPM</span>
            </div>
          </div>
        </div>

        <div className='landing-footer-info' data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
          <div className='location'>BASED IN INDIA, KERALA</div>
          <div className='view-all-btn-wrapper' style={{ marginTop: 0 }}>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-30} style={{ textDecoration: 'none' }}>
              <button className="view-all-btn">
                <span className="vab-arrow">&#8212;</span>
                <span className="vab-text">LET'S WORK TOGETHER!</span>
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing