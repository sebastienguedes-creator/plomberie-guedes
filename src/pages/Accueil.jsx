import { useState } from 'react';
import SEO from '../components/SEO';
import Hero from '../components/sections/Hero';
import CertificationsBanner from '../components/sections/CertificationsBanner';
//import QuickAccessBar from '../components/sections/QuickAccessBar';
import Services from '../components/sections/Services';
import Apropos from '../components/sections/Apropos'; // <-- NOUVEL IMPORT SEO
import Realisations from '../components/sections/Realisations';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

import ZoneInterventionMap from "../components/ZoneInterventionMap";
import { MapPin, AlertTriangle, Wrench, HelpCircle, ChevronDown } from 'lucide-react';

export default function Accueil() {
    // --- STATE INTERACTIF FAQ ---
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    // Liste des FAQ (Synchronisée exactement avec le Schema.org)
    const faqList = [
        {
            question: "Quels sont vos secteurs d'intervention pour les urgences et les projets ?",
            answer: "Pour les urgences et dépannages (fuite d'eau, panne de chauffage), j'interviens rapidement dans un rayon de 30 km autour de Bernay et Valailles (Évreux, Le Neubourg, Louviers, Pont-Audemer). Pour les projets d'installation et de rénovation d'envergure (pompe à chaleur, salle de bain), mon secteur s'étend sur toute la Normandie jusqu'à 150 km."
        },
        {
            question: "Quelles certifications et garanties possédez-vous pour mes travaux ?",
            answer: "La SARL Anthony GUEDES dispose de toutes les garanties réglementaires, notamment la Garantie Décennale et la Responsabilité Civile Professionnelle. Nos qualifications certifiées vous permettent également de prétendre aux aides de l'État (comme MaPrimeRénov' ou les primes CEE) pour vos travaux de rénovation énergétique."
        },
        {
            question: "Comment demander un devis et quels sont les délais de réponse ?",
            answer: "Vous pouvez nous contacter directement par téléphone au 06 17 92 10 04 ou via notre formulaire de contact en ligne. Chaque devis est gratuit, personnalisé et sans engagement. Nous vous recontactons sous 24h à 48h pour étudier votre projet."
        },
        {
            question: "Assurez-vous l'entretien et le désembouage des installations de chauffage ?",
            answer: "Oui, nous assurons la maintenance régulière, l'entretien annuel ainsi que le désembouage de vos installations de chauffage (pompes à chaleur, chaudières, planchers chauffants) pour garantir leur performance maximale et prolonger leur durée de vie."
        }
    ];

    // --- SCHEMA.ORG : Séparation claire des zones + FAQPage ---
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": ["Plumber", "HeatingContractor", "HVACBusiness"],
                "@id": "https://www.guedes-plomberie-chauffage.fr/#identity",
                "name": "SARL Anthony GUEDES",
                "url": "https://www.guedes-plomberie-chauffage.fr/",
                "description": "Artisan plombier chauffagiste en Normandie. Intervention en urgence dans un rayon de 30 km (Bernay, Évreux) et installation/rénovation sur un large secteur de 150 km.",
                "telephone": "+33617921004",
                "priceRange": "€€",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "2A Rue du Ravin", 
                    "addressLocality": "Valailles",
                    "postalCode": "27300",
                    "addressCountry": "FR"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 49.122232,
                    "longitude": 0.623779
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "08:00",
                    "closes": "19:00"
                }
            },
            // Service 1 : URGENCES (Zone 30 km)
            {
                "@type": "Service",
                "name": "Dépannage et Urgence Plomberie Chauffage",
                "provider": { "@id": "https://www.guedes-plomberie-chauffage.fr/#identity" },
                "areaServed": [
                    {
                        "@type": "GeoCircle",
                        "geoMidpoint": {
                            "@type": "GeoCoordinates",
                            "latitude": 49.122232,
                            "longitude": 0.623779
                        },
                        "geoRadius": "30000" // 30 km
                    },
                    { "@type": "City", "name": "Bernay" },
                    { "@type": "City", "name": "Évreux" },
                    { "@type": "City", "name": "Le Neubourg" },
                    { "@type": "City", "name": "Louviers" },
                    { "@type": "City", "name": "Pont-Audemer" }
                ]
            },
            // Service 2 : PROJETS & INSTALLATIONS (Zone 150 km)
            {
                "@type": "Service",
                "name": "Installation et Rénovation Plomberie, Chauffage et Sanitaire",
                "provider": { "@id": "https://www.guedes-plomberie-chauffage.fr/#identity" },
                "areaServed": [
                    {
                        "@type": "GeoCircle",
                        "geoMidpoint": {
                            "@type": "GeoCoordinates",
                            "latitude": 49.122232,
                            "longitude": 0.623779
                        },
                        "geoRadius": "150000" // 150 km
                    },
                    { "@type": "AdministrativeArea", "name": "Normandie" },
                    { "@type": "AdministrativeArea", "name": "Eure" },
                    { "@type": "AdministrativeArea", "name": "Seine-Maritime" },
                    { "@type": "AdministrativeArea", "name": "Calvados" },
                    { "@type": "City", "name": "Rouen" },
                    { "@type": "City", "name": "Caen" },
                    { "@type": "City", "name": "Le Havre" },
                    { "@type": "City", "name": "Lisieux" }
                ]
            },
            // Service 3 : POMPES À CHALEUR & CHAUFFAGE
            {
                "@type": "Service",
                "name": "Installation, Entretien et Désembouage de Pompe à Chaleur (PAC)",
                "provider": { "@id": "https://www.guedes-plomberie-chauffage.fr/#identity" },
                "serviceType": "HeatingInstallation"
            },
            // --- SCHEMA FAQPAGE DÉDIÉ ---
            {
                "@type": "FAQPage",
                "@id": "https://www.guedes-plomberie-chauffage.fr/#faq",
                "mainEntity": faqList.map((faq) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
        ]
    };

    return (
        <main className="bg-slate-950">
            <SEO 
                title="Plombier Chauffagiste Eure (27) | SARL Anthony GUEDES"
                description="Artisan plombier chauffagiste dans l'Eure. Dépannage urgence 30km (Évreux, Bernay) & Projets de rénovation sur toute la Normandie."
                canonicalUrl="https://www.guedes-plomberie-chauffage.fr/"
                schema={schemaData}
            />

            <Hero />
            <CertificationsBanner />
            {/*<QuickAccessBar />*/}
            <Services />

            {/* --- NOUVELLE SECTION A PROPOS (OPTIMISATION SEO & RASSURANCE) --- */}
            <Apropos />

            {/* --- SECTION : ZONE D'INTERVENTION MIXTE --- */}
            <section className="py-16 bg-slate-950 border-b border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                            Mes secteurs d'intervention
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base">
                            Pour répondre au mieux à vos besoins, mon périmètre d'action s'adapte selon la nature de votre demande : une zone ciblée pour la rapidité des urgences, et un secteur étendu pour les gros projets.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-8">
                            
                            {/* Affichage de la carte avec les deux rayons */}
                            <ZoneInterventionMap showEmergency={true} showProjects={true} />
                            
                            {/* Légende et Villes détaillées par zone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-800">
                                
                                {/* Zone 1 : URGENCES */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-red-500/10 p-2 rounded-lg">
                                            <AlertTriangle className="w-5 h-5 text-red-500" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-lg">Urgences & Dépannages</h3>
                                            <p className="text-xs text-red-400 font-semibold uppercase tracking-wider">Rayon de 30 km</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2.5">
                                        {[
                                            "Bernay", "Évreux", "Le Neubourg", 
                                            "Louviers", "Pont-Audemer", "Conches-en-Ouche"
                                        ].map((ville, i) => (
                                            <span key={`urg-${i}`} className="bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-300 flex items-center gap-1.5 hover:border-red-500/40 transition-colors">
                                                <MapPin className="w-3 h-3 text-red-500" /> {ville}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Zone 2 : PROJETS */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-accent/10 p-2 rounded-lg">
                                            <Wrench className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-lg">Projets & Installations</h3>
                                            <p className="text-xs text-accent font-semibold uppercase tracking-wider">Grande Normandie (150 km)</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2.5">
                                        {[
                                            "Rouen", "Caen", "Le Havre", 
                                            "Lisieux", "Alençon", "Deauville"
                                        ].map((ville, i) => (
                                            <span key={`proj-${i}`} className="bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-300 flex items-center gap-1.5 hover:border-accent/40 transition-colors">
                                                <MapPin className="w-3 h-3 text-accent" /> {ville}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION : FOIRE AUX QUESTIONS (OPTIMISATION SEO & RASSURANCE) --- */}
            <section className="py-16 bg-slate-950 border-b border-slate-800">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
                            <HelpCircle className="w-4 h-4" />
                            <span>Réponses à vos questions</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                            Foire aux questions
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base">
                            Retrouvez les informations clés concernant le fonctionnement de la SARL Anthony GUEDES, nos zones d'intervention et nos engagements.
                        </p>
                    </div>

                    <div className="space-y-4 max-w-3xl mx-auto">
                        {faqList.map((faq, index) => {
                            const isOpen = openFaqIndex === index;
                            return (
                                <div 
                                    key={`faq-${index}`}
                                    className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200 hover:border-slate-700"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-2xl"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="text-base sm:text-lg">{faq.question}</span>
                                        <ChevronDown className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {isOpen && (
                                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 pt-4">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/*<Realisations />*/}
            <Testimonials />
            {/*<Contact />*/}
        </main>
    );
}