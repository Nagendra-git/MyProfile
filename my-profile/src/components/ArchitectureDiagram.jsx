import { useState } from 'react'

// Vertical flow of nodes. Click or focus a node to read what it does.
export default function ArchitectureDiagram({ nodes, title = 'Architecture' }) {
  const [active, setActive] = useState(0)
  return (
    <div className="arch" role="group" aria-label={title}>
      {nodes.map((n, i) => (
        <div key={n.label} className="arch__step">
          <button
            className={`arch__node${active === i ? ' is-active' : ''}`}
            aria-expanded={active === i}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
          >
            {n.label}
          </button>
          {active === i && <p className="arch__desc">{n.desc}</p>}
          {i < nodes.length - 1 && (
            <svg className="arch__arrow" viewBox="0 0 12 28" aria-hidden="true">
              <path d="M6 0v22M1 17l5 7 5-7" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}
