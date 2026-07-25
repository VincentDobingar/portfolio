import { Code2, Database, ShieldCheck, Users } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { profile } from '../data/content.js'

const highlights = [
  { icon: Code2, label: 'Architectures full-stack complètes conçues (frontend, backend, BDD, admin)' },
  { icon: Database, label: 'Analyse, reporting et automatisation de données pour la prise de décision' },
  { icon: ShieldCheck, label: 'Sécurité applicative : authentification, rôles, API, sessions' },
  { icon: Users, label: 'Coordination de projets digitaux avec équipes pluridisciplinaires à distance' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">À propos</p>
          <h2 className="section-title">Un profil hybride, entre technique et pilotage de projet</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="about-text">{profile.summary}</p>
        </Reveal>

        <div className="grid grid-4 about-grid">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={100 + i * 60}>
              <div className="card highlight-card">
                <h.icon size={22} className="highlight-icon" />
                <p>{h.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
