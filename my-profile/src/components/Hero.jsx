import { Link } from 'react-router-dom'
import { profile } from '../data/profile.js'
import EventFlow from './EventFlow.jsx'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__role">{profile.role} · {profile.location}</p>
          <h1>{profile.name}</h1>
          <p className="hero__headline">{profile.headline}</p>
          <p className="hero__focus">{profile.focus.join(' • ')}</p>
          <div className="btn-row">
            <Link className="btn" to="/projects">View Projects</Link>
            <Link className="btn btn--ghost" to="/lab">Explore Engineering Lab</Link>
            <a className="btn btn--ghost" href={`mailto:${profile.email}`}>Contact Me</a>
          </div>
        </div>
        <EventFlow />
      </div>
    </section>
  )
}
