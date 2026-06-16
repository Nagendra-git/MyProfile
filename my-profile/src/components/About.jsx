import "../styles/About.css";
import "../styles/globals.css";
import SectionHeading from "./SectionHeading";
import profilePic from "../assets/mypic.png"

const SOCIALS = [
  {
    icon: "✉️",
    url: "mailto:burusunagendra4@gmail.com",
    label: "Email",
  },
  {
    icon: "💻",
    url: "https://github.com/Nagendra-git",
    label: "GitHub",
  },
  {
    icon: "💼",
    url: "https://www.linkedin.com/public-profile/settings/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3B6xm2BxTARomf2vPu1vjVQQ%3D%3D",
    label: "LinkedIn",
  },
];

export default function About() {
  return (
    <section className="section">
      <div className="about">
        {/* Profile sidebar */}
        <div className="about__profile">
          <img src={profilePic} alt="Nagendra Burusu" className="about__avatar"/>

          <p className="about__name">Nagendra Burusu</p>

          <div className="about__socials">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="about__social-btn"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bio text */}
        <div className="about__text">
          <SectionHeading label="About" />

          <h3>Get to know a little about me</h3>

          <p>
            I'm a passionate Software Engineer with{" "}
            <strong>3+ years of experience</strong> designing and developing
            high-performance enterprise applications using Java and modern cloud
            technologies.
          </p>

          <p>
            My expertise lies in{" "}
            <strong>
              backend development, REST APIs, cloud technologies, CI/CD,
              containerization, and scalable enterprise applications
            </strong>
            . I enjoy solving complex problems, optimizing performance, and
            building reliable software solutions.
          </p>
        </div>
      </div>
    </section>
  );
}