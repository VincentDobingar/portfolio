import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Navbar() {
  const { t, lang, setLang, content } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#education', label: t('nav.education') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#top" className="brand">
          <span className="brand-first">Guiryambaye Vincent</span> <span className="brand-last">DOBINGAR</span>
        </a>

        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="lang-switch">
          <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>
            FR
          </button>
          <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>
            EN
          </button>
        </div>

        <a className="btn btn-small btn-primary nav-cv" href={content.profile.cvUrl} download>
          <Download size={16} /> {t('nav.cv')}
        </a>

        <button className="nav-toggle" aria-label={t('nav.openMenu')} onClick={() => setOpen((v) => !v)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="nav-mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="lang-switch lang-switch-mobile">
            <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>
              Français
            </button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>
              English
            </button>
          </div>
          <a className="btn btn-primary" href={content.profile.cvUrl} download onClick={() => setOpen(false)}>
            <Download size={16} /> {t('nav.downloadCv')}
          </a>
        </nav>
      )}
    </header>
  )
}
