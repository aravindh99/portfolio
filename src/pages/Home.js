import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, This is Aravindh.</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/aravindh99/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
           <EmailIcon />
          <a href="https://github.com/aravindh99" target="_blank" rel="noreferrer"><GithubIcon /></a> 
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, HTML, CSS, Flutter, NPM,
              BootStrap
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS,  .NET,
              MySQL, Firebase, heroku
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, C#, C, C++ </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
