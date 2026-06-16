import "../styles/Navbar.css";
import { NAV } from "../data/constants";

export default function Navbar({ active, scrolled, onNavClick }) {
  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <span className="navbar__logo">&lt;/ Nagendra &gt;</span>
      <div className="navbar__links">
        {NAV.map((n) => (
          <button
            key={n}
            className={`navbar__link ${active === n ? "navbar__link--active" : ""}`}
            onClick={() => onNavClick(n)}
          >
            {n}
          </button>
        ))}
      </div>
    </nav>
  );
}
