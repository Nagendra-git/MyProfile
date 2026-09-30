import ProjectCard from './ProjectCard.jsx'

export default function ProjectGrid({ projects }) {
  return (
    <div className="grid grid--2">
      {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
    </div>
  )
}
