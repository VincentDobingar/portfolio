import Reveal from './Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Experience() {
  const { t, content } = useLanguage()

  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">{t('experience.eyebrow')}</p>
          <h2 className="section-title">{t('experience.title')}</h2>
        </Reveal>

        <div className="timeline">
          {content.experience.map((e, i) => (
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
