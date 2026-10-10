import React, { useContext } from 'react'
import '../styles/landing.css'
import { Link as ScrollLink } from 'react-scroll';
import { ColorContext } from '../context/ContextShare';

function Landing() {
  const { color } = useContext(ColorContext);
  return (
    <div className="new-landing">
       <div className="bg-watermark">dev.</div>

       {/* Bottom Corners */}
       <div className="corner bl-corner" style={{ alignItems: 'center' }}>
          <div style={{ fontWeight: 600, letterSpacing: '1px', fontSize: '14px', textTransform: 'uppercase' }}>
             BASED IN KERALA, INDIA
          </div>
       </div>

       <div className="corner br-corner">
          <div className='view-all-btn-wrapper' style={{ marginTop: 0 }}>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-30} style={{ textDecoration: 'none' }}>
               <button className="view-all-btn">
                 <span className="vab-text">Let's work together</span>
                 <span className="vab-arrow">
                     <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M21.0879 12.4941L3.92134 12.4941" stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
                         <path d="M13.4863 20.0911C13.4863 16.1888 16.9231 12.5002 21.0772 12.5002" stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
                         <path d="M13.4932 4.90935C13.4932 8.81171 16.9299 12.5002 21.0841 12.5002" stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
                     </svg>
                 </span>
               </button>
            </ScrollLink>
          </div>
       </div>

       {/* Center Typography Block */}
       <div className="hero-typo">
          <div className="typo-layer behind">
             <div className="t-line t1">Crafting</div>
             <div className="t-line t2">innovative</div>
             <div className="t-line t3">builds</div>
             <div className="t-line t4">that</div>
             <div className="t-line t5">captivate</div>
             <div className="t-line t6">your</div>
             <div className="t-line t7">audience</div>
          </div>

          <div className="hero-red-box">
             <div className="rb-action">
                 <div className="rb-btn" style={{ '--dynamic-color': color }}>
                     <svg className="rb-flower" width="40" height="40" viewBox="0 0 100 100">
                       <g transform="translate(50, 50)">
                         <circle cx="0" cy="0" r="28" fill="currentColor" />
                         <rect x="-6" y="-46" width="12" height="92" fill="currentColor" rx="1" />
                         <rect x="-6" y="-46" width="12" height="92" fill="currentColor" rx="1" transform="rotate(22.5)" />
                         <rect x="-6" y="-46" width="12" height="92" fill="currentColor" rx="1" transform="rotate(45)" />
                         <rect x="-6" y="-46" width="12" height="92" fill="currentColor" rx="1" transform="rotate(67.5)" />
                         <rect x="-6" y="-46" width="12" height="92" fill="currentColor" rx="1" transform="rotate(90)" />
                         <rect x="-6" y="-46" width="12" height="92" fill="currentColor" rx="1" transform="rotate(112.5)" />
                         <rect x="-6" y="-46" width="12" height="92" fill="currentColor" rx="1" transform="rotate(135)" />
                         <rect x="-6" y="-46" width="12" height="92" fill="currentColor" rx="1" transform="rotate(157.5)" />
                       </g>
                     </svg>
                 </div>
                 <ScrollLink to="services" smooth={true} duration={500} offset={-30} style={{ textDecoration: 'none', color: 'inherit' }}>
                     <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                         What I do
                         <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M21.0879 12.4941L3.92134 12.4941" stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
                             <path d="M13.4863 20.0911C13.4863 16.1888 16.9231 12.5002 21.0772 12.5002" stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
                             <path d="M13.4932 4.90935C13.4932 8.81171 16.9299 12.5002 21.0841 12.5002" stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
                         </svg>
                     </span>
                 </ScrollLink>
             </div>
          </div>

          <div className="typo-layer front">
             <div className="t-line t1">Crafting</div>
             <div className="t-line t2">innovative</div>
             <div className="t-line t3">builds</div>
             <div className="t-line t4">that</div>
             <div className="t-line t5">captivate</div>
             <div className="t-line t6">your</div>
             <div className="t-line t7">audience</div>
          </div>
       </div>
    </div>
  )
}

export default Landing;