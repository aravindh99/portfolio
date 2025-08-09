import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiOpenai } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { FaLinux } from "react-icons/fa6";
import { SiHuggingface } from "react-icons/si";
import { SiC, SiCplusplus } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { CgCloud } from "react-icons/cg";


export default function Skills(){
  const categories = [
    {
      title: 'Front-End',
      items: [
        { Icon: FaHtml5, label: 'HTML' },
        { Icon: FaCss3Alt, label: 'CSS' },
        { Icon: FaSass, label: 'SCSS' },
        { Icon: FaJs, label: 'JavaScript' },
        { Icon: SiTypescript, label: 'TypeScript' },
        { Icon: FaReact, label: 'React' },
        { Icon: RiTailwindCssFill, label: 'TailwindCSS' },
      ],
    },
    {
      title: 'Back-End',
      items: [
        { Icon: FaNodeJs, label: 'Node.js' },
        { Icon: SiExpress, label: 'Express' },
        { Icon: SiMongodb, label: 'MongoDB' },
        { Icon: DiMysql, label: 'MySQL' },
        { Icon: FaJs, label: 'JavaScript' },
        { Icon: SiC, label: 'C' },
        { Icon: SiCplusplus, label: 'C++' },
      ],
    },
    {
      title: 'AI / ML',
      items: [
        { Icon: SiHuggingface, label: 'Hugging Face' },
        { Icon: SiOpenai, label: 'Ollama' },
      ],
    },
    {
      title: 'Tools',
      items: [
        { Icon: FaGitAlt, label: 'Git' },
        { Icon: FaGithub, label: 'GitHub' },
        { Icon: SiVite, label: 'Vite' },
        { Icon: SiWebpack, label: 'Webpack' },
        { Icon: FaLinux, label: 'Linux' },
      ],
    },
    {
      title: 'Deployments',
      items: [
        { Icon: SiNetlify, label: 'Netlify' },
        { Icon: IoLogoVercel, label: 'Vercel' },
        { Icon: SiRender, label: 'Render' },
        { Icon: CgCloud, label: 'Gcloud' },
        { Icon: FaGithub, label: 'GitHub Pages' },
      ],
    },
  ];

  return (
    <div className="skill-sec">
      <div className="skillsHeading">
        <h2>Skills & Tools</h2>
      </div>
      <div className="skillsGrid">
        {categories.map((cat) => (
          <div className="skillCard" key={cat.title}>
            <h3 className="skillCardTitle">{cat.title}</h3>
            <div className="skillList">
              {cat.items.map(({ Icon, label }) => (
                <div className="skillItem" key={`${cat.title}-${label}`}>
                  <Icon />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}