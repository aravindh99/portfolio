import React, { useState } from 'react';

function Logo() {
  const [toggled, setToggled] = useState(false);

  const handleClick = () => setToggled((prev) => !prev);

  return (
    <button
      type="button"
      className={`logo-container${toggled ? ' toggled' : ''}`}
      onClick={handleClick}
      aria-label="Toggle logo initials"
      tabIndex={0}
      style={{ border: 'none', background: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
    >
      <span className="logo-full">Aravindh</span>
      <span className="logo-initials">AN</span>
    </button>
  );
}

export default Logo;