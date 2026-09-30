import { useState } from 'react'
import '../styles/experience.css'

export default function ExperienceTimeline({ items }) {
  // Open the current project by default
  const currentProject = items.find((item) => item.current)

  const [expandedId, setExpandedId] = useState(
    currentProject?.id || items[0]?.id
  )

  const handleToggle = (id) => {
    setExpandedId((currentId) =>
      currentId === id ? null : id
    )
  }

  return (
    <ol className="timeline">
      {items.map((e) => {
        const isExpanded = expandedId === e.id

        return (
          <li
            key={e.id}
            className={`timeline__item ${
              isExpanded ? 'timeline__item--expanded' : ''
            }`}
          >
            <button
              type="button"
              className="timeline__toggle"
              onClick={() => handleToggle(e.id)}
              aria-expanded={isExpanded}
            >
              <div className="timeline__head">
                <div>
                  <h3>{e.project || e.company}</h3>

                  <p className="card__meta">
                    {e.role} · {e.duration}
                  </p>
                </div>

                <span className="timeline__icon" aria-hidden="true">
                  {isExpanded ? '−' : '+'}
                </span>
              </div>
            </button>

            {isExpanded && (
              <div className="timeline__details">
                <p>{e.description}</p>

                <ul className="bullets">
                  {e.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>

                <ul className="tags">
                  {e.technologies.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        )
      })}
    </ol>
  )
}