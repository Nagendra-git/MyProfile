import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { profile } from '../data/profile.js'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/lab', label: 'Engineering Lab' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" onClick={close}>{profile.name}</Link>
        <button className="navbar__toggle" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen((o) => !o)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="site-nav" aria-label="Primary" className={`navbar__links${open ? ' is-open' : ''}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} onClick={close}>{l.label}</NavLink>
          ))}
          <a className="btn btn--small" href={`mailto:${profile.email}`}>Contact</a>
        </nav>
      </div>
    </header>
  )
}
