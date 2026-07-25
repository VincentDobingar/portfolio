import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t, content } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {content.profile.name}. {t('footer.rights')}
        </p>
        <a href="#top">{t('footer.backToTop')}</a>
      </div>
    </footer>
  )
}
