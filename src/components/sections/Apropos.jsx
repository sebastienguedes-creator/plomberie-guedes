import { ShieldCheck, Clock, Award, MapPin, Wrench, CheckCircle2 } from 'lucide-react';
import photoCamion from '../../assets/Camion_SARL_Anthony_GUEDES.webp';

export default function Apropos() {
    return (
        <section id="a-propos" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
            {/* Halos d'arrière-plan */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Colonne visuelle / Image camion */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group">
                            <img
                                src={photoCamion}
                                alt="Camion d'intervention SARL Anthony GUEDES Plombier Chauffagiste dans l'Eure"
                                width="600"
                                height="450"
                                loading="lazy"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                            <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800">
                                <div className="flex items-center gap-3">
                                    <div className="bg-accent/20 p-2.5 rounded-xl text-accent shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm sm:text-base">Basé à Valailles (27300)</p>
                                        <p className="text-slate-400 text-xs sm:text-sm">Intervention dans l'Eure & toute la Normandie</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Badges de réassurance */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-2xl text-center">
                                <p className="text-2xl sm:text-3xl font-extrabold text-accent">100%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Savoir-faire Artisanal</p>
                            </div>
                            <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-2xl text-center">
                                <p className="text-2xl sm:text-3xl font-extrabold text-white">Garantie</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Décennale & Assurances</p>
                            </div>
                        </div>
                    </div>

                    {/* Colonne contenu sémantique & SEO */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
                                <Wrench className="w-3.5 h-3.5" />
                                <span>À propos de la SARL Anthony GUEDES</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                                Votre artisan plombier chauffagiste de confiance dans l'Eure (27)
                            </h2>
                        </div>

                        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                            <p>
                                Fort d'une solide expérience du terrain, <strong>Anthony GUEDES</strong> met son savoir-faire artisanal au service des particuliers et des professionnels de Normandie. Implantée à <strong>Valailles (27300)</strong>, aux portes de <strong>Bernay</strong> et d'<strong>Évreux</strong>, la entreprise <strong>SARL Anthony GUEDES</strong> est votre interlocuteur unique pour tous vos travaux de plomberie, de chauffage et d'aménagement sanitaire.
                            </p>

                            <p>
                                Que vous soyez confronté à une <strong>urgence de plomberie</strong> (recherche et réparation de fuite d'eau, canalisation bouchée), ou que vous souhaitiez réaliser la <strong>création ou rénovation complète de votre salle de bains sur mesure</strong>, l'entreprise vous garantit des prestations réalisées dans le respect strict des normes DTU. Spécialisé également en rénovation énergétique, votre artisan assure la pose, l'entretien et le <strong>désembouage de systèmes de chauffage</strong> performants, incluant les <strong>pompes à chaleur air-eau (PAC)</strong> et chaudières modernes.
                            </p>

                            <p>
                                Pour répondre avec réactivité aux imprévus, un service de <strong>dépannage d'urgence</strong> intervient rapidement dans un rayon de <strong>30 km autour de Bernay</strong> (comprenant Le Neubourg, Louviers, Conches-en-Ouche et Pont-Audemer). Pour vos projets de rénovation globale et d'installation à haute efficacité énergétique, la SARL Anthony GUEDES se déplace sur l'ensemble de la <strong>Grande Normandie</strong> (Rouen, Caen, Le Havre, Lisieux).
                            </p>
                        </div>

                        {/* Engagements sous forme de liste */}
                        <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                "Devis gratuit, détaillé et transparent",
                                "Certifications RGE & QualiPAC",
                                "Interventions d'urgence 6j/7",
                                "Suivi personnalisé du chantier",
                                "Installation de matériel haut de gamme",
                                "Garantie Décennale & Responsabilité Civile"
                            ].map((engagement, idx) => (
                                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                                    <span>{engagement}</span>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}