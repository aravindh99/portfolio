export default function Experience() {
  const experiences = [
    {
      title: "Web Development Team Lead",
      employmentType: "Full-time",
      company: "XTown",
      date: "May 2025 – Present",
      location: "Coimbatore, Tamil Nadu, India (On-site)",
      description: "Leading the web development team at XTown, overseeing full-stack projects and mentoring junior developers."
    },
    {
      title: "Intern",
      employmentType: "Internship",
      company: "RheinBrücke IT Consulting",
      date: "May 2019 – August 2019",
      location: "chennai",
      description: "Worked on real-world IT projects, gaining hands-on experience in software development and consulting."
    }
  ];

  return (
    <section className="experience-section">
      <h2 className="experience-heading">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <div className="experience-card" key={idx}>
            <div className="experience-title">{exp.title}</div>
            <div className="experience-meta">
              <span className="experience-company">{exp.company}</span>
              <span className="experience-type">{exp.employmentType}</span>
              <span className="experience-date">{exp.date}</span>
            </div>
            {exp.location && (
              <div className="experience-location">{exp.location}</div>
            )}
            <div className="experience-desc">{exp.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}