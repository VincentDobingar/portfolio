import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { profile } from '../data/content.js'

// Créez un formulaire gratuit sur https://formspree.io et remplacez l'ID ci-dessous.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/VOTRE_ID_FORMSPREE'

export default function Contact() {
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
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title">Discutons de votre projet</h2>
          <p className="section-subtitle">
            Disponible pour des missions freelance, des collaborations techniques ou des postes en solutions digitales et data.
          </p>
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
                <label htmlFor="name">Nom</label>
                <input id="name" name="name" type="text" required placeholder="Votre nom" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="vous@exemple.com" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="Parlez-moi de votre projet…" />
              </div>
              <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Envoi…' : 'Envoyer le message'} <Send size={16} />
              </button>
              {status === 'success' && <p className="form-status form-success">Message envoyé, merci !</p>}
              {status === 'error' && (
                <p className="form-status form-error">
                  Une erreur est survenue — écrivez-moi directement à {profile.email}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
