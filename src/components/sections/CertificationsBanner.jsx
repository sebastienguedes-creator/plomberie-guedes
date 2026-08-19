import qualipacLogo from '../../assets/logo-qualipac.png';
import frigorigenesLogo from '../../assets/frigorigenes.png';
import garantieLogo from '../../assets/Garantie10.png';

export default function CertificationsBanner() {
    const certifications = [
        {
            title: "RGE QualiPAC",
            subtitle: "Certifié pour vos Pompes à Chaleur",
            description: "Installation rigoureuse et performance énergétique",
            image: qualipacLogo,
        },
        {
            title: "Manipulateur de Fluides Frigorigènes",
            subtitle: "Attestation d'aptitude officielle",
            description: "Manipulation sécurisée et réglementaire des fluides",
            image: frigorigenesLogo,
        },
        {
            title: "Garantie Décennale",
            subtitle: "Assurance professionnelle",
            description: "Travaux couverts et réalisés dans les règles de l'art",
            image: garantieLogo,
        }
    ];

    return (
        <section className="py-12 bg-slate-950 border-b border-slate-800/80 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-hydro/10 text-hydro border border-hydro/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                        Garanties officielles & Qualifications professionnelles
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between text-center hover:border-hydro/40 transition-all duration-300 shadow-xl group gap-6"
                        >
                            {/* Bloc Texte au-dessus */}
                            <div className="space-y-1.5">
                                <h3 className="text-white font-bold text-lg">
                                    {cert.title}
                                </h3>
                                <div className="text-xs font-semibold text-hydro">
                                    {cert.subtitle}
                                </div>
                                <p className="text-xs text-slate-400 mt-2">
                                    {cert.description}
                                </p>
                            </div>
                            
                            {/* Logo plus gros en dessous */}
                            <div className="w-full h-24 bg-slate-950/80 border border-slate-800 rounded-xl flex items-center justify-center p-3 group-hover:border-hydro/50 transition-all">
                                <img 
                                    src={cert.image} 
                                    alt={"Certification artisan " + cert.title + " plomberie et chauffage"} 
                                    className="max-h-20 w-auto object-contain" 
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}