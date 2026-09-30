import SectionHeader from '../components/SectionHeader.jsx'
import ExperienceTimeline from '../components/ExperienceTimeline.jsx'
import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <section className="container section">
      <SectionHeader as="h1" title="Experience" intro="Described by project context. Update company names and dates in src/data/experience.js." />
      <ExperienceTimeline items={experience} />
    </section>
  )
}
