import { useState, useRef } from "react";

const FULL_NAME = "Aravindh";
const INITIALS = "AN";

export default function Logo() {
  const [displayed, setDisplayed] = useState(FULL_NAME);
  const [toggled, setToggled] = useState(false);
  const animating = useRef(false);

  const animateToInitials = () => {
    if (animating.current) return;
    animating.current = true;
    let current = FULL_NAME;
    const interval = setInterval(() => {
      if (current.length > INITIALS.length) {
        current = current.slice(0, -1);
        setDisplayed(current);
      } else {
        clearInterval(interval);
        animating.current = false;
        setToggled(true);
        setDisplayed(INITIALS);
      }
    }, 60);
  };

  const animateToFull = () => {
    if (animating.current) return;
    animating.current = true;
    let current = INITIALS;
    const interval = setInterval(() => {
      if (current.length < FULL_NAME.length) {
        current = FULL_NAME.slice(0, current.length + 1);
        setDisplayed(current);
      } else {
        clearInterval(interval);
        animating.current = false;
        setToggled(false);
        setDisplayed(FULL_NAME);
      }
    }, 60);
  };

  const handleClick = () => {
    if (toggled) {
      animateToFull();
    } else {
      animateToInitials();
    }
  };

  return (
    <button
      type="button"
      className="logo-container"
      onClick={handleClick}
      aria-label="Toggle logo initials"
      tabIndex={0}
    >
      <span className="logo-animated">{displayed}</span>
    </button>
  );
}