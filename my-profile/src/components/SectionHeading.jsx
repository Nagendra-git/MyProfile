// Reusable section heading used across About, Skills, Projects, Contact
export default function SectionHeading({ label }) {
  return (
    <div className="section-heading">
      <div className="section-heading__icon">
        <div className="section-heading__dot" />
      </div>
      <h2 className="section-heading__label">{label}</h2>
    </div>
  );
}
