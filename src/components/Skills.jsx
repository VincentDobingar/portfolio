import Reveal from './Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Skills() {
  const { t, content } = useLanguage()
  const { skills, languages, tools } = content

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">{t('skills.eyebrow')}</p>
          <h2 className="section-title">{t('skills.title')}</h2>
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
            <h3>{t('skills.toolsTitle')}</h3>
            <ul className="tag-list">
              {tools.map((tool) => (
                <li key={tool} className="tag tag-muted">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="languages-block">
            <h3>{t('skills.languagesTitle')}</h3>
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
