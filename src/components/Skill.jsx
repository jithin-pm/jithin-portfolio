import React, { useContext, useEffect } from 'react'
import { ColorContext } from '../context/ContextShare';
import '../styles/skills.css'



function Skill() {
    const { color } = useContext(ColorContext);

    useEffect(() => {
        const circles = document.querySelectorAll('.circle-skill');
        circles.forEach((elem) => {
            const dots = parseInt(elem.getAttribute('data-dots'), 10);
            const marked = parseInt(elem.getAttribute('data-percent'), 10);
            const percent = Math.floor((dots * marked) / 100);
            const rotate = 360 / dots;
            let points = '';

            for (let i = 0; i < dots; i++) {
                points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
            }

            elem.innerHTML = points;

            const pointsMarked = elem.querySelectorAll('.points');
            for (let i = 0; i < percent; i++) {
                pointsMarked[i].classList.add('marked');
            }
        });
    }, []);


    return (
        <>
            <div className="skills-main">
                <div className="skills-heading" data-aos="fade-up" data-aos-duration="1400" >
                    <p>Services I offer to my clients</p>
                    <h2>MY SKILLS</h2>
                </div>
                <div className='tech-specialization-heading' data-aos="fade-down" data-aos-duration="1400" >
                    <p>Areas of Expertise and Skills</p>
                    <h2>Tech Specialization</h2>
                </div>
                <div className='tech-specialization' >
                    <div className="box-block" data-aos="fade-up" data-aos-duration="1400" >
                        <div className="box">
                            <div
                                className="circle-skill"
                                data-dots="70"
                                data-percent="90"
                                style={{ '--bgColor': color }}
                            ></div>
                            <div className="text">
                                <h2 className='skill-text' >90%</h2>
                            </div>
                        </div>
                        <h6>Front-End</h6>
                    </div>

                    <div className="box-block" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="200">
                        <div className="box">
                            <div
                                className="circle-skill"
                                data-dots="70"
                                data-percent="80"
                                style={{ '--bgColor': color }}
                            ></div>
                            <div className="text">
                                <h2 className='skill-text' >80%</h2>
                            </div>
                        </div>
                        <h6>Back-End</h6>
                    </div>

                    <div className="box-block" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="400">
                        <div className="box">
                            <div
                                className="circle-skill"
                                data-dots="70"
                                data-percent="88"
                                style={{ '--bgColor': color }}
                            ></div>
                            <div className="text">
                                <h2 className='skill-text' >85%</h2>
                            </div>
                        </div>
                        <h6>Database</h6>
                    </div>

                </div>
                <div className='development-tools-heading' data-aos="fade-down" data-aos-duration="1400" >
                    <p>Frameworks, Libraries, and Technologies I Use</p>
                    <h2>Development Tools</h2>
                </div>
                <div className="development-tools">
                    <div className='circle-block' data-aos="fade-up" data-aos-duration="1400">
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full-1">
                                    <div class="fill-1" style={{ backgroundColor: color }} ></div>
                                </div>
                                <div class="mask half">
                                    <div class="fill-1" style={{ backgroundColor: color }} ></div>
                                </div>
                                <div class="inside-circle"> 85% </div>
                            </div>
                        </div>
                        <p className='mt-2'>React JS</p>
                    </div>
                    <div className='circle-block' data-aos="fade-up" data-aos-duration="1400" data-aos-delay="100">
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full-2">
                                    <div class="fill-2" style={{ backgroundColor: color }} ></div>
                                </div>
                                <div class="mask half">
                                    <div class="fill-2" style={{ backgroundColor: color }} ></div>
                                </div>
                                <div class="inside-circle"> 95% </div>
                            </div>
                        </div>
                        <p className='mt-2'>HTML</p>
                    </div>

                    <div className='circle-block' data-aos="fade-up" data-aos-duration="1400" data-aos-delay="200">
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full-3">
                                    <div class="fill-3" style={{ backgroundColor: color }} ></div>
                                </div>
                                <div class="mask half">
                                    <div class="fill-3" style={{ backgroundColor: color }} ></div>
                                </div>
                                <div class="inside-circle"> 90% </div>
                            </div>
                        </div>
                        <p className='mt-2'>CSS</p>
                    </div>

                    <div className='circle-block' data-aos="fade-up" data-aos-duration="1400" data-aos-delay="300">
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full-4">
                                    <div class="fill-4" style={{ backgroundColor: color }} ></div>
                                </div>
                                <div class="mask half">
                                    <div class="fill-4" style={{ backgroundColor: color }} ></div>
                                </div>
                                <div class="inside-circle"> 94% </div>
                            </div>
                        </div>
                        <p className='mt-2'>Bootstrap</p>
                    </div>

                    <div className='circle-block' data-aos="fade-up" data-aos-duration="1400" data-aos-delay="400">
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full-5">
                                    <div class="fill-5" style={{ backgroundColor: color }} ></div>
                                </div>
                                <div class="mask half">
                                    <div class="fill-5" style={{ backgroundColor: color }} ></div>
                                </div>
                                <div class="inside-circle"> 90% </div>
                            </div>
                        </div>
                        <p className='mt-2'>Tailwind CSS</p>
                    </div>

                    <div className='circle-block' data-aos="fade-up" data-aos-duration="1400" data-aos-delay="500">
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full-6">
                                    <div class="fill-6" style={{ backgroundColor: color }} ></div>
                                </div>
                                <div class="mask half">
                                    <div class="fill-6" style={{ backgroundColor: color }} ></div>
                                </div>
                                <div class="inside-circle"> 75% </div>
                            </div>
                        </div>
                        <p className='mt-2'>JavaScript</p>
                    </div>

                    <div className='circle-block' data-aos="fade-up" data-aos-duration="1400">
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full-7">
                                    <div class="fill-7" style={{ backgroundColor: color }} ></div>
                                </div>
                                <div class="mask half">
                                    <div class="fill-7" style={{ backgroundColor: color }} ></div>
                                </div>
                                <div class="inside-circle"> 80% </div>
                            </div>
                        </div>
                        <p className='mt-2'>Node JS</p>
                    </div>

                    <div className='circle-block' data-aos="fade-up" data-aos-duration="1400" data-aos-delay="100">
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full-8">
                                    <div class="fill-8" style={{ backgroundColor: color }} ></div>
                                </div>
                                <div class="mask half">
                                    <div class="fill-8" style={{ backgroundColor: color }} ></div>
                                </div>
                                <div class="inside-circle"> 75% </div>
                            </div>
                        </div>
                        <p className='mt-2'>Express JS</p>
                    </div>

                    <div className='circle-block' data-aos="fade-up" data-aos-duration="1400" data-aos-delay="200">
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full-9">
                                    <div class="fill-9" style={{ backgroundColor: color }} ></div>
                                </div>
                                <div class="mask half">
                                    <div class="fill-9" style={{ backgroundColor: color }} ></div>
                                </div>
                                <div class="inside-circle"> 88% </div>
                            </div>
                        </div>
                        <p className='mt-2'>MongoDB</p>
                    </div>

                    <div className='circle-block' data-aos="fade-up" data-aos-duration="1400" data-aos-delay="300">
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full-10">
                                    <div class="fill-10" style={{ backgroundColor: color }}></div>
                                </div>
                                <div class="mask half">
                                    <div class="fill-10" style={{ backgroundColor: color }} ></div>
                                </div>
                                <div class="inside-circle"> 70%</div>
                            </div>
                        </div>
                        <p className='mt-2'>TypeScript</p>
                    </div>

                    <div className='circle-block' data-aos="fade-up" data-aos-duration="1400" data-aos-delay="400">
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full-11">
                                    <div class="fill-11" style={{ backgroundColor: color }}></div>
                                </div>
                                <div class="mask half">
                                    <div class="fill-11" style={{ backgroundColor: color }}></div>
                                </div>
                                <div class="inside-circle"> 82% </div>
                            </div>
                        </div>
                        <p className='mt-2'>Angular JS</p>
                    </div>

                    <div className='circle-block' data-aos="fade-up" data-aos-duration="1400" data-aos-delay="500">
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full-12">
                                    <div class="fill-12" style={{ backgroundColor: color }}></div>
                                </div>
                                <div class="mask half">
                                    <div class="fill-12" style={{ backgroundColor: color }}></div>
                                </div>
                                <div class="inside-circle">65% </div>
                            </div>
                        </div>

                        <p className='mt-2'>WordPress</p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Skill