import Reveal from './Reveal.jsx'
import { skills, languages, tools } from '../data/content.js'

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">Compétences</p>
          <h2 className="section-title">Ce que je maîtrise</h2>
        </Reveal>

        <div className="grid grid-3 skills-grid">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 70}>
              <div className="card skill-card">
                <h3>{group.category}</h3>
                <ul className="tag-list">
                  {group.items.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="tools-block">
            <h3>Outils &amp; technologies</h3>
            <ul className="tag-list">
              {tools.map((t) => (
                <li key={t} className="tag tag-muted">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="languages-block">
            <h3>Langues</h3>
            <div className="languages-row">
              {languages.map((l) => (
                <div key={l.name} className="language-pill">
                  <span>{l.name}</span>
                  <span className="language-level">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
