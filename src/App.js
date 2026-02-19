import './App.css';
import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling
import Landing from './components/Landing';
import About from './components/About';
import Experience from './components/Experience';
import Aos from 'aos';
import Education from './components/Education';
import Services from './components/Services';
import Projects from './components/Projects';
import Skill from './components/Skill';
import Contact from './components/Contact';
import { ToastContainer, Zoom } from 'react-toastify';
import ColorSwitcher from './components/ColorSwitcher';
import { GiHamburgerMenu } from 'react-icons/gi';


function App() {

  const [showSidebar, setShowSidebar] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [theme, setTheme] = useState(() => {
    // Retrieve the theme from localStorage or default to false (dark mode)
    return localStorage.getItem('selectedTheme') === 'light';
  });


  //for hiding splash screen
  useEffect(() => {
    // Hide the splash screen after 3 seconds
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer); // Clean up the timer
  }, []);


  //for aos
  useEffect(() => {
    Aos.init();
  }, []);

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
    <>


      {showSplash ? (
        <div className={`splash-screen ${theme ? 'lightmode' : 'darkmode'}`}>
          <h1>
            <span>j</span>
            <span>i</span>
            <span>t</span>
            <span>h</span>
            <span>i</span>
            <span>n</span>
            <span className="smile">:)</span>
          </h1>
        </div>

      ) : (
        <div className={theme ? 'lightmode' : 'darkmode'}>
          {/* Header Section */}
          <div className={`header ${showSidebar ? 'sidebar-active' : ''}`}>
            <div className="header-text">
              <h4>
                jithin<span>:)</span>
              </h4>
            </div>
            <div className="toggle-logo">
              {showSidebar ? (
                <i className="fa-solid fa-xmark fa-xl mb-3" onClick={toggleSidebar}></i>
              ) : (
                <GiHamburgerMenu size={25} className="mb-3" onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
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
          <div id='education' >
            <Education />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id='skills' >
            <Skill />
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
      )
      }
    </>
  );
}

export default App;
