import React, { useContext } from 'react'
import '../styles/about.css'
import { ColorContext } from '../context/ContextShare';
import FloatingSkills from './FloatingSkills';

import { PiHandWaving } from "react-icons/pi";
import { HiOutlineSparkles } from 'react-icons/hi';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { LuPenTool, LuGlobe, LuFingerprint } from 'react-icons/lu';
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2';

function About() {
    const { color } = useContext(ColorContext);
    return (
        <>
            <div className="about">
                <div className='text-container' data-aos="zoom-in" data-aos-duration="1600" >
                    <h5 style={{ color }} >Know more</h5>
                    <h1>ABOUT ME</h1>
                </div>
                <div className='about-me'>

                    <div className='about-me-description' data-aos="fade-up" data-aos-duration="1200">
                        <div className="new-intro-container">
                            <h2 className="intro-text">
                                Hi, I am <span className="name-pill" style={{ fontWeight: "bold", letterSpacing: "2px" }} >Jithin pm</span> <PiHandWaving style={{ verticalAlign: 'middle', color }} />,
                                <span> a passionate</span> <span className="role-pill" >MERN</span> Developer focused on designing and developing modern web products <LuGlobe style={{ verticalAlign: 'middle', color }} />, SaaS platforms <LuFingerprint style={{ verticalAlign: 'middle', color }} />, and user-first experiences. I architect <LuPenTool style={{ verticalAlign: 'middle', color }} />
                                <span> highly scalable solutions, ensure reliable software maintenance</span> <HiOutlineWrenchScrewdriver style={{ verticalAlign: 'middle', color }} />
                                <span>, blending technical precision</span> <IoCodeSlashOutline style={{ verticalAlign: 'middle', color }} />
                                <span> with creative, design-driven </span><span className="aesthetic-text" >aesthetics</span> <HiOutlineSparkles style={{ verticalAlign: 'middle', color }} />.
                            </h2>

                        </div>

                    </div>

                </div>
                <FloatingSkills />
            </div>
        </>
    )
}

export default About