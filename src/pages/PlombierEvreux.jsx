import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import {
    Wrench,
    PhoneCall,
    ArrowRight,
    ShieldCheck,
    Clock,
    MapPin,
    Flame,
    CheckCircle2,
    HelpCircle
} from 'lucide-react';

export default function PlombierEvreux() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Plumber",
                "@id": "https://www.plomberie-guedes.fr/plombier-chauffagiste-evreux#business",
                "name": "SARL Anthony GUEDES - Plombier Chauffagiste Évreux & Normandie",
                "telephone": "+33617921004",
                "url": "https://www.plomberie-guedes.fr/plombier-chauffagiste-evreux",
                "priceRange": "€€",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Valailles",
                    "postalCode": "27300",
                    "addressRegion": "Normandie",
                    "addressCountry": "FR"
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
                "description": "Artisan plombier chauffagiste intervenant à Évreux et dans toute la Normandie. Dépannage rapide, installation de chauffage et rénovation de salle de bain."
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.plomberie-guedes.fr/plombier-chauffagiste-evreux#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Quel est le délai d'intervention pour un dépannage en urgence à Évreux ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Basé à proximité, j'interviens rapidement à Évreux et dans toute la Normandie pour les urgences de plomberie et de chauffage afin de sécuriser votre installation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Quelles prestations réalisez-vous pour les particuliers à Évreux ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Je couvre l'ensemble des travaux de plomberie (recherche de fuite, dépannage), de chauffage (installation de pompes à chaleur, radiateurs) et la rénovation complète de salles de bain (douche à l'italienne, PMR)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Comment demander un devis pour un chantier à Évreux ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Vous pouvez me joindre directement par téléphone au 06 17 92 10 04 ou via mon formulaire de contact pour obtenir un devis gratuit et personnalisé sous 48h."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <SEO 
                title="Plombier Chauffagiste Évreux & Normandie (27000)"
                description="Besoin d'un plombier chauffagiste à Évreux et en Normandie ? Dépannage rapide, installation de pompe à chaleur, rénovation de salle de bain. Artisan certifié RGE."
                canonicalUrl="https://www.plomberie-guedes.fr/plombier-chauffagiste-evreux"
                schema={schemaData}
            />

            <div className="bg-slate-950 text-slate-100 min-h-screen">
                {/* HERO SECTION */}
                <section className="relative py-16 lg:py-24 border-b border-slate-800 bg-slate-950">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7 space-y-6">
                                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-accent">
                                    <MapPin className="w-4 h-4" /> Intervention Évreux & Normandie
                                </div>
                                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                                    Plombier Chauffagiste à <span className="text-accent">Évreux (27000)</span> & en Normandie
                                </h1>
                                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                                    Vous cherchez un artisan de confiance pour vos travaux ou urgences à Évreux et dans toute la région ? J'interviens rapidement pour la plomberie, le chauffage (pompe à chaleur, chaudière) et la création de salles de bain[cite: 18].
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
                                        <span>Demander un devis gratuit</span>
                                        <ArrowRight className="w-5 h-5 text-accent" />
                                    </a>
                                </div>
                            </div>

                            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6">
                                <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                                    Pourquoi choisir GUEDES à Évreux ?
                                </h2>
                                <ul className="space-y-4 text-sm text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Intervention Rapide :</strong> Déplacements réguliers sur Évreux et partout en Normandie[cite: 18].</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Artisan Certifié RGE :</strong> Garanties de qualité pour vos installations de chauffage[cite: 18].</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Wrench className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Travail Clé en Main :</strong> Un seul interlocuteur du diagnostic aux finitions[cite: 18].</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES PRESTATIONS */}
                <section className="py-16 bg-slate-900 border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold text-white">Mes services de plomberie et chauffage à Évreux</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                                Une gamme complète de prestations pour les particuliers et professionnels[cite: 18].
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center text-accent">
                                    <Wrench className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Plomberie & Dépannage</h3>
                                <p className="text-sm text-slate-400">
                                    Recherche et réparation de fuites d'eau, remplacement de robinetterie, débouchage, mise aux normes des tuyauteries[cite: 18].
                                </p>
                            </div>

                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center text-accent">
                                    <Flame className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Chauffage & PAC</h3>
                                <p className="text-sm text-slate-400">
                                    Installation et entretien de pompes à chaleur (air/eau), remplacement de chaudières, désembouage de radiateurs[cite: 18].
                                </p>
                            </div>

                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center text-accent">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Rénovation de Bain</h3>
                                <p className="text-sm text-slate-400">
                                    Transformation de baignoire en douche à l'italienne, aménagement PMR, installation de sanitaires modernes[cite: 18].
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTEURS D'INTERVENTION - DÉPARTEMENTS, PRÉFECTURES, SOUS-PRÉFECTURES */}
                <section className="py-16 bg-slate-950 border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                            Secteurs d'intervention en Normandie
                        </h2>
                        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
                            J'interviens à Évreux, ses alentours et dans l'ensemble des départements, préfectures et sous-préfectures de la région[cite: 18] :
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
                                    <MapPin className="w-3.5 h-3.5 text-accent" /> Plombier {lieu}
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
                                Tout savoir sur mes interventions à Évreux
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Quel est le délai d'intervention pour un dépannage en urgence à Évreux ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Basé à proximité, j'interviens rapidement à Évreux et dans toute la Normandie pour les urgences de plomberie et de chauffage afin de sécuriser votre installation[cite: 18].
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Quelles prestations réalisez-vous pour les particuliers à Évreux ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Je couvre l'ensemble des travaux de plomberie (recherche de fuite, dépannage), de chauffage (installation de pompes à chaleur, radiateurs) et la rénovation complète de salles de bain (douche à l'italienne, PMR)[cite: 18].
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Comment demander un devis pour un chantier à Évreux ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Vous pouvez me joindre directement par téléphone au 06 17 92 10 04 ou via mon formulaire de contact pour obtenir un devis gratuit et personnalisé sous 48h[cite: 18].
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA FINAL */}
                <section id="contact" className="py-16 bg-accent text-white text-center">
                    <div className="max-w-4xl mx-auto px-4 space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-extrabold">Besoin d'un plombier à Évreux ou en Normandie ?</h2>
                        <p className="text-slate-100">Contactez-moi pour une intervention rapide ou un devis gratuit sans engagement[cite: 18].</p>
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