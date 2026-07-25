import { GraduationCap, BadgeCheck } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { education, certifications } from '../data/content.js'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">Formation</p>
          <h2 className="section-title">Diplômes &amp; certifications</h2>
        </Reveal>

        <div className="grid grid-2 education-grid">
          <Reveal delay={60}>
            <div className="card">
              <h3 className="edu-block-title">
                <GraduationCap size={20} /> Formation académique
              </h3>
              <ul className="edu-list">
                {education.map((e) => (
                  <li key={e.degree}>
                    <p className="edu-degree">{e.degree}</p>
                    <p className="edu-meta">
                      {e.school} · {e.year}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card">
              <h3 className="edu-block-title">
                <BadgeCheck size={20} /> Certifications &amp; formations
              </h3>
              <ul className="edu-list">
                {certifications.map((c) => (
                  <li key={c.name}>
                    <p className="edu-degree">{c.name}</p>
                    <p className="edu-meta">
                      {c.org} · {c.year}
                      <span className={`status-pill ${c.status === 'En cours' ? 'status-progress' : 'status-done'}`}>
                        {c.status}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
