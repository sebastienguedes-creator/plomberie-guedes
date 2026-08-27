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
                "email": "anthonyguedes.plomberie@gmail.com",
                "logo": "https://www.guedes-plomberie-chauffage.fr/Icone.png",
                "image": "https://www.guedes-plomberie-chauffage.fr/Camion_SARL_Anthony_GUEDES.webp",
                "priceRange": "€€",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "2A Rue du Ravin",
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
                    { "@type": "City", "name": "Bernay" },
                    { "@type": "City", "name": "Évreux" },
                    { "@type": "City", "name": "Valailles" },
                    { "@type": "City", "name": "Grand Bourgtheroulde" },
                    { "@type": "City", "name": "Le Neubourg" },
                    { "@type": "City", "name": "Pont-Audemer" },
                    { "@type": "City", "name": "Brionne" },
                    { "@type": "City", "name": "Beaumont-le-Roger" },
                    { "@type": "City", "name": "Conches-en-Ouche" },
                    { "@type": "City", "name": "Serquigny" },
                    { "@type": "City", "name": "Beuzeville" },
                    { "@type": "City", "name": "Lieurey" },
                    { "@type": "City", "name": "Louviers" },
                    { "@type": "City", "name": "Vernon" },
                    { "@type": "City", "name": "Val-de-Reuil" },
                    { "@type": "City", "name": "Verneuil d'Avre et d'Iton" },
                    { "@type": "City", "name": "Gaillon" },
                    { "@type": "City", "name": "Les Andelys" },
                    { "@type": "AdministrativeArea", "name": "Eure (27)" }
                ],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "reviewCount": "6"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Guillaume A" },
                        "datePublished": "2026-04-15",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                        "reviewBody": "Entreprise très réactive et sympathique installation d une pompe a chaleur travail super merci a vous"
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Gérard D." },
                        "datePublished": "2026-04-21",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                        "reviewBody": "C'est un excellent plombier. Efficacité plus plus. Sérieux. Fiable. Excellence. Avec beaucoup d'humour. Je recommande. Faites appel à Monsieur Guedes au moindre souci de plomberie. N’hésitez pas une seule seconde. Merci Messieurs. Je répète je vous le recommande"
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Sandrine" },
                        "datePublished": "2026-05-05",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                        "reviewBody": "Artisan très professionnel, travail propre, rapport qualité prix tout à fait correct. Suite a un dégât des eaux a refait tout le circuit eau chaude et froide avec changement du cumulus. Le tout dans la bonne humeur. Un grand MERCI Je recommande vivement"
                    },    
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Ludivine" },
                        "datePublished": "2026-06-23",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                        "reviewBody": "Suite a un dégât des eaux Mr Guedes est intervenu chez moi, on en a profités pour refaire l'installation complète. Très agréable et arrangeant , un travail a la hauteur de mes attentes , très professionnel. Je recommande vivement."
                    },       
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Claire" },
                        "datePublished": "2026-08-17",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                        "reviewBody": "Rapide, réactif et efficace. Mr Guedes est aussi de bon conseil surtout quand il s'agit d'une maison ancienne. Je recommande vivement Anthony Guedes"
                    },    
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Charly" },
                        "datePublished": "2026-08-25",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                        "reviewBody": "Excellente prestation pour 1 salle de bain, 1 wc et 1 cuisine, et tout en un: plomberie, électricité, placo... plus pratique et rapide que de faire intervenir 3 artisans. Travail très soigné, avec un SAV réactif si besoin, le tout dans la bonne humeur"
                    },                                                                       



                ],
                
                /*
                "sameAs": [
                    "https://www.facebook.com/p/SARL-Anthony-Guedes-100063711900000/"
                ],
                */

                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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