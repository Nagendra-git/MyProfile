import "../styles/Hero.css";
import profilePic from "../assets/myprofile.jpg";

export default function Hero({ onScrollTo }) {
  return (
    <section id="about" className="hero">
      {/* Content */}
      <div className="hero__content">
        <p className="hero__eyebrow">Java Backend Engineer</p>
        <h1 className="hero__title">
          Nagendra
        </h1>
        <p className="hero__bio">
          Software Engineer with 3+ years crafting high-performance enterprise
          applications. Passionate about distributed systems, O(1) algorithms,
          and cloud-native architecture.
        </p>
        <div className="hero__actions">
          <button
            className="hero__btn hero__btn--outline"
            onClick={() => onScrollTo("Contact")}
          >
            Download CV
          </button>
          <button
            className="hero__btn hero__btn--filled"
            onClick={() => onScrollTo("Projects")}
          >
            View Projects
          </button>
        </div>
      </div>

      {/* Avatar */}
      <div className="hero__avatar-wrap">
        <div className="hero__avatar">
          {/* Replace the span below with: */}
             
          <img src={profilePic} alt="Nagendra Burugula"
                   style={{ width: "100%", height: "100%", objectFit: "cover" }} />
         {/* <span className="hero__avatar-emoji">👨‍💻</span> */}
        </div>
        <div className="hero__avatar-ring" />
      </div>
    </section>
  );
}
