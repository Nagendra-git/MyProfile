export default function LabCard({ experiment, selected, onSelect }) {
  return (
    <button className={`card lab-card${selected ? ' is-selected' : ''}`} aria-pressed={selected} onClick={() => onSelect(experiment.id)}>
      <h3>{experiment.name}</h3>
      <p>{experiment.tagline}</p>
    </button>
  )
}
