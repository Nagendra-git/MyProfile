import { profile } from '../data/profile.js'

export default function ContactCTA() {
  return (
    <section className="container cta">
      <h2>Working on something with a backend?</h2>
      <p>I am open to conversations about backend engineering, distributed systems and performance work.</p>
      <div className="btn-row">
        <a className="btn" href={`mailto:${profile.email}`}>{profile.email}</a>
        <a className="btn btn--ghost" href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
      </div>
    </section>
  )
}
