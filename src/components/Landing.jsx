import React, { useContext } from 'react'
import '../styles/landing.css'
import { ColorContext } from '../context/ContextShare';
import landingImage from '../assets/landingImage.png.png'

function Landing() {
  const { color, setColor } = useContext(ColorContext);
  return (
    <>

      <div className='landing' >
        <div className='name-role'>
          <h1>Jithin Pm</h1>
          <h3>I'm a <span style={{ color, borderLeft: "2px color" }} className='ms-1'></span></h3>
        </div>
        <div className='landing-image' >
          <img src={landingImage} alt="Landing" />
        </div>
      </div>
      <div className='landing-icons' >
                <div className='icons-left'>
                    <a href="https://wa.me/7560844748" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-whatsapp fa-xl mb-1"></i>
                    </a>
                    <a href="tel:7560844748" target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-phone fa-lg"></i>
                    </a>
                    <a href="mailto:jithinpm.official@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-envelope fa-lg"></i>
                    </a>
                </div>
                <div className='icons-right'>
                    <a href="https://www.linkedin.com/in/jithin-pm-403241285/" ><i className="fa-brands fa-linkedin-in fa-lg" target="_blank" rel="noopener noreferrer" ></i></a>
                    <a href="https://github.com/jithin-pm" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-github fa-lg"></i></a>
                    <a href="https://www.instagram.com/jithin.pm_/?next=%2F" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram fa-lg" ></i></a>
                    <a href="https://www.facebook.com/jithin.pm.96" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f fa-lg"></i></a>
                </div>
            </div>

    </>
  )
}

export default Landing