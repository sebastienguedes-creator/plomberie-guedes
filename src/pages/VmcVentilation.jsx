import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import {
    Wind,
    PhoneCall,
    ArrowRight,
    ShieldCheck,
    Wrench,
    MapPin,
    HelpCircle,
    Home
} from 'lucide-react';

export default function VmcVentilation() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://www.guedes-plomberie-chauffage.fr/vmc-ventilation#service",
                "name": "Installation et Entretien VMC Ventilation - SARL Anthony GUEDES",
                "provider": {
                    "@type": "Plumber",
                    "name": "SARL Anthony GUEDES",
                    "telephone": "+33617921004",
                    "url": "https://www.guedes-plomberie-chauffage.fr"
                },
                "areaServed": [
                    {
                        "@type": "GeoCircle",
                        "geoMidpoint": {
                            "@type": "GeoCoordinates",
                            "latitude": 49.122232,
                            "longitude": 0.623779
                        },
                        "geoRadius": "150000" // 150 km autour de Valailles
                    },
                    { "@type": "AdministrativeArea", "name": "Eure" },
                    { "@type": "AdministrativeArea", "name": "Seine-Maritime" },
                    { "@type": "AdministrativeArea", "name": "Calvados" },
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
                    { "@type": "City", "name": "Alençon" },
                    { "@type": "City", "name": "Argentan" },
                    { "@type": "City", "name": "Mortagne-au-Perche" },
                    { "@type": "AdministrativeArea", "name": "Normandie" }
                ],
                "description": "Installation, entretien et dépannage de VMC (Simple flux, Double flux) et systèmes de ventilation sur un large secteur normand."
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.guedes-plomberie-chauffage.fr/vmc-ventilation#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Pourquoi installer une VMC dans son logement ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "La VMC permet de renouveler l'air intérieur, d'évacuer l'humidité excessive, de prévenir l'apparition de moisissures et d'améliorer la qualité de l'air que vous respirez."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Quelle est la différence entre une VMC simple flux et double flux ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "La VMC simple flux extrait l'air vicié en faisant entrer de l'air neuf par des entrées d'air. La VMC double flux récupère quant à elle les calories de l'air extrait pour préchauffer l'air entrant, offrant ainsi un meilleur confort thermique et des économies d'énergie."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "À quelle fréquence faut-il entretenir sa VMC ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Il est recommandé de nettoyer les bouches d'extraction tous les 3 à 6 mois et de faire réaliser un entretien complet du bloc moteur et des gaines par un professionnel tous les 2 à 3 ans."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <SEO 
                title="Installation & Entretien VMC Ventilation | GUEDES"
                description="Améliorez la qualité de votre air intérieur. Installation et entretien de VMC simple flux et double flux par la SARL Anthony GUEDES en Normandie (Eure, Seine-Maritime, Calvados, Orne)."
                canonicalUrl="https://www.guedes-plomberie-chauffage.fr/vmc-ventilation"
                schema={schemaData}
            />

            <div className="bg-slate-950 text-slate-100 min-h-screen">
                {/* HERO SECTION */}
                <section className="relative py-16 lg:py-24 border-b border-slate-800 bg-slate-950">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7 space-y-6">
                                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-accent">
                                    <Wind className="w-4 h-4" /> Qualité d'Air & Ventilation
                                </div>
                                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                                    Installation & Entretien de <br />
                                    <span className="text-accent">VMC et Ventilation</span> en Normandie
                                </h1>
                                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                                    Lutter contre l'humidité, éliminer les polluants intérieurs et optimiser votre confort thermique : confiez la pose ou la maintenance de votre VMC à un professionnel qualifié sur un large rayon en Normandie.
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
                                        <span>Devis ventilation gratuit</span>
                                        <ArrowRight className="w-5 h-5 text-accent" />
                                    </a>
                                </div>
                            </div>

                            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6">
                                <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                                    Pourquoi une bonne VMC ?
                                </h2>
                                <ul className="space-y-4 text-sm text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Anti-humidité :</strong> Prévention efficace de la condensation et des moisissures sur les murs.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Wind className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Air sain :</strong> Évacuation des polluants intérieurs, COV et odeurs du quotidien.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Home className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Économies d'énergie :</strong> Optimisation des flux d'air pour réduire les pertes de chauffage.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRESTATIONS VMC */}
                <section className="py-16 bg-slate-900 border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold text-white">Nos solutions de ventilation sur-mesure</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                                De l'étude de votre habitat à la mise en service, profitez d'une installation conforme et performante.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center text-accent">
                                    <Wind className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">VMC Simple Flux</h3>
                                <p className="text-sm text-slate-400">
                                    Autoréglable ou hygroréglable, elle extrait l'air vicié des pièces humides (cuisine, sdb, wc) en régulant le débit selon l'humidité.
                                </p>
                            </div>

                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center text-accent">
                                    <Home className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">VMC Double Flux</h3>
                                <p className="text-sm text-slate-400">
                                    Récupère les calories de l'air sortant pour réchauffer l'air neuf entrant. Confort thermique accru et économies significatives.
                                </p>
                            </div>

                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center text-accent">
                                    <Wrench className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Entretien & Dépannage</h3>
                                <p className="text-sm text-slate-400">
                                    Nettoyage des réseaux, contrôle du caisson moteur, remplacement des filtres et diagnostic en cas de panne ou de nuisances sonores.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ZONES D'INTERVENTION */}
                <section className="py-16 bg-slate-950 border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                            Secteur d'intervention VMC & Ventilation
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-sm">
                            J'interviens pour l'installation, l'entretien et le dépannage de vos systèmes de ventilation sur une grande partie de la Normandie :
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 pt-2">
                            {[
                                "VMC Évreux (27)", "VMC Bernay (27)", "VMC Les Andelys (27)",
                                "VMC Rouen (76)", "VMC Le Havre (76)", "VMC Dieppe (76)",
                                "VMC Caen (14)", "VMC Lisieux (14)", "VMC Bayeux (14)",
                                "VMC Alençon (61)", "VMC Argentan (61)", "VMC Mortagne-au-Perche (61)"
                            ].map((ville, i) => (
                                <span key={i} className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 flex items-center gap-2">
                                    <MapPin className="w-3.5 h-3.5 text-accent" /> {ville}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION FAQ */}
                <section className="py-20 border-b border-slate-800">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                        <div className="text-center space-y-4">
                            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold">
                                <HelpCircle className="w-4 h-4" /> Vos questions fréquentes
                            </div>
                            <h2 className="text-3xl font-extrabold text-white">
                                Tout savoir sur la ventilation de votre habitat
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Pourquoi installer une VMC dans son logement ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    La VMC permet de renouveler l'air intérieur, d'évacuer l'humidité excessive, de prévenir l'apparition de moisissures et d'améliorer la qualité de l'air que vous respirez.
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Quelle est la différence entre une VMC simple flux et double flux ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    La VMC simple flux extrait l'air vicié en faisant entrer de l'air neuf par des entrées d'air. La VMC double flux récupère quant à elle les calories de l'air extrait pour préchauffer l'air entrant, offrant ainsi un meilleur confort thermique et des économies d'énergie.
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">À quelle fréquence faut-il entretenir sa VMC ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Il est recommandé de nettoyer les bouches d'extraction tous les 3 à 6 mois et de faire réaliser un entretien complet du bloc moteur et des gaines par un professionnel tous les 2 à 3 ans.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA FINAL */}
                <section id="contact" className="py-16 bg-accent text-white text-center">
                    <div className="max-w-4xl mx-auto px-4 space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-extrabold">Besoin d'améliorer la ventilation de votre maison ?</h2>
                        <p className="text-slate-100">Contactez-moi pour discuter de votre projet d'installation ou d'entretien de VMC sur une grande partie de la Normandie.</p>
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