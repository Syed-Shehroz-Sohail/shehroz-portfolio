import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-heading">
      <h3 id="skills-heading">Expertise <span className="accent-text">Highlights</span></h3>
      <div className="skills-list">
        {skills.map(skill => (
          <article className="skill-row" key={skill.name}>
            <span className="skill-number">{skill.number}</span>
            <div className="skill-name">
              <h4>{skill.name}</h4>
              <p>{skill.detail}</p>
            </div>
            <div className="tags">{skill.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
