import { Helmet } from 'react-helmet-async';
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
    HelpCircle
} from 'lucide-react';

export default function UrgenceDepannage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "EmergencyService",
                "@id": "https://www.plomberie-guedes.fr/urgence-depannage-plomberie#service",
                "name": "Urgence et Dépannage Plomberie Chauffage - SARL Anthony GUEDES",
                "provider": {
                    "@type": "Plumber",
                    "name": "SARL Anthony GUEDES",
                    "telephone": "+33617921004",
                    "url": "https://www.plomberie-guedes.fr"
                },
                "areaServed": [
                    { "@type": "AdministrativeArea", "name": "Eure" },
                    { "@type": "AdministrativeArea", "name": "Seine-Maritime" },
                    { "@type": "AdministrativeArea", "name": "Calvados" },
                    { "@type": "AdministrativeArea", "name": "Orne" },
                    { "@type": "City", "name": "Bernay" },
                    { "@type": "City", "name": "Évreux" },
                    { "@type": "City", "name": "Rouen" },
                    { "@type": "City", "name": "Lisieux" },
                    { "@type": "City", "name": "Elbeuf" },
                    { "@type": "City", "name": "Louviers" },
                    { "@type": "City", "name": "Pont-Audemer" },
                    { "@type": "City", "name": "Brionne" },
                    { "@type": "City", "name": "Beaumont-le-Roger" },
                    { "@type": "City", "name": "Conches-en-Ouche" },
                    { "@type": "City", "name": "Le Neubourg" },
                    { "@type": "City", "name": "L'Aigle" }
                ],
                "description": "Dépannage d'urgence plomberie et chauffage. Fuite d'eau, panne de chauffage, canalisation bouchée, ballon d'eau chaude HS."
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.plomberie-guedes.fr/urgence-depannage-plomberie#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Que faire en cas de fuite d'eau importante avant l'arrivée du plombier ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Coupez immédiatement l'alimentation générale en eau (généralement située près du compteur) pour limiter les dégâts, puis contactez-moi en urgence."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Comment réagir face à une panne totale de chauffage en hiver ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Vérifiez l'alimentation électrique de votre équipement et la pression du circuit. Si le problème persiste, contactez-moi pour un diagnostic rapide."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Intervenez-vous rapidement pour les dépannages urgents ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Oui, j'assure une prise en charge prioritaire pour les dépannages urgents (Bernay, Évreux, Rouen, Lisieux, Louviers, Pont-Audemer, etc.)."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>Urgence Plombier Chauffagiste : Dépannage Rapide | GUEDES</title>
                <meta
                    name="description"
                    content="Fuite d'eau ? Panne de chauffage ? Dépannage urgent en plomberie et chauffage. Intervention rapide de la SARL Anthony GUEDES."
                />
                <link rel="canonical" href="https://www.plomberie-guedes.fr/urgence-depannage-plomberie" />
                {/* Open Graph */}
                <meta property="og:title" content="Urgence Plombier Chauffagiste : Dépannage Rapide | GUEDES" />
                <meta property="og:description" content="Fuite d'eau ? Panne de chauffage ? Dépannage urgent en plomberie et chauffage. Intervention rapide de la SARL Anthony GUEDES." />
                <meta property="og:url" content="https://www.plomberie-guedes.fr/urgence-depannage-plomberie" />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>

            <div className="bg-slate-950 text-slate-100 min-h-screen">
                {/* HERO SECTION - AXÉE SUR L'ACTION IMMÉDIATE */}
                <section className="relative py-16 lg:py-24 border-b border-slate-800 bg-slate-950">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7 space-y-6">
                                <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-red-500">
                                    <AlertTriangle className="w-4 h-4 animate-pulse" /> Intervention Rapide
                                </div>
                                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                                    Dépannage & Urgence <br />
                                    <span className="text-red-500">Plomberie Chauffage</span>
                                </h1>
                                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                                    Une fuite importante, un dégât des eaux imminent ou un chauffage qui tombe en panne en plein hiver ? J'interviens rapidement pour sécuriser votre installation et réparer la panne.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                                    <a
                                        href="tel:+33617921004"
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-5 rounded-xl font-bold text-lg transition-all shadow-xl shadow-red-600/20 animate-bounce"
                                    >
                                        <PhoneCall className="w-6 h-6" />
                                        <span>Appeler le 06 17 92 10 04</span>
                                    </a>
                                </div>
                            </div>

                            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6">
                                <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                                    Mes engagements Dépannage
                                </h2>
                                <ul className="space-y-4 text-sm text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                        <span><strong>Réactivité :</strong> Prise en charge prioritaire de votre appel d'urgence pour limiter les dégâts.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Wrench className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                        <span><strong>Diagnostic précis :</strong> Recherche de panne ou de fuite experte avant toute intervention.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ShieldCheck className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                        <span><strong>Transparence :</strong> Explication du problème et validation des réparations sans mauvaise surprise.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MOTIFS D'INTERVENTIONS */}
                <section className="py-16 bg-slate-900 border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold text-white">Vos problèmes, mes solutions immédiates</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                                Expertise multi-marques pour la réparation de toutes vos installations sanitaires et thermiques.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-red-500/50 transition-colors">
                                <div className="bg-red-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-red-500">
                                    <Droplets className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white">Recherche et réparation de fuites</h3>
                                <p className="text-sm text-slate-400">
                                    Fuite sur tuyauterie (cuivre, PER, multicouche), joints défectueux, robinetterie qui fuit, chasse d'eau qui coule.
                                </p>
                            </div>

                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-red-500/50 transition-colors">
                                <div className="bg-red-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-red-500">
                                    <Flame className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white">Panne de Chauffage / PAC</h3>
                                <p className="text-sm text-slate-400">
                                    Pompe à chaleur en défaut, chaudière qui ne démarre plus, radiateurs froids, perte de pression du réseau.
                                </p>
                            </div>

                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-red-500/50 transition-colors">
                                <div className="bg-red-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-red-500">
                                    <Wrench className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white">Débouchage & Engorgement</h3>
                                <p className="text-sm text-slate-400">
                                    WC bouchés, évier, lavabo ou douche bloqués. Intervention rapide pour restaurer un écoulement normal.
                                </p>
                            </div>

                            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-red-500/50 transition-colors">
                                <div className="bg-red-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-red-500">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white">Panne d'Eau Chaude</h3>
                                <p className="text-sm text-slate-400">
                                    Ballon d'eau chaude (cumulus) percé, chauffe-eau thermodynamique en panne, résistance HS ou disjonction.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ZONES D'INTERVENTION */}
                <section className="py-16 bg-slate-950 border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                            Secteur d'intervention en Dépannage
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-sm">
                            J'interviens rapidement pour vos urgences en plomberie et chauffage sur les communes suivantes :
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 pt-2">
                            {[
                                "Bernay", "Évreux", "Brionne", "Beaumont-le-Roger", 
                                "Conches-en-Ouche", "Le Neubourg", "Elbeuf", "Louviers", 
                                "Lisieux", "Pont-Audemer", "Rouen", "L'Aigle"
                            ].map((ville, i) => (
                                <span key={i} className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 flex items-center gap-2">
                                    <MapPin className="w-3.5 h-3.5 text-red-500" /> {ville}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SECTION FAQ (RICH SNIPPETS GOOGLE) --- */}
                <section className="py-20 border-b border-slate-800">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                        <div className="text-center space-y-4">
                            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-1.5 rounded-full text-xs font-bold">
                                <HelpCircle className="w-4 h-4" /> Vos questions fréquentes
                            </div>
                            <h2 className="text-3xl font-extrabold text-white">
                                Tout savoir sur le dépannage d'urgence
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Que faire en cas de fuite d'eau importante avant l'arrivée du plombier ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Coupez immédiatement l'alimentation générale en eau (généralement située près du compteur) pour limiter les dégâts, puis contactez-moi en urgence.
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Comment réagir face à une panne totale de chauffage en hiver ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Vérifiez l'alimentation électrique de votre équipement et la pression du circuit. Si le problème persiste, contactez-moi pour un diagnostic rapide.
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="font-bold text-white text-lg mb-2">Intervenez-vous rapidement pour les dépannages urgents ?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Oui, j'assure une prise en charge prioritaire pour les dépannages urgents (Bernay, Évreux, Rouen, Lisieux, Louviers, Pont-Audemer, etc.).
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA FINAL */}
                <section className="py-16 bg-red-600 text-white text-center">
                    <div className="max-w-4xl mx-auto px-4 space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-extrabold">Une urgence ? Ne laissez pas la situation s'aggraver.</h2>
                        <p className="text-red-100 text-lg">Contactez-moi immédiatement pour une mise en sécurité et un dépannage rapide.</p>
                        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                            <a href="tel:+33617921004" className="bg-slate-950 hover:bg-slate-900 text-white font-bold px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2">
                                <PhoneCall className="w-5 h-5" /> 06 17 92 10 04
                            </a>
                            <Link to="/" className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors">
                                Retour à l'accueil
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}