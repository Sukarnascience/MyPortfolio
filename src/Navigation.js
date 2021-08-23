import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import "./NavigationStyle.css"

function NavigationBar(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <nav> 
            <div className="mobileMode" onClick={toggle}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className={isOpen ? "open" : ""}>
                <Link className="navLink" onClick={()=>{setIsOpen(!isOpen)}} to="/">
                    <li>Home</li>
                </Link>
                <Link className="navLink" onClick={()=>{setIsOpen(!isOpen)}} to="/portfolio">
                    <li>Portfolio</li>
                </Link>
                <Link className="navLink" onClick={()=>{setIsOpen(!isOpen)}} to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavigationBar;