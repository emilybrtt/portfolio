import { Link } from 'react-router-dom'
import { heroContent } from '../data/portfolio'
import { playNavigationTransition } from '../utils/navigation'

const Hero = () => {
  const { greeting, name, subtitle, description, skills } = heroContent

  return (
    <section id="inicio" className="hero" data-fade>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            {greeting}{' '}
            <span className="highlight">{name}</span>
          </h1>
          <p className="hero-subtitle">{subtitle}</p>
          <p className="hero-description">{description}</p>
          <div className="hero-actions" aria-label="Ações principais">
            <Link to="/projetos" className="button button-primary" onClick={playNavigationTransition}>
              Ver projetos
            </Link>
            <Link to="/sobre" className="button button-secondary" onClick={playNavigationTransition}>
              Sobre mim
            </Link>
          </div>
          <div className="skills" aria-label="Tecnologias">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
