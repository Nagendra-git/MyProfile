import { experience } from '../data/experience'
import SectionHeader from '../components/SectionHeader'
import ExperienceTimeline from '../components/ExperienceTimeline'

export default function Experience() {
  return (
    <section className="container section">
      <SectionHeader
        as="h1"
        title="Professional Experience"
        intro="4+ years of experience building scalable backend systems, APIs, microservices, and distributed applications across healthcare, manufacturing, construction, and financial technology."
      />

      <ExperienceTimeline items={experience} />
    </section>
  )
}

