import React, { useContext, useRef } from 'react'
import '../styles/about.css'
import { ColorContext } from '../context/ContextShare';
import FloatingSkills from './FloatingSkills';
import { motion, useScroll, useTransform } from 'framer-motion';

import { PiHandWaving } from "react-icons/pi";
import { HiOutlineSparkles } from 'react-icons/hi';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { LuPenTool, LuGlobe, LuFingerprint } from 'react-icons/lu';
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2';

const TextHighlight = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0.15, 1]);
    return (
        <motion.span style={{ opacity }}>
            {children}
        </motion.span>
    );
};

function About() {
    const { color } = useContext(ColorContext);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "start 10%"]
    });

    const segments = [
        "Hi, I am ",
        <span className="name-pill" style={{ fontWeight: "bold", letterSpacing: "2px" }} >Jithin pm</span>,
        " ",
        <PiHandWaving style={{ verticalAlign: 'middle', color }} />,
        ", a passionate ",
        <span className="role-pill" style={{ borderColor: color }} >MERN</span>,
        " Developer focused on designing and developing modern web products ",
        <LuGlobe style={{ verticalAlign: 'middle', color }} />,
        ", SaaS platforms ",
        <LuFingerprint style={{ verticalAlign: 'middle', color }} />,
        ", and user-first experiences. I architect ",
        <LuPenTool style={{ verticalAlign: 'middle', color }} />,
        " highly scalable solutions, ensure reliable software maintenance ",
        <HiOutlineWrenchScrewdriver style={{ verticalAlign: 'middle', color }} />,
        ", blending technical precision ",
        <IoCodeSlashOutline style={{ verticalAlign: 'middle', color }} />,
        " with creative, design-driven ",
        <span className="aesthetic-text" >aesthetics</span>,
        " ",
        <HiOutlineSparkles style={{ verticalAlign: 'middle', color }} />,
        "."
    ];

    const words = [];
    segments.forEach((segment) => {
        if (typeof segment === 'string') {
            const split = segment.split(/(\s+)/);
            split.forEach((part) => {
                if (part) {
                    words.push(part);
                }
            });
        } else {
            words.push(segment);
        }
    });

    return (
        <>
            <div className="about">
                <div className='text-container' data-aos="zoom-in" data-aos-duration="1600" >
                    <h5 style={{ color, fontFamily: '"Unbounded", sans-serif', marginBottom: 0, paddingBottom: 0, fontSize: '0.75rem' }} >Know more</h5>
                    <h2 style={{ fontFamily: '"Unbounded", sans-serif', fontOpticalSizing: 'auto', fontWeight: 500, fontStyle: 'normal', fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', lineHeight: 0.97 }}>About Me</h2>
                </div>
                <div className='about-me'>
                    <div className='about-me-description'>
                        <div className="new-intro-container" ref={containerRef}>
                            <h2 className="intro-text">
                                {words.map((word, i) => {
                                    const start = i / words.length;
                                    const end = start + (1 / words.length);
                                    return (
                                        <TextHighlight key={i} progress={scrollYProgress} range={[start, end]}>
                                            {word}
                                        </TextHighlight>
                                    );
                                })}
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