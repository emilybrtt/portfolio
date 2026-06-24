import { useState } from 'react'
import { projects } from '../data/portfolio'

type ProjectImage = {
  src: string
  alt: string
}

type Project = {
  title: string
  category: string
  description: string
  images: ProjectImage[]
}

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = projects[activeIndex] as Project
  const activeImage = activeProject.images[0]

  return (
    <section id="projetos" className="section projects work-page">
      <div className="work-layout" data-fade>
        <div className="work-preview" aria-live="polite">
          <img
            key={activeImage.src}
            src={activeImage.src}
            alt={activeImage.alt}
            className="work-preview-img"
          />
          <div className="work-preview-overlay">
            <span>{activeProject.category}</span>
            <strong>{activeProject.title}</strong>
          </div>
        </div>

        <div className="work-list-panel">
          <div className="work-header">
            <h1>Projetos</h1>
            <span>{projects.length}</span>
          </div>

          <div className="work-list" role="list">
            {projects.map((project, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  type="button"
                  key={project.title}
                  className={`work-row${isActive ? ' active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onPointerEnter={() => setActiveIndex(index)}
                  role="listitem"
                >
                  <span className="work-arrow" aria-hidden="true">
                    →
                  </span>
                  <span className="work-title">{project.title}</span>
                  <span className="work-category">{project.category}</span>
                </button>
              )
            })}
          </div>

          <p className="work-description">{activeProject.description}</p>
        </div>
      </div>
    </section>
  )
}

export default Projects
