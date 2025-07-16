import React, { useEffect, useRef } from 'react';

function BackgroundEffect({ theme }) {
  const ref = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (ref.current) {
        ref.current.style.background = `
          radial-gradient(600px circle at ${x}px ${y}px, 
            var(--spotlight, rgba(248,239,212,0.12)), transparent 80%)
        `;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
   
    if (theme === 'light') {
      document.documentElement.style.setProperty('--spotlight', 'rgba(1, 1, 1, 0.12)'); // dark circle for light mode
    } else {
      document.documentElement.style.setProperty('--spotlight', 'rgba(248,239,212,0.12)'); // light circle for dark mode
    }
  }, [theme]);

  return (
    <div
      ref={ref}
      className="background-effect"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        transition: 'background 0.3s',
      }}
    />
  );
}

export default BackgroundEffect; 