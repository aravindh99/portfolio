export default function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      employmentType: "Full-time",
      company: "Xtown",
      date: "Oct 2024 — Current",
      location: "Coimbatore, India",
      description: (
        <ul style={{ paddingLeft: '1.2rem', margin: '0.5rem 0' }}>
          <li>Led and mentored interns and junior developers, guiding them on system design, clean architecture, debugging production issues, and performance-oriented development practices.</li>
          <li>Architected and built <strong>Venkateshwara Associates ERP</strong> independently, a site-centric business system covering attendance, daily production entries, inventory, purchase orders, machine/compressor service history, and reporting.</li>
          <li>Designed and implemented <strong>Prithvi Innerwears Canteen Management System</strong>, a PWA-based kiosk application with thermal printer integration, Razorpay UPI payments, and an internal admin dashboard.</li>
          <li>Currently architecting and developing <strong>Kiddo Shadow</strong>, a multi-tenant school management and teacher-student productivity platform (RAG-style workflows, PWA-first).</li>
        </ul>
      ),
      url: "https://va-erp.xtown.in/"
    },
    {
      title: "Freelance Software Engineer",
      employmentType: "Freelance",
      company: "Noukha Technologies",
      date: "Sep 2025 — Nov 2025",
      location: "Coimbatore, India",
      description: (
        <ul style={{ paddingLeft: '1.2rem', margin: '0.5rem 0' }}>
          <li>Built <strong>IntuitionX</strong> — a UK-based edtech platform designed to revolutionize how students and learners engage with AI.</li>
          <li>Operates entirely through voice commands—allowing users to speak naturally and receive intelligent, spoken responses in real time.</li>
        </ul>
      ),
      url: "https://app.intuitionx.ai/"
    },
    {
      title: "Software Intern",
      employmentType: "Internship",
      company: "RheinBrücke IT Consulting",
      date: "May 2019 — Aug 2019",
      location: "Chennai, India",
      description: (
        <ul style={{ paddingLeft: '1.2rem', margin: '0.5rem 0' }}>
          <li>Collaborated with senior engineers on enterprise development practices.</li>
          <li>Gained hands-on exposure to enterprise software solutions.</li>
        </ul>
      ),
      url: ""
    }
  ];

  return (
    <section className="experience-section fade-in-up" style={{ marginTop: '4rem' }}>
      <h2 className="experience-heading" style={{ marginBottom: '3rem', textAlign: 'center' }}>Experience</h2>
      <div className="experience-list" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {experiences.map((exp, idx) => {
          const Wrapper = exp.url ? 'a' : 'div';
          const wrapperProps = exp.url
            ? { href: exp.url, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Wrapper className="experience-item-minimal" key={idx} {...wrapperProps} style={{
              display: 'block',
              textDecoration: 'none',
              borderLeft: '2px solid var(--accent)',
              paddingLeft: '1.5rem',
              position: 'relative'
            }}>
              <div className="experience-title" style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--text)', marginBottom: '0.2rem' }}>{exp.title}</div>
              <div style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '0.5rem' }}>{exp.company}</div>
              <div className="experience-meta" style={{ display: 'flex', gap: '1rem', opacity: 0.6, fontSize: '0.9rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                <span className="experience-type">{exp.employmentType}</span>
                <span>•</span>
                <span className="experience-date">{exp.date}</span>
                {exp.location && <><span>•</span><span>{exp.location}</span></>}
              </div>
              <div className="experience-desc" style={{ lineHeight: '1.7', opacity: 0.9, maxWidth: '800px' }}>{exp.description}</div>
            </Wrapper>
          );
        })}
      </div>

      <h2 className="experience-heading" style={{ margin: '4rem 0 2rem', textAlign: 'center' }}>Education</h2>
      <div className="education-item" style={{
        display: 'block',
        textDecoration: 'none',
        borderLeft: '2px solid var(--accent)',
        paddingLeft: '1.5rem',
        position: 'relative'
      }}>
        <div className="experience-title" style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--text)', marginBottom: '0.2rem' }}>Master of Science in Software Systems</div>
        <div style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '0.5rem' }}>Coimbatore Institute of Technology</div>
        <div className="experience-meta" style={{ display: 'flex', gap: '1rem', opacity: 0.6, fontSize: '0.9rem', fontStyle: 'italic' }}>
          <span>2016 — 2021</span>
          <span>•</span>
          <span>Coimbatore, India</span>
        </div>
      </div>
    </section>
  );
}