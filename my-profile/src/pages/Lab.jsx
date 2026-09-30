import { useSearchParams } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import LabCard from '../components/LabCard.jsx'
import { experiments } from '../data/experiments.js'

export default function Lab() {
  const [params, setParams] = useSearchParams()

  const selected =
    experiments.find((experiment) => experiment.id === params.get('exp')) ??
    experiments[0]

  const handleSelect = (id) => {
    setParams({ exp: id }, { replace: true })
  }

  return (
    <section className="container section">
      <SectionHeader
        as="h1"
        title="Engineering Lab"
        intro="Practical experiments exploring performance, scalability, distributed systems, databases, observability, and backend engineering."
      />

      <div className="lab">
        <div className="grid grid--lab">
          {experiments.map((experiment) => (
            <LabCard
              key={experiment.id}
              experiment={experiment}
              selected={experiment.id === selected.id}
              onSelect={handleSelect}
            />
          ))}
        </div>

        <article className="card lab-detail" aria-live="polite">
          <div className="lab-detail__header">
            <div>
              <span className="eyebrow">Experiment</span>
              <h2>{selected.name}</h2>
            </div>

            {selected.status && (
              <span
                className={`status status--${selected.status
                  .toLowerCase()
                  .replace(/\s+/g, '-')}`}
              >
                {selected.status}
              </span>
            )}
          </div>

          {selected.tagline && <p className="lab-detail__tagline">{selected.tagline}</p>}

          <dl>
            <dt>Problem</dt>
            <dd>{selected.problem}</dd>

            <dt>Approach</dt>
            <dd>{selected.approach}</dd>

            <dt>Result</dt>
            <dd>{selected.result}</dd>
          </dl>

          {selected.areas?.length > 0 && (
            <div className="lab-detail__section">
              <h3>Areas</h3>
              <ul className="tags">
                {selected.areas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          )}

          {selected.technologies?.length > 0 && (
            <div className="lab-detail__section">
              <h3>Technologies</h3>
              <ul className="tags">
                {selected.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </div>
    </section>
  )
}
