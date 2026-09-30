import { projects } from '../data/projects.js'
import { experiments } from '../data/experiments.js'

export default function Stats() {
  const professionalProjects = projects.filter(
    (project) => project.category === 'Professional project'
  )

  const personalProjects = projects.filter(
    (project) => project.category === 'Personal project'
  )

  const items = [
    {
      value: '4+',
      label: 'Years of experience',
    },
    {
      value: professionalProjects.length,
      label: 'Professional projects',
    },
    {
      value: personalProjects.length,
      label: 'Personal projects',
    },
    {
      value: experiments.length,
      label: 'Lab experiments',
    },
  ]

  return (
    <section
      className="container stats"
      aria-label="Professional highlights"
    >
      {items.map((stat) => (
        <div key={stat.label} className="stat">
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  )
}

