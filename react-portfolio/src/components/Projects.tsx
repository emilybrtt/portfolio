import { useState } from 'react'
import { projects } from '../data/portfolio'

type ProjectImage = {
  src: string
  alt: string
}

type Project = {
  title: string
  description: string
  images: ProjectImage[]
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const totalImages = project.images.length

  const showPrevious = () => {
    setCurrentImage((index) => (index - 1 + totalImages) % totalImages)
  }

  const showNext = () => {
    setCurrentImage((index) => (index + 1) % totalImages)
  }

  return (
    <article className="project-card" data-fade>
      <div className="project-images">
        {project.images.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="project-img"
            style={{ display: index === currentImage ? 'block' : 'none' }}
          />
        ))}
        {totalImages > 1 ? (
          <>
            <button
              type="button"
              className="project-nav prev"
              onClick={showPrevious}
              aria-label={`Mostrar imagem anterior de ${project.title}`}
            >
              ‹
            </button>
            <button
              type="button"
              className="project-nav next"
              onClick={showNext}
              aria-label={`Mostrar próxima imagem de ${project.title}`}
            >
              ›
            </button>
          </>
        ) : null}
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </article>
  )
}

const Projects = () => (
  <section id="projetos" className="section projects">
    <h2 className="section-title">Projetos</h2>
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </section>
)

export default Projects
