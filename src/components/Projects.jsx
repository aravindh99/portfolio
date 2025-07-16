import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Auth Service",
    github: "https://github.com/aravindh99/auth",
    live: "https://goog.com", // placeholder
    description:
      "A production-ready authentication microservice built in Go. Supports sign up, login, password reset, and token-based auth. Designed for easy integration with any app.",
    stack: ["React", "Express", "Rechart", "Mysql", "SMTP","JWT token"],
    backend: true,
    note: "Backend will be hosted on Render."
  },
  {
    name: "Billing App (Full Stack)",
    github: "https://github.com/aravindh99/bill-back",
    live: "https://goog.com", // placeholder
    description:
      "A full-stack billing and invoice management app. Features user authentication, bill creation, and management. Separate frontend and backend repos.",
    stack: ["React", "Node.js", "Express", "MySQL", "Prisma", "React-Pdf"],
    note: "Frontend will be hosted on Vercel, backend on Render, MySQL DB (hosted TBD)."
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
              <a href={proj.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={proj.live} target="_blank" rel="noopener noreferrer" aria-label="Live Preview">
                <FaExternalLinkAlt />
              </a>
            </div>
            <div className="project-desc">{proj.description}</div>
            <div className="project-stack">
              {proj.stack.map((tech, i) => (
                <span className="project-tech" key={i}>{tech}</span>
              ))}
            </div>
            {proj.backend && typeof proj.backend === "string" && (
              <div className="project-backend">
                Backend Repo: <a href={proj.backend} target="_blank" rel="noopener noreferrer">{proj.backend}</a>
              </div>
            )}
            {proj.note && <div className="project-note">{proj.note}</div>}
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