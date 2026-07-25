import { createContext, useContext, useEffect, useState } from 'react'
import { ui } from './ui.js'
import { getContent } from '../data/content.js'

const LanguageContext = createContext(null)

function detectInitialLang() {
  const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null
  if (saved === 'fr' || saved === 'en') return saved
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('fr')) {
    return 'fr'
  }
  return 'fr'
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang)

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  function setLang(next) {
    setLangState(next)
  }

  function t(key) {
    const parts = key.split('.')
    let node = ui[lang]
    for (const p of parts) node = node?.[p]
    return node ?? key
  }

  const content = getContent(lang)

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, content }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
