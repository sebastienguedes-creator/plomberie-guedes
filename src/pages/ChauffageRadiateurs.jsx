import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
    Flame,
    PhoneCall,
    ArrowRight,
    ShieldCheck,
    Thermometer,
    MapPin,
    Wrench,
    Zap,
    HelpCircle
} from 'lucide-react';

export default function ChauffageRadiateurs() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://www.plomberie-guedes.fr/chauffage-central-radiateurs#service",
                "name": "Installation, Remplacement de Radiateurs et Dépannage Chauffage Central",
                "provider": {
                    "@type": "Plumber",
                    "name": "SARL Anthony GUEDES",
                    "telephone": "+33617921004",
                    "url": "https://www.plomberie-guedes.fr"
                },
                "areaServed": [
                    { "@type": "AdministrativeArea", "name": "Normandie" },
                    { "@type": "AdministrativeArea", "name": "Eure" },
                    { "@type": "AdministrativeArea", "name": "Seine-Maritime" },
                    { "@type": "AdministrativeArea", "name": "Calvados" },
                    { "@type": "AdministrativeArea", "name": "Manche" },
                    { "@type": "AdministrativeArea", "name": "Orne" },
                    { "@type": "City", "name": "Évreux" },
                    { "@type": "City", "name": "Bernay" },
                    { "@type": "City", "name": "Les Andelys" },
                    { "@type": "City", "name": "Rouen" },
                    { "@type": "City", "name": "Le Havre" },
                    { "@type": "City", "name": "Dieppe" },
                    { "@type": "City", "name": "Caen" },
                    { "@type": "City", "name": "Lisieux" },
                    { "@type": "City", "name": "Bayeux" },
                    { "@type": "City", "name": "Saint-Lô" },
                    { "@type": "City", "name": "Cherbourg-en-Cotentin" },
                    { "@type": "City", "name": "Avranches" },
                    { "@type": "City", "name": "Alençon" },
                    { "@type": "City", "name": "Argentan" },
                    { "@type": "City", "name": "Mortagne-au-Perche" }
                ],
                "description": "Pose et remplacement de radiateurs eau chaude et électriques, désembouage de circuit de chauffage central, modification de tuyauterie partout en Normandie. J'interviens pour votre chauffage."
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.plomberie-guedes.fr/chauffage-central-radiateurs#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Pourquoi et quand faut-il désembouer son circuit de chauffage central ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Le désembouage permet d'éliminer les boues (oxydes métalliques et tartre) qui s'accumulent dans les tuyaux et radiateurs. Il est recommandé de le réaliser tous les 5 à 10 ans, ou impérativement avant l'installation d'une nouvelle chaudière ou d'une pompe à chaleur pour garantir un rendement optimal."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Comment savoir si un radiateur a besoin d'être purgé ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Si votre radiateur chauffe en bas mais reste froid ou tiède sur le dessus, cela signifie que de l'air s'est infiltré dans le circuit. Une simple purge à l'aide d'une clé de purge permet de chasser l'air et de retrouver une diffusion homogène de la chaleur."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Est-il possible de remplacer un vieux radiateur par un modèle moderne ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Tout à fait. Je peux remplacer vos radiateurs existants (fonte, acier ou aluminium) par des modèles plus récents, plus performants et mieux adaptés à la configuration de vos pièces, tout en adaptant la tuyauterie si nécessaire."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>Chauffage Central & Radiateurs Normandie : Départements & Villes | GUEDES</title>
                <meta
                    name="description"
                    content="Chauffagiste en Normandie : pose et remplacement de radiateurs, désembouage de réseau de chauffage central, purge et équilibrage. J'interviens dans toutes les préfectures et sous-préfectures."
                />
                <link rel="canonical" href="https://www.plomberie-guedes.fr/chauffage-central-radiateurs" />
                {/* Open Graph */}
                <meta property="og:title" content="Chauffage Central & Radiateurs Normandie : Départements & Villes | GUEDES" />
                <meta property="og:description" content="Chauffagiste en Normandie : pose et remplacement de radiateurs, désembouage de réseau de chauffage central, purge et équilibrage. J'interviens dans toutes les préfectures et sous-préfectures." />
                <meta property="og:url" content="https://www.plomberie-guedes.fr/chauffage-central-radiateurs" />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>

            <div className="bg-slate-950 text-slate-100 min-h-screen">
                {/* HERO SECTION */}
                <section className="relative py-16 lg:py-24 border-b border-slate-800 bg-slate-950">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7 space-y-6">
                                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-accent">
                                    <Flame className="w-4 h-4" /> Radiateurs & Chauffage Central
                                </div>
                                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                                    Installation & Entretien de <span className="text-accent">Chauffage Central </span>en Normandie
                                </h1>
                                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                                    Des radiateurs froids en bas ? Un réseau emboué ou un projet d'extension ? Je prends en charge l'installation, le remplacement de radiateurs (eau chaude et acier/fonte) ainsi que le désembouage complet de votre circuit de chauffage central  .
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                                    <a
                                        href="tel:+33617921004"
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-xl shadow-accent/25"
                                    >
                                        <PhoneCall className="w-5 h-5" />
                                        <span>06 17 92 10 04</span>
                                    </a>
                                    <a
                                        href="#contact"
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-xl font-semibold transition-all"
                                    >
                                        <span>Devis chauffage gratuit</span>
                                        <ArrowRight className="w-5 h-5 text-accent" />
                                    </a>
                                </div>
                            </div>

                            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6">
                                <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                                    Mes engagements Chauffage
                                </h2>
                                <ul className="space-y-4 text-sm text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <Thermometer className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Confort thermique optimal :</strong> Dimensionnement précis de la puissance de chaque radiateur pièce par pièce  .</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Économies d'énergie :</strong> Un circuit propre et équilibré réduit votre consommation jusqu'à 15 %  .</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Intervention toutes énergies :</strong> Raccordement sur pompe à chaleur, chaudière gaz, fioul ou granulés  .</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRESTATIONS DETAIL */}
                <section className="py-16 bg-slate-900 border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold text-white">Mes travaux de chauffage central</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                                Intervention sur tout le réseau de distribution de chaleur dans votre logement  .
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center text-accent">
                                    <Wrench className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Désembouage de Réseau</h3>
                                <p className="text-sm text-slate-400">
                                    Nettoyage hydrodynamique du circuit pour éliminer la boue et le tartre. Indispensable avant la pose d'une pompe à chaleur  .
                                </p>
                            </div>

                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center text-accent">
                                    <Thermometer className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Remplacement de Radiateurs</h3>
                                <p className="text-sm text-slate-400">
                                    Installation de radiateurs eau chaude basse température, sèche-serviettes ou remplacement de vannes thermostatiques  .
                                </p>
                            </div>

                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center text-accent">
                                    <Flame className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Modification de Tuyauterie</h3>
                                <p className="text-sm text-slate-400">
                                    Déplacement de radiateurs, ajout d'émetteurs pour agrandissement ou réfection complète des réseaux cuivre/PEX  .
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ZONES D'INTERVENTION - DÉPARTEMENTS, PRÉFECTURES, SOUS-PRÉFECTURES */}
                <section className="py-16 bg-slate-950 border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                            Secteur d'intervention Chauffage en Normandie
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-sm">
                            J'interviens dans l'ensemble des départements normands, préfectures et sous-préfectures pour vos projets de chauffage   :
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 pt-2">
                            {[
                                "Évreux (27)", "Bernay (27)", "Les Andelys (27)",
                                "Rouen (76)", "Le Havre (76)", "Dieppe (76)",
                                "Caen (14)", "Lisieux (14)", "Bayeux (14)",
                                "Saint-Lô (50)", "Cherbourg-en-Cotentin (50)", "Avranches (50)",
                                "Alençon (61)", "Argentan (61)", "Mortagne-au-Perche (61)"
                            ].map((lieu, i) => (
                                <span key={i} className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 flex items-center gap-2">
                                    <MapPin className="w-3.5 h-3.5 text-accent" /> Chauffage {lieu}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SECTION FAQ (RICH SNIPPETS GOOGLE) --- */}
                <section className="py-20 border-b border-slate-800">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                        <div className="text-center space-y-4">
                            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold">
                                <HelpCircle className="w-4 h-4" /> Vos questions fréquentes
                            </div>
                            <h2 className="text-3xl font-extrabold text-white">
                                Tout savoir sur le chauffage central et les radiateurs
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Pourquoi et quand faut-il désembouer son circuit de chauffage central ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Le désembouage permet d'éliminer les boues (oxydes métalliques et tartre) qui s'accumulent dans les tuyaux et radiateurs. Il est recommandé de le réaliser tous les 5 à 10 ans, ou impérativement avant l'installation d'une nouvelle chaudière ou d'une pompe à chaleur pour garantir un rendement optimal  .
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Comment savoir si un radiateur a besoin d'être purgé ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Si votre radiateur chauffe en bas mais reste froid ou tiède sur le dessus, cela signifie que de l'air s'est infiltré dans le circuit. Une simple purge à l'aide d'une clé de purge permet de chasser l'air et de retrouver une diffusion homogène de la chaleur  .
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Est-il possible de remplacer un vieux radiateur par un modèle moderne ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Tout à fait. Je peux remplacer vos radiateurs existants (fonte, acier ou aluminium) par des modèles plus récents, plus performants et mieux adaptés à la configuration de vos pièces, tout en adaptant la tuyauterie si nécessaire  .
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA FINAL */}
                <section id="contact" className="py-16 bg-accent text-white text-center">
                    <div className="max-w-4xl mx-auto px-4 space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-extrabold">Un projet de chauffage central ou des radiateurs à changer ?</h2>
                        <p className="text-slate-100">Contactez-moi pour une étude personnalisée et un devis rapide partout en Normandie  .</p>
                        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                            <a href="tel:+33617921004" className="bg-slate-950 hover:bg-slate-900 text-white font-bold px-8 py-4 rounded-xl text-lg">06 17 92 10 04</a>
                            <Link to="/" className="bg-white hover:bg-slate-100 text-slate-950 font-bold px-8 py-4 rounded-xl text-lg">Retour à l'accueil</Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}