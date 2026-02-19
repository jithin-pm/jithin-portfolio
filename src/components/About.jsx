import React, { useContext } from 'react'
import '../styles/about.css'
import { ColorContext } from '../context/ContextShare';
import about from '../assets/jithin.jpeg'
import aboutHover from '../assets/jithin-hover.png'
import HoverImage from './HoverImage';
import { PiHandWaving } from "react-icons/pi";
import { HiOutlineSparkles } from 'react-icons/hi';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { LuPenTool } from 'react-icons/lu';

function About() {
    const { color, setColor } = useContext(ColorContext);
    return (
        <>
            <div className="about">
                <div className='text-container' data-aos="zoom-in" data-aos-duration="1600" >
                    <h5 style={{ color }} >Know more</h5>
                    <h1>ABOUT ME</h1>
                </div>
                <div className='about-me'>
                    <div className='about-me-img' data-aos="fade-down" data-aos-duration="1200" >
                        <HoverImage baseSrc={about} hoverSrc={aboutHover} alt="Jithin PM" />
                    </div>

                    <div className='about-me-description' data-aos="fade-up" data-aos-duration="1200">
                        <div className="new-intro-container">
                            <h2 className="intro-text">
                                Hi, I am <span className="name-pill" style={{ fontWeight: "bold", letterSpacing: "2px", color: color }} >Jithin pm</span> <PiHandWaving style={{ verticalAlign: 'middle' }} />,
                                <span> a</span> <span className="role-pill" >MERN</span> Developer. I design <LuPenTool style={{ verticalAlign: 'middle' }} />
                                <span> and build fast, scalable, user first web experiences</span> <HiOutlineSparkles style={{ verticalAlign: 'middle' }} />
                                <span> with clean, maintainable code</span> <IoCodeSlashOutline style={{ verticalAlign: 'middle' }} />
                                <span> and modern, impactful </span><span style={{ fontStyle: "italic", color: color }} >design</span>
                                <span> that delivers real value.</span>
                            </h2>
                            <hr />
                            <div className='about-me-description-details' data-aos="fade-right" data-aos-duration="1600"  >
                                <p>Name :<span>Jithin pm</span></p>
                                <p>Email : <span>jithinpm.official@gmail.com</span> </p>
                                <p>Age : <span>23</span></p>
                                <p>Location : <span>Kerala ,India</span></p>
                            </div>
                        </div>

                        <div className='btn-icons mt-5'>
                            <a className='about-btn' href="/jithin-resume.pdf" download="jithin-resume.pdf">
                                <button className='' style={{ backgroundColor: color }}>Download CV</button></a>
                            <div className='icons' >
                                <a href="https://www.linkedin.com/in/jithin-pm-403241285/" target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-linkedin-in fa-xl"></i></a>
                                <a href="https://github.com/jithin-pm" target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-github fa-xl"></i></a>
                                <a href="https://www.instagram.com/jithin.pm_/?next=%2F" target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-instagram fa-xl"></i></a>
                                <a href="https://wa.me/7560844748" target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-whatsapp fa-xl"></i></a>
                                <a href="https://www.facebook.com/jithin.pm.96" target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-facebook-f fa-xl"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About