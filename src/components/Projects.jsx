import { ExternalLink } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { dataProjects, webProjects } from '../data/content.js'

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">Projets</p>
          <h2 className="section-title">Projets Data Analyse</h2>
          <p className="section-subtitle">
            Réalisés lors de ma formation en data analyse — SQL, Python et R.
          </p>
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
          <h2 className="section-title">Projets Web &amp; Solutions Digitales</h2>
          <p className="section-subtitle">
            Plateformes conçues et développées en tant que consultant freelance et développeur full-stack.
          </p>
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
                      Visiter <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <p className="web-project-desc">{p.description}</p>
                <ul className="tag-list">
                  {p.tags.map((t) => (
                    <li key={t} className="tag tag-muted">
                      {t}
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
