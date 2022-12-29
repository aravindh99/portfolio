import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      
      <a href="https://instagram.com/one__autumn__leaf/" target="_blank" rel="noreferrer"><InstagramIcon /></a> 
      <a href="https://facebook.com/dark2wizard/" target="_blank" rel="noreferrer"><FacebookIcon /></a>
      <a href="https://www.linkedin.com/in/aravindh99/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
      </div>
    </div>
  );
}

export default Footer;
