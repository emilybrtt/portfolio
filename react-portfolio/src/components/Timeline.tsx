import { timeline } from '../data/portfolio'

const Timeline = () => (
  <section id="academico" className="section academic">
    <h2 className="section-title">Formação Acadêmica</h2>
    <div className="timeline">
      {timeline.map((entry) => (
        <div key={entry.title} className="timeline-item" data-fade>
          <div className="timeline-content">
            <h3>{entry.title}</h3>
            <ul>
              {entry.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Timeline
