import React, { useContext } from 'react'
import '../styles/projects.css'
import { ColorContext } from '../context/ContextShare';
import IshttamImg from '../assets/ishttam.png';

function Projects() {
    const { color } = useContext(ColorContext);

    const projects = [
        {
            title: "Ishttam Marry",
            description: "A comprehensive full-stack application built with the MERN stack. Features include user authentication, real-time updates, and responsive design.",
            tech: "React, Node.js, MongoDB",
            github: "#",
            live: "#",
            image: IshttamImg
        },
        {
            title: "Project Two",
            description: "An interactive e-commerce platform with secure payment integration and dynamic product catalog management.",
            tech: "React, Stripe, Firebase",
            github: "#",
            live: "#"
        },
        {
            title: "Project Three",
            description: "A portfolio website showcasing creative design and smooth animations using modern CSS frameworks and libraries.",
            tech: "React, AOS, Bootstrap",
            github: "#",
            live: "#"
        }
    ]

    return (
        <>
            <div className="projects">
                <div className='projects-heading' data-aos="fade-up" data-aos-duration="1800" >
                    <p>Some of my recent works</p>
                    <h2>PROJECTS</h2>
                </div>

                <div className='projects-block-main'>
                    {projects.map((item, index) => (
                        <div key={index} className='project-card-container' data-aos="fade-up" data-aos-duration="1400" style={{ "--hover-color": color }}>
                            <div className='project-card' >
                                <div className='project-img-container'>
                                    {item.image ? (
                                        <img src={item.image} alt={item.title} />
                                    ) : (
                                        <div className='project-placeholder-icon' style={{ color }}>
                                            <i className="fa-solid fa-folder-open fa-2xl"></i>
                                        </div>
                                    )}
                                </div>
                                <div className='project-card-contents'>
                                    <div className='project-title-row'>
                                        <h3>{item.title}</h3>
                                        <div className='project-links'>
                                            <a href={item.github} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github fa-lg"></i></a>
                                            <a href={item.live} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-arrow-up-right-from-square fa-lg"></i></a>
                                        </div>
                                    </div>
                                    <p className='project-desc'>{item.description}</p>
                                    <p className='project-tech'>{item.tech}</p>
                                </div>
                            </div>
                            <div className="project-hover-div"></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects
