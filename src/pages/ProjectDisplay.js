import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <a href={project.link} target="_blank" rel="noreferrer">
          <img src={project.image} 
            alt="example"
          />
        </a>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p>
        {project.bink}
      </p>
      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;
