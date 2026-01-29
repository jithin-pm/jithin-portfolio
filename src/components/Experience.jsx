import React, { useContext } from 'react'
import '../styles/experience.css'
import { ColorContext } from '../context/ContextShare';

function Experience() {
    const { color, setColor } = useContext(ColorContext);

    return (
        <>
            <div className='experience'>
                <div className="experience-title" data-aos="fade-up" data-aos-duration="1400" >
                    <p>My Professional Journey</p>
                    <h2>EXPERIENCE</h2>
                </div>
                <div className='experience-block-section' >

                    {/* Experience Card 1 */}
                    <div className='experience-block-main' data-aos="fade-left" data-aos-duration="1900" style={{ "--hover-color": color }}>
                        <div className='experience-block' >
                            <div className='experience-block-contents' >
                                <h4>FULL STACK DEVELOPER</h4>
                                <div className='company-info'>
                                    <h6>LUNAR ENTERPRISES TRIVANDRUM</h6>
                                    <div className='year' style={{ backgroundColor: color }}>
                                        <p>JULY 2025 - PRESENT</p>
                                    </div>
                                </div>
                                <p className='experience-desc'>
                                    Managed frontend development while handling the entire project from start to finish, completing tasks on time and coordinating directly with clients to understand requirements. Built responsive and user-friendly web interfaces with a focus on clean design. Integrated Razorpay and Stripe for secure online payments and used Shiprocket for smooth shipping and order tracking. Added real-time features using Socket and improved user communication through Twilio SMS and OTP notifications. Also integrated Google Translation to support multiple languages and make the platform accessible to a wider audience.
                                </p>
                            </div>
                        </div>
                        <div className='experience-block-hover' ></div>
                    </div>

                    {/* Experience Card 2 */}
                    <div className='experience-block-main' data-aos="fade-right" data-aos-duration="1800" data-aos-delay="100" style={{ "--hover-color": color }}>
                        <div className='experience-block' >
                            <div className='experience-block-contents' >
                                <h4>JUNIOR SOFTWARE ENGINEER</h4>
                                <div className='company-info'>
                                    <h6>NEYNDRA GLOBAL SOLUTIONS PRIVATE LTD, TRIVANDRUM</h6>
                                    <div className='year' style={{ backgroundColor: color }}>
                                        <p>FEB 2025 - JULY 2025</p>
                                    </div>
                                </div>
                                <p className='experience-desc'>
                                    Worked on both frontend and backend development to build responsive, user-friendly, and fully functional web applications that deliver a smooth user experience. Collaborated closely with team members to design and develop scalable full-stack solutions, contributing to different stages of the development process and ensuring timely project completion. Gained hands-on experience in WordPress development, including theme customization, plugin integration, content management, and implementing responsive designs to ensure websites perform well across all devices
                                </p>
                            </div>
                        </div>
                        <div className='experience-block-hover' ></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Experience
