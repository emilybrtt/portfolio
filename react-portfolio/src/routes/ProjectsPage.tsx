import Projects from '../components/Projects'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

const ProjectsPage = () => {
  useRevealOnScroll()

  return (
    <div className="page-surface">
      <Projects />
    </div>
  )
}

export default ProjectsPage
