import React, { useContext } from 'react'
import '../styles/experience.css'
import { ColorContext } from '../context/ContextShare';

const FlowerIcon = () => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g fill="currentColor" transform="translate(50 50)">
            <rect x="-15" y="-45" width="30" height="90" rx="4" />
            <rect x="-15" y="-45" width="30" height="90" rx="4" transform="rotate(60)" />
            <rect x="-15" y="-45" width="30" height="90" rx="4" transform="rotate(120)" />
        </g>
    </svg>
);

function Experience() {
    const { color } = useContext(ColorContext);

    return (
        <div className='experience'>
            
            {/* SVG Filters for Motion Blur */}
            <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
                <filter id="motion-blur-1">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5 0" />
                </filter>
                <filter id="motion-blur-2">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8 0" />
                </filter>
                <filter id="motion-blur-3">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3 0" />
                </filter>
            </svg>

            {/* Background Floating Flowers */}
            <div className="floating-flower flower-1" style={{ color: color }}>
                <FlowerIcon />
            </div>
            <div className="floating-flower flower-2" style={{ color: color }}>
                <FlowerIcon />
            </div>
            <div className="floating-flower flower-3" style={{ color: color }}>
                <FlowerIcon />
            </div>

            <div className='experience-container'>
                
                {/* Left Side: Huge Text + Skills */}
                <div className='experience-left' data-aos="fade-up" data-aos-duration="1400">
                    <div className="exp-huge-text">
                        EXP<br/>ERIE<br/>NCE
                    </div>
                    <div className="exp-skills-and-venn">
                        <div className="exp-skills-list">
                            <p>Design <span style={{ color: color }}>thinking</span></p>
                            <p><span style={{ color: color }}>Frontend</span> development</p>
                            <p>Visual <span style={{ color: color }}>communication</span></p>
                            <p>Responsive <span style={{ color: color }}>design</span></p>
                            <p><span style={{ color: color }}>Client</span> understanding</p>
                            <p><span style={{ color: color }}>Problem</span> solving</p>
                        </div>
                        <div className="venn-diagram">
                            <div className="venn-circle circle-1" style={{ backgroundColor: color }}></div>
                            <div className="venn-circle circle-2" style={{ backgroundColor: color }}></div>
                            <div className="venn-circle circle-3" style={{ backgroundColor: color }}></div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Diagonally Staggered Timeline */}
                <div className='experience-right'>
                    <div className='exp-item item-1'>
                        <div className="exp-connector"></div>
                        <div className="exp-content">
                            <div className="exp-item-header">
                                <span className="exp-dot" style={{ backgroundColor: color }}></span>
                                <span className="exp-date">July 2025 — Present</span>
                            </div>
                            <h4 className="exp-role">Full-Stack Developer</h4>
                            <p className="exp-company">Lunar Enterprises Trivandrum</p>
                        </div>
                    </div>

                    <div className='exp-item item-2'>
                        <div className="exp-connector"></div>
                        <div className="exp-content">
                            <div className="exp-item-header">
                                <span className="exp-dot" style={{ backgroundColor: color }}></span>
                                <span className="exp-date">Feb 2025 — July 2025</span>
                            </div>
                            <h4 className="exp-role">Junior Software Engineer</h4>
                            <p className="exp-company">Neyndra Global Solutions</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience
