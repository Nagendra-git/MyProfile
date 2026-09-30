import { Link, useParams } from 'react-router-dom'
import ArchitectureDiagram from '../components/ArchitectureDiagram.jsx'
import { projects } from '../data/projects.js'

const List = ({ items }) => <ul className="bullets">{items.map((i) => <li key={i}>{i}</li>)}</ul>

export default function ProjectDetails() {
  const { slug } = useParams()
  const p = projects.find((x) => x.slug === slug)

  if (!p) {
    return (
      <section className="container section">
        <h1>Project not found</h1>
        <p>No project matches this address. <Link to="/projects">Back to all projects</Link>.</p>
      </section>
    )
  }

  return (
    <article className="container section detail">
      <p><Link to="/projects">All projects</Link></p>
      <p className="card__meta">{p.category}</p>
      <h1>{p.name}</h1>
      <ul className="tags">{p.technologies.map((t) => <li key={t}>{t}</li>)}</ul>
      <section><h2>Overview</h2><p>{p.overview}</p></section>
      <section><h2>Problem</h2><p>{p.problem}</p></section>
      <section><h2>Solution</h2><p>{p.solution}</p></section>
      <section><h2>Architecture</h2><ArchitectureDiagram nodes={p.architecture} title={`${p.name} architecture`} /></section>
      <section><h2>Engineering decisions</h2><List items={p.decisions} /></section>
      <section><h2>Challenges</h2><List items={p.challenges} /></section>
      <section><h2>Performance considerations</h2><List items={p.performance} /></section>
      <section><h2>What I learned</h2><List items={p.learned} /></section>
    </article>
  )
}
