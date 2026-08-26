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
    Maximize2
} from 'lucide-react';

// --- CONFIGURATION SUPABASE ---
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// --- UTILITAIRE IMAGE CLOUDINARY ---
const getOptimizedImageUrl = (url) => {
    if (!url) return '';
    return url.replace('/upload/', '/upload/c_limit,w_1000,h_1000,f_auto,q_auto/');
};

export default function PompeAChaleur() {
    const [chantiers, setChantiers] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

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

    // Données structurées JSON-LD (Service + FAQ pour Google Rich Snippets)
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://www.guedes-plomberie-chauffage.fr/installation-pompe-a-chaleur#service",
                "name": "Installation et Entretien de Pompe à Chaleur (PAC)",
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
                        "geoRadius": "150000"
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
                "description": "Installation, remplacement de chaudière fioul/gaz et entretien de pompe à chaleur Air/Eau et Air/Air par un artisan certifié RGE QualiPAC sur un large secteur normand.",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Services Pompe à Chaleur",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pompe à chaleur Air/Eau" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pompe à chaleur Air/Air (Climatisation)" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Entretien et Dépannage PAC" } }
                    ]
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.guedes-plomberie-chauffage.fr/installation-pompe-a-chaleur#faq",
                "mainEntity": [
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
                        "name": "Quelle est la durée de vie d'une pompe à chaleur ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Une PAC bien dimensionnée et entretenue annuellement a une durée de vie moyenne de 15 à 20 ans. Un entretien régulier garantit des performances maximales et évite les surconsommations d'électricité."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <SEO
                title="Pompe à Chaleur Normandie : Départements & Villes | GUEDES"
                description="Artisan RGE QualiPAC spécialisé en installation de pompe à chaleur Air/Eau & Air/Air en Normandie (Eure, Seine-Maritime, Calvados, Orne). Interventions autour de Valailles."
                canonicalUrl="https://www.guedes-plomberie-chauffage.fr/installation-pompe-a-chaleur"
                schema={schemaData}
            />

            <div className="bg-primary text-slate-100 min-h-screen">

                {/* --- SECTION HERO (H1 SEO) --- */}
                <section className="relative py-16 lg:py-24 border-b border-slate-800 bg-slate-950 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                            <div className="lg:col-span-7 space-y-6">
                                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-accent">
                                    <ShieldCheck className="w-4 h-4" /> Artisan Certifié RGE QualiPAC
                                </div>

                                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                                    Installation de <span className="text-accent">Pompe à Chaleur</span> en Normandie
                                </h1>

                                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                                    Remplacez votre ancienne chaudière fioul ou gaz par une solution économique et écologique. La <strong>SARL Anthony GUEDES</strong> vous accompagne de l'étude thermique jusqu'à la mise en service sur un large rayon en Normandie.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                                    <a
                                        href="#contact"
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-xl shadow-accent/25"
                                    >
                                        <span>Demander mon étude gratuite</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </a>

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
                                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Artisan RGE QualiPAC</span>
                                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Garantie Décennale</span>
                                </div>
                            </div>

                            {/* Bloc latéral d'engagement */}
                            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl space-y-6">
                                <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                                    Pourquoi installer une PAC en 2026 ?
                                </h2>
                                <ul className="space-y-4 text-sm text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <Euro className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Jusqu'à 70% d'économies</strong> sur votre facture annuelle de chauffage.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Installation certifiée</strong> dans le respect des normes en vigueur.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Flame className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Confort thermique optimal</strong> toute l'année (chauffage + eau chaude sanitaire).</span>
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
                                Mes solutions de <span className="text-accent">Pompe à Chaleur haute performance</span>
                            </h2>
                            <p className="text-slate-400">
                                Chaque logement a ses spécificités. Je sélectionne le matériel le plus adapté à votre réseau existant.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* PAC AIR / EAU */}
                            <div className="bg-slate-950 border border-slate-800 p-8 rounded-3xl space-y-6 hover:border-accent/40 transition-all">
                                <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center">
                                    <Flame className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Pompe à Chaleur Air / Eau</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Idéale en remplacement d'une chaudière fioul ou gaz. La PAC Air/Eau capte les calories de l'air extérieur pour chauffer l'eau de vos radiateurs ou de votre plancher chauffant, tout en produisant votre eau chaude sanitaire.
                                </p>
                                <ul className="space-y-2 text-xs text-slate-400">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Raccordement direct sur le réseau de chauffage central</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Haute température disponible (rénovation)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Solution fiable et pérenne</li>
                                </ul>
                            </div>

                            {/* PAC AIR / AIR */}
                            <div className="bg-slate-950 border border-slate-800 p-8 rounded-3xl space-y-6 hover:border-accent/40 transition-all">
                                <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center">
                                    <Wrench className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">PAC Air / Air (Climatisation Réversible)</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Parfaite pour chauffer rapidement en hiver et rafraîchir en été. Elle insuffle de l'air chaud ou frais directement dans vos pièces de vie via des consoles murales ou un système gainable discret.
                                </p>
                                <ul className="space-y-2 text-xs text-slate-400">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Montée en température très rapide</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Confort 2-en-1 (Chauffage + Climatisation été)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Purification de l'air par filtres intégrés</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 3 : ZONE D'INTERVENTION LOCALE (ANCRES SEO GEO) --- */}
                <section className="py-16 bg-slate-950 border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                            Intervention dans un large rayon sur la Normandie
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-sm">
                            J'interviens sur la majorité du territoire normand, notamment dans l'Eure (27), la Seine-Maritime (76), le Calvados (14) et l'Orne (61) :
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 pt-4">
                            {[
                                "Évreux (27)", "Bernay (27)", "Les Andelys (27)",
                                "Rouen (76)", "Le Havre (76)", "Dieppe (76)",
                                "Caen (14)", "Lisieux (14)", "Bayeux (14)",
                                "Alençon (61)", "Argentan (61)", "Mortagne-au-Perche (61)"
                            ].map((ville, i) => (
                                <span key={i} className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 flex items-center gap-2">
                                    <MapPin className="w-3.5 h-3.5 text-accent" /> Pompe à chaleur {ville}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SECTION NOS RÉALISATIONS (DYNAMIQUE SUPABASE PAC) --- */}
                {chantiers.length > 0 && (
                    <section className="py-20 bg-slate-900 border-b border-slate-800">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                            <div className="text-center space-y-4">
                                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold">
                                    <ImageIcon className="w-4 h-4" /> Nos réalisations
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                                    Dernières interventions sur les pompes à chaleur
                                </h2>
                                <p className="text-slate-400 max-w-2xl mx-auto">
                                    Installation, remplacement ou dépannage : suivez mes interventions récentes chez mes clients.
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
                                                alt={`Installation d'une pompe à chaleur par l'entreprise Guedes Plomberie à ${chantier.ville}`}
                                                title={`Chantier de pompe à chaleur à ${chantier.ville} en Normandie`}
                                                className="w-full h-auto max-h-[350px] object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg m-4">
                                                <span className="bg-slate-900/90 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border border-slate-700 shadow-lg">
                                                    <Maximize2 className="w-3.5 h-3.5 text-accent" /> Agrandir
                                                </span>
                                            </div>
                                        </div>

                                        {/* Photo commentée / Descriptif textuel */}
                                        <div className="px-5 pb-5 flex-grow flex flex-col justify-start">
                                            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                                                {chantier.texte}
                                            </p>
                                        </div>

                                        {/* Pied de carte avec Ville et Date */}
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

                {/* --- MODALE DE ZOOM PLEIN ÉCRAN --- */}
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
                                alt="Agrandissement du chantier"
                                className="max-w-full max-h-[85vh] object-contain rounded-2xl border border-slate-800 shadow-2xl"
                            />
                        </div>
                    </div>
                )}

                {/* --- SECTION 4 : FAQ INTERACTIVE (RICH SNIPPETS GOOGLE) --- */}
                <section className="py-20 border-b border-slate-800 bg-slate-950">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                        <div className="text-center space-y-4">
                            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold">
                                <HelpCircle className="w-4 h-4" /> Vos questions fréquentes
                            </div>
                            <h2 className="text-3xl font-extrabold text-white">
                                Tout savoir sur l'installation d'une Pompe à Chaleur
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Combien de temps prend l'installation d'une PAC en remplacement d'une chaudière fioul ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    L'installation complète d'une pompe à chaleur Air/Eau prend généralement entre 2 et 4 jours, incluant le démontage de l'ancienne chaudière, le désembouage du réseau et la mise en service.
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Faut-il conserver ses anciens radiateurs ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Dans la majorité des cas, oui ! Les pompes à chaleur Haute Température récentes s'adaptent parfaitement sur les réseaux de radiateurs en fonte ou en acier existants, sans avoir besoin de modifier toute votre tuyauterie.
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Quelle est la durée de vie d'une pompe à chaleur ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Une PAC bien dimensionnée et entretenue annuellement a une durée de vie moyenne de 15 à 20 ans. Un entretien regular garantit des performances maximales et évite les surconsommations d'électricité.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- BANNIÈRE CTA FINAL --- */}
                <section id="contact" className="py-16 bg-accent text-white text-center">
                    <div className="max-w-4xl mx-auto px-4 space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-extrabold">
                            Prêt à réduire vos factures de chauffage ?
                        </h2>
                        <p className="text-slate-100 text-base">
                            Contactez-moi pour obtenir une étude thermique personnalisée et un devis gratuit sous 48h sur une grande partie de la Normandie.
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