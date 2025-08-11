export default function Experience() {
  const experiences = [
    {
      title: "Web Development Team Lead",
      employmentType: "Full-time",
      company: "XTown",
      date: "May 2025 – Present",
      location: "Coimbatore, Tamil Nadu, India (On-site)",
      description: "Leading the web development team at XTown, overseeing full-stack projects and mentoring junior developers.",
      url: "https://xtown.in"
    },
    {
      title: "Intern",
      employmentType: "Internship",
      company: "RheinBrücke IT Consulting",
      date: "May 2019 – August 2019",
      location: "Chennai, Tamil Nadu, India",
      description: "Worked on real-world IT projects, gaining hands-on experience in software development and consulting.",
      url: "https://www.rheincs.com/"
    }
  ];

  return (
    <section className="experience-section">
      <h2 className="experience-heading">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, idx) => {
          const Wrapper = exp.url ? 'a' : 'div';
          const wrapperProps = exp.url
            ? { href: exp.url, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Wrapper className="experience-card" key={idx} {...wrapperProps}>
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
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}