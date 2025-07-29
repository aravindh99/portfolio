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
  const [showModal, setShowModal] = useState(false);

  // Play sword sound and show modal
  const handleHireClick = () => {
    const audio = new Audio('/sword.mp3');
    audio.play();
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
   <>
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
         <a href="https://instagram.com/last_autumnleaf" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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
      <button className='hire' onClick={handleHireClick}>Hire Me!</button>
      <div className="cont">
        <div className="cube">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
        </div>
      </div>
    </div>
    {showModal && (
      <div className="summon-modal-overlay" onClick={closeModal}>
        <div className="summon-modal" onClick={e => e.stopPropagation()}>
          <div className="summon-modal-message">⚔️ you have summoned aravindh! ⚔️</div>
          <div className="summon-modal-actions">
            <a
              href={
                "mailto:arav.naatchu@gmail.com" +
                "?subject=" + encodeURIComponent("Opportunity for Full Stack Developer") +
                "&body=" + encodeURIComponent(
                  `Hi Aravindh,%0D%0A%0D%0AWe are impressed by your portfolio and would like to discuss a potential opportunity with you. Please let us know your availability for a call or interview.%0D%0A%0D%0ARegards,%0D%0A[Your Name]%0D%0A[Company]`
                )
              }
              className="summon-modal-btn"
            >
              Send Email
            </a>
            <button className="summon-modal-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      </div>
    )}
    </>
  )
}