import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import {
    Droplets,
    PhoneCall,
    ArrowRight,
    ShieldCheck,
    Sparkles,
    MapPin,
    Wrench,
    HelpCircle
} from 'lucide-react';

export default function AdoucisseurEau() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://www.plomberie-guedes.fr/installation-adoucisseur-eau#service",
                "name": "Installation et Entretien d'Adoucisseur d'Eau",
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
                    { "@type": "City", "name": "Mortagne-au-Perche" }
                ],
                "description": "Installation, réglage et entretien d'adoucisseurs d'eau et systèmes anti-calcaire partout en Normandie. J'interviens pour protéger vos canalisations et vos équipements."
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.plomberie-guedes.fr/installation-adoucisseur-eau#faq",
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
                description="Pose et entretien d'adoucisseur d'eau partout en Normandie (Eure, Seine-Maritime, Calvados, Manche, Orne). J'interviens dans toutes les préfectures et sous-préfectures."
                canonicalUrl="https://www.plomberie-guedes.fr/installation-adoucisseur-eau"
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
                                    L'eau en Normandie est particulièrement dure et calcaire  . Je protège vos tuyauteries, votre chauffe-eau et vos appareils ménagers grâce à la pose d'un <strong>adoucisseur d'eau individuel</strong>  .
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
                                        <span><strong>Protection des équipements :</strong> Je prolonge la durée de vie de votre chaudière, ballon d'eau chaude et lave-linge  .</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Sparkles className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Économies d'énergie :</strong> 1 mm de calcaire augmente votre consommation d'énergie de 10 %  .</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Wrench className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span><strong>Confort au quotidien :</strong> Peau moins sèche, linge plus doux et finie la corvée de tartre  .</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ZONES D'INTERVENTION - NORMANDIE (DÉPARTEMENTS, PRÉFECTURES, SOUS-PRÉFECTURES) */}
                <section className="py-16 bg-slate-950 border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                            Intervention dans toute la région Normandie
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-sm">
                            J'interviens dans l'ensemble des départements normands, préfectures et sous-préfectures   :
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
                                    <MapPin className="w-3.5 h-3.5 text-accent" /> Adoucisseur {lieu}
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
                                Tout savoir sur l'adoucisseur d'eau
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Comment savoir si l'eau de ma maison est trop calcaire ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    L'eau calcaire se manifeste par des traces blanches sur la robinetterie, du tartre dans les appareils, une peau sèche après la douche et du linge rêche  . Je peux réaliser un test de dureté pour mesurer précisément votre taux de calcaire  .
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Où doit-on installer l'adoucisseur d'eau ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    J'installe généralement l'adoucisseur à l'arrivée d'eau principale de la maison, juste après le compteur, afin de traiter l'ensemble de l'eau qui alimente votre logement  .
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Quel est l'entretien nécessaire pour un adoucisseur ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    L'entretien régulier consiste principalement à recharger le bac en sel adoucisseur selon votre consommation, ainsi qu'à effectuer une maintenance de contrôle annuelle que je peux assurer  .
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA FINAL */}
                <section id="contact" className="py-16 bg-accent text-white text-center">
                    <div className="max-w-4xl mx-auto px-4 space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-extrabold">Marre du calcaire dans votre eau ?</h2>
                        <p className="text-slate-100">Contactez-moi pour obtenir une analyse rapide de la dureté de votre eau et un devis personnalisé partout en Normandie  .</p>
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