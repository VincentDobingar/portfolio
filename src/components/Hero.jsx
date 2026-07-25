import { ArrowRight, Download, MapPin } from 'lucide-react'
import { profile } from '../data/content.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <p className="eyebrow">Portfolio professionnel</p>
        <h1>
          {profile.name}
        </h1>
        <p className="hero-titles">
          {profile.titles.join(' · ')}
        </p>
        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-meta">
          <span>
            <MapPin size={16} /> {profile.location}
          </span>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Voir mes projets <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn btn-ghost">
            Me contacter
          </a>
          <a href={profile.cvUrl} download className="btn btn-ghost">
            <Download size={16} /> Télécharger le CV
          </a>
        </div>
      </div>
    </section>
  )
}
