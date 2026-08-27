import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import {
    Bath,
    PhoneCall,
    ArrowRight,
    Sparkles,
    Accessibility,
    MapPin,
    Droplets,
    HelpCircle,
    Image as ImageIcon,
    X,
    Maximize2,
    ChevronDown
} from 'lucide-react';
import ZoneInterventionMap from "../components/ZoneInterventionMap";

// --- CONFIGURATION SUPABASE ---
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// --- UTILITAIRE IMAGE CLOUDINARY (Instantané et optimisé) ---
const getOptimizedImageUrl = (url) => {
    if (!url) return '';
    // c_limit garde les proportions d'origine tout en limitant la taille pour une fluidité totale (zéro latence)
    return url.replace('/upload/', '/upload/c_limit,w_1000,h_1000,f_auto,q_auto/');
};

// --- DONNÉES FAQ ---
const faqData = [
    {
        question: "Combien de temps durent les travaux de rénovation d'une salle de bain ?",
        answer: "En moyenne, une rénovation complète de salle de bain (démolition, plomberie, sanitaires, étanchéité) dure entre 1 et 2 semaines selon l'ampleur du projet."
    },
    {
        question: "Proposez-vous le remplacement de baignoire par une douche à l'italienne ?",
        answer: "Oui, c'est une intervention fréquente. Je dépose votre ancienne baignoire et j'installe un receveur extra-plat ou sur-mesure pour un accès sécurisé et moderne."
    },
    {
        question: "Quels aménagements proposez-vous pour l'accessibilité PMR ?",
        answer: "J'installe des équipements adaptés tels que des receveurs de douche de plain-pied, des barres d'appui sécurisées et des sièges de douche ergonomiques pour faciliter le quotidien."
    },
    {
        question: "Dois-je acheter moi-même les équipements sanitaires et le carrelage ?",
        answer: "Non. Pour vous garantir une installation irréprochable couverte par ma garantie décennale, je fournis l'ensemble des équipements sanitaires, de la robinetterie et des matériaux. Je ne travaille qu'avec du matériel professionnel dont je connais parfaitement la qualité, la fiabilité et la conformité technique."
    },
    {
        question: "Aurons-nous de l'eau coupée pendant toute la durée des travaux ?",
        answer: "Non, les coupures d'eau sont limitées au strict minimum (lors des raccordements et de la modification des réseaux). Je fais au mieux pour rétablir l'alimentation en fin de journée afin de préserver votre confort pendant la durée du chantier."
    }
];

export default function SalleDeBain() {
    // État pour stocker les 6 derniers chantiers
    const [chantiers, setChantiers] = useState([]);
    // État pour gérer la photo sélectionnée pour le zoom plein écran
    const [selectedImage, setSelectedImage] = useState(null);
    // État pour gérer l'ouverture unique de l'accordéon FAQ
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    useEffect(() => {
        async function fetchDerniersChantiers() {
            try {
                const { data, error } = await supabase
                    .from('chantiers')
                    .select('*')
                    .eq('domaine', 'Salle de Bain') // Filtre strict sur le domaine
                    .eq('visible_sur_site', true)
                    .order('created_at', { ascending: false }); // Du plus récent au plus ancien

                if (!error && data) {
                    setChantiers(data);
                }
            } catch (err) {
                console.error("Erreur lors de la récupération des chantiers:", err);
            }
        }
        fetchDerniersChantiers();
    }, []);

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://www.guedes-plomberie-chauffage.fr/renovation-salle-de-bain#service",
                "name": "Rénovation et Aménagement de Salle de Bain Clé en Main",
                "provider": {
                    "@type": "Plumber",
                    "name": "SARL Anthony GUEDES",
                    "telephone": "+33617921004",
                    "email": "anthonyguedes.plomberie@gmail.com",
                    "url": "https://www.guedes-plomberie-chauffage.fr",
                    "logo": "https://www.guedes-plomberie-chauffage.fr/Logo.webp",
                    "image": "https://www.guedes-plomberie-chauffage.fr/Camion_SARL_Anthony_GUEDES.webp",
                    "priceRange": "€€",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "2A Rue du Ravin",
                        "addressLocality": "Valailles",
                        "postalCode": "27300",
                        "addressCountry": "FR"
                    },
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
                "description": "Rénovation complète de salle de bain, création de douche à l'italienne, aménagement PMR et travaux de plomberie sur un large secteur normand.",
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
                "@id": "https://www.guedes-plomberie-chauffage.fr/renovation-salle-de-bain#faq",
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
                description="Artisan spécialiste en rénovation de salle de bain en Normandie (Eure, Seine-Maritime, Calvados, Orne). Douche à l'italienne, aménagement PMR."
                canonicalUrl="https://www.guedes-plomberie-chauffage.fr/renovation-salle-de-bain"
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
                                    Confiez la transformation de votre salle de bain à un interlocuteur unique. De la dépose de l'existant à la pose de vos sanitaires et de la robinetterie, la <strong>SARL Anthony GUEDES</strong> concrétise vos projets sur un large rayon en Normandie.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                                    <Link
                                        to="/contact"
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-xl shadow-accent/25"
                                    >
                                        <span>Demander un devis salle de bain</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
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
                                        <span><strong>Douche à l'italienne :</strong> Receveur extra-plat, paroi vitrée, colonne thermostatique.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Accessibility className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Aménagement PMR :</strong> Sécurisation, barres d'appui, sièges de douche adaptés.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Droplets className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Plomberie & Réseaux :</strong> Modification d'arrivées d'eau et évacuations sur-mesure.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 3 : ZONE D'INTERVENTION LOCALE (MAP + VILLES) --- */}
                <section className="py-16 bg-slate-950 border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                Intervention dans un large rayon sur la Normandie
                            </h2>
                            <p className="text-slate-400 text-sm sm:text-base">
                                J'interviens sur la majorité du territoire normand, notamment dans l'Eure (27), la Seine-Maritime (76), le Calvados (14) et l'Orne (61) :
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-2xl space-y-6">
                                <ZoneInterventionMap showEmergency={false} showProjects={true} />

                                <div className="pt-4 border-t border-slate-800">
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {[
                                            "Évreux (27)", "Bernay (27)", "Les Andelys (27)",
                                            "Rouen (76)", "Le Havre (76)", "Dieppe (76)",
                                            "Caen (14)", "Lisieux (14)", "Bayeux (14)",
                                            "Alençon (61)", "Argentan (61)", "Mortagne-au-Perche (61)"
                                        ].map((ville, i) => (
                                            <span key={i} className="bg-slate-950 border border-slate-800 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 flex items-center gap-2 hover:border-accent/40 transition-colors">
                                                <MapPin className="w-3.5 h-3.5 text-accent" /> Salle de bain {ville}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION DERNIERS CHANTIERS (DYNAMIQUE DEPUIS SUPABASE) --- */}
                {chantiers.length > 0 && (
                    <section className="py-20 bg-slate-900 border-b border-slate-800">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                            <div className="text-center space-y-4">
                                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold">
                                    <ImageIcon className="w-4 h-4" /> Nos réalisations
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                                    Dernières interventions en salle de bain
                                </h2>
                                <p className="text-slate-400 max-w-2xl mx-auto">
                                    Création de douche, pose de sanitaires ou rénovation complète : découvrez mes derniers chantiers réalisés.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {chantiers.map((chantier) => (
                                    <article key={chantier.id} className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden flex flex-col h-full hover:border-slate-700 transition-colors shadow-lg shadow-black/20">

                                        {/* Image cliquable pour zoom instantané */}
                                        <div
                                            onClick={() => setSelectedImage(chantier.image_url)}
                                            className="p-4 flex items-center justify-center bg-slate-950 relative group cursor-pointer"
                                            title={`Agrandir la photo du chantier de ${chantier.ville}`}
                                        >
                                            <img
                                                src={getOptimizedImageUrl(chantier.image_url)}
                                                alt={`Création et aménagement de salle de bain par l'entreprise Guedes Plomberie à ${chantier.ville}`}
                                                title={`Chantier de salle de bain à ${chantier.ville} en Normandie`}
                                                className="w-full h-auto max-h-[350px] object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                                                loading="lazy"
                                            />
                                            {/* Icône de loupe discrète au survol */}
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg m-4">
                                                <span className="bg-slate-900/90 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border border-slate-700 shadow-lg">
                                                    <Maximize2 className="w-3.5 h-3.5 text-accent" /> Agrandir
                                                </span>
                                            </div>
                                        </div>

                                        {/* --- DESCRIPTIF DU CHANTIER (SEO) --- */}
                                        <div className="px-5 pb-5 flex-grow flex flex-col justify-start">
                                            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                                                {chantier.texte}
                                            </p>
                                        </div>

                                        {/* Bandeau d'informations aligné au bas grâce à mt-auto */}
                                        <div className="p-4 flex items-center justify-between bg-slate-900/80 border-t border-slate-800 mt-auto">
                                            <span className="text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-1.5 line-clamp-1">
                                                <MapPin className="w-3.5 h-3.5 shrink-0" /> {chantier.ville}
                                            </span>
                                            <span className="text-xs font-medium text-slate-400 bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800 shrink-0">
                                                <time dateTime={chantier.created_at}>
                                                    {new Date(chantier.created_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                                </time>
                                            </span>
                                        </div>

                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* --- MODALE DE ZOOM PLEIN ÉCRAN (Zéro latence) --- */}
                {selectedImage && (
                    <div
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full border border-slate-700 transition-colors shadow-xl z-10"
                            aria-label="Fermer"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={getOptimizedImageUrl(selectedImage)}
                                alt="Agrandissement du chantier de salle de bain"
                                className="max-w-full max-h-[85vh] object-contain rounded-2xl border border-slate-800 shadow-2xl"
                            />
                        </div>
                    </div>
                )}

                {/* --- SECTION FAQ (ACCORDÉON AVEC EFFET FLUIDE GRID) --- */}
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

                        <div className="space-y-4">
                            {faqData.map((faq, index) => (
                                <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-colors hover:border-slate-700">
                                    <button
                                        onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-colors focus:outline-none"
                                        aria-expanded={openFaqIndex === index}
                                    >
                                        <h3 className="font-bold text-white text-lg pr-8">
                                            {faq.question}
                                        </h3>
                                        <ChevronDown
                                            className={`w-6 h-6 text-accent shrink-0 transition-transform duration-300 ${openFaqIndex === index ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Transition fluide via CSS Grid pour la hauteur automatique */}
                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${openFaqIndex === index
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="px-6 pb-6 text-slate-300 text-sm leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA FINAL */}
                <section id="contact" className="py-16 bg-accent text-white text-center">
                    <div className="max-w-4xl mx-auto px-4 space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-extrabold">Un projet de salle de bain en tête ?</h2>
                        <p className="text-slate-100">Discutons de votre aménagement et obtenez une estimation rapide de vos travaux sur une grande partie de la Normandie.</p>
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