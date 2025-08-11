// Projects carousel with 3D peek and drag/swipe
import { useState, useRef, useEffect } from "react";

const projects = [
  {
    name: "VanLife",
    github: "https://github.com/aravindh99/vanlife",
    live: "https://vanlife-ruby-tau.vercel.app/",
    description: "Van rental web app with host dashboard. Firebase Firestore for data; MirageJS for auth in dev.",
    stack: ["React", "Vite", "Firebase Firestore"],
    deploy: { frontend: "Vercel", backend: "Firebase/MirageJS (mock)", database: "Firebase Firestore" }
  },
  {
    name: "Job Board",
    github: "https://github.com/aravindh99/job",
    live: "https://job-chi-gold.vercel.app/",
    description: "Full‑stack job board to browse listings, view details, and post new jobs with validation.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Mongoose"],
    deploy: { frontend: "Vercel", backend: "Render", database: "MongoDB Atlas" }
  },{
    name: "Auth Service",
    github: "https://github.com/aravindh99/auth",
    live: "", // placeholder
    description:
      "A production-ready authentication microservice. Supports sign up, login, password reset, and token-based auth. Chart view dashboard for super admin and projects and users statistics.",
    stack: [ "React", "Express", "Recharts", "MySQL", "SMTP", "JWT"],
    deploy: { frontend: "TBD", backend: "TBD", database: "MySQL" }
  },
  {
    name: "Billing App ",
    github: "https://github.com/aravindh99/bill-back",
    live: "", // placeholder
    description:
      "A full-stack billing and invoice management app. Features user authentication, bill creation, and management.",
    stack: ["React", "Node.js", "Express", "MySQL", "Prisma", "react-pdf"],
    deploy: { frontend: "TBD", backend: "TBD", database: "MySQL" }

  },
  {
    name: "Todo",
    github: "https://github.com/aravindh99/todo",
    live: "https://aravindh99.github.io/todo/",
    description: "Vanilla JS Todo app with projects and tasks, modal CRUD, and local persistence.",
    stack: ["JavaScript", "CSS", "HTML", "Webpack"],
    deploy: { frontend: "GitHub Pages" }
  },
  {
    name: "UI Template",
    github: "https://github.com/aravindh99/ui-template",
    live: "",
    description: "UI starter template with reusable components and responsive layouts (placeholder).",
    stack: ["HTML", "CSS", "JavaScript"],
    deploy: { npm:"npm install @aravinth99/ui-template" }
  },
  {
    name: "School Scoop",
    github: "https://github.com/aravindh99/school",
    live: "https://schoolscoop.vercel.app", 
    description:
      "School Scoop is a web application where students can anonymously share stories, confessions, rumors, and secrets about their school life. Post messages to crushes, enemies, or just share what's happening in your school - all completely anonymous!",
    stack: ["React","Tailwind Css","Node.js", "Express", "MongoDB"],
    deploy: { frontend: "Vercel", backend: "Render", database: "MongoDB Atlas" }
  },
  {
    name: "CareerTechPro ",
    github: "https://github.com/aravindh99/careertechpro",
    live: "https://www.careertechpro.xyz",
    description: "Company website and domain setup with clean, fast static pages.",
    stack: ["HTML", "CSS", "JavaScript"],
    deploy: { frontend: "netlify", Domain: "GoDaddy" }
  },
  {
    name: "RiaxPrime",
    github: "https://github.com/aravindh99/riaxprime",
    live: "https://www.riaxprime.xyz",
    description: "Lightweight business website with simple navigation and contact links.",
    stack: ["HTML", "CSS", "JavaScript"],
    deploy: { frontend: "Netlify", Domain: "GoDaddy" }
  },
  {
    name: "Old Portfolio",
    github: "https://github.com/aravindh99/portfolio-old",
    live: "https://portfolio-19302.web.app/",
    description: "Older personal portfolio built with React and hosted on Firebase.",
    stack: ["React", "Firebase"],
    deploy: { frontend: "Firebase Hosting", backend: "None", database: "None" }
  },
  {
    name: "Hangman Game in React ",
    github: "https://github.com/aravindh99/game",
    live: "https://game-chi-teal.vercel.app/",
    description: "A simple hangman game built with React and deployed to Vercel.",
    stack: ["React19"],
    deploy: { frontend: "Vercel", backend: "None", database: "None" }
  }
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const pointerStartX = useRef(null);
  const isPointerDown = useRef(false);

  const count = projects.length;
  const clamp = (i) => ((i % count) + count) % count;
  const go = (i, dir) => { setDirection(dir); setIndex(clamp(i)); };
  const next = () => go(index + 1, "next");
  const prev = () => go(index - 1, "prev");

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index]);

  const onPointerDown = (e) => {
    isPointerDown.current = true;
    pointerStartX.current = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0;
  };
  const onPointerMove = () => {
    if (!isPointerDown.current) return;
  };
  const onPointerUp = (e) => {
    if (!isPointerDown.current) return;
    const endX = e.clientX ?? (e.changedTouches && e.changedTouches[0]?.clientX) ?? 0;
    const delta = endX - (pointerStartX.current ?? 0);
    if (Math.abs(delta) > 40) {
      delta < 0 ? next() : prev();
    }
    isPointerDown.current = false;
    pointerStartX.current = null;
  };

  const prevIdx = clamp(index - 1);
  const nextIdx = clamp(index + 1);
  const active = projects[index];

  const formatDeploy = (deploy) => {
    if (!deploy) return null;
    const labelFor = (key) => {
      const k = key.toLowerCase();
      if (k === 'database' || k === 'db') return 'DB';
      if (k === 'frontend') return 'Frontend';
      if (k === 'backend') return 'Backend';
      if (k === 'domain') return 'Domain';
      return key.charAt(0).toUpperCase() + key.slice(1);
    };
    const parts = Object.entries(deploy)
      .filter(([_, v]) => v && String(v).trim() && !/^tbd$/i.test(String(v)) && !/^none$/i.test(String(v)))
      .map(([k, v]) => `${labelFor(k)}: ${v}`);
    if (parts.length === 0) return null;
    return `Deploy — ${parts.join(' | ')}`;
  };

  return (
    <section className="projctSec">
      <h2>Projects</h2>
      <div
        className="px-carousel"
        onMouseDown={onPointerDown}
        onMouseMove={onPointerMove}
        onMouseUp={onPointerUp}
        onMouseLeave={onPointerUp}
        onTouchStart={onPointerDown}
        onTouchMove={onPointerMove}
        onTouchEnd={onPointerUp}
        role="region"
        aria-roledescription="carousel"
        aria-label="Projects"
      >
        <button className="px-nav prev" aria-label="Previous" onClick={prev}>‹</button>
        <div className="px-stage" key={`stage-${index}-${direction}`}>
          <div className="px-card prev" aria-hidden="true">
            <div className="px-card-inner">
              {projects[prevIdx].live || projects[prevIdx].github ? (
                <a className="px-card-link" href={projects[prevIdx].live || projects[prevIdx].github} target="_blank" rel="noopener noreferrer">
                  <h3>{projects[prevIdx].name}</h3>
                  <p>{projects[prevIdx].description}</p>
                  {projects[prevIdx].stack?.length ? (<p>Stack: {projects[prevIdx].stack.join(', ')}</p>) : null}
                  {formatDeploy(projects[prevIdx].deploy) ? (
                    <p>{formatDeploy(projects[prevIdx].deploy)}</p>
                  ) : null}
                </a>
              ) : (
                <>
                  <h3>{projects[prevIdx].name}</h3>
                  <p>{projects[prevIdx].description}</p>
                  {projects[prevIdx].stack?.length ? (<p>Stack: {projects[prevIdx].stack.join(', ')}</p>) : null}
                  {formatDeploy(projects[prevIdx].deploy) ? (
                    <p>{formatDeploy(projects[prevIdx].deploy)}</p>
                  ) : null}
                </>
              )}
              <div className="project-buttons">
                {projects[prevIdx].github ? (
                  <a href={projects[prevIdx].github} target="_blank" rel="noopener noreferrer" className="project-btn github-btn">GitHub</a>
                ) : null}
                {projects[prevIdx].live ? (
                  <a href={projects[prevIdx].live} target="_blank" rel="noopener noreferrer" className="project-btn live-btn">Live</a>
                ) : null}
              </div>
            </div>
          </div>

          <div className={`px-card active ${direction === 'next' ? 'enter-right' : 'enter-left'}`}>
            <div className="px-card-inner">
              {active.live || active.github ? (
                <a className="px-card-link" href={active.live || active.github} target="_blank" rel="noopener noreferrer">
                  <h3>{active.name}</h3>
                  <p>{active.description}</p>
                  {active.stack?.length ? (<p>Stack: {active.stack.join(', ')}</p>) : null}
                  {formatDeploy(active.deploy) ? (
                    <p>{formatDeploy(active.deploy)}</p>
                  ) : null}
                </a>
              ) : (
                <>
                  <h3>{active.name}</h3>
                  <p>{active.description}</p>
                  {active.stack?.length ? (<p>Stack: {active.stack.join(', ')}</p>) : null}
                  {formatDeploy(active.deploy) ? (
                    <p>{formatDeploy(active.deploy)}</p>
                  ) : null}
                </>
              )}
              <div className="project-buttons">
                {active.github ? (
                  <a href={active.github} target="_blank" rel="noopener noreferrer" className="project-btn github-btn">GitHub</a>
                ) : null}
                {active.live ? (
                  <a href={active.live} target="_blank" rel="noopener noreferrer" className="project-btn live-btn">Live</a>
                ) : null}
              </div>
            </div>
          </div>

          <div className="px-card next" aria-hidden="true">
            <div className="px-card-inner">
              {projects[nextIdx].live || projects[nextIdx].github ? (
                <a className="px-card-link" href={projects[nextIdx].live || projects[nextIdx].github} target="_blank" rel="noopener noreferrer">
                  <h3>{projects[nextIdx].name}</h3>
                  <p>{projects[nextIdx].description}</p>
                  {projects[nextIdx].stack?.length ? (<p>Stack: {projects[nextIdx].stack.join(', ')}</p>) : null}
                  {formatDeploy(projects[nextIdx].deploy) ? (
                    <p>{formatDeploy(projects[nextIdx].deploy)}</p>
                  ) : null}
                </a>
              ) : (
                <>
                  <h3>{projects[nextIdx].name}</h3>
                  <p>{projects[nextIdx].description}</p>
                  {projects[nextIdx].stack?.length ? (<p>Stack: {projects[nextIdx].stack.join(', ')}</p>) : null}
                  {formatDeploy(projects[nextIdx].deploy) ? (
                    <p>{formatDeploy(projects[nextIdx].deploy)}</p>
                  ) : null}
                </>
              )}
              <div className="project-buttons">
                {projects[nextIdx].github ? (
                  <a href={projects[nextIdx].github} target="_blank" rel="noopener noreferrer" className="project-btn github-btn">GitHub</a>
                ) : null}
                {projects[nextIdx].live ? (
                  <a href={projects[nextIdx].live} target="_blank" rel="noopener noreferrer" className="project-btn live-btn">Live</a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <button className="px-nav next" aria-label="Next" onClick={next}>›</button>
      </div>
    </section>
  );
}