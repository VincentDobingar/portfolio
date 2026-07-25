import { useState } from 'react'
import { ArrowRight, Download, MapPin, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/content.js'

export default function Hero() {
  const [imgError, setImgError] = useState(false)
  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')

  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Portfolio professionnel</p>
          <h1>{profile.name}</h1>
          <p className="hero-role">{profile.primaryTitle}</p>
          <p className="hero-titles">{profile.titles.join(' · ')}</p>
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
          </div>

          <div className="hero-social">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={16} style={{ verticalAlign: '-3px', marginRight: 6 }} />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} style={{ verticalAlign: '-3px', marginRight: 6 }} />
              LinkedIn
            </a>
            <a href={profile.cvUrl} download>
              <Download size={16} style={{ verticalAlign: '-3px', marginRight: 6 }} />
              Télécharger le CV
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          {imgError ? (
            <div className="hero-photo-placeholder">{initials}</div>
          ) : (
            <img
              src={profile.photoUrl}
              alt={profile.name}
              onError={() => setImgError(true)}
            />
          )}
        </div>
      </div>
    </section>
  )
}
