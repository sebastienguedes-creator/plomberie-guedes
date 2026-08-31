import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import {
    AlertTriangle,
    PhoneCall,
    Droplets,
    Flame,
    Wrench,
    Clock,
    MapPin,
    ShieldCheck,
    HelpCircle,
    ChevronDown
} from 'lucide-react';

// Chargement paresseux de la carte pour optimiser le LCP et le TBT[cite: 12]
const ZoneInterventionMap = lazy(() => import("../components/ZoneInterventionMap"));

// --- DONNÉES FAQ
const faqData = [
    {
        question: "Que faire en cas de fuite d'eau importante avant l'arrivée du plombier ?",
        answer: "Coupez immédiatement l'alimentation générale en eau (généralement située près du compteur) pour limiter les dégâts, puis contactez-moi en urgence."
    },
    {
        question: "Comment réagir face à une panne totale de chauffage en hiver ?",
        answer: "Vérifiez l'alimentation électrique de votre équipement et la pression du circuit. Si le problème persiste, contactez-moi pour un diagnostic rapide."
    },
    {
        question: "Intervenez-vous rapidement pour les dépannages urgents ?",
        answer: "Oui, j'assure une prise en charge prioritaire pour les dépannages urgents dans un rayon de 30 km autour de Valailles (Bernay, Évreux, Lisieux, Louviers, Pont-Audemer, etc.)."
    }
];

export default function UrgenceDepannage() {
    // État pour gérer l'ouverture unique de l'accordéon FAQ[cite: 12]
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    // États et Refs pour l'Intersection Observer (Lazy loading map)
    const [isMapInView, setIsMapInView] = useState(false);
    const mapRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsMapInView(true);
                observer.disconnect();
            }
        }, { rootMargin: '300px' }); // Déclenche 300px avant visibilité

        if (mapRef.current) observer.observe(mapRef.current);
        return () => observer.disconnect();
    }, []);

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "EmergencyService",
                "@id": "https://www.guedes-plomberie-chauffage.fr/urgence-depannage-plomberie#service",
                "name": "Urgence et Dépannage Plomberie Chauffage - SARL Anthony GUEDES",
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
                        "geoRadius": "30000" // 30 km autour de Valailles pour l'urgence[cite: 12]
                    },
                    { "@type": "AdministrativeArea", "name": "Eure" },
                    { "@type": "City", "name": "Bernay" },
                    { "@type": "City", "name": "Évreux" },
                    { "@type": "City", "name": "Lisieux" },
                    { "@type": "City", "name": "Elbeuf" },
                    { "@type": "City", "name": "Louviers" },
                    { "@type": "City", "name": "Pont-Audemer" },
                    { "@type": "City", "name": "Brionne" },
                    { "@type": "City", "name": "Beaumont-le-Roger" },
                    { "@type": "City", "name": "Conches-en-Ouche" },
                    { "@type": "City", "name": "Le Neubourg" }
                ],
                "description": "Dépannage d'urgence plomberie et chauffage. Fuite d'eau, panne de chauffage, canalisation bouchée, ballon d'eau chaude HS dans un rayon de 30 km."
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.guedes-plomberie-chauffage.fr/urgence-depannage-plomberie#faq",
                "mainEntity": faqData.map((faq) => ({
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
        <main>
            <SEO
                title="Urgence Plombier Chauffagiste : Dépannage Rapide | GUEDES"
                description="Fuite d'eau ? Panne de chauffage ? Dépannage urgent en plomberie et chauffage. Intervention rapide de la SARL Anthony GUEDES (rayon 30km)."
                canonicalUrl="https://www.guedes-plomberie-chauffage.fr/urgence-depannage-plomberie"
                schema={schemaData}
            />

            <div className="bg-slate-950 text-slate-100 min-h-screen">
                {/* HERO SECTION - AXÉE SUR L'ACTION IMMÉDIATE[cite: 12] */}
                <section className="relative py-16 lg:py-24 border-b border-slate-800 bg-slate-950">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7 space-y-6">
                                <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-red-500">
                                    <AlertTriangle className="w-4 h-4 animate-pulse" aria-hidden="true" /> Intervention Rapide (30 km)
                                </div>
                                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                                    Dépannage & Urgence <br />
                                    <span className="text-red-500">Plomberie Chauffage</span>
                                </h1>
                                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                                    Une fuite importante, un dégât des eaux imminent ou un chauffage qui tombe en panne en plein hiver ? La <strong>SARL Anthony GUEDES</strong> intervient rapidement pour sécuriser votre installation et réparer la panne.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                                    <a
                                        href="tel:+33617921004"
                                        aria-label="Appeler le service d'urgence au 06 17 92 10 04"
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-5 rounded-xl font-bold text-lg transition-all shadow-xl shadow-red-600/20 animate-bounce focus-visible:ring-4 focus-visible:ring-red-500/50 outline-none"
                                    >
                                        <PhoneCall className="w-6 h-6" aria-hidden="true" />
                                        <span>Appeler le 06 17 92 10 04</span>
                                    </a>
                                </div>
                            </div>

                            <aside className="lg:col-span-5 bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6 shadow-2xl">
                                <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                                    Mes engagements Dépannage
                                </h2>
                                <ul className="space-y-4 text-sm text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
                                        <span><strong>Réactivité :</strong> Prise en charge prioritaire de votre appel d'urgence pour limiter les dégâts.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Wrench className="w-5 h-5 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
                                        <span><strong>Diagnostic précis :</strong> Recherche de panne ou de fuite experte avant toute intervention.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ShieldCheck className="w-5 h-5 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
                                        <span><strong>Transparence :</strong> Explication du problème et validation des réparations sans mauvaise surprise.</span>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </section>

                {/* MOTIFS D'INTERVENTIONS[cite: 12] */}
                <section className="py-16 bg-slate-900 border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                        <header className="text-center space-y-4">
                            <h2 className="text-3xl font-bold text-white">Vos problèmes, mes solutions immédiates</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                                Expertise multi-marques pour la réparation de toutes vos installations sanitaires et thermiques.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <article className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-red-500/50 transition-colors">
                                <div className="bg-red-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-red-500" aria-hidden="true">
                                    <Droplets className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white">Recherche et réparation de fuites</h3>
                                <p className="text-sm text-slate-400">
                                    Fuite sur tuyauterie (cuivre, PER, multicouche), joints défectueux, robinetterie qui fuit, chasse d'eau qui coule.
                                </p>
                            </article>

                            <article className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-red-500/50 transition-colors">
                                <div className="bg-red-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-red-500" aria-hidden="true">
                                    <Flame className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white">Panne de Chauffage / PAC</h3>
                                <p className="text-sm text-slate-400">
                                    Pompe à chaleur en défaut, chaudière qui ne démarre plus, radiateurs froids, perte de pression du réseau.
                                </p>
                            </article>

                            <article className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-red-500/50 transition-colors">
                                <div className="bg-red-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-red-500" aria-hidden="true">
                                    <Wrench className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white">Débouchage & Engorgement</h3>
                                <p className="text-sm text-slate-400">
                                    WC bouchés, évier, lavabo ou douche bloqués. Intervention rapide pour restaurer un écoulement normal.
                                </p>
                            </article>

                            <article className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-red-500/50 transition-colors">
                                <div className="bg-red-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-red-500" aria-hidden="true">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white">Panne d'Eau Chaude</h3>
                                <p className="text-sm text-slate-400">
                                    Ballon d'eau chaude (cumulus) percé, chauffe-eau thermodynamique en panne, résistance HS ou disjonction.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* ZONES D'INTERVENTION avec carte optimisée[cite: 12] */}
                <section className="py-16 bg-slate-950 border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                        <header className="text-center space-y-4 max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 border border-red-500/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                                <MapPin className="w-4 h-4" aria-hidden="true" /> Zone d'intervention prioritaire
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                Secteur d'intervention en Dépannage (30 km)
                            </h2>
                            <p className="text-slate-400 text-sm sm:text-base">
                                Intervention rapide pour vos urgences en plomberie et chauffage autour de Valailles et ses environs :
                            </p>
                        </header>

                        {/* ✅ CORRECTION CLS & Responsive : Suppression de la hauteur fixe parent pour éviter l'écrasement sur mobile */}
                        <div className="max-w-4xl mx-auto" ref={mapRef}>
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-2xl flex flex-col gap-4">
                                <div className="h-[380px] sm:h-[450px] w-full rounded-xl overflow-hidden bg-slate-950/50">
                                    {isMapInView ? (
                                        <Suspense fallback={<div className="w-full h-full animate-pulse bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 text-sm" role="status">Chargement de la zone d'intervention...</div>}>
                                            <ZoneInterventionMap showEmergency={true} showProjects={false} />
                                        </Suspense>
                                    ) : (
                                        <div className="w-full h-[380px] sm:h-[450px] bg-slate-800 rounded-xl" aria-hidden="true"></div>
                                    )}
                                </div>
                                
                                {/* Liste des villes en dessous */}
                                <div className="pt-3 border-t border-slate-800">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 text-center">
                                        Principales communes desservies en urgence :
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-2.5">
                                        {[
                                            "Bernay", "Évreux", "Brionne", "Beaumont-le-Roger",
                                            "Conches-en-Ouche", "Le Neubourg", "Elbeuf", "Louviers",
                                            "Lisieux", "Pont-Audemer"
                                        ].map((ville, i) => (
                                            <span key={i} className="bg-slate-950 border border-slate-800 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 flex items-center gap-2 hover:border-red-500/40 transition-colors">
                                                <MapPin className="w-3.5 h-3.5 text-red-500" aria-hidden="true" /> {ville}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION FAQ (ACCESSIBLE)[cite: 12] --- */}
                <section className="py-20 border-b border-slate-800">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                        <header className="text-center space-y-4">
                            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-1.5 rounded-full text-xs font-bold">
                                <HelpCircle className="w-4 h-4" aria-hidden="true" /> Vos questions fréquentes
                            </div>
                            <h2 className="text-3xl font-extrabold text-white">
                                Tout savoir sur le dépannage d'urgence
                            </h2>
                        </header>

                        <div className="space-y-4">
                            {faqData.map((faq, index) => {
                                const isOpen = openFaqIndex === index;
                                const faqId = `faq-${index}`;
                                return (
                                    <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-colors hover:border-slate-700">
                                        <h3 className="m-0 p-0">
                                            <button
                                                type="button"
                                                onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                                                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-500"
                                                aria-expanded={isOpen}
                                                aria-controls={`${faqId}-answer`}
                                                id={`${faqId}-question`}
                                            >
                                                <span className="font-bold text-white text-lg pr-8">
                                                    {faq.question}
                                                </span>
                                                <ChevronDown 
                                                    className={`w-6 h-6 text-red-500 shrink-0 transition-transform duration-300 ${
                                                        isOpen ? "rotate-180" : ""
                                                    }`} 
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </h3>
                                        
                                        {/* Transition fluide via CSS Grid pour la hauteur automatique */}
                                        <div 
                                            id={`${faqId}-answer`}
                                            role="region"
                                            aria-labelledby={`${faqId}-question`}
                                            className={`grid transition-all duration-300 ease-in-out ${
                                                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                            }`}
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

                {/* CTA FINAL[cite: 12] */}
                <section className="py-16 bg-red-600 text-white text-center">
                    <div className="max-w-4xl mx-auto px-4 space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-extrabold">Une urgence ? Ne laissez pas la situation s'aggraver.</h2>
                        <p className="text-red-100 text-lg">Contactez-moi immédiatement pour une mise en sécurité et un dépannage rapide dans un rayon de 30 km.</p>
                        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                            <a 
                                href="tel:+33617921004" 
                                aria-label="Appeler immédiatement le 06 17 92 10 04"
                                className="bg-slate-950 hover:bg-slate-900 text-white font-bold px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2 focus-visible:ring-4 focus-visible:ring-slate-900/50 outline-none transition-colors"
                            >
                                <PhoneCall className="w-5 h-5" aria-hidden="true" /> 06 17 92 10 04
                            </a>
                            <Link 
                                to="/" 
                                className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors focus-visible:ring-4 focus-visible:ring-white/50 outline-none"
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