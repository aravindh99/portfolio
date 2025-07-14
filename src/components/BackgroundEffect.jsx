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
            var(--spotlight), transparent 80%)
        `;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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