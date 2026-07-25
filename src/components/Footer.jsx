import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}. Tous droits réservés.</p>
        <a href="#top">Retour en haut ↑</a>
      </div>
    </footer>
  )
}
