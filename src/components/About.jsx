import React, { useContext } from 'react'
import '../styles/about.css'
import { ColorContext } from '../context/ContextShare';
import about from '../assets/jithin.jpeg'
import aboutHover from '../assets/jithin-hover.png'
import HoverImage from './HoverImage';

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

                    <div className='about-me-description' data-aos="fade-up" data-aos-duration="1200"  >

                     {/*    <h4 style={{ color }} >Who am i ?</h4> */}
                        <h2 className='mt-1' >I'm Jithin , <span className="responsive-span" style={{ color }} >A Mern Stack Developer</span></h2>
                        <p>I’m a software and web developer specializing in the MERN stack, with over a year of industry experience
                            in building efficient, full-stack web applications. I have worked on a range of projects that reflect my
                            ability to develop scalable architectures, create user-friendly interfaces, and deliver dependable, high-quality
                            solutions. My approach emphasizes clean coding practices, modern development standards, and performance
                            optimization to ensure seamless user experiences. I am passionate about continuous growth and contributing
                            to innovative, team-driven projects</p>

                        <hr />
                        <div className='about-me-description-details' data-aos="fade-right" data-aos-duration="1600"  >
                            <p>Name :<span> Jithin pm</span></p>
                            <p>Email : <span>jithinpm.official@gmail.com</span> </p>
                            <p>Age : <span>23</span></p>
                            <p>Location : <span>Kerala ,India</span></p>
                        </div>
                        <div className='btn-icons'>
                            <a href="/jithin-resume.pdf" download="jithin-resume.pdf">
                                <button className='mt-3' style={{ backgroundColor: color }} >Download CV</button></a>
                            <div className='icons mt-3' >
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