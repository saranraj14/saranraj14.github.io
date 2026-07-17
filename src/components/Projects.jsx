import { projects } from '../data/content'

export default function Projects() {
  return (
    <>
      <div className="section-eyebrow">Applied Work</div>
      <h2>Project Details</h2>

      {projects.map((project) => (
        <div className="glass-card project-card" key={project.title}>
          <h3>{project.title}</h3>
          <div className="project-meta">{project.meta}</div>
          {project.paragraphs.map((para) => (
            <p key={para}>{para}</p>
          ))}
          <div className="tag-row">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
