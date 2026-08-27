import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Guillaume A",
      location: "Evreux (27)",
      project: "Installation Pompe à Chaleur",
      rating: 5,
      date: "Il y a 2 mois",
      comment: "Entreprise très réactive et sympathique installation d une pompe a chaleur travail super merci a vous"
    },
    {
      name: "Gérard D.",
      location: "Bourgtheroulde (27)",
      project: "Dépannage urgent",
      rating: 5,
      date: "Il y a 4 mois",
      comment: "C'est un excellent plombier. Efficacité plus plus. Sérieux. Fiable. Excellence. Avec beaucoup d'humour. Je recommande. Faites appel à Monsieur Guedes au moindre souci de plomberie. N’hésitez pas une seule seconde. Merci Messieurs. Je répète je vous le recommande."
    },
    {
      name: "Sandrine",
      location: "Rouen (76)",
      project: "Rénovation Circuit d'Eau & Chauffe-Eau",
      rating: 5,
      date: "Il y a 6 mois",
      comment: "Artisan très professionnel, travail propre, rapport qualité prix tout à fait correct. Suite a un dégât des eaux a refait tout le circuit eau chaude et froide avec changement du cumulus. Le tout dans la bonne humeur. Un grand MERCI Je recommande vivement"
    },
    {
      name: "Ludivine",
      location: "Rouen (76)",
      project: "Réparation Dégât des Eaux",
      rating: 5,
      date: "Il y a 6 mois",
      comment: "Suite a un dégât des eaux Mr Guedes est intervenu chez moi, on en a profités pour refaire l'installation complète. Très agréable et arrangeant , un travail a la hauteur de mes attentes , très professionnel. Je recommande vivement."
    },
    {
      name: "Claire",
      location: "Rouen (76)",
      project: "Plomberie Maison Ancienne",
      rating: 5,
      date: "Il y a 6 mois",
      comment: "Rapide, réactif et efficace. Mr Guedes est aussi de bon conseil surtout quand il s'agit d'une maison ancienne. Je recommande vivement Anthony Guedes"
    },
    {
      name: "Charly",
      location: "Rouen (76)",
      project: "Rénovation Globale",
      rating: 5,
      date: "Il y a 6 mois",
      comment: "Excellente prestation pour 1 salle de bain, 1 wc et 1 cuisine, et tout en un: plomberie, électricité, placo... plus pratique et rapide que de faire intervenir 3 artisans. Travail très soigné, avec un SAV réactif si besoin, le tout dans la bonne humeur"
    }
  ];

  return (
    <section id="temoignages" aria-labelledby="temoignages-heading" className="py-20 lg:py-28 bg-slate-900 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            Confiance & Satisfaction
          </div>
          {/* H2 Optimisé SEO */}
          <h2 id="temoignages-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Avis clients sur nos <span className="text-accent">interventions en plomberie</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Découvrez les retours d'expérience de particuliers qui m'ont fait confiance pour leurs travaux de chauffage et de plomberie.
          </p>
        </div>

        {/* Grille des avis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between relative shadow-xl hover:border-accent/40 transition-all duration-300 group"
            >
              {/* Icône de citation en filigrane */}
              <div className="absolute top-6 right-6 text-slate-800 group-hover:text-accent/20 transition-colors" aria-hidden="true">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Étoiles de notation */}
                <div className="flex items-center gap-1 mb-4" aria-label={`Note de ${review.rating} sur 5`}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>

                {/* Commentaire */}
                <blockquote className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10 italic">
                  "{review.comment}"
                </blockquote>
              </div>

              {/* Informations du client */}
              <div className="border-t border-slate-900 pt-4 mt-auto">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white text-sm">{review.name}</p>
                    <p className="text-xs text-slate-400">
                      {review.location} • <span className="text-accent">{review.project}</span>
                    </p>
                  </div>
                  <CheckCircle2
                    className="w-5 h-5 text-emerald-500 shrink-0"
                    aria-label="Avis vérifié"
                    role="img"
                  />
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}