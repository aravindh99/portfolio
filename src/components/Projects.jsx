import { useState, useEffect } from "react";

const projects = [
  // --- New / Active ---
  {
    name: "IntuitionX",
    live: "https://app.intuitionx.ai/",
    description: "Voice-first AI edtech platform for UK students. Features real-time speech-to-speech interaction.",
    stack: ["Next.js", "NestJS", "Three.js", "Microservices", "Nuetts-air", "TailwindCSS", "Gemini API"],
  },
  {
    name: "VA ERP",
    live: "https://va-erp.xtown.in/",
    description: "Comprehensive ERP for Venkateshwara Associates covering attendance, inventory, production, and reporting.",
    stack: ["React", "Express", "MySQL", "Recharts"],
  },
  {
    name: "Prithvi CMS",
    live: "https://pscms.prithviinnerwears.com/",
    description: "Canteen Management System kiosk PWA with thermal printer integration and UPI payments.Admin dashboard with clear charts.",
    stack: ["React", "PWA", "Razorpay", "Node.js"],
  },
  {
    name: "Kiddo Shadow",
    description: "Multi-tenant school management platform (Ongoing). RAG workflows, PWA-first.",
    stack: ["React", "Express", "GraphQL", "Redis", "Microservices", "Gemini API", "PostgreSQL", "SQLite"],
  },
  // --- Sites ---
  {
    name: "Kiro",
    live: "https://necromaniac.vercel.app/",
    description: "3D immersive horror experience built with React Three Fiber.",
    stack: ["React", "Three.js", "kiro"],
  },
  {
    name: "VHI Drills",
    live: "https://www.vhidrills.com/",
    description: "Corporate website for Venkateswara Borewells.",
    stack: ["React", "Vite", "Tailwind CSS"],
  },
  {
    name: "RiaxPrime",
    live: "https://www.riaxprime.xyz/",
    description: "Lightweight business website for a digital agency, optimized for speed and SEO.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Bharathi Center",
    live: "https://bharathi-beta.vercel.app/",
    description: "Service center application for Xerox/Printing services with Tamil language support.",
    stack: ["React", "Tailwind CSS", "Vite"],
  },
  {
    name: "CareerTech Pro",
    live: "https://www.careertechpro.xyz/",
    description: "Educational platform offering career guidance and tech courses.",
    stack: ["React", "Vite", "Tailwind CSS"],
  },
  // --- Old Projects ---
  {
    name: "VanLife",
    github: "https://github.com/aravindh99/vanlife",
    live: "https://vanlife-ruby-tau.vercel.app/",
    description: "Van rental web app with host dashboard.",
    stack: ["React", "Vite", "Firebase"],
  },
  {
    name: "Job Board",
    github: "https://github.com/aravindh99/job",
    live: "https://job-chi-gold.vercel.app/",
    description: "Full‑stack job board with listings and validation.",
    stack: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "Auth Service",
    github: "https://github.com/aravindh99/auth",
    live: "https://auth-five-azure.vercel.app/",
    description: "Production-ready auth microservice with JWT & SMTP.",
    stack: ["React", "Express", "MySQL", "JWT"],
  },
  {
    name: "Billing App",
    github: "https://github.com/aravindh99/bill-back",
    live: "https://bill-front-beta.vercel.app/",
    description: "Full-stack billing and invoice management app.",
    stack: ["React", "Node.js", "MySQL", "Prisma"],
  },
  {
    name: "School Scoop",
    github: "https://github.com/aravindh99/school",
    live: "https://schoolscoop.vercel.app",
    description: "Anonymous school confessions platform.",
    stack: ["React", "Tailwind", "Node.js", "MongoDB"],
  }
];

export default function Projects() {
  return (
    <section className="projctSec fade-in-up" style={{ marginTop: '4rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Projects</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {projects.map((p, i) => (
          <div key={i} className="project-item-minimal" style={{
            padding: '1.5rem',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            transition: 'all 0.3s ease',
            cursor: 'default',
            position: 'relative',
            overflow: 'hidden'
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{p.name}</h3>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '1rem', lineHeight: '1.5' }}>{p.description}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {p.stack.map(s => (
                <span key={s} style={{
                  fontSize: '0.75rem',
                  padding: '4px 8px',
                  background: 'rgba(128,128,128,0.1)',
                  borderRadius: '4px',
                  color: 'var(--text)'
                }}>{s}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer" style={{
                  color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.9rem'
                }}>Live Demo →</a>
              )}
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
                  color: 'var(--text)', opacity: 0.8, fontSize: '0.9rem'
                }}>GitHub</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}