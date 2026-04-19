import React, { useContext } from 'react'
import '../styles/service.css'
import { ColorContext } from '../context/ContextShare';
import { PiDevices } from 'react-icons/pi';

function Services() {
    const { color } = useContext(ColorContext);
    return (
        <>

            <div className="services">
                <div className='services-heading' data-aos="fade-up" data-aos-duration="1800" >
                    <p>Exceptional services tailored for your digital success</p>
                    <h2>MY SERVICES</h2>
                </div>

                <div className='services-block-main'  >
                    <div className='block' style={{ "--hover-color": color }} data-aos="fade-right" data-aos-duration="1400" >
                        <div className='services-block'  >
                            <div className='services-block-contents' >
                                <i className="fa-solid fa-code fa-2xl" style={{ color }}></i>
                                <h3 className='mt-4' >Web Development</h3>
                                <p>Architecting high-performance web applications focused on scalability, performance, and modern industry standards.</p>
                            </div>
                        </div>
                        <div className="services-hover-div" data-aos="fade-right" data-aos-duration="1400"></div>
                    </div>
                    <div className='block' style={{ "--hover-color": color }} data-aos="fade-right" data-aos-duration="1400" data-aos-delay="100"    >
                        <div className='services-block' >
                            <div className='services-block-contents' style={{ marginTop: 0 }} >
                                <PiDevices size={58} style={{ color, marginBottom: '-8px' }} />
                                <h3>Full Responsive Design</h3>
                                <p>Crafting seamless, adaptive interfaces that perform flawlessly across every screen and modern device.</p>
                            </div>
                        </div>
                        <div className="services-hover-div" data-aos="fade-right" data-aos-duration="1400" data-aos-delay="100"></div>
                    </div>

                    <div className='block' style={{ "--hover-color": color }} data-aos="fade-right" data-aos-duration="1400" data-aos-delay="200" >
                        <div className='services-block'  >
                            <div className='services-block-contents' >
                                <i className="fa-brands fa-node fa-2xl" style={{ color }}></i>
                                <h3 className='mt-4' >Backend Development</h3>
                                <p>Building robust server-side logic and scalable architectures to ensure reliable data processing and optimal system performance.</p>
                            </div>
                        </div>
                        <div className="services-hover-div" data-aos="fade-right" data-aos-duration="1400" data-aos-delay="200" ></div>
                    </div>

                    <div className='block' style={{ "--hover-color": color }} data-aos="fade-right" data-aos-duration="1400" >
                        <div className='services-block'   >
                            <div className='services-block-contents' >
                                <i className="fa-brands fa-wordpress-simple fa-2xl" style={{ color }}></i>
                                <h3 className='mt-4' >WordPress Development</h3>
                                <p>Designing bespoke WordPress solutions with custom themes and high-performance plugins tailored to your business needs.</p>
                            </div>
                        </div>
                        <div className="services-hover-div" data-aos="fade-right" data-aos-duration="1400" ></div>
                    </div>

                    <div className='block' style={{ "--hover-color": color }} data-aos="fade-right" data-aos-duration="1400" data-aos-delay="100"  >
                        <div className='services-block'  >
                            <div className='services-block-contents' >
                                <i className="fa-solid fa-screwdriver-wrench fa-2xl" style={{ color }}></i>
                                <h3 className='mt-4' >Software Maintenance</h3>
                                <p>Ensuring long-term stability and security through proactive updates, continuous performance tuning, and technical support.</p>
                            </div>
                        </div>
                        <div className="services-hover-div" data-aos="fade-right" data-aos-duration="1400" data-aos-delay="100" ></div>
                    </div>

                    <div className='block' style={{ "--hover-color": color }} data-aos="fade-right" data-aos-duration="1400" data-aos-delay="200"  >
                        <div className='services-block'  >
                            <div className='services-block-contents' >
                                <i className="fa-solid fa-server fa-2xl" style={{ color }}></i>
                                <h3 className='mt-4' >Domain & Hosting Services</h3>
                                <p>Complete domain registration and hosting setup with SSL security, performance optimization, and deployment for your website.</p>
                            </div>
                        </div>
                        <div className="services-hover-div" data-aos="fade-right" data-aos-duration="1400" data-aos-delay="200" ></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services