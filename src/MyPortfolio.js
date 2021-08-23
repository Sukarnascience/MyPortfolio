import React, { useEffect, useState } from 'react';
import db from './firebase.config';
import "./PortfolioStyle.css";

import {IoLogoReact} from 'react-icons/io5';
import {RiErrorWarningLine} from 'react-icons/ri';
import {FcElectronics,FcAndroidOs} from 'react-icons/fc';
import {IoLogoPython} from 'react-icons/io';
import {FaHtml5} from 'react-icons/fa';
import {GiClick} from 'react-icons/gi';

import demopic from "./gallery/demo.gif";
import bdayGirl from "./gallery/bdayGirl.gif";
import weatherApp from "./gallery/weather.gif";
import dontSleep from "./gallery/dontSleep.gif";
import flashApp from "./gallery/flashApp.gif";
import globalRoom from "./gallery/globalRoom.gif";
import goTapp from "./gallery/gotApp.gif";
import iamforuTele from "./gallery/iamforuTele.gif";
import keepCoolApp from "./gallery/keepCoolApp.gif";
import screenTest from "./gallery/screenTest.gif";
import supportme from "./gallery/supportme.gif";
import todoApp from "./gallery/todoApp.gif"; 
import firstApp from "./gallery/firstApp.gif";
import portfoliobanner from "./gallery/portfolio.gif";

function MyPortfolio(){
    const [allProjects,getAllProjects] = useState([]);
    const fetchDB = () =>{
        db.collection("projects").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                getAllProjects(arr => [...arr,data]);
            });
        });
    };
    useEffect(()=>{
        fetchDB()
    },[])
    
    return(
        <div className="projectpg">
            <span></span>
            <span></span>
            <div className="myProjectTopLines">
                <h1>My Projects</h1>
                <p>
                    Learning the theory is good for passing the theoretical exam, 
                    but applying your knowledge with practical skills on your project is AWESOME!!
                </p>
            </div>
            <div className="projectList">
                {
                    allProjects && allProjects.map(projectData=>(
                        <div className="project" key={projectData.title}>
                            <WhichIcon tag={projectData.tag}/>
                            <CoverImg coverimg={projectData.coverImg}/>
                            <h1>{projectData.title}</h1>
                            <p>{projectData.summary}</p>
                            <p>Published on: {projectData.dateOfpublish}</p>
                            <p>{projectData.sourceCode ? <p className="OSC"><a href={projectData.sourceCode}>Source Code <GiClick/></a></p>:<p className="notOSC">This Project is not Open Source</p>}</p>
                            {projectData.demo ? <p className="LiveDemo"><a href={projectData.demo}>Live Demo</a></p> : <p className="notLiveDemo">Live Demo is Not Avalable</p>}
                        </div>
                    ))
                }
            </div>
            <p className="createdBy">Created by Sukarna Jana</p>
        </div>
    )
}

function CoverImg(props){
    if(props.coverimg==="bdayGirl"){
        return(<img src={bdayGirl} alt="Cover-Image" aria-hidden="true"/>)
    }
    else if(props.coverimg==="weatherApp"){
        return(<img src={weatherApp} alt="Cover-Image" aria-hidden="true"/>)
    }
    else if(props.coverimg==="flashlightApp"){
        return(<img src={flashApp} alt="Cover-Image" aria-hidden="true"/>)
    }
    else if(props.coverimg==="deviceTemp"){
        return(<img src={keepCoolApp} alt="Cover-Image" aria-hidden="true"/>)
    }
    else if(props.coverimg==="keepPhoneAwake"){
        return(<img src={dontSleep} alt="Cover-Image" aria-hidden="true"/>)
    }
    else if(props.coverimg==="todaystodo"){
        return(<img src={todoApp} alt="Cover-Image" aria-hidden="true"/>)
    }
    else if(props.coverimg==="globalchatRoom"){
        return(<img src={globalRoom} alt="Cover-Image" aria-hidden="true"/>)
    }
    else if(props.coverimg==="supportMe"){
        return(<img src={supportme} alt="Cover-Image" aria-hidden="true"/>)
    }
    else if(props.coverimg==="teleBotiamforu"){
        return(<img src={iamforuTele} alt="Cover-Image" aria-hidden="true"/>)
    }
    else if(props.coverimg==="gotApp"){
        return(<img src={goTapp} alt="Cover-Image" aria-hidden="true"/>)
    }
    else if(props.coverimg==="screenTest"){
        return(<img src={screenTest} alt="Cover-Image" aria-hidden="true"/>)
    }
    else if(props.coverimg==="firstKotlinapp"){
        return(<img src={firstApp} alt="Cover-Image" aria-hidden="true"/>)
    }
    else if(props.coverimg==="portfolio"){
        return(<img src={portfoliobanner} alt="Cover-Image" aria-hidden="true"/>)
    }
    else{
        return(<img src={demopic} alt="Cover-Image" aria-hidden="true"/>)
    }
}

function WhichIcon(props){
    if(props.tag==="react"){
        return(<IoLogoReact className="iconStyle" fill="#61dbfb" size="35px"/>)
    }
    else if(props.tag==="electronics"){
        return(<FcElectronics className="iconStyle" size="35px"/>)
    }
    else if(props.tag==="python"){
        return(<IoLogoPython className="iconStyle" fill="rgb(255, 253, 136)" size="35px"/>)
    }
    else if(props.tag==="html"){
        return(<FaHtml5 className="iconStyle" fill="rgb(255, 122, 60)" size="35px"/>)
    }
    else if(props.tag==="android"){
        return(<FcAndroidOs className="iconStyle" size="35px"/>)
    }
    else{
        return(<RiErrorWarningLine className="iconStyle" fill="rgb(242, 255, 67)" size="35px"/>)
    }
}

export default MyPortfolio;