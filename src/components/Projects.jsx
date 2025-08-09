import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "School Scoop",
    github: "https://github.com/aravindh99/school",
    live: "https://schoolscoop.vercel.app", 
    description:
      "School Scoop is a web application where students can anonymously share stories, confessions, rumors, and secrets about their school life. Post messages to crushes, enemies, or just share what's happening in your school - all completely anonymous!",
    stack: ["React", "Node.js", "Express", "MongoDB", "React Router", "Render", "Vercel"],
    
  },
  {
    name: "Auth Service",
    github: "https://github.com/aravindh99/auth",
    live: "", // placeholder
    description:
      "A production-ready authentication microservice. Supports sign up, login, password reset, and token-based auth.",
    stack: ["Go", "React", "Express", "Recharts", "MySQL", "SMTP", "JWT"],
  
  },
  {
    name: "Billing App (Full Stack)",
    github: "https://github.com/aravindh99/bill-back",
    live: "", // placeholder
    description:
      "A full-stack billing and invoice management app. Features user authentication, bill creation, and management. Separate frontend and backend repos.",
    stack: ["React", "Node.js", "Express", "MySQL", "Prisma", "react-pdf"],

  }
];

const clientProjects = [
  {
    name: "CareerTechPro (Godaddy domain)",
    url: "https://www.careertechpro.xyz"
  },
  {
    name: "RiaxPrime (Godaddy domain)",
    url: "https://www.riaxprime.xyz"
  }
];

const demoProjects = [
  {
    name: "Old Portfolio React (Firebase)",
    url: "https://portfolio-19302.web.app/"
  },
  {
    name: "Hangman Game in React (Vercel)",
    url: "https://game-chi-teal.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section className="projectSec">
      <h2>Projects</h2>
      <div className="ProjectContainer">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-title-row">
              <h3 className="project-title">{proj.name}</h3>
            </div>
            <div className="project-desc">{proj.description}</div>
            <div className="project-stack">
              {proj.stack.map((tech, i) => (
                <span className="project-tech" key={i}>{tech}</span>
              ))}
            </div>
            <div className="project-buttons">
              <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-btn github-btn">
                <FaGithub />
                GitHub
              </a>
              {proj.live && (
                <a href={proj.live} target="_blank" rel="noopener noreferrer" className="project-btn live-btn">
                  <FaExternalLinkAlt />
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <h3 className="project-subheading">Client Projects</h3>
      <div className="project-grid">
        {clientProjects.map((proj, idx) => (
          <a className="project-link-card" href={proj.url} target="_blank" rel="noopener noreferrer" key={idx}>
            {proj.name}
          </a>
        ))}
      </div>
      <h3 className="project-subheading">Learning & Demo Projects</h3>
      <div className="project-grid">
        {demoProjects.map((proj, idx) => (
          <a className="project-link-card" href={proj.url} target="_blank" rel="noopener noreferrer" key={idx}>
            {proj.name}
          </a>
        ))}
      </div>
    </section>
  );
}