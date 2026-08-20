import { Wrench, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Colonne 1 : Marque */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-accent p-2 rounded-xl text-white">
                  <Wrench className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="font-bold text-white text-lg tracking-wide">
                  SARL Anthony GUEDES
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Artisan plombier chauffagiste qualifié en <span>Normandie</span>.
              </p>
            </div>

            {/* Colonne 2 : Navigation rapide */}
            <nav aria-label="Navigation de pied de page">
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2 text-xs">
                <li><Link to="/" className="hover:text-accent transition-colors">Accueil</Link></li>
                <li><a href="/#services" className="hover:text-accent transition-colors">Services</a></li>
                <li><a href="/#realisations" className="hover:text-accent transition-colors">Réalisations</a></li>
                <li><a href="/#temoignages" className="hover:text-accent transition-colors">Avis Clients</a></li>
                <li><a href="/#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </nav>

            {/* Colonne 3 : Expertises (liens SEO) */}
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Expertises</h4>
              <ul className="space-y-2 text-xs">
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
              </ul>
            </div>

            {/* Colonne 4 : Engagements */}
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Engagements</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>Artisan certifié RGE QualiPAC</span>
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