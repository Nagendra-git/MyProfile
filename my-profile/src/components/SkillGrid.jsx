export default function SkillGrid({ groups }) {
  return (
    <div className="grid grid--3">
      {groups.map((g) => (
        <div key={g.group} className="card">
          <h3>{g.group}</h3>
          <ul className="tags">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
        </div>
      ))}
    </div>
  )
}
