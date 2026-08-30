import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Clim. / PAC', href: '/installation-pompe-a-chaleur' },
    { name: 'Bain', href: '/renovation-salle-de-bain' },
    { name: 'Adoucisseur', href: '/installation-adoucisseur-eau' },
    { name: 'VMC', href: '/installation-vmc-ventilation' },
    { name: 'Radiateurs', href: '/chauffage-central-radiateurs' },
    { name: 'Contact', href: '/contact' },
    { name: '🚨 Dépannage', href: '/urgence-depannage-plomberie', isUrgent: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">

          {/* Logo & Marque */}
          <Link
            to="/"
            onClick={handleLinkClick}
            aria-label="SARL Anthony GUEDES - Accueil"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity shrink-0"
          >
            <img
              src="/Icone120.webp"
              alt="Logo SARL Anthony GUEDES"
              width="120"  
              height="120"  
              className="h-12 sm:h-14 w-auto object-contain"
            />
            <div>
              <span className="font-bold text-base sm:text-xl tracking-wide block text-slate-900 leading-tight">
                SARL Anthony GUEDES
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-wider uppercase block">
                Plombier - Chauffagiste
              </span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav aria-label="Menu principal" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;

              if (link.isUrgent) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-xs xl:text-sm font-bold text-red-600 bg-red-50 hover:bg-red-600 hover:text-white px-2.5 py-1.5 rounded-lg border border-red-200 transition-all ml-1"
                  >
                    {link.name}
                  </Link>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-xs xl:text-sm font-semibold px-2.5 py-1.5 rounded-lg transition-colors ${isActive
                    ? 'text-accent bg-accent/10 font-bold'
                    : 'text-slate-700 hover:text-accent hover:bg-slate-50'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Bouton Téléphone Desktop */}
          <div className="hidden sm:flex items-center shrink-0">
            <a
              href="tel:+33617921004"
              aria-label="Appeler le 06 17 92 10 04"
              className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2.5 rounded-xl font-bold text-xs xl:text-sm transition-all shadow-md shadow-accent/20 hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>06 17 92 10 04</span>
            </a>
          </div>

          {/* Controls Mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+33617921004"
              aria-label="Appeler au 06 17 92 10 04"
              className="sm:hidden bg-accent p-2.5 rounded-xl text-white shadow-md"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 hover:bg-slate-200 focus:outline-none"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menu Déroulant Mobile */}
      {isOpen && (
        <nav id="mobile-menu" aria-label="Menu mobile" className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            🏠 Accueil
          </Link>
          <Link
            to="/installation-pompe-a-chaleur"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            🔥 Clim. / Pompe à Chaleur (PAC)
          </Link>
          <Link
            to="/renovation-salle-de-bain"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            🛁 Rénovation Salle de Bain
          </Link>
          <Link
            to="/installation-adoucisseur-eau"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            💧 Adoucisseur d'eau
          </Link>
          <Link
            to="/installation-vmc-ventilation"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            🌀 VMC & Ventilation
          </Link>
          <Link
            to="/chauffage-central-radiateurs"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            ♨️ Chauffage & Radiateurs
          </Link>
          <Link
            to="/urgence-depannage-plomberie"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-lg text-base font-bold text-red-600 bg-red-50 border border-red-100"
          >
            🚨 Urgence & Dépannage
          </Link>


          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
          >
            ✉️ Contact & Devis
          </Link>

          <div className="pt-3">
            <a
              href="tel:+33617921004"
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2 bg-accent text-white px-4 py-3 rounded-xl font-bold text-center shadow-lg"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span>Appeler le 06 17 92 10 04</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}