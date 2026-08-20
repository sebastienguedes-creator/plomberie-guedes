import { ShieldCheck, ArrowRight, PhoneCall, Wind, Flame, Bath, Fan, Droplets, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const expertises = [
    { title: "Pompes à Chaleur", icon: Wind, link: "/installation-pompe-a-chaleur" },
    { title: "Chauffage", icon: Flame, link: "/chauffage-central-radiateurs" },
    { title: "Salles de Bain", icon: Bath, link: "/renovation-salle-de-bain" },
    { title: "VMC Double Flux", icon: Fan, link: "/installation-vmc-ventilation" },
    { title: "Traitement Eau", icon: Droplets, link: "/installation-adoucisseur-eau" },
    { title: "Dépannage", icon: AlertTriangle, link: "/urgence-depannage-plomberie" },
  ];

  return (
    <section aria-labelledby="hero-heading" className="relative bg-primary text-white overflow-hidden py-16 lg:py-24 border-b border-slate-800">
      {/* Effet visuel d'arrière-plan subtil (Masqué pour les robots/lecteurs d'écran) */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c2410c_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Colonne de gauche : Accroche et CTAs (Mobile-First) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge de réassurance */}
            <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-slate-300">
              <ShieldCheck className="w-4 h-4 text-accent" aria-hidden="true" />
              <span>Artisan Plombier Chauffagiste • Plus de 15 ans d'expérience</span>
            </div>

            {/* Titre principal percutant optimisé SEO Local */}
            <h1 id="hero-heading" className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Expert <span className="text-accent">Pompe à Chaleur</span> & Plombier en Normandie
            </h1>

            {/* Description orientée bénéfice client */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0">
              Installation, dépannage et entretien de vos systèmes de chauffage, radiateurs, VMC double flux, traitement de l'eau et création de salles de bain sur-mesure.
            </p>

            {/* Boutons d'action (CTA) optimisés A11y & Format Téléphonique */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                aria-label="Aller au formulaire pour estimer mon projet"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-xl shadow-accent/25 hover:scale-105 active:scale-95"
              >
                <span>Estimer mon projet</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
              
              <a
                href="tel:+33617921004"
                aria-label="Appeler le 06 17 92 10 04 pour un dépannage d'urgence"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-4 rounded-xl font-semibold text-base transition-all"
              >
                <PhoneCall className="w-5 h-5 text-accent" aria-hidden="true" />
                <span>Dépannage d'urgence</span>
              </a>
            </div>

            {/* Chiffres clés de réassurance */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">15+</div>
                <div className="text-xs text-slate-400">Années d'expérience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                <div className="text-xs text-slate-400">Conforme normes</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">Devis</div>
                <div className="text-xs text-slate-400">Gratuit & Rapide</div>
              </div>
            </div>

          </div>

          {/* Colonne de droite : Carte visuelle immersive & Preuve de qualité */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-3xl blur-xl opacity-30 animate-pulse" aria-hidden="true"></div>
              
              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-emerald-500 rounded-full animate-ping" aria-hidden="true"></span>
                    <span className="text-sm font-semibold text-slate-200">Disponibilité Locale</span>
                  </div>
                  <span className="text-xs bg-accent/10 text-accent font-bold px-2.5 py-1 rounded-full border border-accent/20">Certifié RGE QualiPAC</span>
                </div>

                {/* Bloc image / illustration */}
                <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 aspect-[4/3] flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" aria-hidden="true"></div>
                  <img 
                    src="/src/assets/hero.png" 
                    alt="Installation Pompe à Chaleur et Plomberie en Normandie" 
                    fetchPriority="high"
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20 text-center">
                    <p className="text-sm font-medium text-slate-200 bg-slate-900/80 backdrop-blur-md py-2 px-4 rounded-xl border border-slate-800">
                      🔥 Installation Haute Performance
                    </p>
                  </div>
                </div>

                {/* Grille d'expertises visuelles */}
                <div className="grid grid-cols-2 gap-3">
                  {expertises.map((item, index) => (
                    <Link 
                      key={index}
                      to={item.link}
                      className="group flex flex-col items-center justify-center gap-2 p-3 bg-slate-950/50 hover:bg-accent border border-slate-700/50 hover:border-accent rounded-xl transition-all duration-300"
                    >
                      <item.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                      <span className="text-[11px] font-semibold text-slate-300 group-hover:text-white text-center leading-tight">
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}