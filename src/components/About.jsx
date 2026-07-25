import { Code2, Database, ShieldCheck, Users } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const icons = { code: Code2, database: Database, shield: ShieldCheck, users: Users }

export default function About() {
  const { t, content } = useLanguage()

  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">{t('about.eyebrow')}</p>
          <h2 className="section-title">{t('about.title')}</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="about-text">{content.profile.summary}</p>
        </Reveal>

        <div className="grid grid-4 about-grid">
          {content.highlights.map((h, i) => {
            const Icon = icons[h.icon]
            return (
              <Reveal key={h.label} delay={100 + i * 60}>
                <div className="card highlight-card">
                  <Icon size={22} className="highlight-icon" />
                  <p>{h.label}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
