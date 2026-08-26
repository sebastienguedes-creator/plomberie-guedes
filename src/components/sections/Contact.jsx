import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import ZoneInterventionMap from "../ZoneInterventionMap";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      user_name: e.target.user_name.value,
      user_phone: e.target.user_phone.value,
      user_email: e.target.user_email.value,
      project_type: e.target.project_type.value,
      project_description: e.target.project_description.value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Une erreur est survenue lors de l'envoi.");
      }
    } catch (error) {
      console.error("Erreur de fetch :", error);
      alert("Impossible de joindre le serveur.");
    } finally {
      setIsLoading(false);
    }
  };

  // Données structurées Schema.org pour le référencement local Google
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "name": "SARL Anthony GUEDES - Plomberie Chauffage",
    "telephone": "+33617921004",
    "email": "anthonyguedes.plomberie@gmail.com",
    "areaServed": [
      "Eure", 
      "Seine-Maritime", 
      "Calvados", 
      "Orne", 
      "Normandie", 
      "Île-de-France"
    ],
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "19:00"
      }
    ]
  };

  return (
    <main className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden min-h-screen">
      {/* Metadonnées SEO & Données structurées */}
      <Helmet>
        <title>Contact & Devis Gratuit | SARL Anthony Guedes - Plombier Chauffagiste</title>
        <meta 
          name="description" 
          content="Besoin d'un devis gratuit pour une pompe à chaleur, une salle de bain ou un dépannage ? Dépannages urgents (30 km) et grands projets jusqu'à 150 km . Contactez Anthony Guedes au 06 17 92 10 04." 
        />
        <link rel="canonical" href="https://sarl-anthony-guedes.vercel.app/contact" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Halo lumineux d'arrière-plan */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de page */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            Contact & Devis Gratuit
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Parlons de votre projet ou de <span className="text-blue-500">vos urgences</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Une question sur une pompe à chaleur, un projet de salle de bain ou un besoin de dépannage ? Remplissez le formulaire ou contactez-moi directement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Colonne Gauche : Coordonnées NAP & Carte interactive */}
          <div className="lg:col-span-5 space-y-8">
            <address className="not-italic bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
              
              <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                Coordonnées directes
              </h2>

              <div className="space-y-6">
                <a href="tel:+33617921004" className="flex items-start gap-4 group" aria-label="Appeler le 06 17 92 10 04">
                  <div className="bg-blue-600/10 p-3 rounded-xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Téléphone d'urgence & Devis</div>
                    <div className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      06 17 92 10 04
                    </div>
                  </div>
                </a>

                <a href="mailto:anthonyguedes.plomberie@gmail.com" className="flex items-start gap-4 group">
                  <div className="bg-slate-800 p-3 rounded-xl text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
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
                  <div className="bg-slate-800 p-3 rounded-xl text-blue-400 shrink-0">
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
                  <div className="bg-slate-800 p-3 rounded-xl text-blue-400 shrink-0">
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

              {/* Carte interactive des zones d'intervention */}
              <div className="border-t border-slate-800 pt-6">
                <ZoneInterventionMap />
              </div>
            </address>
          </div>

          {/* Colonne Droite : Formulaire interactif */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message envoyé avec succès !</h3>
                  <p className="text-slate-300 max-w-md mx-auto">
                    Merci pour votre demande. Je reviens vers vous dans les plus brefs délais pour étudier votre projet.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-all border border-slate-700"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-6">Demandez votre devis gratuit</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="user_name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Votre Nom</label>
                      <input 
                        id="user_name"
                        name="user_name"
                        type="text" 
                        required 
                        placeholder="Ex : Jean Dupont" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="user_phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Téléphone</label>
                      <input 
                        id="user_phone"
                        name="user_phone"
                        type="tel" 
                        required 
                        placeholder="Ex : 06 12 34 56 78" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
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
                        placeholder="Ex : jean.dupont@email.com" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="project_type" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Type de projet</label>
                      <select 
                        id="project_type"
                        name="project_type"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm"
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
                      placeholder="Précisez votre besoin, vos équipements actuels..." 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
                  >
                    <span>{isLoading ? 'Envoi en cours...' : 'Envoyer ma demande de devis'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-slate-400 text-center">🔒 Vos données personnelles restent strictement confidentielles.</p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}