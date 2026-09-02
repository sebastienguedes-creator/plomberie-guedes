import { useState, useEffect, useRef, lazy, Suspense } from 'react';
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
    Home,
    Image as ImageIcon,
    X,
    Maximize2,
    ChevronDown
} from 'lucide-react';

// Chargement paresseux de la carte
const ZoneInterventionMap = lazy(() => import("../components/ZoneInterventionMap"));

// --- UTILITAIRE IMAGE CLOUDINARY (Optimisé pour le CLS et la performance) ---
const getOptimizedImageUrl = (url, width = 800, height = null, crop = 'limit') => {
    if (!url) return '';
    if (crop === 'fill' && height) {
        return url.replace('/upload/', `/upload/c_fill,g_auto,w_${width},h_${height},f_auto,q_auto/`);
    }
    return url.replace('/upload/', `/upload/c_limit,w_${width},f_auto,q_auto/`);
};

// --- DONNÉES FAQ ---
const faqData = [
    {
        question: "Pourquoi installer une VMC dans son logement ?",
        answer: "La VMC permet de renouveler l'air intérieur, d'évacuer l'humidité excessive, de prévenir l'apparition de moisissures et d'améliorer la qualité de l'air que vous respirez."
    },
    {
        question: "Quelle est la différence entre une VMC simple flux et double flux ?",
        answer: "La VMC simple flux extrait l'air vicié en faisant entrer de l'air neuf par des entrées d'air. La VMC double flux récupère quant à elle les calories de l'air extrait pour préchauffer l'air entrant, offrant ainsi un meilleur confort thermique et des économies d'énergie."
    },
    {
        question: "À quelle fréquence faut-il entretenir sa VMC ?",
        answer: "Il est recommandé de nettoyer les bouches d'extraction tous les 3 à 6 mois et de faire réaliser un entretien complet du bloc moteur et des gaines par un professionnel tous les 2 à 3 ans."
    }
];

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": ["LocalBusiness", "Plumber", "HVACBusiness"],
            "@id": "https://www.guedes-plomberie-chauffage.fr/#localbusiness",
            "name": "SARL Anthony GUEDES",
            "url": "https://www.guedes-plomberie-chauffage.fr",
            "telephone": "+33617921004",
            "email": "anthonyguedes.plomberie@gmail.com",
            "priceRange": "€€",
            "logo": {
                "@type": "ImageObject",
                "@id": "https://www.guedes-plomberie-chauffage.fr/#logo",
                "url": "https://www.guedes-plomberie-chauffage.fr/Logo.webp"
            },
            "image": {
                "@type": "ImageObject",
                "@id": "https://www.guedes-plomberie-chauffage.fr/#image",
                "url": "https://www.guedes-plomberie-chauffage.fr/Camion_SARL_Anthony_GUEDES.webp"
            },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "2A Rue du Ravin",
                "addressLocality": "Valailles",
                "postalCode": "27300",
                "addressRegion": "Normandie",
                "addressCountry": "FR"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 49.122232,
                "longitude": 0.623779
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "08:00",
                    "closes": "19:00"
                }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.guedes-plomberie-chauffage.fr/vmc-ventilation/#webpage",
            "url": "https://www.guedes-plomberie-chauffage.fr/vmc-ventilation",
            "name": "Installation & Entretien VMC Ventilation | GUEDES",
            "description": "Améliorez la qualité de votre air intérieur. Installation et entretien de VMC simple flux et double flux par la SARL Anthony GUEDES en Normandie.",
            "inLanguage": "fr-FR",
            "about": {
                "@id": "https://www.guedes-plomberie-chauffage.fr/vmc-ventilation/#service"
            },
            "primaryImageOfPage": {
                "@type": "ImageObject",
                "url": "https://www.guedes-plomberie-chauffage.fr/Logo.webp"
            }
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.guedes-plomberie-chauffage.fr/vmc-ventilation/#breadcrumb",
            "isPartOf": {
                "@id": "https://www.guedes-plomberie-chauffage.fr/vmc-ventilation/#webpage"
            },
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Accueil",
                    "item": "https://www.guedes-plomberie-chauffage.fr/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "VMC & Ventilation",
                    "item": "https://www.guedes-plomberie-chauffage.fr/vmc-ventilation"
                }
            ]
        },
        {
            "@type": "Service",
            "@id": "https://www.guedes-plomberie-chauffage.fr/vmc-ventilation/#service",
            "name": "Installation et Entretien VMC Ventilation",
            "serviceType": "Installation, Entretien et Dépannage de Ventilation Mécanique Contrôlée (VMC Simple et Double Flux)",
            "description": "Amélioration de la qualité de l'air intérieur : installation complète, maintenance et dépannage de VMC simple flux et double flux pour les particuliers et professionnels.",
            "provider": {
                "@id": "https://www.guedes-plomberie-chauffage.fr/#localbusiness"
            },
"areaServed": [
                {
                    "@type": "GeoCircle",
                    "geoMidpoint": {
                        "@type": "GeoCoordinates",
                        "latitude": 49.122232,
                        "longitude": 0.623779
                    },
                    "geoRadius": "150000"
                },
                {
                    "@type": "AdministrativeArea",
                    "name": "Normandie"
                },
                {
                    "@type": "City",
                    "name": "Évreux"
                },
                {
                    "@type": "City",
                    "name": "Rouen"
                },
                {
                    "@type": "City",
                    "name": "Le Havre"
                },
                {
                    "@type": "City",
                    "name": "Caen"
                },
                {
                    "@type": "City",
                    "name": "Alençon"
                },
                {
                    "@type": "City",
                    "name": "Chartres"
                },
                {
                    "@type": "City",
                    "name": "Mantes-la-Jolie"
                }
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.guedes-plomberie-chauffage.fr/vmc-ventilation/#faq",
            "isPartOf": {
                "@id": "https://www.guedes-plomberie-chauffage.fr/vmc-ventilation/#webpage"
            },
            "mainEntity": faqData.map(faq => ({
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

export default function VmcVentilation() {
    const [chantiers, setChantiers] = useState([]);
    const [isLoadingChantiers, setIsLoadingChantiers] = useState(true);
    const [selectedChantier, setSelectedChantier] = useState(null);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const [isMapInView, setIsMapInView] = useState(false);
    const [isChantiersInView, setIsChantiersInView] = useState(false);
    const mapRef = useRef(null);
    const chantiersRef = useRef(null);

    // Observer pour le chargement paresseux de la carte
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsMapInView(true);
                observer.disconnect();
            }
        }, { rootMargin: '300px' });

        if (mapRef.current) observer.observe(mapRef.current);
        return () => observer.disconnect();
    }, []);

    // Observer pour le chargement paresseux des chantiers
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsChantiersInView(true);
                observer.disconnect();
            }
        }, { rootMargin: '300px' });

        if (chantiersRef.current) observer.observe(chantiersRef.current);
        return () => observer.disconnect();
    }, []);

    // Fetch asynchrone des chantiers
    useEffect(() => {
        if (!isChantiersInView) return;

        let isMounted = true;
        async function fetchDerniersChantiers() {
            try {
                const { createClient } = await import('@supabase/supabase-js');
                const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

                const { data, error } = await supabase
                    .from('chantiers')
                    .select('*')
                    .eq('domaine', 'VMC')
                    .eq('visible_sur_site', true)
                    .order('created_at', { ascending: false })
                    .limit(6);

                if (!error && isMounted) {
                    let loadedChantiers = data || [];

                    // Comble avec des placeholders
                    while (loadedChantiers.length < 6) {
                        loadedChantiers.push({
                            id: `placeholder-${loadedChantiers.length}`,
                            isEmpty: true
                        });
                    }
                    setChantiers(loadedChantiers);
                }
            } catch (err) {
                console.error("Erreur :", err);
            } finally {
                if (isMounted) setIsLoadingChantiers(false);
            }
        }
        fetchDerniersChantiers();
        return () => { isMounted = false; };
    }, [isChantiersInView]);

    // Fermeture de la modale avec la touche Echap
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSelectedChantier(null);
            }
        };
        if (selectedChantier) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedChantier]);

    return (
        <main>
            <SEO
                title="Installation & Entretien VMC Ventilation | GUEDES"
                description="Améliorez la qualité de votre air intérieur. Installation et entretien de VMC simple flux et double flux par la SARL Anthony GUEDES en Normandie (Eure, Seine-Maritime, Calvados, Orne)."
                canonicalUrl="https://www.guedes-plomberie-chauffage.fr/vmc-ventilation"
                schema={schemaData}
            />

            <div className="bg-slate-950 text-slate-100 min-h-screen">
                {/* HERO SECTION */}
                <section className="relative py-16 lg:py-24 border-b border-slate-800 bg-slate-950 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7 space-y-6">
                                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-accent">
                                    <Wind className="w-4 h-4" aria-hidden="true" /> Qualité d'Air & Ventilation
                                </div>
                                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                                    Installation & Entretien de <br />
                                    <span className="text-accent">VMC et Ventilation</span> en Normandie
                                </h1>
                                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                                    Lutter contre l'humidité, éliminer les polluants intérieurs et optimiser votre confort thermique : confiez la pose ou la maintenance de votre VMC à un professionnel qualifié sur un large rayon en Normandie.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                                    <Link
                                        to="/contact"
                                        aria-label="Demander un devis pour votre ventilation"
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-xl shadow-accent/25 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-950"
                                    >
                                        <span>Devis ventilation gratuit</span>
                                        <ArrowRight className="w-5 h-5" aria-hidden="true" />
                                    </Link>
                                    <a
                                        href="tel:+33617921004"
                                        aria-label="Appeler la SARL Anthony Guedes au 06 17 92 10 04"
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-xl font-semibold text-base transition-all focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                                    >
                                        <PhoneCall className="w-5 h-5 text-accent" aria-hidden="true" />
                                        <span>06 17 92 10 04</span>
                                    </a>
                                </div>
                            </div>

                            <aside className="lg:col-span-5 bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl space-y-6">
                                <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                                    Pourquoi une bonne VMC ?
                                </h2>
                                <ul className="space-y-4 text-sm text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                                        <span><strong>Anti-humidité :</strong> Prévention efficace de la condensation et des moisissures sur les murs.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Wind className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                                        <span><strong>Air sain :</strong> Évacuation des polluants intérieurs, COV et odeurs du quotidien.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Home className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                                        <span><strong>Économies d'énergie :</strong> Optimisation des flux d'air pour réduire les pertes de chauffage.</span>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </section>

                {/* PRESTATIONS VMC */}
                <section className="py-16 bg-slate-900 border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                        <header className="text-center space-y-4">
                            <h2 className="text-3xl font-bold text-white">Nos solutions de ventilation sur-mesure</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                                De l'étude de votre habitat à la mise en service, profitez d'une installation conforme et performante.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <article className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center text-accent">
                                    <Wind className="w-6 h-6" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-bold text-white">VMC Simple Flux</h3>
                                <p className="text-sm text-slate-400">
                                    Autoréglable ou hygroréglable, elle extrait l'air vicié des pièces humides (cuisine, sdb, wc) en régulant le débit selon l'humidité.
                                </p>
                            </article>

                            <article className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center text-accent">
                                    <Home className="w-6 h-6" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-bold text-white">VMC Double Flux</h3>
                                <p className="text-sm text-slate-400">
                                    Récupère les calories de l'air sortant pour réchauffer l'air neuf entrant. Confort thermique accru et économies significatives.
                                </p>
                            </article>

                            <article className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center text-accent">
                                    <Wrench className="w-6 h-6" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Entretien & Dépannage</h3>
                                <p className="text-sm text-slate-400">
                                    Nettoyage des réseaux, contrôle du caisson moteur, remplacement des filtres et diagnostic en cas de panne ou de nuisances sonores.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 3 : ZONE D'INTERVENTION LOCALE (MAP + VILLES) --- */}
                <section ref={mapRef} className="py-16 bg-slate-950 border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                        <header className="text-center space-y-4 max-w-3xl mx-auto">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                Secteur d'intervention VMC & Ventilation
                            </h2>
                            <p className="text-slate-400 text-sm sm:text-base">
                                J'interviens pour l'installation, l'entretien et le dépannage de vos systèmes de ventilation sur une grande partie de la Normandie[cite: 12] :
                            </p>
                        </header>

                        {/* ✅ CORRECTION CLS & Responsive : Suppression de la hauteur fixe parent pour éviter l'écrasement sur mobile */}
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-2xl flex flex-col gap-4">
                                <div className="h-[380px] sm:h-[450px] w-full overflow-hidden rounded-xl">
                                    {isMapInView ? (
                                        <Suspense fallback={<div className="h-full w-full bg-slate-800/50 flex items-center justify-center text-slate-400 text-sm animate-pulse" role="status">Chargement de la zone d'intervention...</div>}>
                                            <ZoneInterventionMap showEmergency={false} showProjects={true} />
                                        </Suspense>
                                    ) : (
                                        <div className="h-[380px] sm:h-[450px] w-full bg-slate-900"></div>
                                    )}
                                </div>

                                <div className="pt-3 border-t border-slate-800">
                                    <div className="flex flex-wrap justify-center gap-2.5">
                                        {[
                                            "Évreux (27)", "Bernay (27)", "Les Andelys (27)",
                                            "Rouen (76)", "Le Havre (76)", "Dieppe (76)",
                                            "Caen (14)", "Lisieux (14)", "Bayeux (14)",
                                            "Alençon (61)", "Argentan (61)", "Mortagne-au-Perche (61)"
                                        ].map((lieu, i) => (
                                            <span key={i} className="bg-slate-950 border border-slate-800 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-300 flex items-center gap-2 hover:border-accent/40 transition-colors">
                                                <MapPin className="w-3.5 h-3.5 text-accent" aria-hidden="true" /> VMC {lieu}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION DERNIERS CHANTIERS --- */}
                {/* ✅ CORRECTION CLS : Section toujours présente avec un min-height fixe */}
                <section ref={chantiersRef} className="py-20 bg-slate-900 border-b border-slate-800 min-h-[800px]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                        <header className="text-center space-y-4">
                            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold">
                                <ImageIcon className="w-4 h-4" aria-hidden="true" /> Nos réalisations
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                                Dernières interventions en ventilation
                            </h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">
                                Installation, dépannage ou entretien de VMC : découvrez mes derniers chantiers réalisés.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {isLoadingChantiers ? (
                                /* Skeletons de chargement pour fixer le layout */
                                [1, 2, 3, 4, 5, 6].map((n) => (
                                    <div key={n} className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden flex flex-col h-[520px] animate-pulse shadow-lg">
                                        <div className="p-4 bg-slate-950">
                                            <div className="w-full aspect-[4/3] bg-slate-800 rounded-lg"></div>
                                        </div>
                                        <div className="px-5 pb-5 space-y-3 flex-grow">
                                            <div className="h-4 bg-slate-800 rounded w-full"></div>
                                            <div className="h-4 bg-slate-800 rounded w-4/5"></div>
                                        </div>
                                        <div className="p-4 flex items-center justify-between bg-slate-900/80 border-t border-slate-800">
                                            <div className="h-4 bg-slate-800 rounded w-28"></div>
                                            <div className="h-6 bg-slate-800 rounded w-24"></div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                /* Affichage des vrais chantiers */
                                chantiers.map((chantier) => {
                                    if (chantier.isEmpty) {
                                        return (
                                            <article key={chantier.id} className="bg-slate-950/40 border border-slate-800/40 border-dashed rounded-2xl overflow-hidden flex flex-col h-[520px] items-center justify-center p-6 text-center shadow-sm">
                                                <div className="w-12 h-12 bg-slate-900/60 rounded-2xl flex items-center justify-center text-slate-600 mb-4">
                                                    <ImageIcon className="w-6 h-6" aria-hidden="true" />
                                                </div>
                                                <p className="text-slate-400 text-sm font-semibold mb-1">Nouveau chantier à venir</p>
                                                <p className="text-slate-500 text-xs max-w-[220px]">
                                                    Nos réalisations en ventilation s'enrichissent régulièrement.
                                                </p>
                                            </article>
                                        );
                                    }

                                    return (
                                        <article key={chantier.id} className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden flex flex-col h-[520px] hover:border-slate-700 transition-colors shadow-lg shadow-black/20">
                                            {/* ✅ CORRECTION CLS : Bouton explicite, aspect-[4/3], dimensions forcées */}
                                            <button
                                                type="button"
                                                onClick={() => setSelectedChantier(chantier)}
                                                className="p-4 flex items-center justify-center bg-slate-950 relative group cursor-pointer w-full border-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
                                                aria-label={`Agrandir la photo et lire les détails de l'installation de VMC à ${chantier.ville}`}
                                            >
                                                <img
                                                    src={getOptimizedImageUrl(chantier.image_url, 400, 300, 'fill')}
                                                    srcSet={`${getOptimizedImageUrl(chantier.image_url, 400, 300, 'fill')} 400w, ${getOptimizedImageUrl(chantier.image_url, 800, 600, 'fill')} 800w`}
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    alt={`Installation ou entretien de VMC par l'entreprise Guedes Plomberie à ${chantier.ville}`}
                                                    title={`Chantier de ventilation à ${chantier.ville} en Normandie`}
                                                    className="w-full aspect-[4/3] object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                                                    loading="lazy"
                                                    decoding="async"
                                                    width="400"
                                                    height="300"
                                                />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg m-4">
                                                    <span className="bg-slate-900/90 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border border-slate-700 shadow-lg">
                                                        <Maximize2 className="w-3.5 h-3.5 text-accent" aria-hidden="true" /> Agrandir & lire
                                                    </span>
                                                </div>
                                            </button>

                                            <div className="px-5 pb-5 flex-grow flex flex-col justify-start">
                                                {/* Conteneur défilant pour éviter que le texte ne casse la hauteur de la carte */}
                                                <div className="h-36 overflow-y-auto pr-1">
                                                    <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                                                        {chantier.texte}
                                                    </p>
                                                </div>
                                            </div>

                                            <footer className="p-4 flex items-center justify-between bg-slate-900/80 border-t border-slate-800 mt-auto">
                                                <span className="text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-1.5 line-clamp-1">
                                                    <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" /> {chantier.ville}
                                                </span>
                                                <span className="text-xs font-medium text-slate-400 bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800 shrink-0">
                                                    <time dateTime={chantier.created_at}>
                                                        {new Date(chantier.created_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                                    </time>
                                                </span>
                                            </footer>
                                        </article>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </section>

                {/* --- MODALE DÉTAILLÉE : PHOTO + TEXTE COMPLET --- */}
                {selectedChantier && (
                    <div
                        onClick={() => setSelectedChantier(null)}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Aperçu détaillé du chantier de VMC"
                        tabIndex="-1"
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedChantier(null)}
                            className="absolute top-6 right-6 bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full border border-slate-700 transition-colors shadow-xl z-20 focus:outline-none focus:ring-2 focus:ring-accent"
                            aria-label="Fermer l'aperçu"
                            autoFocus
                        >
                            <X className="w-6 h-6" aria-hidden="true" />
                        </button>

                        <div
                            className="relative max-w-5xl max-h-[90vh] w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="lg:w-1/2 p-6 bg-slate-950 flex items-center justify-center">
                                <img
                                    src={getOptimizedImageUrl(selectedChantier.image_url, 1200)}
                                    alt={`Installation ou entretien de VMC à ${selectedChantier.ville}`}
                                    className="max-w-full max-h-[75vh] object-contain rounded-xl border border-slate-800"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>

                            <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[75vh] lg:max-h-[90vh]">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                                        <span className="text-sm font-bold text-accent uppercase tracking-wider flex items-center gap-2">
                                            <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" /> {selectedChantier.ville}
                                        </span>
                                        <span className="text-xs font-medium text-slate-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                                            {new Date(selectedChantier.created_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                        </span>
                                    </div>

                                    <div className="text-slate-200 text-base leading-relaxed whitespace-pre-wrap">
                                        {selectedChantier.texte}
                                    </div>
                                </div>

                                <div className="pt-6 mt-6 border-t border-slate-800 flex justify-end">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedChantier(null)}
                                        className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                                    >
                                        Fermer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- SECTION FAQ (ACCORDÉON SANS CLS GRÂCE À CSS GRID) --- */}
                <section className="py-20 border-b border-slate-800 bg-slate-950">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                        <header className="text-center space-y-4">
                            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold">
                                <HelpCircle className="w-4 h-4" aria-hidden="true" /> Vos questions fréquentes
                            </div>
                            <h2 className="text-3xl font-extrabold text-white">
                                Tout savoir sur la ventilation de votre habitat
                            </h2>
                        </header>

                        <div className="space-y-4">
                            {faqData.map((faq, index) => {
                                const isOpen = openFaqIndex === index;
                                const faqId = `faq-${index}`;
                                return (
                                    <div
                                        key={index}
                                        className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-colors hover:border-slate-700"
                                    >
                                        <h3 className="m-0 p-0">
                                            <button
                                                type="button"
                                                onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                                                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
                                                aria-expanded={isOpen}
                                                aria-controls={`${faqId}-answer`}
                                                id={`${faqId}-question`}
                                            >
                                                <span className="font-bold text-white text-lg pr-8">{faq.question}</span>
                                                <ChevronDown
                                                    className={`w-6 h-6 text-accent shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </h3>

                                        <div
                                            id={`${faqId}-answer`}
                                            role="region"
                                            aria-labelledby={`${faqId}-question`}
                                            className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                                            aria-hidden={!isOpen}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="px-6 pb-6 text-slate-300 text-sm leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA FINAL */}
                <section id="contact" className="py-16 bg-accent text-white text-center">
                    <div className="max-w-4xl mx-auto px-4 space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-extrabold">Besoin d'améliorer la ventilation de votre maison ?</h2>
                        <p className="text-slate-100 text-base">Contactez-moi pour discuter de votre projet d'installation ou d'entretien de VMC sur une grande partie de la Normandie.</p>
                        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="tel:+33617921004"
                                className="bg-slate-950 hover:bg-slate-900 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all focus:ring-4 focus:ring-slate-900/50"
                            >
                                06 17 92 10 04
                            </a>
                            <Link
                                to="/"
                                className="bg-white hover:bg-slate-100 text-slate-950 font-bold px-8 py-4 rounded-xl text-lg transition-all focus:ring-4 focus:ring-white/50"
                            >
                                Retour à l'accueil
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}