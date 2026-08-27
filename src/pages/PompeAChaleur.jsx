import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import {
    Flame,
    ShieldCheck,
    PhoneCall,
    CheckCircle2,
    ArrowRight,
    Euro,
    HelpCircle,
    MapPin,
    Wrench,
    Image as ImageIcon,
    X,
    Maximize2,
    Snowflake,
    ThermometerSun,
    ChevronDown 
} from 'lucide-react';
import ZoneInterventionMap from "../components/ZoneInterventionMap";

// --- CONFIGURATION SUPABASE ---
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// --- UTILITAIRE IMAGE CLOUDINARY ---
const getOptimizedImageUrl = (url) => {
    if (!url) return '';
    return url.replace('/upload/', '/upload/c_limit,w_1000,h_1000,f_auto,q_auto/');
};

// --- DONNÉES DE LA FAQ ---
const faqData = [
    {
        question: "Une pompe à chaleur peut-elle aussi servir de climatisation en été ?",
        answer: "Oui ! La pompe à chaleur Air/Air (climatisation réversible) permet d'inverser son fluide frigorigène pour rafraîchir activement votre intérieur en été tout en chauffant très efficacement en hiver. Pour les PAC Air/Eau, l'option rafraîchissement permet également d'abaisser la température via un plancher chauffant."
    },
    {
        question: "Combien de temps prend l'installation d'une PAC en remplacement d'une chaudière fioul ?",
        answer: "L'installation complète d'une pompe à chaleur Air/Eau prend généralement entre 2 et 4 jours, incluant le démontage de l'ancienne chaudière, le désembouage du réseau et la mise en service."
    },
    {
        question: "Faut-il conserver ses anciens radiateurs ?",
        answer: "Dans la majorité des cas, oui ! Les pompes à chaleur Haute Température récentes s'adaptent parfaitement sur les réseaux de radiateurs en fonte ou en acier existants, sans avoir besoin de modifier toute votre tuyauterie."
    },
    {
        question: "Quelle est la durée de vie d'une pompe à chaleur ou d'une climatisation ?",
        answer: "Une installation bien dimensionnée et entretenue annuellement a une durée de vie moyenne de 15 à 20 ans. Un entretien régulier garantit des performances maximales et évite les surconsommations d'électricité."
    },
    {
        question: "Une pompe à chaleur ou une climatisation fait-elle du bruit à l'extérieur ?",
        answer: "Les unités extérieures modernes sont conçues pour être silencieuses. Lors de l'installation, je veille à positionner l'appareil de manière stratégique (loin des chambres et des limites de propriété) pour respecter les seuils de nuisances sonores et garantir votre confort ainsi que celui de vos voisins."
    },
    {
        question: "Est-ce qu'une pompe à chaleur consomme beaucoup d'électricité ?",
        answer: "Non, une PAC est très économe. Grâce au Coefficient de Performance (COP), elle restitue en moyenne 3 à 4 kWh de chaleur pour seulement 1 kWh d'électricité consommé. Elle permet de réduire significativement vos factures par rapport à une chaudière fioul, gaz ou à des radiateurs électriques d'ancienne génération."
    },
    {
        question: "L'entretien d'une pompe à chaleur est-il obligatoire ?",
        answer: "Oui, la réglementation impose un contrôle d'étanchéité du circuit de fluides frigorigènes et un entretien complet. Il est fortement recommandé de confier cette maintenance à un professionnel qualifié une fois par an pour préserver les performances de l'appareil et prolonger sa durée de vie."
    }
];

export default function PompeAChaleur() {
    const [chantiers, setChantiers] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    useEffect(() => {
        async function fetchDerniersChantiers() {
            try {
                const { data, error } = await supabase
                    .from('chantiers')
                    .select('*')
                    .eq('domaine', 'PAC')
                    .eq('visible_sur_site', true)
                    .order('created_at', { ascending: false });

                if (!error && data) {
                    setChantiers(data);
                }
            } catch (err) {
                console.error("Erreur lors de la récupération des chantiers :", err);
            }
        }
        fetchDerniersChantiers();
    }, []);

    // Données structurées JSON-LD optimisées pour le référencement local dans l'Eure (27)
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://www.guedes-plomberie-chauffage.fr/installation-pompe-a-chaleur#service",
                "name": "Installation, Entretien de Pompe à Chaleur & Climatisation Réversible",
                "provider": {
                    "@type": ["Plumber", "HVACBusiness"],
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
                    { "@type": "City", "name": "Bernay" },
                    { "@type": "City", "name": "Évreux" },
                    { "@type": "City", "name": "Valailles" },
                    { "@type": "City", "name": "Le Neubourg" },
                    { "@type": "City", "name": "Pont-Audemer" },
                    { "@type": "City", "name": "Brionne" },
                    { "@type": "City", "name": "Beaumont-le-Roger" },
                    { "@type": "City", "name": "Conches-en-Ouche" },
                    { "@type": "City", "name": "Serquigny" },
                    { "@type": "City", "name": "Les Andelys" },
                    { "@type": "AdministrativeArea", "name": "Eure (27)" }
                ],
                "description": "Artisan chauffagiste et frigoriste certifié RGE QualiPAC dans l'Eure (27). Spécialiste de l'installation, du remplacement et de l'entretien de pompes à chaleur Air/Eau et climatisation réversible (Air/Air).",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Services Pompe à Chaleur et Climatisation",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Installation Pompe à chaleur Air/Eau (Chauffage & Eau Chaude Sanitaire)" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Installation Climatisation Réversible & PAC Air/Air" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Entretien et Dépannage de systèmes thermiques (PAC & Clim)" } }
                    ]
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.guedes-plomberie-chauffage.fr/installation-pompe-a-chaleur#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Une pompe à chaleur peut-elle aussi servir de climatisation en été ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Oui ! La pompe à chaleur Air/Air (climatisation réversible) permet de chauffer très efficacement en hiver et de rafraîchir le logement en été. De plus, certaines PAC Air/Eau proposent un mode plancher rafraîchissant."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Combien de temps prend l'installation d'une PAC en remplacement d'une chaudière fioul ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "L'installation complète d'une pompe à chaleur Air/Eau prend généralement entre 2 et 4 jours, incluant le démontage de l'ancienne chaudière, le désembouage du réseau et la mise en service."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Faut-il conserver ses anciens radiateurs ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Dans la majorité des cas, oui ! Les pompes à chaleur Haute Température récentes s'adaptent parfaitement sur les réseaux de radiateurs en fonte ou en acier existants, sans avoir besoin de modifier toute votre tuyauterie."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Quelle est la durée de vie d'une pompe à chaleur ou d'une climatisation réversible ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Une PAC ou climatisation bien dimensionnée et entretenue annuellement a une durée de vie moyenne de 15 à 20 ans. Un entretien régulier garantit des performances maximales et évite les surconsommations d'électricité."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <SEO
                title="Installation Pompe à Chaleur & Climatisation Eure (27) | GUEDES Chauffage"
                description="Artisan chauffagiste RGE QualiPAC spécialisé en installation de pompe à chaleur (Air/Eau) et climatisation réversible (Air/Air) dans l'Eure (Bernay, Évreux). Devis gratuit sous 48h."
                canonicalUrl="https://www.guedes-plomberie-chauffage.fr/installation-pompe-a-chaleur"
                schema={schemaData}
            />

            <div className="bg-primary text-slate-100 min-h-screen">

                {/* --- SECTION HERO --- */}
                <section className="relative py-16 lg:py-24 border-b border-slate-800 bg-slate-950 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                            <div className="lg:col-span-7 space-y-6">
                                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-accent">
                                    <ShieldCheck className="w-4 h-4" /> Artisan Chauffagiste Certifié RGE QualiPAC
                                </div>

                                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                                    Spécialiste en <span className="text-accent">Pompe à Chaleur</span> & <span className="text-accent">Climatisation Réversible</span> dans l'Eure (27)
                                </h1>

                                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                                    Réussissez votre transition énergétique en remplaçant votre ancienne chaudière. La <strong>SARL Anthony GUEDES</strong>, experte en confort thermique, vous accompagne de l'étude énergétique jusqu'à la mise en service de votre système de chauffage ou de climatisation dans l'Eure et ses alentours.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                                    <Link
                                        to="/contact"
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-xl shadow-accent/25"
                                    >
                                        <span>Demander mon étude gratuite</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>

                                    <a
                                        href="tel:+33617921004"
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-xl font-semibold text-base transition-all"
                                    >
                                        <PhoneCall className="w-5 h-5 text-accent" />
                                        <span>06 17 92 10 04</span>
                                    </a>
                                </div>

                                <div className="flex items-center gap-6 pt-6 text-xs text-slate-400 border-t border-slate-800">
                                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Devis sous 48h</span>
                                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Qualification RGE pour les aides</span>
                                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Garantie Décennale</span>
                                </div>
                            </div>

                            {/* Bloc latéral d'engagement */}
                            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl space-y-6">
                                <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                                    Pourquoi installer une PAC Réversible en 2026 ?
                                </h2>
                                <ul className="space-y-4 text-sm text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <Euro className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Jusqu'à 70% d'économies</strong> sur votre facture annuelle d'énergie grâce à une haute efficacité thermique.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ThermometerSun className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Confort thermique 4 saisons</strong> : Chauffage performant l'hiver + Climatisation l'été.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Installation certifiée RGE</strong> réalisée dans le strict respect des normes des fabricants constructeurs.</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>

                {/* --- SECTION 2 : LES TYPES DE POMPES À CHALEUR --- */}
                <section className="py-20 border-b border-slate-800 bg-slate-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                            <h2 className="text-3xl font-extrabold text-white">
                                Nos solutions de <span className="text-accent">Chauffage & Climatisation haute performance</span>
                            </h2>
                            <p className="text-slate-400">
                                Chaque logement a ses spécificités. En tant que frigoriste et chauffagiste, je sélectionne le matériel le plus adapté pour chauffer vos hivers et rafraîchir vos étés avec un rendement optimal.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-slate-950 border border-slate-800 p-8 rounded-3xl space-y-6 hover:border-accent/40 transition-all">
                                <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center">
                                    <Flame className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Pompe à Chaleur Air / Eau</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Idéale pour la rénovation énergétique en remplacement d'une chaudière fioul ou gaz. La PAC Air/Eau capte les calories de l'air extérieur pour chauffer l'eau de vos radiateurs ou de votre plancher chauffant, tout en produisant votre eau chaude sanitaire.
                                </p>
                                <ul className="space-y-2 text-xs text-slate-400">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Raccordement direct sur le réseau de chauffage central</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Haute température disponible pour la rénovation</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Option plancher rafraîchissant l'été disponible</li>
                                </ul>
                            </div>

                            <div className="bg-slate-950 border border-slate-800 p-8 rounded-3xl space-y-6 hover:border-accent/40 transition-all">
                                <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center">
                                    <Snowflake className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">PAC Air / Air & Climatisation Réversible</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    La solution ultime pour maîtriser la température intérieure toute l'année. Elle diffuse une chaleur très économique en hiver et bascule en <strong>climatiseur réversible très silencieux</strong> durant les fortes chaleurs estivales.
                                </p>
                                <ul className="space-y-2 text-xs text-slate-400">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Montée en température ou rafraîchissement ultra-rapide</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Systèmes mono-split, multi-split ou gainable haut de gamme</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Purification de l'air ambiant grâce aux filtres intégrés</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 3 : ZONE D'INTERVENTION --- */}
                <section className="py-16 bg-slate-950 border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                Installation, Dépannage et Entretien PAC dans l'Eure (27)
                            </h2>
                            <p className="text-slate-400 text-sm sm:text-base">
                                J'interviens pour l'étude thermique, la pose et la maintenance de votre pompe à chaleur ou climatisation à Bernay, Évreux, Pont-Audemer et dans tout le département de l'Eure :
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-2xl space-y-6">
                                <ZoneInterventionMap showEmergency={false} showProjects={true} />

                                <div className="pt-4 border-t border-slate-800">
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {[
                                            "Bernay (27)", "Évreux (27)", "Valailles (27)",
                                            "Grand Bourgtheroulde (27)", "Le Neubourg (27)", "Pont-Audemer (27)",
                                            "Brionne (27)", "Beaumont-le-Roger (27)", "Conches-en-Ouche (27)",
                                            "Serquigny (27)", "Louviers (27)", "Vernon (27)", "Les Andelys (27)"
                                        ].map((ville, i) => (
                                            <span key={i} className="bg-slate-950 border border-slate-800 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 flex items-center gap-2 hover:border-accent/40 transition-colors">
                                                <MapPin className="w-3.5 h-3.5 text-accent" /> PAC & Clim {ville}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION NOS RÉALISATIONS --- */}
                {chantiers.length > 0 && (
                    <section className="py-20 bg-slate-900 border-b border-slate-800">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                            <div className="text-center space-y-4">
                                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold">
                                    <ImageIcon className="w-4 h-4" /> Nos réalisations
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                                    Derniers chantiers Chauffage et Climatisation
                                </h2>
                                <p className="text-slate-400 max-w-2xl mx-auto">
                                    Installation de systèmes thermodynamiques, remplacement de chaudières ou dépannage : découvrez mes interventions récentes chez mes clients dans l'Eure.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {chantiers.map((chantier) => (
                                    <article key={chantier.id} className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden flex flex-col h-full hover:border-slate-700 transition-colors shadow-lg shadow-black/20">
                                        <div
                                            onClick={() => setSelectedImage(chantier.image_url)}
                                            className="p-4 flex items-center justify-center bg-slate-950 relative group cursor-pointer"
                                            title={`Agrandir la photo du chantier de ${chantier.ville}`}
                                        >
                                            <img
                                                src={getOptimizedImageUrl(chantier.image_url)}
                                                alt={`Mise en place d'une pompe à chaleur et climatisation à ${chantier.ville}`}
                                                title={`Chantier PAC et climatisation à ${chantier.ville} dans l'Eure`}
                                                className="w-full h-auto max-h-[350px] object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg m-4">
                                                <span className="bg-slate-900/90 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border border-slate-700 shadow-lg">
                                                    <Maximize2 className="w-3.5 h-3.5 text-accent" /> Agrandir
                                                </span>
                                            </div>
                                        </div>

                                        <div className="px-5 pb-5 flex-grow flex flex-col justify-start">
                                            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                                                {chantier.texte}
                                            </p>
                                        </div>

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
                                alt="Agrandissement du chantier d'installation thermique"
                                className="max-w-full max-h-[85vh] object-contain rounded-2xl border border-slate-800 shadow-2xl"
                            />
                        </div>
                    </div>
                )}

                {/* --- SECTION 4 : FAQ --- */}
                <section className="py-20 border-b border-slate-800 bg-slate-950">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                        <div className="text-center space-y-4">
                            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold">
                                <HelpCircle className="w-4 h-4" /> Vos questions fréquentes
                            </div>
                            <h2 className="text-3xl font-extrabold text-white">
                                L'expertise Pompe à Chaleur et Climatisation Réversible
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {faqData.map((faq, index) => {
                                const isOpen = openFaqIndex === index;
                                return (
                                    <div
                                        key={index}
                                        className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300"
                                    >
                                        <button
                                            onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-slate-800/50 transition-colors"
                                        >
                                            <h3 className="font-bold text-white text-lg pr-4">{faq.question}</h3>
                                            <ChevronDown
                                                className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        <div
                                            className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${isOpen ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            <p className="text-slate-300 text-sm leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* --- BANNIÈRE CTA FINAL --- */}
                <section id="contact" className="py-16 bg-accent text-white text-center">
                    <div className="max-w-4xl mx-auto px-4 space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-extrabold">
                            Prêt à optimiser votre confort thermique en toutes saisons ?
                        </h2>
                        <p className="text-slate-100 text-base">
                            Contactez-moi pour obtenir une étude énergétique et un devis gratuit sous 48h pour votre pompe à chaleur ou climatisation dans l'Eure.
                        </p>
                        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="tel:+33617921004"
                                className="bg-slate-950 hover:bg-slate-900 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all"
                            >
                                Appeler le 06 17 92 10 04
                            </a>
                            <Link
                                to="/"
                                className="bg-white hover:bg-slate-100 text-slate-950 font-bold px-8 py-4 rounded-xl text-lg transition-all"
                            >
                                Retour à l'accueil
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}