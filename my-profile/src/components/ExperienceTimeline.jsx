export default function ExperienceTimeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((e) => (
        <li key={e.id} className="timeline__item">
          <div className="timeline__head">
            <h3>{e.company}</h3>
            <p className="card__meta">{e.role} · {e.duration}</p>
          </div>
          <p>{e.description}</p>
          <ul className="bullets">{e.responsibilities.map((r) => <li key={r}>{r}</li>)}</ul>
          <ul className="tags">{e.technologies.map((t) => <li key={t}>{t}</li>)}</ul>
        </li>
      ))}
    </ol>
  )
}
