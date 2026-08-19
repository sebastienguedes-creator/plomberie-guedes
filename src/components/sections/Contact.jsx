import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi réussi
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-primary text-white relative overflow-hidden">
      {/* Effet visuel d'arrière-plan */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            Contact & Devis Gratuit
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Parlons de votre projet ou de <span className="text-accent">vos urgences</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Une question sur une pompe à chaleur, un projet de salle de bain ou un besoin de dépannage ? Remplissez le formulaire ou contactez-moi directement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Colonne de gauche : Informations de contact direct */}
          <div className="lg:col-span-5 space-y-8">
            <address className="not-italic bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
              
              <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                Coordonnées directes
              </h3>

              <div className="space-y-6">
                <a href="tel:+33617921004" className="flex items-start gap-4 group" aria-label="Appeler le 06 17 92 10 04">
                  <div className="bg-accent/10 p-3 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Téléphone d'urgence & Devis</div>
                    <div className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                      06 17 92 10 04
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-xl text-accent shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Zone d'intervention</div>
                    <div className="text-base font-semibold text-white">Normandie (Eure & Seine-Maritime)</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-xl text-accent shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Horaires</div>
                    <div className="text-base font-semibold text-white">
                      Lun - Ven : 8h00 - 19h00<br />
                      <span className="text-xs text-accent">Urgences 7j/7 selon dispo</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-6">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
                  <span className="text-xs text-slate-300 font-medium block">Devis et déplacements initiaux rapides et adaptés à vos besoins.</span>
                </div>
              </div>
            </address>
          </div>

          {/* Colonne de droite : Formulaire de contact interactif */}
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
                        placeholder="Ex: Jean Dupont" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-accent transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="user_phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Téléphone</label>
                      <input 
                        id="user_phone"
                        name="user_phone"
                        type="tel" 
                        required 
                        placeholder="Ex: 06 12 34 56 78" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-accent transition-colors text-sm"
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
                        placeholder="Ex: jean.dupont@email.com" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-accent transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="project_type" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Type de projet</label>
                      <select 
                        id="project_type"
                        name="project_type"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors text-sm"
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
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-accent transition-colors text-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-accent/20 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Envoyer ma demande de devis</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-slate-400 text-center">🔒 Vos données personnelles restent strictement confidentielles.</p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}