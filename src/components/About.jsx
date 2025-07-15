import React, { useState } from 'react'
import ara from '../assets/ara.png'
import ara1 from '../assets/ara1.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function About() {
  const [showFirst, setShowFirst] = useState(true);

  function handleMouse() {
    setShowFirst((prev) => !prev);
  }

  return (
    <div className='about'>
      <div
        className="ara-img-stack"
        onMouseEnter={() => setShowFirst(false)}
        onMouseLeave={() => setShowFirst(true)}
      >
        <img
          src={ara}
          alt="aravindh"
          className={showFirst ? 'ara-img visible' : 'ara-img'}
        />
        <img
          src={ara1}
          alt="aravindh alternate"
          className={!showFirst ? 'ara-img visible' : 'ara-img'}
        />
      </div>
      <div className='abt'>
        <div className="about-icons">
        <a href="https://github.com/aravindh99" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
           <FaGithub />
         </a>
        <a href="https://linkedin.com/in/aravindh99" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
          </a>
         <a href="https://instagram.com/one__autumn__leaf" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram />
        </a>
       <a href="mailto:arav.naatchu@email.com" aria-label="Email">
       <MdOutlineMail />
       </a>
       <a href="https://wa.me/918680947556" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
       <FaWhatsapp />
         </a>
        </div>
        <h2>Full Stack Developer</h2>
        <p>Building fast, accessible web apps with React and Express. 
          Focused on clean code, smooth user experiences, and performance-first design.</p>
      </div>
    </div>
  )
}