import { profile } from '../data/profile.js'

export default function ContactCTA() {
  return (
    <section className="container cta">
      <h2>Have an interesting project or problem to solve?</h2>

      <p>
        I am open to conversations about software engineering, scalable
        applications, system design, performance, and building reliable
        products.
      </p>

      <div className="btn-row">
        <a className="btn" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>

        <a
          className="btn btn--ghost"
          href={`tel:${profile.phone.replace(/\s/g, '')}`}
        >
          {profile.phone}
        </a>
      </div>
    </section>
  )
}

