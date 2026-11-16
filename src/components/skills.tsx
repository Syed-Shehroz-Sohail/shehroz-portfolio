import { skills } from "@/data/portfolio";
import { SectionHeading } from "./ui";

export function Skills() {
  return <section id="skills" className="skills-section"><div className="section shell"><SectionHeading number="04" label="THE TOOLKIT" title={<>Different tools.<br /><span className="serif-word">A shared purpose.</span></>}><p>The technologies I work with, and the skills that help turn a codebase into a useful product.</p></SectionHeading><div className="skills-list">{skills.map(skill => <article className="skill-row" key={skill.name}><span className="skill-number">{skill.number}</span><div className="skill-name"><h3>{skill.name}</h3><p>{skill.detail}</p></div><div className="tags">{skill.tools.map(tool => <span key={tool}>{tool}</span>)}</div></article>)}</div></div></section>;
}
