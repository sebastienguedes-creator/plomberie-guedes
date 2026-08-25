import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import {
    Droplets,
    PhoneCall,
    ArrowRight,
    ShieldCheck,
    Sparkles,
    MapPin,
    Wrench,
    HelpCircle,
    Image as ImageIcon,
    X,
    Maximize2
} from 'lucide-react';

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

export default function AdoucisseurEau() {
    // État pour stocker les 6 derniers chantiers
    const [chantiers, setChantiers] = useState([]);
    // État pour gérer la photo sélectionnée pour le zoom plein écran
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        async function fetchDerniersChantiers() {
            try {
                const { data, error } = await supabase
                    .from('chantiers')
                    .select('*')
                    .eq('domaine', 'Adoucisseur') // Filtre strict sur le domaine
                    .order('created_at', { ascending: false }) // Du plus récent au plus ancien
                    .limit(6); // Les 6 derniers max

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
                "@id": "https://www.guedes-plomberie-chauffage.fr/installation-adoucisseur-eau#service",
                "name": "Installation et Entretien d'Adoucisseur d'Eau",
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
                "description": "Installation, réglage et entretien d'adoucisseurs d'eau et systèmes anti-calcaire sur un large secteur normand. J'interviens pour protéger vos canalisations et vos équipements."
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.guedes-plomberie-chauffage.fr/installation-adoucisseur-eau#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Comment savoir si l'eau de ma maison est trop calcaire ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "L'eau calcaire se manifeste par des traces blanches sur la robinetterie, du tartre dans les appareils, une peau sèche après la douche et du linge rêche. Je peux réaliser un test de dureté pour mesurer précisément votre taux de calcaire."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Où doit-on installer l'adoucisseur d'eau ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "J'installe généralement l'adoucisseur à l'arrivée d'eau principale de la maison, juste après le compteur, afin de traiter l'ensemble de l'eau qui alimente votre logement."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Quel est l'entretien nécessaire pour un adoucisseur ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "L'entretien régulier consiste principalement à recharger le bac en sel adoucisseur selon votre consommation, ainsi qu'à effectuer une maintenance de contrôle annuelle que je peux assurer."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <SEO
                title="Installation Adoucisseur d'Eau Normandie : Départements & Villes"
                description="Pose et entretien d'adoucisseur d'eau en Normandie (Eure, Seine-Maritime, Calvados, Orne). J'interviens dans un large rayon autour de Valailles pour vos projets."
                canonicalUrl="https://www.guedes-plomberie-chauffage.fr/installation-adoucisseur-eau"
                schema={schemaData}
            />

            <div className="bg-slate-950 text-slate-100 min-h-screen">
                {/* HERO SECTION */}
                <section className="relative py-16 lg:py-24 border-b border-slate-800 bg-slate-950">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7 space-y-6">
                                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-accent">
                                    <Droplets className="w-4 h-4" /> Traitement de l'eau & Anti-Calcaire
                                </div>
                                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                                    Installation d'<span className="text-accent">Adoucisseur d'Eau</span> en Normandie
                                </h1>
                                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                                    L'eau en Normandie est particulièrement dure et calcaire. La <strong>SARL Anthony GUEDES</strong> protège vos tuyauteries, votre chauffe-eau et vos appareils ménagers grâce à la pose d'un <strong>adoucisseur d'eau individuel</strong>.
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
                                        <span>Devis gratuit adoucisseur</span>
                                        <ArrowRight className="w-5 h-5 text-accent" />
                                    </a>
                                </div>
                            </div>

                            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6">
                                <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                                    Les bénéfices d'une eau adoucie
                                </h2>
                                <ul className="space-y-4 text-sm text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Protection des équipements :</strong> Je prolonge la durée de vie de votre chaudière, ballon d'eau chaude et lave-linge.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Sparkles className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Économies d'énergie :</strong> 1 mm de calcaire augmente votre consommation d'énergie de 10 %.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Wrench className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Confort au quotidien :</strong> Peau moins sèche, linge plus doux et finie la corvée de tartre.</span>
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
                            Intervention dans un large rayon sur la Normandie
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-sm">
                            J'interviens sur la majorité du territoire normand, notamment dans l'Eure (27), la Seine-Maritime (76), le Calvados (14) et l'Orne (61) :
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 pt-2">
                            {[
                                "Évreux (27)", "Bernay (27)", "Les Andelys (27)",
                                "Rouen (76)", "Le Havre (76)", "Dieppe (76)",
                                "Caen (14)", "Lisieux (14)", "Bayeux (14)",
                                "Alençon (61)", "Argentan (61)", "Mortagne-au-Perche (61)"
                            ].map((lieu, i) => (
                                <span key={i} className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 flex items-center gap-2">
                                    <MapPin className="w-3.5 h-3.5 text-accent" /> Adoucisseur {lieu}
                                </span>
                            ))}
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
                                    Dernières interventions sur les adoucisseurs
                                </h2>
                                <p className="text-slate-400 max-w-2xl mx-auto">
                                    Installation, dépannage ou rénovation : suivez mes interventions récentes chez mes clients.
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
                                                alt={`Installation d'un adoucisseur d'eau par l'entreprise Guedes Plomberie à ${chantier.ville}`}
                                                title={`Chantier d'adoucisseur d'eau à ${chantier.ville} en Normandie`}
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
                                alt="Agrandissement du chantier" 
                                className="max-w-full max-h-[85vh] object-contain rounded-2xl border border-slate-800 shadow-2xl"
                            />
                        </div>
                    </div>
                )}

                {/* --- SECTION FAQ --- */}
                <section className="py-20 border-b border-slate-800">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                        <div className="text-center space-y-4">
                            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold">
                                <HelpCircle className="w-4 h-4" /> Vos questions fréquentes
                            </div>
                            <h2 className="text-3xl font-extrabold text-white">
                                Tout savoir sur l'adoucisseur d'eau
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Comment savoir si l'eau de ma maison est trop calcaire ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    L'eau calcaire se manifeste par des traces blanches sur la robinetterie, du tartre dans les appareils, une peau sèche après la douche et du linge rêche. Je peux réaliser un test de dureté pour mesurer précisément votre taux de calcaire.
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Où doit-on installer l'adoucisseur d'eau ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    J'installe généralement l'adoucisseur à l'arrivée d'eau principale de la maison, juste après le compteur, afin de traiter l'ensemble de l'eau qui alimente votre logement.
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Quel est l'entretien nécessaire pour un adoucisseur ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    L'entretien régulier consiste principalement à recharger le bac en sel adoucisseur selon votre consommation, ainsi qu'à effectuer une maintenance de contrôle annuelle que je peux assurer.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA FINAL */}
                <section id="contact" className="py-16 bg-accent text-white text-center">
                    <div className="max-w-4xl mx-auto px-4 space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-extrabold">Marre du calcaire dans votre eau ?</h2>
                        <p className="text-slate-100">Contactez-moi pour obtenir une analyse rapide de la dureté de votre eau et un devis personnalisé sur une grande partie de la Normandie.</p>
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