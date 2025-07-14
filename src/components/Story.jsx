import React, { useEffect, useRef, useState } from 'react';

const milestones = [
  { label: 'Game Hacks', icon: (
    <g>
      {/* Game controller icon */}
      <rect x="-10" y="-6" width="20" height="12" rx="6" fill="#b0b0b0" />
      <circle cx="-5" cy="0" r="2" fill="#18191a" />
      <circle cx="5" cy="0" r="2" fill="#18191a" />
      <rect x="-1" y="-2" width="2" height="4" rx="1" fill="#f8efd4" />
    </g>
  ) },
  { label: 'Cheat Engine', icon: (
    <g>
      {/* Magnifier/gear icon */}
      <circle cx="0" cy="0" r="6" fill="#b0b0b0" stroke="#18191a" strokeWidth="1" />
      <rect x="5" y="5" width="6" height="2" rx="1" fill="#b0b0b0" transform="rotate(45 5 5)" />
    </g>
  ) },
  { label: 'Phishing', icon: (
    <g>
      {/* Envelope icon */}
      <rect x="-7" y="-4" width="14" height="8" rx="2" fill="#b0b0b0" />
      <polyline points="-7,-4 0,2 7,-4" fill="none" stroke="#18191a" strokeWidth="1" />
    </g>
  ) },
  { label: 'MSc (SS)', icon: (
    <g>
      {/* Graduation cap icon */}
      <polygon points="0,-6 10,0 0,6 -10,0" fill="#b0b0b0" />
      <rect x="-2" y="0" width="4" height="6" fill="#18191a" />
    </g>
  ) },
  { label: 'Full-Stack Dev', icon: (
    <g>
      {/* Laptop icon */}
      <rect x="-8" y="-4" width="16" height="8" rx="2" fill="#b0b0b0" />
      <rect x="-6" y="-2" width="12" height="4" fill="#18191a" />
    </g>
  ) },
];

const stickmanY = 60;
const sceneStartX = 60;
const sceneGap = 140;
const stickmanRadius = 10;
const totalScenes = milestones.length;
const stickmanPath = Array.from({ length: totalScenes }, (_, i) => sceneStartX + i * sceneGap);

function Story() {
  const [step, setStep] = useState(0); // 0-4 for milestones
  const [progress, setProgress] = useState(0); // 0-1 for movement between
  const [moving, setMoving] = useState(true);
  const intervalRef = useRef();

  useEffect(() => {
    if (moving) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => {
          if (p < 1) return +(p + 0.05).toFixed(2);
          clearInterval(intervalRef.current);
          setTimeout(() => {
            setMoving(false);
            setTimeout(() => {
              setStep((s) => (s + 1) % totalScenes);
              setProgress(0);
              setMoving(true);
            }, 1100); // Pause at milestone
          }, 100);
          return 1;
        });
      }, 30);
    }
    return () => clearInterval(intervalRef.current);
  }, [moving, step]);

  // Calculate stickman X position
  const fromX = stickmanPath[step];
  const toX = stickmanPath[(step + 1) % totalScenes];
  const stickmanX = fromX + (toX - fromX) * progress;

  return (
    <div style={{ width: 760, marginLeft: '10px', background: '#18191a', borderRadius: 16, boxShadow: '0 2px 16px #b0b0b0cc', padding: 24 }}>
      <svg width={720} height={140} style={{ display: 'block', margin: '0 auto' }}>
        {/* Timeline */}
        <line x1={sceneStartX} y1={stickmanY + 30} x2={sceneStartX + sceneGap * (totalScenes - 1)} y2={stickmanY + 30} stroke="#b0b0b0" strokeWidth={4} />
        {/* Milestone icons and labels */}
        {milestones.map((m, i) => (
          <g key={i}>
            <g transform={`translate(${stickmanPath[i]},${stickmanY + 30})`}>
              {m.icon}
            </g>
            <text x={stickmanPath[i]} y={stickmanY + 60} textAnchor="middle" fontFamily="Dosis, Arial, sans-serif" fontSize={14} fill="#f8efd4">{m.label}</text>
          </g>
        ))}
        {/* Stickman */}
        <g transform={`translate(${stickmanX},${stickmanY})`}>
          {/* Head */}
          <circle cx={0} cy={0} r={stickmanRadius} fill="#f8efd4" stroke="#b0b0b0" strokeWidth={2} />
          {/* Body */}
          <line x1={0} y1={stickmanRadius} x2={0} y2={stickmanRadius + 22} stroke="#f8efd4" strokeWidth={3} />
          {/* Arms */}
          <line x1={0} y1={stickmanRadius + 8} x2={-12} y2={stickmanRadius + 16} stroke="#f8efd4" strokeWidth={3} />
          <line x1={0} y1={stickmanRadius + 8} x2={12} y2={stickmanRadius + 16} stroke="#f8efd4" strokeWidth={3} />
          {/* Legs */}
          <line x1={0} y1={stickmanRadius + 22} x2={-10} y2={stickmanRadius + 36} stroke="#f8efd4" strokeWidth={3} />
          <line x1={0} y1={stickmanRadius + 22} x2={10} y2={stickmanRadius + 36} stroke="#f8efd4" strokeWidth={3} />
        </g>
      </svg>
    </div>
  );
}

export default Story;
