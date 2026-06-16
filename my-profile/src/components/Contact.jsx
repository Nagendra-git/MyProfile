import "../styles/Contact.css";
import "../styles/globals.css";
import SectionHeading from "./SectionHeading";
import { CONTACTS } from "../data/constants";

export default function Contact() {
  return (
    <>
      <section id="contact" className="section">
        <SectionHeading label="Contact" />

        <p className="contact__intro">
          If you want to get in touch with me, it will be a pleasure to assist
          you. I am available every day.
        </p>

        <div className="contact__grid">
          {CONTACTS.map((c) => (
            <div key={c.type} className="contact-card">
              <div className="contact-card__icon">{c.icon}</div>

              <div>
                <p className="contact-card__type">{c.type}</p>

                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card__label"
                  >
                    {c.label}
                  </a>
                ) : (
                  <p className="contact-card__label">{c.label}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        © 2026 Nagendra Burugula · Built with React
      </footer>
    </>
  );
}