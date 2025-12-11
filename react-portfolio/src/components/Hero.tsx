import { heroContent } from '../data/portfolio'

const Hero = () => {
  const { greeting, name, description, image, skills } = heroContent

  return (
    <section id="inicio" className="hero" data-fade>
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            {greeting}{' '}
            <span className="highlight">{name}</span>
          </h1>
          <p>{description}</p>
          <div className="skills">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-image">
          <img src={image} alt="Emily de Britto" className="profile-img" />
        </div>
      </div>
    </section>
  )
}

export default Hero
