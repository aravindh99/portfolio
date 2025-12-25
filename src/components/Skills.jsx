import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinux, FaRust, FaDocker, FaAws, FaFileVideo } from "react-icons/fa6";
import { SiTypescript, SiOpenai, SiTailwindcss, SiNextdotjs, SiVite, SiExpress, SiNestjs, SiGraphql, SiMysql, SiPostgresql, SiMongodb, SiRedis, SiNginx, SiCaddy, SiFigma, SiRedux, SiJest, SiGithubactions } from "react-icons/si";
import { DiSqllite } from "react-icons/di";
import { TbBrandCpp, TbBrandLoom } from "react-icons/tb";

export default function Skills() {
  const categories = [
    {
      title: 'Languages',
      items: [
        { Icon: FaJs, label: 'JavaScript' },
        { Icon: SiTypescript, label: 'TypeScript' },
        { Icon: FaRust, label: 'Rust' },
        {
          Icon: () => (
            <div style={{
              fontSize: '1.8rem', fontWeight: 'bold', border: '2px solid currentColor',
              width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '50%'
            }}>C</div>
          ),
          label: 'C'
        },
      ],
    },
    {
      title: 'Frontend',
      items: [
        { Icon: FaReact, label: 'React' },
        { Icon: SiNextdotjs, label: 'Next.js' },
        { Icon: FaHtml5, label: 'HTML5' },
        { Icon: FaCss3Alt, label: 'CSS3' },
        { Icon: SiTailwindcss, label: 'Tailwind CSS' },
      ],
    },
    {
      title: 'Backend & APIs',
      items: [
        { Icon: FaNodeJs, label: 'Node.js' },
        { Icon: SiExpress, label: 'Express' },
        { Icon: SiNestjs, label: 'NestJS' },
        { Icon: FaFileVideo, label: 'REST APIs' },
        { Icon: SiGraphql, label: 'GraphQL' },
      ],
    },
    {
      title: 'Databases & Caching',
      items: [
        { Icon: SiMysql, label: 'MySQL' },
        { Icon: SiPostgresql, label: 'PostgreSQL' },
        { Icon: SiMongodb, label: 'MongoDB' },
        { Icon: DiSqllite, label: 'SQLite' },
        { Icon: SiRedis, label: 'Redis' },
      ],
    },
    {
      title: 'Systems & Infra',
      items: [
        { Icon: FaAws, label: 'AWS' },
        { Icon: FaDocker, label: 'Docker' },
        { Icon: SiNginx, label: 'Nginx' },
        { Icon: SiCaddy, label: 'Caddy' },
        { Icon: SiGithubactions, label: 'CI/CD' },
      ],
    },
    {
      title: 'AI & Tools',
      items: [
        { Icon: SiOpenai, label: 'RAG / MCP' },
        { Icon: SiFigma, label: 'Figma' },
        { Icon: FaFileVideo, label: 'Lottie' },
      ],
    },
  ];

  return (
    <div className="skill-sec fade-in-up">
      <div className="skillsHeading" style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h2>Skills & Tech</h2>
      </div>

      {categories.map((cat) => (
        <div key={cat.title} style={{ marginBottom: '3rem' }}>
          <h3 style={{
            fontSize: '1.2rem',
            color: 'var(--accent)',
            marginBottom: '1rem',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '0.5rem',
            display: 'inline-block'
          }}>
            {cat.title}
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            alignItems: 'center'
          }}>
            {cat.items.map(({ Icon, label }) => (
              <div key={`${cat.title}-${label}`} className="skill-item-minimal" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                minWidth: '80px'
              }}>
                <Icon style={{ fontSize: '2.5rem', opacity: 0.9 }} />
                <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}