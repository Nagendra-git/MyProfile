import { projects } from '../data/projects.js'
import { experiments } from '../data/experiments.js'
import { skills } from '../data/skills.js'

// Stats are derived from the data files so they can never drift into invented numbers.
export default function Stats() {
  const items = [
    { value: projects.length, label: 'Project case studies' },
    { value: experiments.length, label: 'Lab experiments' },
    { value: skills.reduce((n, g) => n + g.items.length, 0), label: 'Technologies used' },
    { value: skills.length, label: 'Engineering areas' },
  ]
  return (
    <section className="container stats" aria-label="Portfolio at a glance">
      {items.map((s) => (
        <div key={s.label} className="stat"><strong>{s.value}</strong><span>{s.label}</span></div>
      ))}
    </section>
  )
}
