import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

          {/* Colonne 1 : Marque */}
          <div className="space-y-4">
            <Link
              to="/"
              aria-label="SARL Anthony GUEDES - Accueil"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity inline-flex"
            >
              <img
                src="/Icone120.webp"
                alt="Logo SARL Anthony GUEDES"
                className="h-12 sm:h-14 w-auto object-contain"
              />
              <div>
                <span className="font-bold text-base sm:text-lg tracking-wide block text-white leading-tight">
                  SARL Anthony GUEDES
                </span>
                <span className="text-[10px] sm:text-xs text-slate-300 font-medium tracking-wider uppercase block">
                  Plombier - Chauffagiste
                </span>
              </div>
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed">
              Artisan plombier chauffagiste qualifié en <span>Normandie</span>.
            </p>
          </div>

          {/* Colonne 2 : Navigation (Regroupe Accueil, Expertises et Contact) */}
          <nav aria-label="Navigation de pied de page">
            <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/urgence-depannage-plomberie" className="text-red-500 hover:underline font-semibold">
                  Urgence & Dépannage
                </Link>
              </li>
              <li>
                <Link to="/installation-pompe-a-chaleur" className="text-accent hover:underline font-semibold">
                  Pompe à Chaleur (PAC)
                </Link>
              </li>
              <li>
                <Link to="/renovation-salle-de-bain" className="hover:text-accent transition-colors">
                  Rénovation Salle de Bain
                </Link>
              </li>
              <li>
                <Link to="/installation-adoucisseur-eau" className="hover:text-accent transition-colors">
                  Adoucisseurs d'eau
                </Link>
              </li>
              <li>
                <Link to="/installation-vmc-ventilation" className="hover:text-accent transition-colors">
                  VMC & Ventilation
                </Link>
              </li>
              <li>
                <Link to="/chauffage-central-radiateurs" className="hover:text-accent transition-colors">
                  Chauffage & Radiateurs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors font-semibold">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Colonne 3 : Engagements */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Engagements</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Artisan certifié RGE QualiPAC</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Garantie Décennale & RCP</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Devis gratuit & transparent</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de bas de page */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} SARL Anthony GUEDES. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}