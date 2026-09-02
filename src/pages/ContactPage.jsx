import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, Loader2 } from 'lucide-react';

// Chargement paresseux de la carte pour optimiser les performances (LCP/TBT)[cite: 11]
const ZoneInterventionMap = lazy(() => import("../components/ZoneInterventionMap"));

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMapInView, setIsMapInView] = useState(false);

  const mapRef = useRef(null);
  const successRef = useRef(null);

  // Observer pour charger la carte uniquement quand elle s'approche de l'écran[cite: 11]
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsMapInView(true);
        observer.disconnect();
      }
    }, { rootMargin: '300px' }); // Déclenche le chargement 300px avant que l'élément soit visible

    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  // Gestion du focus pour l'accessibilité après une soumission réussie
  useEffect(() => {
    if (submitted && successRef.current) {
      successRef.current.focus();
    }
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Récupération des données du formulaire[cite: 11]
    const formData = new FormData(e.target);
    const data = {
      user_name: formData.get('user_name'),
      user_phone: formData.get('user_phone'),
      user_email: formData.get('user_email'),
      project_type: formData.get('project_type'),
      project_description: formData.get('project_description'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        e.target.reset(); // Nettoie le formulaire pour la prochaine fois
      } else {
        alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      alert("Impossible de contacter le serveur. Vérifiez votre connexion.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Données structurées Schema.org ultra-optimisées SEO local & Knowledge Graph
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Plumber", "HVACBusiness"],
        "@id": "https://www.guedes-plomberie-chauffage.fr/#localbusiness",
        "name": "SARL Anthony GUEDES - Plomberie Chauffage",
        "url": "https://www.guedes-plomberie-chauffage.fr",
        "telephone": "+33617921004",
        "email": "anthonyguedes.plomberie@gmail.com",
        "priceRange": "€€",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://www.guedes-plomberie-chauffage.fr/#logo",
          "url": "https://www.guedes-plomberie-chauffage.fr/Logo.webp"
        },
        "image": {
          "@type": "ImageObject",
          "@id": "https://www.guedes-plomberie-chauffage.fr/#image",
          "url": "https://www.guedes-plomberie-chauffage.fr/Camion_SARL_Anthony_GUEDES.webp"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2A Rue du Ravin",
          "addressLocality": "Valailles",
          "postalCode": "27300",
          "addressRegion": "Normandie",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 49.122232,
          "longitude": 0.623779
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "19:00"
          }
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+33617921004",
            "contactType": "customer service",
            "email": "anthonyguedes.plomberie@gmail.com",
            "availableLanguage": "French",
            "areaServed": "FR"
          },
          {
            "@type": "ContactPoint",
            "telephone": "+33617921004",
            "contactType": "emergency",
            "email": "anthonyguedes.plomberie@gmail.com",
            "availableLanguage": "French",
            "areaServed": "FR"
          }
        ],
        "areaServed": [
          {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 49.122232,
              "longitude": 0.623779
            },
            "geoRadius": "30000"
          },
          {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 49.122232,
              "longitude": 0.623779
            },
            "geoRadius": "150000"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Normandie"
          },
          {
            "@type": "City",
            "name": "Bernay"
          },
          {
            "@type": "City",
            "name": "Évreux"
          },
          {
            "@type": "City",
            "name": "Rouen"
          },
          {
            "@type": "City",
            "name": "Lisieux"
          },
          {
            "@type": "City",
            "name": "Le Havre"
          },
          {
            "@type": "City",
            "name": "Caen"
          }
        ],
        "knowsAbout": [
          "Plomberie",
          "Chauffage central",
          "Installation pompe à chaleur",
          "Ventilation VMC",
          "Rénovation de salle de bain",
          "Installation adoucisseur d'eau",
          "Dépannage d'urgence"
        ]
      },
      {
        "@type": "ContactPage",
        "@id": "https://www.guedes-plomberie-chauffage.fr/contact#webpage",
        "url": "https://www.guedes-plomberie-chauffage.fr/contact",
        "name": "Contact & Devis Gratuit | SARL Anthony Guedes - Plombier Chauffagiste",
        "description": "Besoin d'un devis gratuit pour une pompe à chaleur, une salle de bain ou un dépannage ? Dépannages urgents (30 km) et grands projets jusqu'à 150 km.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.guedes-plomberie-chauffage.fr/#website",
          "url": "https://www.guedes-plomberie-chauffage.fr",
          "name": "SARL Anthony GUEDES"
        },
        "about": {
          "@id": "https://www.guedes-plomberie-chauffage.fr/#localbusiness"
        },
        "mainEntity": {
          "@id": "https://www.guedes-plomberie-chauffage.fr/#localbusiness"
        }
      }
    ]
  };

  return (
    <main className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden min-h-screen">
      {/* Metadonnées SEO & Données structurées[cite: 11] */}
      <Helmet>
        <title>Contact & Devis Gratuit | SARL Anthony Guedes - Plombier Chauffagiste</title>
        <meta
          name="description"
          content="Besoin d'un devis gratuit pour une pompe à chaleur, une salle de bain ou un dépannage ? Dépannages urgents (30 km) et grands projets jusqu'à 150 km. Contactez Anthony Guedes au 06 17 92 10 04."
        />
        <link rel="canonical" href="https://www.guedes-plomberie-chauffage.fr/contact" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Halo lumineux d'arrière-plan[cite: 11] */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* En-tête de page */}
        <header className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            Contact & Devis Gratuit
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Parlons de votre projet ou de <span className="text-blue-500">vos urgences</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Une question sur une pompe à chaleur, un projet de salle de bain ou un besoin de dépannage ? Remplissez le formulaire ou contactez-moi directement.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Colonne Gauche : Coordonnées NAP & Carte interactive[cite: 11] */}
          <div className="lg:col-span-5 space-y-8">
            <address className="not-italic bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">

              <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                Coordonnées directes
              </h2>

              <div className="space-y-6">
                <a href="tel:+33617921004" className="flex items-start gap-4 group rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-900" aria-label="Appeler le 06 17 92 10 04">
                  <div className="bg-blue-600/10 p-3 rounded-xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0" aria-hidden="true">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Téléphone d'urgence & Devis</div>
                    <div className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      06 17 92 10 04
                    </div>
                  </div>
                </a>

                <a href="mailto:anthonyguedes.plomberie@gmail.com" className="flex items-start gap-4 group rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-900" aria-label="Envoyer un e-mail à anthonyguedes.plomberie@gmail.com">
                  <div className="bg-slate-800 p-3 rounded-xl text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all" aria-hidden="true">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">E-mail direct</div>
                    <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors break-all">
                      anthonyguedes.plomberie@gmail.com
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-xl text-blue-400 shrink-0" aria-hidden="true">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Zone d'intervention</div>
                    <div className="text-base font-semibold text-white">
                      Urgences : Rayon 30 km<br />
                      <span className="text-xs text-slate-400 font-normal">Projets (PAC, SDB, ...) : Jusqu'à 150 km</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-xl text-blue-400 shrink-0" aria-hidden="true">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Horaires</div>
                    <div className="text-base font-semibold text-white">
                      Lun - Ven : 8h00 - 19h00<br />
                      <span className="text-xs text-blue-400">Urgences 7j/7 selon disponibilité</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conteneur de carte à hauteur fixe (CLS) avec chargement paresseux[cite: 11] */}
              <div className="border-t border-slate-800 pt-6" ref={mapRef}>
                <div className="h-[350px] w-full rounded-xl overflow-hidden bg-slate-950/50">
                  {isMapInView ? (
                    <Suspense fallback={<div className="w-full h-full animate-pulse bg-slate-800 rounded-xl" aria-busy="true" aria-label="Chargement de la carte" />}>
                      <ZoneInterventionMap showEmergency={true} showProjects={true} />
                    </Suspense>
                  ) : (
                    <div className="w-full h-full bg-slate-800 rounded-xl" aria-hidden="true"></div>
                  )}
                </div>
              </div>
            </address>
          </div>

          {/* Colonne Droite : Formulaire interactif[cite: 11] */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative min-h-[500px] flex flex-col justify-center">
              {submitted ? (
                <div
                  className="text-center space-y-4 animate-fadeIn"
                  ref={successRef}
                  tabIndex="-1" // Permet d'être focusable par JS
                  aria-live="polite"
                  role="status"
                >
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto" aria-hidden="true">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message envoyé avec succès !</h3>
                  <p className="text-slate-300 max-w-md mx-auto">
                    Merci pour votre demande. Je reviens vers vous dans les plus brefs délais pour étudier votre projet.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" aria-label="Formulaire de contact">
                  <h3 className="text-xl font-bold text-white mb-6">Demandez votre devis gratuit</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="user_name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Votre Nom</label>
                      <input
                        id="user_name"
                        name="user_name"
                        type="text"
                        required
                        aria-required="true"
                        placeholder="Ex : Jean Dupont"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm disabled:opacity-50"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="user_phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Téléphone</label>
                      <input
                        id="user_phone"
                        name="user_phone"
                        type="tel"
                        required
                        aria-required="true"
                        placeholder="Ex : 06 12 34 56 78"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm disabled:opacity-50"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="user_email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Email</label>
                      <input
                        id="user_email"
                        name="user_email"
                        type="email"
                        required
                        aria-required="true"
                        placeholder="Ex : jean.dupont@email.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm disabled:opacity-50"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="project_type" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Type de projet</label>
                      <select
                        id="project_type"
                        name="project_type"
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm disabled:opacity-50"
                        disabled={isSubmitting}
                      >
                        <option value="pac">Installation Pompe à Chaleur (PAC)</option>
                        <option value="vmc">VMC Double Flux</option>
                        <option value="sdb">Création / Rénovation Salle de Bain</option>
                        <option value="eau">Traitement de l'Eau (Adoucisseur)</option>
                        <option value="depannage">Dépannage Urgent</option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="project_description" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Décrivez votre projet</label>
                    <textarea
                      id="project_description"
                      name="project_description"
                      rows="4"
                      required
                      aria-required="true"
                      placeholder="Précisez votre besoin, vos équipements actuels..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm resize-none disabled:opacity-50"
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <span>Envoyer ma demande de devis</span>
                        <Send className="w-4 h-4" aria-hidden="true" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-400 text-center flex items-center justify-center gap-1">
                    <span aria-hidden="true">🔒</span> Vos données personnelles restent strictement confidentielles.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}