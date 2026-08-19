import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import {
    Bath,
    PhoneCall,
    ArrowRight,
    Sparkles,
    Accessibility,
    MapPin,
    Droplets,
    HelpCircle
} from 'lucide-react';

export default function SalleDeBain() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://www.plomberie-guedes.fr/renovation-salle-de-bain#service",
                "name": "Rénovation et Aménagement de Salle de Bain Clé en Main",
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
                    { "@type": "City", "name": "Mortagne-au-Perche" },
                    { "@type": "City", "name": "Valailles" }
                ],
                "description": "Rénovation complète de salle de bain, création de douche à l'italienne, aménagement PMR et travaux de plomberie en Normandie.",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Services Salle de Bain",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Création de douche à l'italienne" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aménagement PMR et accessibilité" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rénovation clé en main" } }
                    ]
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.plomberie-guedes.fr/renovation-salle-de-bain#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Combien de temps durent les travaux de rénovation d'une salle de bain ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "En moyenne, une rénovation complète de salle de bain (démolition, plomberie, sanitaires, étanchéité) dure entre 1 et 2 semaines selon l'ampleur du projet."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Proposez-vous le remplacement de baignoire par une douche à l'italienne ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Oui, c'est une intervention fréquente. Je dépose votre ancienne baignoire et j'installe un receveur extra-plat ou sur-mesure pour un accès sécurisé et moderne."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Quels aménagements proposez-vous pour l'accessibilité PMR ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "J'installe des équipements adaptés tels que des receveurs de douche de plain-pied, des barres d'appui sécurisées et des sièges de douche ergonomiques pour faciliter le quotidien."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <SEO 
                title="Rénovation Salle de Bain Normandie : Clé en main | GUEDES"
                description="Artisan spécialiste en rénovation de salle de bain en Normandie. J'interviens dans toutes les préfectures et sous-préfectures. Douche à l'italienne, aménagement PMR."
                canonicalUrl="https://www.plomberie-guedes.fr/renovation-salle-de-bain"
                schema={schemaData}
            />

            <div className="bg-slate-950 text-slate-100 min-h-screen">
                {/* HERO SECTION */}
                <section className="relative py-16 lg:py-24 border-b border-slate-800 bg-slate-950">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7 space-y-6">
                                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-accent">
                                    <Bath className="w-4 h-4" /> Rénovation Clé en Main
                                </div>
                                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                                    Création & Rénovation de <span className="text-accent">Salle de Bain</span> en Normandie
                                </h1>
                                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                                    Confiez la transformation de votre salle de bain à un interlocuteur unique. De la dépose de l'existant à la pose de vos sanitaires et de la robinetterie, la <strong>SARL Anthony GUEDES</strong> concrétise vos projets partout en Normandie[cite: 20].
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                                    <a
                                        href="#contact"
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-xl shadow-accent/25"
                                    >
                                        <span>Demander un devis salle de bain</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="tel:+33617921004"
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-xl font-semibold transition-all"
                                    >
                                        <PhoneCall className="w-5 h-5 text-accent" />
                                        <span>06 17 92 10 04</span>
                                    </a>
                                </div>
                            </div>

                            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6">
                                <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                                    Mes prestations phares
                                </h2>
                                <ul className="space-y-4 text-sm text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <Sparkles className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Douche à l'italienne :</strong> Receveur extra-plat, paroi vitrée, colonne thermostatique[cite: 20].</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Accessibility className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Aménagement PMR :</strong> Sécurisation, barres d'appui, sièges de douche adaptés[cite: 20].</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Droplets className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Plomberie & Réseaux :</strong> Modification d'arrivées d'eau et évacuations sur-mesure[cite: 20].</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ZONES D'INTERVENTION */}
                <section className="py-16 bg-slate-950 border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                            Votre artisan salle de bain en Normandie
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-sm">
                            Basé à <strong>Valailles</strong>, j'interviens dans l'ensemble des départements, préfectures et sous-préfectures de la région Normandie[cite: 20] :
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 pt-2">
                            {[
                                "Évreux (27)", "Bernay (27)", "Les Andelys (27)",
                                "Rouen (76)", "Le Havre (76)", "Dieppe (76)",
                                "Caen (14)", "Lisieux (14)", "Bayeux (14)",
                                "Saint-Lô (50)", "Cherbourg-en-Cotentin (50)", "Avranches (50)",
                                "Alençon (61)", "Argentan (61)", "Mortagne-au-Perche (61)",
                                "Valailles (27)"
                            ].map((ville, i) => (
                                <span key={i} className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 flex items-center gap-2">
                                    <MapPin className="w-3.5 h-3.5 text-accent" /> Salle de bain {ville}
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
                                Tout savoir sur la rénovation de salle de bain
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Combien de temps durent les travaux de rénovation d'une salle de bain ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    En moyenne, une rénovation complète de salle de bain (démolition, plomberie, sanitaires, étanchéité) dure entre 1 et 2 semaines selon l'ampleur du projet[cite: 20].
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Proposez-vous le remplacement de baignoire par une douche à l'italienne ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Oui, c'est une intervention fréquente. Je dépose votre ancienne baignoire et j'installe un receveur extra-plat ou sur-mesure pour un accès sécurisé et moderne[cite: 20].
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Quels aménagements proposez-vous pour l'accessibilité PMR ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    J'installe des équipements adaptés tels que des receveurs de douche de plain-pied, des barres d'appui sécurisées et des sièges de douche ergonomiques pour faciliter le quotidien[cite: 20].
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA FINAL */}
                <section id="contact" className="py-16 bg-accent text-white text-center">
                    <div className="max-w-4xl mx-auto px-4 space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-extrabold">Un projet de salle de bain en tête ?</h2>
                        <p className="text-slate-100">Discutons de votre aménagement et obtenez une estimation rapide de vos travaux partout en Normandie[cite: 20].</p>
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