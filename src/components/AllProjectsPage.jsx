import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/projects.css'
import '../styles/allprojects.css'
import { ColorContext } from '../context/ContextShare'
import IshttamImg from '../assets/ishttam.png'
import BhakshanangalImg from '../assets/Bhakshanangal.png'
import DavidsAcademyImg from '../assets/davidsAcademy.png'
import ShifaClinicImg from '../assets/shifaClinic.png'
import GlobalWebImg from '../assets/globalwebproduction.png'
import DrInImg from '../assets/DR.IN.png'
import DatsheetsImg from '../assets/datsheets.png'
import YashfiImg from '../assets/yashfi.png'
import DymphnaImg from '../assets/dyphna.png'
import Aos from 'aos'

function AllProjectsPage({ theme, handleToggle }) {
    const { color } = useContext(ColorContext)

    useEffect(() => {
        Aos.init()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    const projects = [
        {
            title: "Bhakshanangal Foods",
            category: "Ecommerce Platform",
            description: "An ecommerce platform for authentic Kerala delicacies featuring automated currency conversion, secure Stripe payments, and smart Shiprocket shipping integration.",
            tech: ["React", "Node.js", "Stripe", "Shiprocket", "Google Translate"],
            live: "https://bhakshanangal.com/",
            image: BhakshanangalImg
        },
        {
            title: "David's Academy",
            category: "LMS & Assessment Platform",
            description: "A full-featured learning management and assessment system with live exams, question banks, and recorded classes. Supports 10+ question types and comprehensive student analytics.",
            tech: ["React", "MySQL", "Node.js", "CSS"],
            live: "https://davids-academy.com/",
            image: DavidsAcademyImg
        },
        {
            title: "Shifa Clinic",
            category: "Hospital Management",
            description: "A hospital management system with role-based access for Admin, Doctor, Pharmacist, Lab & Receptionist. Features Twilio OTP, S-Pen scribble canvas, and real-time patient token management.",
            tech: ["React", "Node.js", "MongoDB", "Twilio", "Canvas API"],
            live: "https://shifaclinic.lunarenterprises.co.in/",
            image: ShifaClinicImg
        },
        {
            title: "Global Web Production",
            category: "Creative Agency Site",
            description: "A UI-focused creative website showcasing responsive layouts and performance-first design principles.",
            tech: ["React", "Tailwind"],
            live: "https://www.globalwebproduction.com/",
            image: GlobalWebImg
        },
        {
            title: "Ishttam Marry",
            category: "Matrimonial Platform",
            description: "A comprehensive matrimonial platform with advanced matching algorithms, real-time chat, and connection requests. Includes a robust admin panel for user management and premium subscriptions.",
            tech: ["React", "Node.js", "Socket.io", "MySQL", "Tailwind"],
            live: "https://ishtammarry.com/",
            image: IshttamImg
        },
        {
            title: "DR.IN",
            category: "E-Commerce Platform",
            description: "A comprehensive e-commerce platform with Shiprocket logistics and Razorpay secure payments, built for seamless online retail.",
            tech: ["React", "Node.js", "Razorpay", "Shiprocket"],
            live: "https://drinuser.lunarenterprises.co.in/",
            image: DrInImg
        },
        {
            title: "Yashfi Foundation",
            category: "Charity & Donations",
            description: "A charity donation platform enabling users to contribute funds with secure online donations through Razorpay, ensuring a smooth giving experience.",
            tech: ["React", "Node.js", "Razorpay", "Tailwind"],
            live: "https://yashfifoundation.org/",
            image: YashfiImg
        },
        {
            title: "Datsheets",
            category: "Enterprise SaaS",
            description: "An enterprise platform for dynamic data sheets with real-time multi-user collaboration via Socket.io — a spreadsheet interface with instant formula-based processing.",
            tech: ["React", "Node.js", "Socket.io", "Redux", "PostgreSQL"],
            live: "https://datsheets.in/",
            image: DatsheetsImg
        },
        {
            title: "Dymphna",
            category: "Mental Health Initiative",
            description: "A UI-oriented static website designed to showcase organizational services, featuring an interactive stress calculator and comprehensive contact details.",
            tech: ["React", "Tailwind", "JavaScript"],
            live: "https://dymphna.in/",
            image: DymphnaImg
        }
    ]

    return (
        <div className="ap-wrapper">

            {/* Navbar */}
            <nav className="ap-navbar">
                <Link to="/" className="ap-brand" style={{ "--brand-hover-color": color }}>
                    jithin<span>:)</span>
                </Link>
                <div className="ap-nav-actions">
                    <Link to="/" className="ap-home-link" style={{ "--home-hover-color": color }}>
                        <i className="fa-solid fa-arrow-left"></i> <span>Home</span>
                    </Link>
                    <div className="ap-theme-switcher" onClick={handleToggle}>
                        {theme
                            ? <i className="fa-solid fa-moon"></i>
                            : <i className="fa-solid fa-cloud-sun"></i>
                        }
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <header className="ap-hero">
                <div className="ap-hero-content">
                    <div className="ap-hero-eyebrow" data-aos="fade-right" data-aos-duration="800">
                        <span className="ap-hero-eyebrow-line" />
                        <p className="ap-hero-subtitle">Discover</p>
                    </div>
                    <h1 className="ap-hero-title" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="100">
                        Selected<br />Works.
                    </h1>
                    <div className="ap-hero-meta" data-aos="fade-up" data-aos-duration="900" data-aos-delay="280">
                        <div className="ap-hero-accent-bar" style={{ "--theme-accent": color }} />
                        
                    </div>
                </div>
            </header>

            {/* Cinematic Cards */}
            <main className="ap-cards-list">
                {projects.map((item, index) => {
                    const isReverse = index % 2 === 1
                    return (
                        <a
                            key={index}
                            href={item.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`ap-cine-card${isReverse ? ' ap-cine-reverse' : ''}`}
                            style={{ "--card-accent": color }}
                            data-aos="fade-up"
                            data-aos-duration="900"
                            data-aos-delay={index * 55}
                        >
                            {/* Image Panel */}
                            <div className="ap-cine-image-panel">
                                {item.image && (
                                    <img src={item.image} alt={item.title} />
                                )}
                            </div>

                            {/* Info Panel */}
                            <div className="ap-cine-info-panel">
                                <div className="ap-cine-index-watermark">
                                    0{index + 1}
                                </div>
                                <span className="ap-cine-category">{item.category}</span>
                                <h2 className="ap-cine-title-fixed">{item.title}</h2>

                                <div className="ap-cine-tags">
                                    {item.tech.map((t, i) => (
                                        <span key={i} className="ap-cine-tag">{t}</span>
                                    ))}
                                </div>

                                <p className="ap-cine-desc">{item.description}</p>

                                <div className="ap-cine-cta">
                                    <div className="ap-cine-cta-arrow">
                                        <i className="fa-solid fa-arrow-right" />
                                    </div>
                                    <span>View Live</span>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </main>
        </div>
    )
}

export default AllProjectsPage
