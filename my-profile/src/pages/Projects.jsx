import SectionHeader from '../components/SectionHeader.jsx'
import ProjectGrid from '../components/ProjectGrid.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section className="container section">
      <SectionHeader as="h1" title="Projects" intro="Personal and professional work. Confidential details are left out." />
      <ProjectGrid projects={projects} />
    </section>
  )
}
