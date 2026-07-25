import Reveal from './Reveal.jsx'
import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">Parcours</p>
          <h2 className="section-title">Expérience professionnelle</h2>
        </Reveal>

        <div className="timeline">
          {experience.map((e, i) => (
            <Reveal key={e.role + e.period} delay={i * 60} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{e.role}</h3>
                  <span className="timeline-period">{e.period}</span>
                </div>
                <p className="timeline-org">{e.org}</p>
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
