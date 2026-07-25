import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

// Créez un formulaire gratuit sur https://formspree.io et remplacez l'ID ci-dessous.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/VOTRE_ID_FORMSPREE'

export default function Contact() {
  const { t, content } = useLanguage()
  const { profile } = content
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">{t('contact.eyebrow')}</p>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </Reveal>

        <div className="contact-grid">
          <Reveal delay={60}>
            <div className="card contact-info">
              <a href={`mailto:${profile.email}`} className="contact-row">
                <Mail size={18} /> {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact-row">
                <Phone size={18} /> {profile.phone}
              </a>
              <span className="contact-row">
                <MapPin size={18} /> {profile.location}
              </span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-row">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="contact-row">
                <Github size={18} /> GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="card contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">{t('contact.formName')}</label>
                <input id="name" name="name" type="text" required placeholder={t('contact.formNamePlaceholder')} />
              </div>
              <div className="form-row">
                <label htmlFor="email">{t('contact.formEmail')}</label>
                <input id="email" name="email" type="email" required placeholder={t('contact.formEmailPlaceholder')} />
              </div>
              <div className="form-row">
                <label htmlFor="message">{t('contact.formMessage')}</label>
                <textarea id="message" name="message" rows={5} required placeholder={t('contact.formMessagePlaceholder')} />
              </div>
              <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? t('contact.sending') : t('contact.send')} <Send size={16} />
              </button>
              {status === 'success' && <p className="form-status form-success">{t('contact.success')}</p>}
              {status === 'error' && (
                <p className="form-status form-error">
                  {t('contact.error')} {profile.email}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
