import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { FaLinux } from "react-icons/fa6";
import { SiHuggingface } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { CgCloud } from "react-icons/cg";


export default function Skills(){

    return(
        <div className="skill-sec">
        <div className="skillsHeading">
        <h2>Tools & Skills</h2>
        </div>
        <div className="skillWrap">
           
            <h3> Front-End  <div className="frontEnd">
            <FaHtml5 /><span>HTML</span>
            <FaCss3Alt /><span>CSS</span>
            <FaSass /><span>SCSS</span>
            <FaJs /><span>JavaScript</span>
            <FaReact /><span>React</span>
            <RiTailwindCssFill /><span>TailwindCss</span>
           
            
                
                </div></h3>
            
            
            <h3> Back-End <div className="backEnd">
            <FaNodeJs /><span>NodeJs</span>
            <SiExpress /><span>Express</span>
            <DiMysql /><span>Mysql</span>
            <FaJs /><span>JavaScript</span>
            <SiMongodb /><span>MongoDB</span>
            <span>&nbsp;&nbsp;C</span><span>C++</span>



            </div>
            
            
            </h3>
           
           
             <h3>Miscellaneous  <div className="others">
             <FaGitAlt /><span>Git</span>
             <FaGithub /><span>Github</span>
             <SiVite /><span>Vite</span>
             <SiWebpack /><span>Webpack</span>
             <FaLinux /><span>Linux</span>
             <SiHuggingface /><span>HuggingFace</span>
             


            </div></h3>
            
            <h3 className="dep">Deployments <div className="others">
             <SiNetlify/><span>Netlify</span>
             <IoLogoVercel /><span>Vercel</span>
             <SiRender /><span>Render</span>
             <CgCloud /><span>Gcloud</span>
             <FaGithub /><span>Github-pages</span>
             


            </div></h3>

           
             
             

        
            
        </div>
        </div>
    )
}