import React, { useState } from 'react';
import './Logo.css'; // We'll create this file

function Logo() {
  const [toggled, setToggled] = useState(false);

  const handleClick = () => setToggled((prev) => !prev);

  return (
    <div className={`logo-container${toggled ? ' toggled' : ''}`} onClick={handleClick}>
      <span className="logo-full">Aravindh</span>
      <span className="logo-initials">AN</span>
    </div>
  );
}

export default Logo;