import { useState } from 'react'
import { ArrowRight, Download, MapPin, Github, Linkedin } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Hero() {
  const { t, content } = useLanguage()
  const { profile, cvOptions } = content
  const [imgError, setImgError] = useState(false)
  const nameParts = profile.name.split(' ')
  const initials = `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`

  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">{t('hero.eyebrow')}</p>
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
              {t('hero.ctaProjects')} <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              {t('hero.ctaContact')}
            </a>
          </div>

          <div className="hero-social">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={16} style={{ verticalAlign: '-3px', marginRight: 6 }} />
              {t('hero.github')}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} style={{ verticalAlign: '-3px', marginRight: 6 }} />
              {t('hero.linkedin')}
            </a>
            {cvOptions?.map((cv) => (
              <a key={cv.key} href={cv.url} download title={cv.description}>
                <Download size={16} style={{ verticalAlign: '-3px', marginRight: 6 }} />
                {cv.label}
              </a>
            ))}
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
