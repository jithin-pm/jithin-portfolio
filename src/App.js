import './App.css';
import './styles/cta.css';
import { useEffect, useState, useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About';
import Experience from './components/Experience';
import Aos from 'aos';

import Services from './components/Services';
import Projects from './components/Projects';

import Contact from './components/Contact';
import { ToastContainer, Zoom } from 'react-toastify';
import ColorSwitcher from './components/ColorSwitcher';
import { TbMenuDeep } from 'react-icons/tb';
import AllProjectsPage from './components/AllProjectsPage';
import { ColorContext } from './context/ContextShare';

// Import images for preloading
import landingImage from './assets/landingImage.png.png';
import aboutImage from './assets/jithin.jpeg';


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


  const [showSidebar, setShowSidebar] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
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
    const imagesToLoad = [landingImage, aboutImage];

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
                    <ScrollLink onClick={() => setShowSidebar(false)} to="about" smooth={true} duration={500} offset={window.innerWidth <= 768 ? -55 : -50}>
                      <h6 className="nav-link-text">ABOUT</h6>
                    </ScrollLink>
                    <ScrollLink onClick={() => setShowSidebar(false)} to="services" smooth={true} duration={500} offset={window.innerWidth <= 768 ? -5 : -25}>
                      <h6 className="nav-link-text">SERVICES</h6>
                    </ScrollLink>
                    <ScrollLink onClick={() => setShowSidebar(false)} to="projects" smooth={true} duration={500} offset={window.innerWidth <= 768 ? -5 : 0}>
                      <h6 className="nav-link-text">WORKS</h6>
                    </ScrollLink>
                    <ScrollLink onClick={() => setShowSidebar(false)} to="contact" smooth={true} duration={500} offset={window.innerWidth <= 768 ? -25 : -30}>
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
                <div id="experience">
                  <Experience />
                </div>

                <div id="services">
                  <Services />
                </div>
                <div id="projects">
                  <Projects />
                </div>

                {/* CTA Section */}
                <div className="cta-section" data-aos="fade-up" data-aos-duration="1400">
                  <h2 className="cta-heading">INTERESTED IN<br />WORKING TOGETHER..?</h2>
                  <p className="cta-contact-label">Contact me:</p>
                  <a href="mailto:jithinpm.official@gmail.com" className="cta-email" style={{ '--cta-hover-color': color }}>
                    jithinpm.official@gmail.com
                  </a>
                </div>

                <div id='contact' >
                  <Contact />
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
