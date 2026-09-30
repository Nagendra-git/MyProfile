import { useSearchParams } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import LabCard from '../components/LabCard.jsx'
import { experiments } from '../data/experiments.js'

export default function Lab() {
  const [params, setParams] = useSearchParams()
  const selected = experiments.find((e) => e.id === params.get('exp')) ?? experiments[0]

  return (
    <section className="container section">
      <SectionHeader as="h1" title="Engineering Lab" intro="Pick an experiment to see the question, the approach and where the result stands." />
      <div className="lab">
        <div className="grid grid--lab">
          {experiments.map((e) => (
            <LabCard key={e.id} experiment={e} selected={e.id === selected.id} onSelect={(id) => setParams({ exp: id }, { replace: true })} />
          ))}
        </div>
        <article className="card lab-detail" aria-live="polite">
          <h2>{selected.name}</h2>
          <dl>
            <dt>Problem</dt><dd>{selected.problem}</dd>
            <dt>Approach</dt><dd>{selected.approach}</dd>
            <dt>Result</dt><dd>{selected.result}</dd>
          </dl>
          <ul className="tags">{selected.technologies.map((t) => <li key={t}>{t}</li>)}</ul>
        </article>
      </div>
    </section>
  )
}
