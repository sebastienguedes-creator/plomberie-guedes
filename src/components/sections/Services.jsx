import { Flame, Wind, Droplet, Bath, Wrench, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Flame,
      title: "Pompes à Chaleur (PAC)",
      description: "Installation, mise en service et maintenance de pompes à chaleur air/eau et air/air haute performance pour réduire vos factures énergétiques.",
      tag: "Spécialité Principale",
      features: ["Installation clé en main", "Étude thermique sur-mesure", "Marques certifiées"],
      link: "/installation-pompe-a-chaleur",
      linkText: "Installation de pompe à chaleur (27)"
    },
    {
      icon: Wrench,
      title: "Chauffage Central & Radiateurs",
      description: "Pose, remplacement et désembouage de radiateurs, planchers chauffants et chaudières pour un confort thermique homogène dans toute la maison.",
      tag: "Performance",
      features: ["Désembouage réseau", "Équilibrage thermique", "Régulation intelligente"],
      link: "/chauffage-central-radiateurs",
      linkText: "Installation & dépannage chauffage"
    },
    {
      icon: Bath,
      title: "Salles de Bain sur-mesure",
      description: "Création complète ou rénovation clé en main de votre espace douche, baignoire et robinetterie avec un design moderne et des finitions soignées.",
      tag: "Sur-mesure",
      features: ["Design moderne", "Normes PMR", "Coordination des travaux"],
      link: "/renovation-salle-de-bain",
      linkText: "Rénovation de salle de bain à Bernay"
    },
    {
      icon: Droplet,
      title: "Traitement de l'Eau",
      description: "Protection de vos équipements et de votre peau contre le calcaire grâce à l'installation d'adoucisseurs d'eau et de systèmes de filtration avancés.",
      tag: "Protection",
      features: ["Anti-calcaire", "Eau purifiée", "Entretien simplifié"],
      link: "/installation-adoucisseur-eau",
      linkText: "Installation d'adoucisseur d'eau (27)"
    },
    {
      icon: Wind,
      title: "VMC Double Flux",
      description: "Optimisez la qualité de l'air intérieur de votre habitat tout en réalisant d'importantes économies de chauffage grâce à une ventilation maîtrisée.",
      tag: "Confort & Santé",
      features: ["Filtration des pollens", "Récupération de calories", "Silencieux et discret"],
      link: "/installation-vmc-ventilation",
      linkText: "Installation de VMC dans l'Eure"
    },
    {
      icon: AlertTriangle,
      title: "Urgence & Dépannage",
      description: "Une panne de chauffage, une fuite d'eau importante ou un ballon d'eau chaude HS ? Intervention rapide dans l'Eure pour sécuriser votre installation.",
      tag: "Urgence 27",
      features: ["Diagnostic précis", "Réactivité garantie", "Réparation immédiate"],
      link: "/urgence-depannage-plomberie",
      linkText: "Dépannage plomberie urgent (27)"
    }
  ];

  return (
    <section id="services" aria-labelledby="services-heading" className="py-20 lg:py-28 bg-slate-900 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            Savoir-faire & Expertise
          </div>
          {/* H2 Optimisé SEO */}
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Nos prestations de <span className="text-accent">plomberie et chauffage dans l'Eure</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Bénéficiez d'un accompagnement professionnel de l'étude de votre projet jusqu'à la maintenance de vos équipements.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <article 
                key={index}
                className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-accent/5"
              >
                <div>
                  {/* En-tête de la carte */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-lg">
                      <IconComponent className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                      {service.tag}
                    </span>
                  </div>

                  {/* Titre et description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bloc bas de carte : Caractéristiques + Lien */}
                <div>
                  <div className="border-t border-slate-900 pt-4 space-y-2 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bouton modernisé et plus visible */}
                  <Link 
                    to={service.link}
                    className="w-full flex items-center justify-between bg-accent/10 hover:bg-accent text-accent hover:text-white border border-accent/30 px-4 py-3 rounded-xl text-xs font-bold transition-all group/btn shadow-sm"
                  >
                    <span>{service.linkText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bouton bas de section pour demander un devis */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-xl border border-slate-700 transition-all shadow-lg hover:scale-105 active:scale-95"
          >
            <span>Demander une étude personnalisée</span>
            <ArrowRight className="w-4 h-4 text-accent" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}