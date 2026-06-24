import Timeline from '../components/Timeline'
import { aboutContent, heroContent } from '../data/portfolio'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

const About = () => {
  useRevealOnScroll()

  return (
    <div className="page-surface about-page">
      <section className="section about-intro">
        <div className="about-intro-content">
          <div className="about-copy" data-fade>
            <h1>{aboutContent.title}</h1>
            <div className="about-rule" aria-hidden="true" />
            <p>{aboutContent.description}</p>
            <a className="about-resume-link" href="#academico">
              ↓ formação
            </a>
          </div>
          <div className="hero-visual" aria-label="Retrato de Emily Britto">
          <div className="portrait-glow" aria-hidden="true" />
          <div className="portrait-line portrait-line-top" aria-hidden="true" />
          <div className="portrait-line portrait-line-bottom" aria-hidden="true" />
          <figure className="portrait-frame">
            <img src='../public/img/emily.jpg' alt="Emily de Britto" className="profile-img" />
          </figure>
        </div>
        </div>
      </section>
      <Timeline />
    </div>
  )
}

export default About
