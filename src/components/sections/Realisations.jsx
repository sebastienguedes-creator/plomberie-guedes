import { Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Realisations() {
  const projects = [
    {
      title: "Pompe à Chaleur Air/Eau Haute Performance",
      location: "Évreux (27)",
      category: "Chauffage",
      description: "Installation complète en remplacement d'une ancienne chaudière fioul. Intégration soignée, isolation des réseaux et raccordement au plancher chauffant.",
      tag: "RGE QualiPAC"
    },
    {
      title: "Rénovation Clé en Main Salle de Bain PMR",
      location: "Bourgtheroulde (27)",
      category: "Sanitaire",
      description: "Création d'une douche à l'italienne spacieuse, pose de faïence murale grand format, robinetterie encastrée et équipements aux normes PMR.",
      tag: "Sur-mesure"
    },
    {
      title: "VMC Double Flux Habitat Individuel",
      location: "Rouen (76)",
      category: "Traitement de l'air",
      description: "Mise en place d'un réseau de gaines isolé dans les combles, caisson haute efficacité thermique et bouches d'insufflation silencieuses.",
      tag: "Économie d'énergie"
    },
    {
      title: "Adoucisseur d'Eau & Centrale de Filtration",
      location: "Elbeuf (27)",
      category: "Traitement de l'eau",
      description: "Protection complète du réseau sanitaire domestique contre le calcaire. Installation compacte avec by-pass et analyse de dureté de l'eau.",
      tag: "Protection"
    }
  ];

  return (
    <section id="realisations" aria-labelledby="realisations-heading" className="py-20 lg:py-28 bg-primary-dark border-b border-slate-800/80 relative overflow-hidden">
      {/* Effets lumineux d'ambiance (Lumière et profondeur - Masqués pour lecteurs d'écran) */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-hydro/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-hydro/10 text-hydro border border-hydro/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span>Chantiers & Savoir-faire</span>
          </div>
          {/* H2 Optimisé SEO */}
          <h2 id="realisations-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Découvrez nos <span className="text-hydro">réalisations en plomberie et chauffage (27)</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            La précision d'une installation propre, dans les règles de l'art et le respect total de votre habitat.
          </p>
        </div>

        {/* Grille des réalisations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-primary border border-slate-800 rounded-3xl overflow-hidden shadow-2xl hover:border-hydro/50 transition-all duration-500 group flex flex-col justify-between"
            >
              {/* Simulation de visuel photo de chantier haut de gamme */}
              <div className="relative h-64 bg-slate-900 overflow-hidden flex items-center justify-center border-b border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent z-10" aria-hidden="true" />

                {/* Effet de lueur au survol */}
                <div className="absolute inset-0 bg-hydro/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" aria-hidden="true" />

                {/* Visuel stylisé (Masqué pour l'A11y car le titre est déjà lu plus bas) */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-700 group-hover:scale-105 transition-transform duration-700" aria-hidden="true">
                  <div className="text-center space-y-2 px-6">
                    <span className="text-xs uppercase tracking-widest text-hydro font-bold block">Chantier Validé</span>
                    <span className="text-xl font-bold text-slate-300 block">{project.title}</span>
                  </div>
                </div>

                {/* Badges de catégorie flottants */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-primary/90 backdrop-blur-md text-slate-200 border border-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-accent/10 text-accent border border-accent/20 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Contenu textuel */}
              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>
                      📍 Localisation :{' '}
                      <strong className="text-slate-200">
                        <span>{project.location}</span>
                      </strong>
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" /> Conforme Normes
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-hydro transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Finitions soignées garanties</span>
                  <a
                    href="#contact"
                    aria-label={`Discuter d'un projet similaire : ${project.title}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-hydro hover:text-white transition-colors"
                  >
                    <span aria-hidden="true">Discuter d'un projet similaire</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}