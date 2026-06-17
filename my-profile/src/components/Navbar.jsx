import "../styles/Navbar.css";
import { NAV } from "../data/constants";

export default function Navbar({ active, scrolled, onNavClick }) {
  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__brand">
        <h2 className="navbar__name">Nagendra Burusu</h2>
        <span className="navbar__role">Software Engineer</span>
      </div>

      <div className="navbar__links">
        {NAV.map((item) => (
          <button
            key={item}
            className={`navbar__link ${
              active === item ? "navbar__link--active" : ""
            }`}
            onClick={() => onNavClick(item)}
          >
            {item}
          </button>
        ))}

        <a
          href="/Nagendra_Burusu_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__resume"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}