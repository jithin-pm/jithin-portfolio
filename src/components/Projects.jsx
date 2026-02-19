import React, { useContext } from 'react'
import '../styles/projects.css'
import { ColorContext } from '../context/ContextShare';
import IshttamImg from '../assets/ishttam.png';
import BhakshanangalImg from '../assets/Bhakshanangal.png';
import DavidsAcademyImg from '../assets/davidsAcademy.png';
import ShifaClinicImg from '../assets/shifaClinic.png';
import GlobalWebImg from '../assets/globalwebproduction.png';
import DrInImg from '../assets/DR.IN.png';

function Projects() {
    const { color } = useContext(ColorContext);

    const projects = [
        {
            title: "Ishttam Marry",
            description: "A comprehensive matrimonial platform designed for finding compatible partners. Features include advanced matching, real-time chat, and connection requests. Includes a robust admin panel for user management and premium subscriptions.",
            tech: "React, Node.js, Socket.io, MySQL, Tailwind",
            github: "#",
            live: "https://ishtammarry.com/",
            image: IshttamImg
        },
        {
            title: "Bhakshanangal Foods",
            description: "A global marketplace for authentic Kerala delicacies. Features automated currency conversion, secure payments, and smart shipping integration, managed through a comprehensive admin dashboard.",
            tech: "React, Node.js, Stripe, Shiprocket, Google Translate",
            github: "#",
            live: "https://bhakshanangal.com/",
            image: BhakshanangalImg
        },
        {
            title: "David's Academy",
            description: "A full-featured learning platform with exams, question banks, and recorded classes. Supports 10+ question types and comprehensive student analytics. Includes a robust admin panel for content and user management.",
            tech: "React, MySQL, Node.js, CSS",
            github: "#",
            live: "https://davids-academy.com/",
            image: DavidsAcademyImg
        },
        {
            title: "Shifa Clinic",
            description: "A comprehensive hospital management system with role-based access for Admin, Doctor, Pharmacist, Lab, and Receptionist. Features Twilio OTP for security, S-Pen compatible scribble canvas for prescriptions, and real-time patient token management.",
            tech: "React, Node.js, MongoDB, Twilio, Canvas API",
            github: "#",
            live: "https://shifaclinic.lunarenterprises.co.in/",
            image: ShifaClinicImg
        },
        {
            title: "Global Web Production",
            description: "A static UI-oriented website showcasing creative design and responsive layouts. Built with a focus on visual aesthetics and performance.",
            tech: "React, Tailwind",
            github: "#",
            live: "https://www.globalwebproduction.com/",
            image: GlobalWebImg
        },
        {
            title: "DR.IN",
            description: "A comprehensive e-commerce platform featuring integrated Shiprocket for logistics and Razorpay for secure payments.",
            tech: "React, Node.js, Razorpay, Shiprocket",
            github: "#",
            live: "https://drinuser.lunarenterprises.co.in/",
            image: DrInImg
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
                        <div key={index} className='project-card-container' data-aos="fade-up" data-aos-duration="1400">
                            <div className='project-card' style={{ "--hover-color": color }}>
                                {/* Background Image */}
                                <div className='project-bg-image'>
                                    {item.image ? (
                                        <img src={item.image} alt={item.title} />
                                    ) : (
                                        <div className='project-placeholder-icon' style={{ color }}>
                                            <i className="fa-solid fa-folder-open fa-2xl"></i>
                                        </div>
                                    )}
                                </div>

                                {/* Content Overlay */}
                                <div className='project-content-overlay'>
                                    <div className='project-header'>
                                        <div className="project-title-group">
                                            <h3>{item.title}</h3>
                                            <a href={item.live} target="_blank" rel="noopener noreferrer" title="Live Demo" className="project-title-link">
                                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                            </a>
                                        </div>
                                        <div className='project-tech-stack'>
                                            {item.tech.split(',').map((tech, i) => (
                                                <span key={i} className='tech-badge'>{tech.trim()}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className='project-details'>
                                        <p className='project-desc'>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects
