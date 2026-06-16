import "../styles/Projects.css";
import "../styles/globals.css";
import SectionHeading from "./SectionHeading";
import { PROJECTS } from "../data/constants";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading label="Projects" />
      <div className="projects__grid">
        {PROJECTS.map((p) => (
          <div key={p.title} className="project-card">
            <div className="project-card__stripe" />
            <div className="project-card__body">
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__tags">
                {p.tags.map((t) => (
                  <span key={t} className="project-card__tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
