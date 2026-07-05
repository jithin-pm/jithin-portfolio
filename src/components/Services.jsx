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
                                <p>Architecting high-performance web applications focused on scalability, performance, and modern industry standards, from interactive SPAs to complex full-stack platforms.</p>
                            </div>
                        </div>
                        <div className="services-hover-div" data-aos="fade-right" data-aos-duration="1400"></div>
                    </div>
                    <div className='block' style={{ "--hover-color": color }} data-aos="fade-right" data-aos-duration="1400" data-aos-delay="100"    >
                        <div className='services-block' >
                            <div className='services-block-contents' style={{ marginTop: 0 }} >
                                <PiDevices size={58} style={{ color, marginBottom: '-8px' }} />
                                <h3>Full Responsive Design</h3>
                                <p>Crafting seamless, adaptive interfaces that perform flawlessly across every screen size, ensuring a consistent and pixel-perfect experience on desktops, tablets, and mobile.</p>
                            </div>
                        </div>
                        <div className="services-hover-div" data-aos="fade-right" data-aos-duration="1400" data-aos-delay="100"></div>
                    </div>

                    <div className='block' style={{ "--hover-color": color }} data-aos="fade-right" data-aos-duration="1400" data-aos-delay="200" >
                        <div className='services-block'  >
                            <div className='services-block-contents' >
                                <i className="fa-brands fa-node fa-2xl" style={{ color }}></i>
                                <h3 className='mt-4' >Backend Development</h3>
                                <p>Building robust server-side logic and scalable architectures with RESTful APIs, secure authentication, and reliable database design for optimal performance.</p>
                            </div>
                        </div>
                        <div className="services-hover-div" data-aos="fade-right" data-aos-duration="1400" data-aos-delay="200" ></div>
                    </div>

                    <div className='block' style={{ "--hover-color": color }} data-aos="fade-right" data-aos-duration="1400" >
                        <div className='services-block'   >
                            <div className='services-block-contents' >
                                <i className="fa-brands fa-wordpress-simple fa-2xl" style={{ color }}></i>
                                <h3 className='mt-4' >WordPress Development</h3>
                                <p>Designing bespoke WordPress solutions with custom themes, plugin integration, and content management tailored to your business needs.</p>
                            </div>
                        </div>
                        <div className="services-hover-div" data-aos="fade-right" data-aos-duration="1400" ></div>
                    </div>

                    <div className='block' style={{ "--hover-color": color }} data-aos="fade-right" data-aos-duration="1400" data-aos-delay="100"  >
                        <div className='services-block'  >
                            <div className='services-block-contents' >
                                <i className="fa-solid fa-screwdriver-wrench fa-2xl" style={{ color }}></i>
                                <h3 className='mt-4' >Software Maintenance</h3>
                                <p>Ensuring long-term stability and security through proactive updates, bug fixes, continuous performance tuning, and dedicated technical support.</p>
                            </div>
                        </div>
                        <div className="services-hover-div" data-aos="fade-right" data-aos-duration="1400" data-aos-delay="100" ></div>
                    </div>

                    <div className='block' style={{ "--hover-color": color }} data-aos="fade-right" data-aos-duration="1400" data-aos-delay="200"  >
                        <div className='services-block'  >
                            <div className='services-block-contents' >
                                <i className="fa-solid fa-server fa-2xl" style={{ color }}></i>
                                <h3 className='mt-4' >Domain & Hosting Services</h3>
                                <p>Domain registration, hosting setup with SSL security, and performance-optimized deployment for a fast and reliable online presence.</p>
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