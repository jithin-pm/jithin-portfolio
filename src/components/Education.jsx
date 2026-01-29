import React, { useContext } from 'react'
import '../styles/education.css'
import { ColorContext } from '../context/ContextShare';

function Education() {
    const { color, setColor } = useContext(ColorContext);

    return (
        <>
            <div className='education'>
                <div className="education-title" data-aos="fade-up" data-aos-duration="1400" >
                    <p>From Campus to Code</p>
                    <h2>EDUCATION</h2>
                </div>
                <div className='education-block-section' >
                    <div className='education-block-main' data-aos="fade-right" data-aos-duration="1400" style={{ "--hover-color": color }}>
                        <div className='education-block' >
                            <div className='education-block-contents' >
                                <div className='year mb-2' style={{ backgroundColor: color }}>
                                    <p>2024 - 2027</p>
                                </div>
                                <h4>Bachelor of Computer Application</h4>
                                <h6>Indira Gandhi National Open University</h6>
                            </div>
                        </div>
                        <div className='education-block-hover' ></div>
                    </div>
                    <div className='education-block-main' data-aos="fade-right" data-aos-duration="1400" data-aos-delay="100" style={{ "--hover-color": color }}>
                        <div className='education-block' >
                            <div className='education-block-contents' >

                                <div className='year mb-2' style={{ backgroundColor: color }}>
                                    <p>Aug 2023 - Apr 2024</p>
                                </div>
                                <h4>ME(A)RN Stack Development</h4>
                                <h6>Luminar Technolab Kochi</h6>
                            </div>
                        </div>
                        <div className='education-block-hover' ></div>
                    </div>
                    <div className='education-block-main' data-aos="fade-right" data-aos-duration="1400" style={{ "--hover-color": color }}>
                        <div className='education-block' >
                            <div className='education-block-contents' >
                                <div className='year mb-2' style={{ backgroundColor: color }}>
                                    <p>2020 - 2023</p>
                                </div>
                                <h4>Diploma in Computer Engineering</h4>
                                <h6>Government Polytechnic College Nedumkandam</h6>

                            </div>
                        </div>
                        <div className='education-block-hover' ></div>
                    </div>
                    <div className='education-block-main' data-aos="fade-right" data-aos-duration="1400" data-aos-delay="100" style={{ "--hover-color": color }}>
                        <div className='education-block' >
                            <div className='education-block-contents' >
                                <div className='year mb-2' style={{ backgroundColor: color }}>
                                    <p>2018 - 2020</p>
                                </div>
                                <h4>Veterinary Science</h4>
                                <h6>Govt Higher Secondary School Kalanjoor</h6>

                            </div>
                        </div>
                        <div className='education-block-hover' ></div>
                    </div>
                    <div className='education-block-main' data-aos="fade-right" data-aos-duration="1400" style={{ "--hover-color": color }}>
                        <div className='education-block' >
                            <div className='education-block-contents' >
                                <div className='year mb-2' style={{ backgroundColor: color }}>
                                    <p>2017 - 2018</p>
                                </div>
                                <h4>SSLC</h4>
                                <h6>St Stephen's High School Pathanapuram</h6>

                            </div>
                        </div>
                        <div className='education-block-hover' ></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education