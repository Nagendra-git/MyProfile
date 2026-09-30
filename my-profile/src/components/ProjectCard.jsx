import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <p className="card__meta">{project.category}</p>
      <h3>{project.name}</h3>
      <p>{project.summary}</p>
      <p className="card__label">Key engineering areas</p>
      <ul className="inline-list">{project.areas.map((a) => <li key={a}>{a}</li>)}</ul>
      <ul className="tags" aria-label="Technologies">{project.technologies.map((t) => <li key={t}>{t}</li>)}</ul>
      <Link className="btn btn--small" to={`/projects/${project.slug}`} aria-label={`View case study: ${project.name}`}>View Case Study</Link>
    </article>
  )
}
