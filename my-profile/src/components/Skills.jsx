import "../styles/Skills.css";
import "../styles/globals.css";
import SectionHeading from "./SectionHeading";
import { SKILLS } from "../data/constants";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading label="Skills" />
      <div className="skills__grid">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className="skill-card__icon">{skill.icon}</div>
            <p className="skill-card__name">{skill.name}</p>
            <div
              className="skill-card__bar"
              style={{ background: skill.color }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
