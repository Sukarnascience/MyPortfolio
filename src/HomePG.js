import React from 'react';
import "./HomepgStyle.css";
import {Link} from 'react-router-dom';

import bannerimg from "./gallery/bannerimg.jpg"

import {RiHtml5Fill,RiReactjsFill} from 'react-icons/ri';
import {DiCss3,DiReact} from 'react-icons/di';
import {IoLogoJavascript,IoCamera} from 'react-icons/io5';
import {FaNodeJs,FaPython,FaJava} from 'react-icons/fa';
import {SiPytorch,SiCplusplus,SiKotlin,SiPowershell} from 'react-icons/si';
import {GiForestCamp,GiElectricalResistance} from 'react-icons/gi';
import {HiArrowRight} from 'react-icons/hi';

function HomePG(){
    return(
        <div className="homePGMain">
            <span></span>
            <div className="bannerColor">
                <div className="banner">
                    <div className="bannerText">
                        <h2 className="bannerTag">
                            I want to <span className="highlightpart">make things</span><br/>
                            that bring <span className="underlinepart">changes</span><br/>
                            into a <span className="highlightpart">vision</span>.
                        </h2>
                    </div>
                    <img className="bannerPic" src={bannerimg} alt="Banner Pic"/>
                </div>
            </div>
            <div className="aboutme">
                <div className="headdingpart"><h1>About Me</h1><hr className="headlinehr"/></div>
                <div className="dataaboutme">
                    <div className="aboutmepart">
                        <p>Hello, i am</p>
                        <h2>
                            Sukarna Jana
                        </h2>
                        <br/>
                        <p>
                            A Full-stack developer, Kotlin based android app developer, 
                            and having a hands-on experience of 5 ~ 6 years in embedded 
                            systems and IoT. Presently making better myself in Tensorflow 
                            and revising PyTorch, and I will keep on updating, learning, or 
                            adopting new technology because I love to explore and 
                            play with new things. 
                        </p>
                        <p>
                            I don't only sit in front of the Computer and run my fingers 
                            through all the keys I have a different passion too like 
                            exploring new places and see the beauty which is been shown 
                            by nature and I am a nature photographer too and love to 
                            meet new peoples and have a great conversation with peoples.
                        </p>
                        <br/>
                        <p>
                            <b>Aim:</b> Technology has made us far from each 
                            other and I want to use that same technology to bring 
                            back everyone.
                        </p>
                    </div>
                </div>
            </div>
            <div className="skills">
                <div className="headdingpart"><h1>Skills</h1><hr className="headlinehr"/></div>  
                <div className="skillsgrp">
                    <h1 className="grpTopicHead">Front-End</h1>
                    <hr/>
                    <div className="listSkills">
                        <div className="skill">
                            <RiHtml5Fill color="#e34c26" size="60px"/>
                            <p>HTML5</p>
                        </div>
                        <div className="skill">
                            <RiReactjsFill color="#61dbfb" size="60px"/>
                            <p>JSX</p>
                        </div>
                        <div className="skill">
                            <DiCss3 color="#264de4" size="60px"/>
                            <p>CSS3</p>
                        </div>
                        <div className="skill">
                            <DiReact color="#61dbfb" size="60px"/>
                            <p>React</p>
                        </div>
                        <div className="skill">
                            <IoLogoJavascript color="f0db4f" size="60px"/>
                            <p>JavaScript</p>
                        </div>
                        <div className="skill">
                            <FaNodeJs color="#3c873a" size="60px"/>
                            <p>Node</p>
                        </div>
                    </div>
                </div>
                <div className="skillsgrp">
                    <h1 className="grpTopicHead">Back-End</h1>
                    <hr/>
                    <div className="listSkills">
                        <div className="skill">
                            <FaPython color="#ffd43b" size="60px"/>
                            <p>Python</p>
                        </div>
                    </div>
                </div>
                <div className="skillsgrp">
                    <h1 className="grpTopicHead">Other</h1>
                    <hr/>
                    <div className="listSkills">
                        <div className="skill">
                            <SiCplusplus color="01426a" size="60px"/>
                            <p>C++</p>
                            <p>
                                For embaded<br/>
                                system and more
                            </p>
                        </div>
                        <div className="skill">
                            <FaJava color="#5382a1" size="60px"/>
                            <p>Java</p>
                            <p>
                                For Android<br/>
                                app development
                            </p>
                        </div>
                        <div className="skill">
                            <SiKotlin color="#1aa2d4" size="60px"/>
                            <p>Kotlin</p>
                            <p>
                                For Android<br/>
                                app development
                            </p>
                        </div>
                        <div className="skill">
                            <SiPytorch color="e56717" size="60px"/>
                            <p>Pytorch</p>
                            <p>
                                For AI<br/>
                                for Python
                            </p>
                        </div>
                        <div className="skill">
                            <FaPython color="#4b8bbe" size="60px"/>
                            <p>Python</p>
                            <p>
                                For multipul<br/>
                                Projects...
                            </p>
                        </div>
                        <div className="skill">
                            <SiPowershell color="#77216f" size="60px"/>
                            <p>Powershell</p>
                            <p>
                                For eathical<br/> 
                                hacking and more
                            </p>
                        </div>
                        <div className="skill">
                            <IoCamera color="#333333" size="60px"/>
                            <p>Photographer</p>
                            <p>
                                Mobile photographer<br/> 
                                glance of nature
                            </p>
                        </div>
                        <div className="skill">
                            <GiForestCamp color="rgb(0, 165, 110)" size="60px"/>
                            <p>Naturalist</p>
                            <p>
                                Exploring new areas<br/> 
                                both land and water
                            </p>
                        </div>
                        <div className="skill">
                            <GiElectricalResistance color="#dda900" size="60px"/>
                            <p>Embedded</p>
                            <p>
                                Design small IOT<br/> 
                                product and more
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="moveto">
                <Link className="projectto" to="/portfolio">
                    <div>
                        <h2>See Projects <HiArrowRight size="28px" className="arrowtomove"/></h2>
                    </div>
                </Link>
                <Link className="contactto" to="/contact">
                    <div >
                        <h2>Contact Me <HiArrowRight size="28px" className="arrowtomove"/></h2>
                    </div>
                </Link>
            </div>
            <p className="createdBy">Created by Sukarna Jana</p>
        </div>
    )
}

export default HomePG;