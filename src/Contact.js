import React from 'react';
import "./ContactStyle.css"

import {IoLogoGithub,IoLogoTwitter} from 'react-icons/io';
import {RiInstagramLine,RiLinkedinFill} from 'react-icons/ri';
import {FaDev,FaTelegram,FaDiscord,FaFacebookSquare} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import {BsFillHouseFill} from 'react-icons/bs';

function ContactPG(){
    return(
        <div className="contactpg">
            <span></span>
            <svg className="waterwave"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 320">
                <path
                    fill-opacity="1" 
                    d="M0,320L20,282.7C40,245,80,171,120,160C160,149,200,203,240,208C280,213,320,171,360,154.7C400,139,440,149,480,181.3C520,213,560,267,600,256C640,245,680,171,720,138.7C760,107,800,117,840,144C880,171,920,213,960,224C1000,235,1040,213,1080,197.3C1120,181,1160,171,1200,138.7C1240,107,1280,53,1320,64C1360,75,1400,149,1420,186.7L1440,224L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z">
                </path>
            </svg>
            <span></span>
            <div className="contactDetails">
                <div><SiGmail fill="rgb(129, 22, 218)" size="40px"/>
                    <p>sukarnajana.2003@gmail.com</p>
                </div>
                <div><BsFillHouseFill fill="rgb(129, 22, 218)" size="40px"/>
                    <p><b>Karnataka, India</b><br/>
                    Toranagallu village,<br/>
                    Bellary<br/>
                    Pin: 583123
                    </p>
                </div>
            </div>
            <span></span>
            <div className="findmetext">
                <h1>You can find me at</h1>
            </div>
            <div className="findme">
                <a href="https://github.com/Sukarnascience"><IoLogoGithub size="45px" className="github"/></a>
                <a href="https://www.instagram.com/sukarnascience/"><RiInstagramLine size="45px" className="instagram"/></a>
                <a href="https://twitter.com/JanaSukarna"><IoLogoTwitter size="45px" className="twitter"/></a>
                <a href="https://t.me/SukarnaJana"><FaTelegram size="45px" className="telegram"/></a>
                <a href="https://discord.gg/jDd8HFGcgV"><FaDiscord size="45px" className="discord"/></a>
                <a href="https://www.linkedin.com/in/sukarna-jana-19ba99212/"><RiLinkedinFill size="45px" className="linkedin"/></a>
                <a href="https://www.facebook.com/sukarna.jana.9"><FaFacebookSquare size="45px" className="facebook"/></a>
                <a href="https://dev.to/sukarnascience"><FaDev size="45px" className="dev"/></a>
            </div>
            <p className="createdBy">Created by Sukarna Jana</p>
        </div>
    )
}

export default ContactPG;