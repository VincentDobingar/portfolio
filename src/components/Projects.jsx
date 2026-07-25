import { ExternalLink } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Projects() {
  const { t, content } = useLanguage()
  const { dataProjects, webProjects } = content

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">{t('projects.eyebrow')}</p>
          <h2 className="section-title">{t('projects.dataTitle')}</h2>
          <p className="section-subtitle">{t('projects.dataSubtitle')}</p>
        </Reveal>

        <div className="grid grid-3">
          {dataProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <a className="card project-card" href={p.url} target="_blank" rel="noreferrer">
                <div className="project-card-top">
                  <span className="tag tag-accent">{p.stack}</span>
                  <ExternalLink size={16} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span className="project-cta">{p.cta}</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="projects-web-heading">
          <h2 className="section-title">{t('projects.webTitle')}</h2>
          <p className="section-subtitle">{t('projects.webSubtitle')}</p>
        </Reveal>

        <div className="web-projects">
          {webProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="card web-project-card">
                <div className="web-project-header">
                  <div>
                    <h3>{p.title}</h3>
                    <p className="web-project-role">
                      {p.role} · <span>{p.period}</span>
                    </p>
                  </div>
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noreferrer" className="btn btn-small btn-ghost">
                      {t('projects.visit')} <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <p className="web-project-desc">{p.description}</p>
                <ul className="tag-list">
                  {p.tags.map((tag) => (
                    <li key={tag} className="tag tag-muted">
                      {tag}
                    </li>
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
