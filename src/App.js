import './App.css';
import './styles/cta.css';
import { useEffect, useState, useContext, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About';
import Experience from './components/Experience';
import Vision from './components/Vision';
import Aos from 'aos';

import Services from './components/Services';
import Projects from './components/Projects';
import ToolsMarquee from './components/ToolsMarquee';

import Contact from './components/Contact';
import { ToastContainer, Zoom } from 'react-toastify';
import ColorSwitcher from './components/ColorSwitcher';
import { TbMenuDeep } from 'react-icons/tb';
import AllProjectsPage from './components/AllProjectsPage';
import { ColorContext } from './context/ContextShare';

// Import images for preloading
// import landingImage from './assets/landingImage.png.png';
// import aboutImage from './assets/jithin.jpeg';


const GREETINGS = [
  "Hello",
  "നമസ്കാരം",
  "ನಮಸ್ಕಾರ",
  "નમસ્તે",
  "Bonjour",
  "Hola",
  "안녕하세요",
  "Ciao",
  "Olá",
  "নমস্কার",
  "سلام",
  "Merhaba",
  "Hallo",
  "Привет",
  "Hoi",
  "你好",
  "Hej",
  "Cześć",
  "こんにちは",
  "Halo",
  "Selamat pagi",
  "Kumusta",
  "مرحبا",
  "Jambo",
  "Sawubona",
  "வணக்கம்",
  "నమస్కారం",
  "Aloha",
  "नमस्ते",
  "നമസ്കാരം",
  "Hello"
];

function App() {
  const { color } = useContext(ColorContext);
  const footerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);

  const [showSidebar, setShowSidebar] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (!footerRef.current) return;

    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.getBoundingClientRect().height);
      }
    };

    const observer = new ResizeObserver(updateHeight);
    observer.observe(footerRef.current);

    // Fallback polling for the first 3 seconds to catch delayed image loads
    const interval = setInterval(updateHeight, 500);
    setTimeout(() => clearInterval(interval), 3000);

    updateHeight();

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [showSplash]);
  const [greetingIdx, setGreetingIdx] = useState(0);
  const [theme, setTheme] = useState(() => {
    // Retrieve the theme from localStorage or default to true (light mode)
    return localStorage.getItem('selectedTheme') !== 'dark';
  });

  useEffect(() => {
    if (!showSplash) return;
    const interval = setInterval(() => {
      setGreetingIdx((prev) => (prev < GREETINGS.length - 1 ? prev + 1 : prev));
    }, 131);
    return () => clearInterval(interval);
  }, [showSplash]);


  // preload images to hide splash screen dynamically, with a minimum 5.0s wait
  useEffect(() => {
    const imagesToLoad = []; // Removed missing images

    // Guarantee the splash screen displays for at least 5.0 seconds to cycle greetings
    const minWaitPromise = new Promise((resolve) => setTimeout(resolve, 5000));

    // Wait for all specific images to load (or fail, so we don't block forever)
    const imagesReadyPromise = Promise.all(
      imagesToLoad.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      })
    );

    // Ensure the splash screen eventually hides even if something goes wrong
    const fallbackTimer = setTimeout(() => setShowSplash(false), 8000);

    // Wait for both conditions: 3s have passed AND images have loaded
    Promise.all([minWaitPromise, imagesReadyPromise]).then(() => {
      setShowSplash(false);
      clearTimeout(fallbackTimer);
    });

    return () => clearTimeout(fallbackTimer);
  }, []);


  //for aos
  useEffect(() => {
    Aos.init();
  }, []);


  // Refresh AOS on theme change to ensure animations stay synced
  useEffect(() => {
    Aos.refresh();
  }, [theme]);


  // Close sidebar on resize if screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowSidebar(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const handleToggle = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    // Save the theme to localStorage
    localStorage.setItem('selectedTheme', newTheme ? 'light' : 'dark');
  };


  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={theme ? 'lightmode' : 'darkmode'}>
      <Routes>
        <Route path="/projects" element={
          <AllProjectsPage theme={theme} handleToggle={handleToggle} />
        } />
        <Route path="*" element={
          <>
            {showSplash ? (
              <div className="splash-screen greeting-splash">
                <div className="greeting-container">
                  <h1 key={greetingIdx} className="greeting-text">{GREETINGS[greetingIdx]}</h1>
                </div>
              </div>

            ) : (
              <div>
                {/* Main Content Wrapper for Shutter Effect */}
                <div style={{ position: 'relative', zIndex: 10, backgroundColor: theme ? 'white' : 'black', marginBottom: `${footerHeight}px` }}>
                  {/* Header Section */}
                  <div className={`header ${showSidebar ? 'sidebar-active' : ''}`}>
                    <div className="header-text">
                      <h4 style={{ "--brand-hover-color": color }}>
                        jithin<span>:)</span>
                      </h4>
                    </div>
                    <div className="toggle-logo">
                      {showSidebar ? (
                        <i className="fa-solid fa-xmark fa-xl mb-3" onClick={toggleSidebar}></i>
                      ) : (
                        <TbMenuDeep size={25} className="mb-3" onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
                      )}
                    </div>
                    {/* Backdrop */}
                    {showSidebar && (
                      <div className="backdrop" onClick={toggleSidebar}></div>
                    )}
                    <div className={`header-links ${showSidebar ? 'visible' : 'hidden'}`}>
                      <div className="mobile-menu-header">
                        <div className="header-text">
                          <h4>
                            jithin<span>:)</span>
                          </h4>
                        </div>
                        <i className="fa-solid fa-xmark fa-xl" onClick={toggleSidebar}></i>
                      </div>

                      <ScrollLink onClick={() => setShowSidebar(false)} to="landing" smooth={true} duration={500}>
                        <h6 className="nav-link-text">HOME</h6>
                      </ScrollLink>
                      <ScrollLink onClick={() => setShowSidebar(false)} to="about" smooth={true} duration={500} offset={window.innerWidth <= 768 ? -80 : -60}>
                        <h6 className="nav-link-text">ABOUT</h6>
                      </ScrollLink>
                      <ScrollLink onClick={() => setShowSidebar(false)} to="services" smooth={true} duration={500} offset={window.innerWidth <= 768 ? -30 : -50}>
                        <h6 className="nav-link-text">SERVICES</h6>
                      </ScrollLink>
                      <ScrollLink onClick={() => setShowSidebar(false)} to="projects" smooth={true} duration={500} offset={window.innerWidth <= 768 ? -20 : -30}>
                        <h6 className="nav-link-text">WORKS</h6>
                      </ScrollLink>
                      <ScrollLink onClick={() => setShowSidebar(false)} to="contact" smooth={true} duration={500} offset={window.innerWidth <= 768 ? -40 : -10}>
                        <h6 className="nav-link-text">CONTACT</h6>
                      </ScrollLink>

                      <div className="mobile-menu-footer">
                        <hr className="menu-divider" />
                        <p className="follow-me-label">FOLLOW ME</p>
                        <div className="mobile-social-links">
                          <a href="https://www.instagram.com/jithin.pm_/?next=%2F" target="_blank" rel="noopener noreferrer">INSTAGRAM &rarr;</a>
                          <a href="https://www.linkedin.com/in/jithin-pm-403241285/" target="_blank" rel="noopener noreferrer">LINKEDIN &rarr;</a>
                        </div>
                      </div>

                      <div className="theme-switcher">
                        {theme ? (
                          <i className="fa-solid fa-moon fa-lg" onClick={handleToggle}></i>
                        ) : (
                          <i className="fa-solid fa-cloud-sun fa-lg" onClick={handleToggle}></i>
                        )}
                      </div>
                    </div>
                  </div>


                  <div id="landing">
                    <Landing />
                  </div>

                  <ColorSwitcher />
                  <div id="about">
                    <About />
                  </div>

                  <Vision />
                  <div id="experience">
                    <Experience />
                  </div>

                  <div id="services">
                    <Services />
                  </div>
                  <ToolsMarquee />
                  <div id="projects">
                    <Projects />
                  </div>

                  {/* CTA Section */}
                  <div className="cta-section" data-aos="fade-up" data-aos-duration="1400" style={{ position: 'relative', overflow: 'hidden' }}>

                    {/* Bottom Right Sunburst */}
                    <svg className="cta-sunburst" width="160" height="160" viewBox="0 0 100 100" style={{ position: 'absolute', bottom: '-70px', right: '-70px', zIndex: 0, color: color }}>
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

                    {/* Aesthetic Wavy Background (Exact Match to Reference) */}
                    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 0.12, pointerEvents: 'none' }}>

                      {/* Top Left Swirl/Loop */}
                      <path d="M 350,-50 C 350,150 150,250 150,150 C 150,50 300,50 300,150 C 300,300 100,400 -50,300" fill="none" stroke={color} strokeWidth="25" strokeLinecap="round" strokeLinejoin="round" />


                    </svg>

                    <div className="cta-container" style={{ position: 'relative', zIndex: 1 }}>
                      <div className="cta-left">
                        <p className="cta-subheading">Let's Work Together</p>
                        <h2 className="cta-heading">
                          Have an <span style={{ color }}>Idea?</span><br />
                          Let's Turn It<br />
                          Into Something<br />
                          <span style={{ color }}>Remarkable.</span>
                        </h2>
                        <p className="cta-availability">Available for freelance, contract, and<br />collaboration opportunities.</p>
                      </div>
                      <div className="cta-right">
                        <p className="cta-description">
                          Whether you need a new website, a fresh digital experience,
                          or a complete redesign, I can help turn your vision into a
                          digital solution that looks great, works smoothly, and delivers
                          real value and meaningful results that elevate your brand.
                        </p>
                        <div className="cta-button-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginTop: '20px' }}>
                          <svg className="cta-arrow" width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '87px', marginBottom: '13px', transform: 'scaleX(-1) rotate(70deg)', overflow: 'visible' }}>
                            <path d="M 20,10 C 15,60 25,80 50,80 C 75,80 75,40 50,40 C 25,40 25,80 80,107" stroke={theme ? '#111' : '#fff'} strokeWidth="1.5" strokeDasharray="6 6" fill="none" strokeLinecap="round" />
                            <path d="M 87,109 L 67,95 L 74,108 L 64,121 Z" fill={theme ? '#111' : '#fff'} transform="rotate(20 80 107)" />
                          </svg>
                          <ScrollLink to="contact" smooth={true} duration={500} offset={-30} className="view-all-btn" style={{ '--btn-color': color, borderColor: color, textDecoration: 'none', marginTop: '0' }}>
                            <span className="vab-text" style={{ color: color }}>Contact Me</span>
                            <span className="vab-arrow" style={{ color: color }}>
                              <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.0879 12.4941L3.92134 12.4941" stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
                                <path d="M13.4863 20.0911C13.4863 16.1888 16.9231 12.5002 21.0772 12.5002" stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
                                <path d="M13.4932 4.90935C13.4932 8.81171 16.9299 12.5002 21.0841 12.5002" stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
                              </svg>
                            </span>
                          </ScrollLink>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dummy div to allow react-scroll navigation to reach the bottom of the main content */}
                  <div id='contact' style={{ position: 'absolute', bottom: 0 }}></div>
                </div> {/* End Main Content Wrapper */}

                {/* Shutter Footer Wrapper */}
                <div className="shutter-wrapper" ref={footerRef} style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 0, backgroundColor: theme ? 'white' : 'black' }}>
                  <div>
                    <Contact />
                  </div>
                </div>

                <ToastContainer
                  position="top-center"
                  autoClose={1111}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick={false}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                  transition={Zoom}
                />


              </div >
            )}
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
