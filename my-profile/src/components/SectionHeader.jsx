export default function SectionHeader({ title, intro, as: Tag = 'h2' }) {
  return (
    <div className="section-header">
      <Tag>{title}</Tag>
      {intro && <p>{intro}</p>}
    </div>
  )
}
