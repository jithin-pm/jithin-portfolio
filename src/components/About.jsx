import React, { useContext } from 'react'
import '../styles/about.css'
import { ColorContext } from '../context/ContextShare';
import about from '../assets/jithin.jpeg'

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
                        <img src={about}  alt="" />
                    </div>

                    <div className='about-me-description'data-aos="fade-up" data-aos-duration="1200"  >
                        
                            <h4 style={{ color }} >Who am i ?</h4>
                            <h2 className='mt-3' >I'm Jithin , <span className="responsive-span" style={{ color }} >a Mern Stack Developer</span></h2>
                            <p>I’m a passionate software and web developer specializing in the MERN stack. As a fresher, I’ve gained hands-on
                                experience by completing several impactful projects that showcase my ability to build robust, user-friendly applications.
                                I thrive on turning ideas into functional products with a focus on clean design, modern standards, and seamless performance.
                                I’m eager to contribute to dynamic teams and bring value to innovative projects.</p>
                        
                         <hr />
                        <div className='about-me-description-details' data-aos="fade-right" data-aos-duration="1600"  >
                            <p>Name :<span> Jithin pm</span></p>
                            <p>Email : <span>jithinpm.official@gmail.com</span> </p>
                            <p>Age : <span>22</span></p>
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