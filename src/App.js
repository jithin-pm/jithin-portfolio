import './App.css';
import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling
import Landing from './components/Landing';
import About from './components/About';
import Aos from 'aos';
import Education from './components/Education';
import Services from './components/Services';
import Skill from './components/Skill';
import Contact from './components/Contact';
import { ToastContainer, Zoom } from 'react-toastify';
import ColorSwitcher from './components/ColorSwitcher';

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
          <div className="header">
            <div className="header-text">
              <h4>
                jithin<span>:)</span>
              </h4>
            </div>
            <div className="toggle-logo">
              {showSidebar ? (
                <i className="fa-solid fa-xmark fa-xl mb-3" onClick={toggleSidebar}></i>
              ) : (
                <i className="fa-solid fa-bars fa-xl mb-3" onClick={toggleSidebar}></i>
              )}
            </div>
            <div className={`header-links ${showSidebar ? 'visible' : 'hidden'}`}>
              <ScrollLink  onClick={() => setShowSidebar(false)} to="about" smooth={true} duration={500}>
                <h6>ABOUT</h6>
              </ScrollLink>
              <ScrollLink  onClick={() => setShowSidebar(false)} to="education" smooth={true} duration={500}>
                <h6>EDUCATION</h6>
              </ScrollLink>
              <ScrollLink  onClick={() => setShowSidebar(false)} to="services" smooth={true} duration={500}>
                <h6>SERVICES</h6>
              </ScrollLink>
              <ScrollLink  onClick={() => setShowSidebar(false)} to="skills" smooth={true} duration={500}>
                <h6>SKILLS</h6>
              </ScrollLink>
              <ScrollLink  onClick={() => setShowSidebar(false)} to="contact" smooth={true} duration={500}>
                <h6>CONTACT</h6>
              </ScrollLink>
              <div className="mb-2" style={{ width: '1px' }}>
                {theme ? (
                  <i className="fa-solid fa-moon fa-lg" onClick={handleToggle}></i>
                ) : (
                  <i className="fa-solid fa-cloud-sun fa-lg" onClick={handleToggle}></i>
                )}
              </div>
            </div>
          </div>
          <Landing />
          <ColorSwitcher />
          <div id="about">
            <About />
          </div>
          <div id='education' >
            <Education />
          </div>
          <div id="services">
            <Services />
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
