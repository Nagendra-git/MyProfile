import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>{profile.name} · {profile.location}</p>
        <p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          {profile.links.map((l) => <a key={l.href} href={l.href} rel="noreferrer" target="_blank"> · {l.label}</a>)}
        </p>
      </div>
    </footer>
  )
}
