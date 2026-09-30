import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Stats from '../components/Stats.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import ProjectGrid from '../components/ProjectGrid.jsx'
import ExperienceTimeline from '../components/ExperienceTimeline.jsx'
import SkillGrid from '../components/SkillGrid.jsx'
import ContactCTA from '../components/ContactCTA.jsx'
import { profile } from '../data/profile.js'
import { projects } from '../data/projects.js'
import { experience } from '../data/experience.js'
import { skills } from '../data/skills.js'
import { experiments } from '../data/experiments.js'
import profileImage from '../assets/profile.png'
import '../styles/about.css'
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <section className="container section" id="about">
        <SectionHeader title="About" />
        <div className="about-layout"> 
          <div className="prose"> 
            {profile.about.map((paragraph) => ( <p key={paragraph}>{paragraph}</p> ))} 
          </div> 
          <div className="about-photo">
             <img src={profileImage} alt="Nagendra Burusu" />
          </div> 
        </div>
      </section>
      <section className="container section">
        <SectionHeader title="Selected projects" />
        <ProjectGrid projects={projects.slice(0, 4)} />
        <p className="more"><Link to="/projects">See all projects</Link></p>
      </section>
      <section className="container section">
        <SectionHeader title="Experience" />
        <ExperienceTimeline items={experience} />
        <p className="more"><Link to="/experience">Full experience</Link></p>
      </section>
      <section className="container section">
        <SectionHeader title="Technology stack" />
        <SkillGrid groups={skills} />
      </section>
      <section className="container section">
        <SectionHeader title="Engineering Lab" intro="Small, repeatable experiments. Results are added only once they are measured." />
        <ul className="tags tags--large">
          {experiments.map((e) => <li key={e.id}><Link to={`/lab?exp=${e.id}`}>{e.name}</Link></li>)}
        </ul>
        <p className="more"><Link to="/lab">Open the lab</Link></p>
      </section>
      <ContactCTA />
    </>
  )
}
