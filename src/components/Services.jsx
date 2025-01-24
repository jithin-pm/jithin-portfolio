import React, { useContext } from 'react'
import '../styles/service.css'
import { ColorContext } from '../context/ContextShare';

function Services() {
    const { color, setColor } = useContext(ColorContext);
    return (
        <>

            <div className="services">
                <div className='services-heading' data-aos="fade-up" data-aos-duration="1800" >
                    <p>Services I offer to my clients</p>
                    <h2>MY SERVICES</h2>
                </div>

                <div className='services-block-main'  >
                    <div className='block' style={{ "--hover-color": color }} data-aos="fade-right" data-aos-duration="1400" >
                        <div className='services-block'  >
                            <div className='services-block-contents' >
                                <i className="fa-solid fa-code fa-2xl" style={{ color }}></i>
                                <h3 className='mt-4' >Web Development</h3>
                                <p>Building modern, high-performance web applications with clean, efficient code that meets the latest industry standards.</p>
                            </div>
                        </div>
                        <div className="services-hover-div"  data-aos="fade-right" data-aos-duration="1400"></div>
                    </div>
                    <div className='block' style={{ "--hover-color": color }}  data-aos="fade-right" data-aos-duration="1400" data-aos-delay="100"    >
                        <div className='services-block' >
                            <div className='services-block-contents'  >
                                <i className="fa-solid fa-mobile-screen-button fa-2xl" style={{ color }}></i>
                                <h3 className='mt-4' >Mobile-Responsive Design</h3>
                                <p>Creating fully responsive and adaptive layouts that provide a seamless user experience across all devices, from mobile to desktop.</p>
                            </div>
                        </div>
                        <div className="services-hover-div" data-aos="fade-right" data-aos-duration="1400" data-aos-delay="100"></div>
                    </div>

                    <div className='block' style={{ "--hover-color": color }}  data-aos="fade-right" data-aos-duration="1400" data-aos-delay="200" >
                        <div className='services-block'  >
                            <div className='services-block-contents' >
                                <i className="fa-solid fa-server fa-2xl" style={{ color }}></i>
                                <h3 className='mt-4' >Backend Development</h3>
                                <p>Developing robust and scalable server-side logic, ensuring smooth data processing, and optimizing application performance.</p>
                            </div>
                        </div>
                        <div className="services-hover-div"  data-aos="fade-right" data-aos-duration="1400" data-aos-delay="200" ></div>
                    </div>

                    <div className='block' style={{ "--hover-color": color }}  data-aos="fade-right" data-aos-duration="1400" >
                        <div className='services-block'   >
                            <div className='services-block-contents' >
                                <i className="fa-solid fa-database fa-2xl" style={{ color }}></i>
                                <h3 className='mt-4' >Database Management</h3>
                                <p>Designing and managing databases for efficient data storage, retrieval, and security, using the latest database technologies.</p>
                            </div>
                        </div>
                        <div className="services-hover-div" data-aos="fade-right" data-aos-duration="1400" ></div>
                    </div>

                    <div className='block' style={{ "--hover-color": color }}  data-aos="fade-right" data-aos-duration="1400" data-aos-delay="100"  >
                        <div className='services-block'  >
                            <div className='services-block-contents' >
                                <i className="fa-solid fa-screwdriver-wrench fa-2xl" style={{ color }}></i>
                                <h3 className='mt-4' >Software Maintenance</h3>
                                <p>Providing ongoing support and maintenance to keep your software up to date with the latest features and security updates.</p>
                            </div>
                        </div>
                        <div className="services-hover-div" data-aos="fade-right" data-aos-duration="1400" data-aos-delay="100" ></div>
                    </div>

                    <div className='block' style={{ "--hover-color": color }}  data-aos="fade-right" data-aos-duration="1400" data-aos-delay="200"  >
                        <div className='services-block'  >
                            <div className='services-block-contents' >
                                <i className="fa-brands fa-html5 fa-2xl" style={{ color }}></i>
                                <h3 className='mt-4' >Innovative UI/UX</h3>
                                <p>Great design is a blend of aesthetics and usability, and I strive to achieve this balance in every project.</p>
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