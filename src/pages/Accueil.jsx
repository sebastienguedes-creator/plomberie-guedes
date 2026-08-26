import SEO from '../components/SEO';
import Hero from '../components/sections/Hero';
import CertificationsBanner from '../components/sections/CertificationsBanner';
//import QuickAccessBar from '../components/sections/QuickAccessBar';
import Services from '../components/sections/Services';
import Realisations from '../components/sections/Realisations';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

export default function Accueil() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Plumber",
                "@id": "https://www.guedes-plomberie-chauffage.fr/#identity",
                "name": "SARL Anthony GUEDES",
                "url": "https://www.guedes-plomberie-chauffage.fr/",
                "telephone": "+33617921004",
                "priceRange": "€€",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "2A Rue du Ravin", // Ajustez si vous avez une rue précise
                    "addressLocality": "Valailles",
                    "postalCode": "27300",
                    "addressCountry": "FR"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 49.122232,
                    "longitude": 0.623779
                },
                "areaServed": [
                    {
                        "@type": "GeoCircle",
                        "geoMidpoint": {
                            "@type": "GeoCoordinates",
                            "latitude": 49.122232,
                            "longitude": 0.623779
                        },
                        "geoRadius": "150000" // Rayon global de 150 km pour les grands projets (PAC, Chauffage, Rénovation)
                    },
                    {
                        "@type": "GeoCircle",
                        "geoMidpoint": {
                            "@type": "GeoCoordinates",
                            "latitude": 49.122232,
                            "longitude": 0.623779
                        },
                        "geoRadius": "30000" // Rayon de 30 km pour les urgences et le dépannage rapide
                    }
                ],
                "sameAs": [
                    // liens sociaux (Facebook, Pages Jaunes, etc.)
                ],
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                    ],
                    "opens": "08:00",
                    "closes": "19:00"
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://www.guedes-plomberie-chauffage.fr/#website",
                "url": "https://www.guedes-plomberie-chauffage.fr/",
                "name": "SARL Anthony GUEDES",
                "publisher": {
                    "@id": "https://www.guedes-plomberie-chauffage.fr/#identity"
                }
            }
        ]
    };

    return (
        <main>
            <SEO 
                title="Plombier Chauffagiste Eure (27) | SARL Anthony GUEDES"
                description="Artisan plombier chauffagiste dans l'Eure (Bernay, Évreux). Installation, dépannage, pompe à chaleur, rénovation salle de bain."
                canonicalUrl="https://www.guedes-plomberie-chauffage.fr/"
                schema={schemaData}
            />

            <Hero />
            <CertificationsBanner />
            {/*<QuickAccessBar />*/}
            <Services />
            {/*<Realisations />*/}
            <Testimonials />
            {/*<Contact />*/}
        </main>
    );
}