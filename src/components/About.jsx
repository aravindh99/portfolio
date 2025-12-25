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
    // Avoid blocking on some browsers; ignore play() promise rejection
    audio.play().catch(() => { });
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className='about' style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', textAlign: 'center' }}>

        {/* Text Content Only */}
        <div style={{ padding: '1rem', maxWidth: '800px' }}>
          <div className="about-icons fade-in-up" style={{ animationDelay: '0.1s', justifyContent: 'center' }}>
            <a href="https://github.com/aravindh99" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/aravindh99" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:arav.naatchu@gmail.com" aria-label="Email">
              <MdOutlineMail />
            </a>
            <a href="https://wa.me/918680947556" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
          <h2 className="fade-in-up" style={{ animationDelay: '0.2s', fontSize: '3rem', marginBottom: '0.5rem', marginTop: '1rem' }}>
            Hi, I'm <span style={{ color: 'var(--accent)' }}>Aravindh</span>
          </h2>
          <h3 className="fade-in-up" style={{ animationDelay: '0.25s', fontSize: '1.5rem', marginBottom: '1.5rem', opacity: 0.8, fontWeight: '400' }}>Senior Software Engineer</h3>
          <p className="fade-in-up" style={{ animationDelay: '0.3s', fontSize: '1.1rem' }}>
            Full-stack engineer with strong experience architecting production systems across React, Node.js, and SQL-based backends.
            Expert in system design, database modeling, and performance optimization.
            Currently deepening low-level systems knowledge using <strong>Rust</strong> (memory safety, async/await, WASM).
            I build scalable services from schema design to deployment (AWS, Docker, Caddy) and love creating high-performance, seamless user experiences.
          </p>
          <button className='hire' onClick={handleHireClick} style={{
            marginTop: '2rem',
            background: 'var(--accent)',
            color: 'var(--bg-dark)',
            border: 'none',
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-glow)'
          }}>Hire Me!</button>
        </div>
      </div>
      {showModal && (
        <div className="summon-modal-overlay" onClick={closeModal} style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)',
          display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 3000
        }}>
          <div className="summon-modal" onClick={e => e.stopPropagation()} style={{
            background: 'var(--bg-dark)',
            border: '1px solid var(--accent)',
            padding: '2rem', borderRadius: 'var(--radius-lg)',
            textAlign: 'center', maxWidth: '400px', width: '90%',
            boxShadow: '0 0 40px rgba(var(--hue-gold), 70%, 50%, 0.2)'
          }}>
            <div className="summon-modal-message" style={{
              fontSize: '1.5rem', fontFamily: 'var(--font-display)', marginBottom: '1.5rem',
              color: 'var(--accent)'
            }}>
              ⚔️ You have summoned Aravindh! ⚔️
            </div>
            <div className="summon-modal-actions" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a
                href={
                  "mailto:arav.naatchu@gmail.com" +
                  "?subject=" + encodeURIComponent("Opportunity for Full Stack Developer") +
                  "&body=" + encodeURIComponent(
                    `Hi Aravindh,%0D%0A%0D%0AWe are impressed by your portfolio and would like to discuss a potential opportunity with you. Please let us know your availability for a call or interview.%0D%0A%0D%0ARegards,%0D%0A[Your Name]%0D%0A[Company]`
                  )
                }
                className="summon-modal-btn"
                style={{
                  background: 'var(--accent)', color: 'var(--bg-dark)',
                  padding: '12px', borderRadius: 'var(--radius-sm)',
                  fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px'
                }}
              >
                Send Email
              </a>
              <button className="summon-modal-btn" onClick={closeModal} style={{
                background: 'transparent', color: 'var(--text)',
                border: '1px solid var(--border)',
                padding: '12px', borderRadius: 'var(--radius-sm)',
                cursor: 'pointer'
              }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}