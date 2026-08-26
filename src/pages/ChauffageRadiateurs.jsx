import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import {
    Flame,
    PhoneCall,
    ArrowRight,
    ShieldCheck,
    Thermometer,
    MapPin,
    Wrench,
    Zap,
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
    // c_limit garde les proportions d'origine tout en limitant la taille pour une fluidité totale
    return url.replace('/upload/', '/upload/c_limit,w_1000,h_1000,f_auto,q_auto/');
};

// --- DONNÉES FAQ ---
const faqData = [
    {
        question: "Pourquoi et quand faut-il désembouer son circuit de chauffage central ?",
        answer: "Le désembouage permet d'éliminer les boues (oxydes métalliques et tartre) qui s'accumulent dans les tuyaux et radiateurs. Il est recommandé de le réaliser tous les 5 à 10 ans, ou impérativement avant l'installation d'une nouvelle chaudière ou d'une pompe à chaleur pour garantir un rendement optimal."
    },
    {
        question: "Comment savoir si un radiateur a besoin d'être purgé ?",
        answer: "Si votre radiateur chauffe en bas mais reste froid ou tiède sur le dessus, cela signifie que de l'air s'est infiltré dans le circuit. Une simple purge à l'aide d'une clé de purge permet de chasser l'air et de retrouver une diffusion homogène de la chaleur."
    },
    {
        question: "Est-il possible de remplacer un vieux radiateur par un modèle moderne ?",
        answer: "Tout à fait. Je peux remplacer vos radiateurs existants (fonte, acier ou aluminium) par des modèles plus récents, plus performants et mieux adaptés à la configuration de vos pièces, tout en adaptant la tuyauterie si nécessaire."
    }
];

export default function ChauffageRadiateurs() {
    // État pour stocker les chantiers
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
                    .eq('domaine', 'Chauffage') // Filtre strict sur le domaine Chauffage
                    .eq('visible_sur_site', true)
                    .order('created_at', { ascending: false })
                    .limit(6); // Les 6 derniers max pour cohérence

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
                "@id": "https://www.guedes-plomberie-chauffage.fr/chauffage-central-radiateurs#service",
                "name": "Installation, Remplacement de Radiateurs et Dépannage Chauffage Central",
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
                "description": "Pose et remplacement de radiateurs eau chaude et électriques, désembouage de circuit de chauffage central, modification de tuyauterie sur un large secteur normand. J'interviens pour votre chauffage."
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.guedes-plomberie-chauffage.fr/chauffage-central-radiateurs#faq",
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
            <SEO
                title="Chauffage Central & Radiateurs Normandie : Départements & Villes"
                description="Chauffagiste en Normandie (Eure, Seine-Maritime, Calvados, Orne) : pose et remplacement de radiateurs, désembouage. J'interviens dans un large rayon autour de Valailles."
                canonicalUrl="https://www.guedes-plomberie-chauffage.fr/chauffage-central-radiateurs"
                schema={schemaData}
            />

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
                                    Des radiateurs froids en bas ? Un réseau emboué ou un projet d'extension ? La <strong>SARL Anthony GUEDES</strong> prend en charge l'installation, le remplacement de radiateurs (eau chaude et acier/fonte) ainsi que le désembouage complet de votre circuit de chauffage central.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                                    <a
                                        href="tel:+33617921004"
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-xl shadow-accent/25"
                                    >
                                        <PhoneCall className="w-5 h-5" />
                                        <span>06 17 92 10 04</span>
                                    </a>
                                    <Link
                                        to="/contact"
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-xl font-semibold transition-all"
                                    >
                                        <span>Devis chauffage gratuit</span>
                                        <ArrowRight className="w-5 h-5 text-accent" />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6">
                                <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                                    Mes engagements Chauffage
                                </h2>
                                <ul className="space-y-4 text-sm text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <Thermometer className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Confort thermique optimal :</strong> Dimensionnement précis de la puissance de chaque radiateur pièce par pièce.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Économies d'énergie :</strong> Un circuit propre et équilibré réduit votre consommation jusqu'à 15 %.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Intervention toutes énergies :</strong> Raccordement sur pompe à chaleur, chaudière gaz, fioul ou granulés.</span>
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
                                Intervention sur tout le réseau de distribution de chaleur dans votre logement.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center text-accent">
                                    <Wrench className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Désembouage de Réseau</h3>
                                <p className="text-sm text-slate-400">
                                    Nettoyage hydrodynamique du circuit pour éliminer la boue et le tartre. Indispensable avant la pose d'une pompe à chaleur.
                                </p>
                            </div>

                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center text-accent">
                                    <Thermometer className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Remplacement de Radiateurs</h3>
                                <p className="text-sm text-slate-400">
                                    Installation de radiateurs eau chaude basse température, sèche-serviettes ou remplacement de vannes thermostatiques.
                                </p>
                            </div>

                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center text-accent">
                                    <Flame className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Modification de Tuyauterie</h3>
                                <p className="text-sm text-slate-400">
                                    Déplacement de radiateurs, ajout d'émetteurs pour agrandissement ou réfection complète des réseaux cuivre/PEX.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 3 : ZONE D'INTERVENTION LOCALE (MAP + VILLES) --- */}
                <section className="py-16 bg-slate-950 border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                Secteur d'intervention Chauffage & Radiateurs
                            </h2>
                            <p className="text-slate-400 text-sm sm:text-base">
                                J'interviens pour l'installation, le remplacement de radiateurs, le désembouage et le dépannage de vos systèmes de chauffage sur une grande partie de la Normandie :
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-2xl space-y-6">
                                <ZoneInterventionMap showEmergency={false} showProjects={true} />
                                
                                <div className="pt-4 border-t border-slate-800">
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {[
                                            "Chauffage Évreux (27)", "Chauffage Bernay (27)", "Chauffage Les Andelys (27)",
                                            "Chauffage Rouen (76)", "Chauffage Le Havre (76)", "Chauffage Dieppe (76)",
                                            "Chauffage Caen (14)", "Chauffage Lisieux (14)", "Chauffage Bayeux (14)",
                                            "Chauffage Alençon (61)", "Chauffage Argentan (61)", "Chauffage Mortagne-au-Perche (61)"
                                        ].map((ville, i) => (
                                            <span key={i} className="bg-slate-950 border border-slate-800 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 flex items-center gap-2 hover:border-accent/40 transition-colors">
                                                <MapPin className="w-3.5 h-3.5 text-accent" /> {ville}
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
                                    Dernières interventions de chauffage
                                </h2>
                                <p className="text-slate-400 max-w-2xl mx-auto">
                                    Désembouage, remplacement de radiateurs ou aménagement de tuyauterie : découvrez mes derniers chantiers réalisés.
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
                                                alt={`Intervention sur le chauffage central par l'entreprise Guedes Plomberie à ${chantier.ville}`}
                                                title={`Chantier de chauffage à ${chantier.ville} en Normandie`}
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
                                alt="Agrandissement du chantier de chauffage"
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
                                Tout savoir sur le chauffage central et les radiateurs
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
                                            className={`w-6 h-6 text-accent shrink-0 transition-transform duration-300 ${
                                                openFaqIndex === index ? "rotate-180" : ""
                                            }`} 
                                        />
                                    </button>
                                    
                                    {/* Transition fluide via CSS Grid pour la hauteur automatique */}
                                    <div 
                                        className={`grid transition-all duration-300 ease-in-out ${
                                            openFaqIndex === index 
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold">Un projet de chauffage central ou des radiateurs à changer ?</h2>
                        <p className="text-slate-100">Contactez-moi pour une étude personnalisée et un devis rapide sur une grande partie de la Normandie.</p>
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